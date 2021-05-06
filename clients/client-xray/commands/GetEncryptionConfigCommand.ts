import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";
import { GetEncryptionConfigRequest, GetEncryptionConfigResult } from "../models/models_0";
import {
  deserializeAws_restJson1GetEncryptionConfigCommand,
  serializeAws_restJson1GetEncryptionConfigCommand,
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

export interface GetEncryptionConfigCommandInput extends GetEncryptionConfigRequest {}
export interface GetEncryptionConfigCommandOutput extends GetEncryptionConfigResult, __MetadataBearer {}

/**
 * <p>Retrieves the current encryption configuration for X-Ray data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetEncryptionConfigCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetEncryptionConfigCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetEncryptionConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEncryptionConfigCommandInput} for command's `input` shape.
 * @see {@link GetEncryptionConfigCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetEncryptionConfigCommand extends $Command<
  GetEncryptionConfigCommandInput,
  GetEncryptionConfigCommandOutput,
  XRayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetEncryptionConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: XRayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEncryptionConfigCommandInput, GetEncryptionConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "XRayClient";
    const commandName = "GetEncryptionConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEncryptionConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetEncryptionConfigResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetEncryptionConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetEncryptionConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEncryptionConfigCommandOutput> {
    return deserializeAws_restJson1GetEncryptionConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
