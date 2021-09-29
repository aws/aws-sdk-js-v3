import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { CreateBackupRequest, CreateBackupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateBackupCommand,
  serializeAws_json1_1CreateBackupCommand,
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

export interface CreateBackupCommandInput extends CreateBackupRequest {}
export interface CreateBackupCommandOutput extends CreateBackupResponse, __MetadataBearer {}

/**
 * <p>Creates a backup of an existing Amazon FSx for Windows File Server
 *             or Amazon FSx for Lustre file system, or of an Amazon FSx for NetApp ONTAP
 *             volume. Creating regular backups is a best practice, enabling you to restore
 *             a file system or volume from a backup if an issue arises with the original
 *             file system or volume.</p>
 *         <p>For Amazon FSx for Lustre file systems, you can create a backup only
 *             for file systems with the following configuration:</p>
 *         <ul>
 *             <li>
 *                <p>a Persistent deployment type</p>
 *             </li>
 *             <li>
 *                <p>is <i>not</i> linked to a data repository.</p>
 *             </li>
 *          </ul>
 *             <p>For more information about backups, see the following:</p>
 *         <ul>
 *             <li>
 *                <p>For Amazon FSx for Lustre,
 *                 see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-backups-fsx.html">Working with FSx for Lustre backups</a>.</p>
 *             </li>
 *             <li>
 *                <p>For Amazon FSx for Windows,
 *                 see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html">Working with FSx for Windows backups</a>.</p>
 *             </li>
 *             <li>
 *                <p>For Amazon FSx for NetApp ONTAP,
 *                 see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/using-backups.html">Working with FSx for NetApp ONTAP backups</a>.</p>
 *             </li>
 *          </ul>
 *         <p>If a backup with the specified client request token exists, and the parameters
 *             match, this operation returns the description of the existing backup. If a backup
 *             specified client request token exists, and the parameters don't match, this
 *             operation returns <code>IncompatibleParameterError</code>. If a backup with the
 *             specified client request token doesn't exist, <code>CreateBackup</code> does the
 *             following: </p>
 *         <ul>
 *             <li>
 *                 <p>Creates a new Amazon FSx backup with an assigned ID, and an initial
 *                     lifecycle state of <code>CREATING</code>.</p>
 *             </li>
 *             <li>
 *                 <p>Returns the description of the backup.</p>
 *             </li>
 *          </ul>
 *
 *         <p>By using the idempotent operation, you can retry a <code>CreateBackup</code>
 *             operation without the risk of creating an extra backup. This approach can be useful when
 *             an initial call fails in a way that makes it unclear whether a backup was created. If
 *             you use the same client request token and the initial call created a backup, the
 *             operation returns a successful result because all the parameters are the same.</p>
 *
 *         <p>The <code>CreateBackup</code> operation returns while the backup's
 *             lifecycle state is still <code>CREATING</code>. You can check the backup creation
 *             status by calling the <a>DescribeBackups</a> operation, which returns the
 *             backup state along with other information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CreateBackupCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CreateBackupCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new CreateBackupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBackupCommandInput} for command's `input` shape.
 * @see {@link CreateBackupCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateBackupCommand extends $Command<
  CreateBackupCommandInput,
  CreateBackupCommandOutput,
  FSxClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateBackupCommandInput) {
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
  ): Handler<CreateBackupCommandInput, CreateBackupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "CreateBackupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateBackupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateBackupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateBackupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateBackupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateBackupCommandOutput> {
    return deserializeAws_json1_1CreateBackupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
