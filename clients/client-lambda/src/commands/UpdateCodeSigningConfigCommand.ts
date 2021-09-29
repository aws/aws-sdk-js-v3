import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { UpdateCodeSigningConfigRequest, UpdateCodeSigningConfigResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateCodeSigningConfigCommand,
  serializeAws_restJson1UpdateCodeSigningConfigCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface UpdateCodeSigningConfigCommandInput extends UpdateCodeSigningConfigRequest {}
export interface UpdateCodeSigningConfigCommandOutput extends UpdateCodeSigningConfigResponse, __MetadataBearer {}

/**
 * <p>Update the code signing configuration. Changes to the code signing configuration take effect the next time a
 *       user tries to deploy a code package to the function. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, UpdateCodeSigningConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, UpdateCodeSigningConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new UpdateCodeSigningConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCodeSigningConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateCodeSigningConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateCodeSigningConfigCommand extends $Command<
  UpdateCodeSigningConfigCommandInput,
  UpdateCodeSigningConfigCommandOutput,
  LambdaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateCodeSigningConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateCodeSigningConfigCommandInput, UpdateCodeSigningConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "UpdateCodeSigningConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateCodeSigningConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateCodeSigningConfigResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateCodeSigningConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateCodeSigningConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateCodeSigningConfigCommandOutput> {
    return deserializeAws_restJson1UpdateCodeSigningConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
