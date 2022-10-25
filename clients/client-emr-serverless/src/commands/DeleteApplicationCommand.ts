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

import { EMRServerlessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRServerlessClient";
import {
  DeleteApplicationRequest,
  DeleteApplicationRequestFilterSensitiveLog,
  DeleteApplicationResponse,
  DeleteApplicationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteApplicationCommand,
  serializeAws_restJson1DeleteApplicationCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteApplicationCommandInput extends DeleteApplicationRequest {}
export interface DeleteApplicationCommandOutput extends DeleteApplicationResponse, __MetadataBearer {}

/**
 * <p>Deletes an application. An application has to be in a stopped or created state in order
 *          to be deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRServerlessClient, DeleteApplicationCommand } from "@aws-sdk/client-emr-serverless"; // ES Modules import
 * // const { EMRServerlessClient, DeleteApplicationCommand } = require("@aws-sdk/client-emr-serverless"); // CommonJS import
 * const client = new EMRServerlessClient(config);
 * const command = new DeleteApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApplicationCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationCommandOutput} for command's `response` shape.
 * @see {@link EMRServerlessClientResolvedConfig | config} for EMRServerlessClient's `config` shape.
 *
 */
export class DeleteApplicationCommand extends $Command<
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput,
  EMRServerlessClientResolvedConfig
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

  constructor(readonly input: DeleteApplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRServerlessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteApplicationCommandInput, DeleteApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteApplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRServerlessClient";
    const commandName = "DeleteApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteApplicationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteApplicationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteApplicationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteApplicationCommandOutput> {
    return deserializeAws_restJson1DeleteApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
