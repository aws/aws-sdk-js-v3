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

import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import {
  CreateFileSystemFromBackupRequest,
  CreateFileSystemFromBackupRequestFilterSensitiveLog,
  CreateFileSystemFromBackupResponse,
  CreateFileSystemFromBackupResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateFileSystemFromBackupCommand,
  serializeAws_json1_1CreateFileSystemFromBackupCommand,
} from "../protocols/Aws_json1_1";

export interface CreateFileSystemFromBackupCommandInput extends CreateFileSystemFromBackupRequest {}
export interface CreateFileSystemFromBackupCommandOutput extends CreateFileSystemFromBackupResponse, __MetadataBearer {}

/**
 * <p>Creates a new Amazon FSx for Lustre, Amazon FSx for Windows File
 *             Server, or Amazon FSx for OpenZFS file system from an existing Amazon FSx backup.</p>
 *          <p>If a file system with the specified client request token exists and the parameters
 *             match, this operation returns the description of the file system. If a file system
 *             with the specified client request token exists but the parameters don't match, this
 *             call returns <code>IncompatibleParameterError</code>. If a file system with the
 *             specified client request token doesn't exist, this operation does the following:</p>
 *          <ul>
 *             <li>
 *                <p>Creates a new Amazon FSx file system from backup with an assigned ID,
 *                     and an initial lifecycle state of <code>CREATING</code>.</p>
 *             </li>
 *             <li>
 *                <p>Returns the description of the file system.</p>
 *             </li>
 *          </ul>
 *          <p>Parameters like the Active Directory, default share name, automatic backup, and backup
 *             settings default to the parameters of the file system that was backed up, unless
 *             overridden. You can explicitly supply other settings.</p>
 *          <p>By using the idempotent operation, you can retry a
 *                 <code>CreateFileSystemFromBackup</code> call without the risk of creating an extra
 *             file system. This approach can be useful when an initial call fails in a way that makes
 *             it unclear whether a file system was created. Examples are if a transport level timeout
 *             occurred, or your connection was reset. If you use the same client request token and the
 *             initial call created a file system, the client receives a success message as long as the
 *             parameters are the same.</p>
 *          <note>
 *             <p>The <code>CreateFileSystemFromBackup</code> call returns while the file system's
 *                 lifecycle state is still <code>CREATING</code>. You can check the file-system
 *                 creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html">
 *                     DescribeFileSystems</a> operation, which returns the file system state along
 *                 with other information.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CreateFileSystemFromBackupCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CreateFileSystemFromBackupCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new CreateFileSystemFromBackupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFileSystemFromBackupCommandInput} for command's `input` shape.
 * @see {@link CreateFileSystemFromBackupCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 */
export class CreateFileSystemFromBackupCommand extends $Command<
  CreateFileSystemFromBackupCommandInput,
  CreateFileSystemFromBackupCommandOutput,
  FSxClientResolvedConfig
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

  constructor(readonly input: CreateFileSystemFromBackupCommandInput) {
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
  ): Handler<CreateFileSystemFromBackupCommandInput, CreateFileSystemFromBackupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateFileSystemFromBackupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "CreateFileSystemFromBackupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFileSystemFromBackupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateFileSystemFromBackupResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateFileSystemFromBackupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateFileSystemFromBackupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateFileSystemFromBackupCommandOutput> {
    return deserializeAws_json1_1CreateFileSystemFromBackupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
