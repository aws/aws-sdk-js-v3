import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import {
  DescribeClientAuthenticationSettingsRequest,
  DescribeClientAuthenticationSettingsResult,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeClientAuthenticationSettingsCommand,
  serializeAws_json1_1DescribeClientAuthenticationSettingsCommand,
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

export interface DescribeClientAuthenticationSettingsCommandInput extends DescribeClientAuthenticationSettingsRequest {}
export interface DescribeClientAuthenticationSettingsCommandOutput
  extends DescribeClientAuthenticationSettingsResult,
    __MetadataBearer {}

/**
 * <p>Retrieves information about the type of client authentication for the specified directory, if the type is specified. If no type is specified, information about all client authentication types that are supported for the specified directory is retrieved. Currently, only <code>SmartCard</code> is supported.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeClientAuthenticationSettingsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeClientAuthenticationSettingsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new DescribeClientAuthenticationSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClientAuthenticationSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeClientAuthenticationSettingsCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeClientAuthenticationSettingsCommand extends $Command<
  DescribeClientAuthenticationSettingsCommandInput,
  DescribeClientAuthenticationSettingsCommandOutput,
  DirectoryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeClientAuthenticationSettingsCommandInput) {
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
  ): Handler<DescribeClientAuthenticationSettingsCommandInput, DescribeClientAuthenticationSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "DescribeClientAuthenticationSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeClientAuthenticationSettingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeClientAuthenticationSettingsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeClientAuthenticationSettingsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeClientAuthenticationSettingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeClientAuthenticationSettingsCommandOutput> {
    return deserializeAws_json1_1DescribeClientAuthenticationSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
