import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { DescribeFileSystemAliasesRequest, DescribeFileSystemAliasesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeFileSystemAliasesCommand,
  serializeAws_json1_1DescribeFileSystemAliasesCommand,
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

export interface DescribeFileSystemAliasesCommandInput extends DescribeFileSystemAliasesRequest {}
export interface DescribeFileSystemAliasesCommandOutput extends DescribeFileSystemAliasesResponse, __MetadataBearer {}

/**
 * <p>Returns the DNS aliases that are associated with the specified Amazon FSx for Windows File Server file system. A history of
 *             all DNS aliases that have been associated with and disassociated from the file system is available in the list of <a>AdministrativeAction</a>
 *         provided in the <a>DescribeFileSystems</a> operation response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DescribeFileSystemAliasesCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DescribeFileSystemAliasesCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new DescribeFileSystemAliasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFileSystemAliasesCommandInput} for command's `input` shape.
 * @see {@link DescribeFileSystemAliasesCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeFileSystemAliasesCommand extends $Command<
  DescribeFileSystemAliasesCommandInput,
  DescribeFileSystemAliasesCommandOutput,
  FSxClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeFileSystemAliasesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FSxClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeFileSystemAliasesCommandInput, DescribeFileSystemAliasesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "DescribeFileSystemAliasesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFileSystemAliasesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeFileSystemAliasesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFileSystemAliasesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeFileSystemAliasesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeFileSystemAliasesCommandOutput> {
    return deserializeAws_json1_1DescribeFileSystemAliasesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
