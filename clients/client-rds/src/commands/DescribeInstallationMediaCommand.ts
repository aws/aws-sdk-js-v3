import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeInstallationMediaMessage, InstallationMediaMessage } from "../models/models_1";
import {
  deserializeAws_queryDescribeInstallationMediaCommand,
  serializeAws_queryDescribeInstallationMediaCommand,
} from "../protocols/Aws_query";
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

export interface DescribeInstallationMediaCommandInput extends DescribeInstallationMediaMessage {}
export interface DescribeInstallationMediaCommandOutput extends InstallationMediaMessage, __MetadataBearer {}

/**
 * <p>Describes the available installation media for a DB engine that requires an
 *           on-premises customer provided license, such as Microsoft SQL Server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeInstallationMediaCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeInstallationMediaCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeInstallationMediaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstallationMediaCommandInput} for command's `input` shape.
 * @see {@link DescribeInstallationMediaCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeInstallationMediaCommand extends $Command<
  DescribeInstallationMediaCommandInput,
  DescribeInstallationMediaCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeInstallationMediaCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeInstallationMediaCommandInput, DescribeInstallationMediaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeInstallationMediaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeInstallationMediaMessage.filterSensitiveLog,
      outputFilterSensitiveLog: InstallationMediaMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeInstallationMediaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeInstallationMediaCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInstallationMediaCommandOutput> {
    return deserializeAws_queryDescribeInstallationMediaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
