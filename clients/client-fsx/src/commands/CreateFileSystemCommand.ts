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
  CreateFileSystemRequest,
  CreateFileSystemRequestFilterSensitiveLog,
  CreateFileSystemResponse,
  CreateFileSystemResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateFileSystemCommand,
  serializeAws_json1_1CreateFileSystemCommand,
} from "../protocols/Aws_json1_1";

export interface CreateFileSystemCommandInput extends CreateFileSystemRequest {}
export interface CreateFileSystemCommandOutput extends CreateFileSystemResponse, __MetadataBearer {}

/**
 * <p>Creates a new, empty Amazon FSx file system. You can create the following supported
 *         Amazon FSx file systems using the <code>CreateFileSystem</code> API operation:</p>
 *          <ul>
 *             <li>
 *                <p>Amazon FSx for Lustre</p>
 *             </li>
 *             <li>
 *                <p>Amazon FSx for NetApp ONTAP</p>
 *             </li>
 *             <li>
 *                <p>Amazon FSx for OpenZFS</p>
 *             </li>
 *             <li>
 *                <p>Amazon FSx for Windows File Server</p>
 *             </li>
 *          </ul>
 *          <p>This operation requires a client request token in the request that Amazon FSx uses
 *             to ensure idempotent creation. This means that calling the operation multiple times with
 *             the same client request token has no effect. By using the idempotent operation, you can
 *             retry a <code>CreateFileSystem</code> operation without the risk of creating an extra
 *             file system. This approach can be useful when an initial call fails in a way that makes
 *             it unclear whether a file system was created. Examples are if a transport level timeout
 *             occurred, or your connection was reset. If you use the same client request token and the
 *             initial call created a file system, the client receives success as long as the
 *             parameters are the same.</p>
 *          <p>If a file system with the specified client request token exists and the parameters
 *             match, <code>CreateFileSystem</code> returns the description of the existing file
 *             system. If a file system with the specified client request token exists and the
 *             parameters don't match, this call returns <code>IncompatibleParameterError</code>. If a
 *             file system with the specified client request token doesn't exist,
 *                 <code>CreateFileSystem</code> does the following: </p>
 *          <ul>
 *             <li>
 *                <p>Creates a new, empty Amazon FSx file system with an assigned ID, and
 *                     an initial lifecycle state of <code>CREATING</code>.</p>
 *             </li>
 *             <li>
 *                <p>Returns the description of the file system in JSON format.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>The <code>CreateFileSystem</code> call returns while the file system's lifecycle
 *                 state is still <code>CREATING</code>. You can check the file-system creation status
 *                 by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html">DescribeFileSystems</a> operation, which returns the file system state
 *                 along with other information.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CreateFileSystemCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CreateFileSystemCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new CreateFileSystemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFileSystemCommandInput} for command's `input` shape.
 * @see {@link CreateFileSystemCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 */
export class CreateFileSystemCommand extends $Command<
  CreateFileSystemCommandInput,
  CreateFileSystemCommandOutput,
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

  constructor(readonly input: CreateFileSystemCommandInput) {
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
  ): Handler<CreateFileSystemCommandInput, CreateFileSystemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateFileSystemCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "CreateFileSystemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFileSystemRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateFileSystemResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateFileSystemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateFileSystemCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFileSystemCommandOutput> {
    return deserializeAws_json1_1CreateFileSystemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
