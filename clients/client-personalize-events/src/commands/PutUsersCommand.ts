// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { PutUsersRequest, PutUsersRequestFilterSensitiveLog } from "../models/models_0";
import {
  PersonalizeEventsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PersonalizeEventsClient";
import {
  deserializeAws_restJson1PutUsersCommand,
  serializeAws_restJson1PutUsersCommand,
} from "../protocols/Aws_restJson1";

export interface PutUsersCommandInput extends PutUsersRequest {}
export interface PutUsersCommandOutput extends __MetadataBearer {}

/**
 * <p>Adds one or more users to a Users dataset. For more information see
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-users.html">Importing Users Incrementally</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeEventsClient, PutUsersCommand } from "@aws-sdk/client-personalize-events"; // ES Modules import
 * // const { PersonalizeEventsClient, PutUsersCommand } = require("@aws-sdk/client-personalize-events"); // CommonJS import
 * const client = new PersonalizeEventsClient(config);
 * const command = new PutUsersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutUsersCommandInput} for command's `input` shape.
 * @see {@link PutUsersCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeEventsClientResolvedConfig | config} for PersonalizeEventsClient's `config` shape.
 *
 */
export class PutUsersCommand extends $Command<
  PutUsersCommandInput,
  PutUsersCommandOutput,
  PersonalizeEventsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: PutUsersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutUsersCommandInput, PutUsersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutUsersCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeEventsClient";
    const commandName = "PutUsersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutUsersRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutUsersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutUsersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutUsersCommandOutput> {
    return deserializeAws_restJson1PutUsersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
