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

import { IvschatClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvschatClient";
import {
  ListRoomsRequest,
  ListRoomsRequestFilterSensitiveLog,
  ListRoomsResponse,
  ListRoomsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListRoomsCommand,
  serializeAws_restJson1ListRoomsCommand,
} from "../protocols/Aws_restJson1";

export interface ListRoomsCommandInput extends ListRoomsRequest {}
export interface ListRoomsCommandOutput extends ListRoomsResponse, __MetadataBearer {}

/**
 * <p>Gets summary information about all your rooms in the AWS region where the API request is
 *          processed. Results are sorted in descending order of <code>updateTime</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvschatClient, ListRoomsCommand } from "@aws-sdk/client-ivschat"; // ES Modules import
 * // const { IvschatClient, ListRoomsCommand } = require("@aws-sdk/client-ivschat"); // CommonJS import
 * const client = new IvschatClient(config);
 * const command = new ListRoomsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRoomsCommandInput} for command's `input` shape.
 * @see {@link ListRoomsCommandOutput} for command's `response` shape.
 * @see {@link IvschatClientResolvedConfig | config} for IvschatClient's `config` shape.
 *
 */
export class ListRoomsCommand extends $Command<
  ListRoomsCommandInput,
  ListRoomsCommandOutput,
  IvschatClientResolvedConfig
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

  constructor(readonly input: ListRoomsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IvschatClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRoomsCommandInput, ListRoomsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListRoomsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IvschatClient";
    const commandName = "ListRoomsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRoomsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListRoomsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRoomsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListRoomsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRoomsCommandOutput> {
    return deserializeAws_restJson1ListRoomsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
