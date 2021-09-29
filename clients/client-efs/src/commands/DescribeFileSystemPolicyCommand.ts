import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { DescribeFileSystemPolicyRequest, FileSystemPolicyDescription } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeFileSystemPolicyCommand,
  serializeAws_restJson1DescribeFileSystemPolicyCommand,
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

export interface DescribeFileSystemPolicyCommandInput extends DescribeFileSystemPolicyRequest {}
export interface DescribeFileSystemPolicyCommandOutput extends FileSystemPolicyDescription, __MetadataBearer {}

/**
 * <p>Returns the <code>FileSystemPolicy</code> for the specified EFS file system.</p>
 *          <p>This operation requires permissions for the <code>elasticfilesystem:DescribeFileSystemPolicy</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DescribeFileSystemPolicyCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DescribeFileSystemPolicyCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new DescribeFileSystemPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFileSystemPolicyCommandInput} for command's `input` shape.
 * @see {@link DescribeFileSystemPolicyCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeFileSystemPolicyCommand extends $Command<
  DescribeFileSystemPolicyCommandInput,
  DescribeFileSystemPolicyCommandOutput,
  EFSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeFileSystemPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EFSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeFileSystemPolicyCommandInput, DescribeFileSystemPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "DescribeFileSystemPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFileSystemPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: FileSystemPolicyDescription.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFileSystemPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeFileSystemPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFileSystemPolicyCommandOutput> {
    return deserializeAws_restJson1DescribeFileSystemPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
