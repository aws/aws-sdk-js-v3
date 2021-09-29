import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { EnableRadiusRequest, EnableRadiusResult } from "../models/models_0";
import {
  deserializeAws_json1_1EnableRadiusCommand,
  serializeAws_json1_1EnableRadiusCommand,
} from "../protocols/Aws_json1_1";
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

export interface EnableRadiusCommandInput extends EnableRadiusRequest {}
export interface EnableRadiusCommandOutput extends EnableRadiusResult, __MetadataBearer {}

/**
 * <p>Enables multi-factor authentication (MFA) with the Remote Authentication Dial In User
 *          Service (RADIUS) server for an AD Connector or Microsoft AD directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, EnableRadiusCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, EnableRadiusCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new EnableRadiusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableRadiusCommandInput} for command's `input` shape.
 * @see {@link EnableRadiusCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class EnableRadiusCommand extends $Command<
  EnableRadiusCommandInput,
  EnableRadiusCommandOutput,
  DirectoryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableRadiusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EnableRadiusCommandInput, EnableRadiusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "EnableRadiusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableRadiusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: EnableRadiusResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableRadiusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1EnableRadiusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableRadiusCommandOutput> {
    return deserializeAws_json1_1EnableRadiusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
