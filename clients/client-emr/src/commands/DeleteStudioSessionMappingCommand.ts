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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { DeleteStudioSessionMappingInput, DeleteStudioSessionMappingInputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteStudioSessionMappingCommand,
  serializeAws_json1_1DeleteStudioSessionMappingCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteStudioSessionMappingCommandInput extends DeleteStudioSessionMappingInput {}
export interface DeleteStudioSessionMappingCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes a user or group from an Amazon EMR Studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, DeleteStudioSessionMappingCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, DeleteStudioSessionMappingCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new DeleteStudioSessionMappingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStudioSessionMappingCommandInput} for command's `input` shape.
 * @see {@link DeleteStudioSessionMappingCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 */
export class DeleteStudioSessionMappingCommand extends $Command<
  DeleteStudioSessionMappingCommandInput,
  DeleteStudioSessionMappingCommandOutput,
  EMRClientResolvedConfig
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

  constructor(readonly input: DeleteStudioSessionMappingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteStudioSessionMappingCommandInput, DeleteStudioSessionMappingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteStudioSessionMappingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "DeleteStudioSessionMappingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteStudioSessionMappingInputFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteStudioSessionMappingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteStudioSessionMappingCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteStudioSessionMappingCommandOutput> {
    return deserializeAws_json1_1DeleteStudioSessionMappingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
