// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { DeleteFileSystemRequest, DeleteFileSystemResponse } from "../models/models_0";
import { de_DeleteFileSystemCommand, se_DeleteFileSystemCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteFileSystemCommand}.
 */
export interface DeleteFileSystemCommandInput extends DeleteFileSystemRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFileSystemCommand}.
 */
export interface DeleteFileSystemCommandOutput extends DeleteFileSystemResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a file system. After deletion, the file system no longer exists, and its data
 *             is gone. Any existing automatic backups and snapshots are also deleted.</p>
 *          <p>To delete an Amazon FSx for NetApp ONTAP file system, first delete all the
 *             volumes and storage virtual machines (SVMs) on the file system. Then provide a
 *                 <code>FileSystemId</code> value to the <code>DeleFileSystem</code> operation.</p>
 *          <p>By default, when you delete an Amazon FSx for Windows File Server file system,
 *             a final backup is created upon deletion. This final backup isn't subject to the file
 *             system's retention policy, and must be manually deleted.</p>
 *          <p>The <code>DeleteFileSystem</code> operation returns while the file system has the
 *                 <code>DELETING</code> status. You can check the file system deletion status by
 *             calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html">DescribeFileSystems</a> operation, which returns a list of file systems in your
 *             account. If you pass the file system ID for a deleted file system, the
 *                 <code>DescribeFileSystems</code> operation returns a <code>FileSystemNotFound</code>
 *             error.</p>
 *          <note>
 *             <p>If a data repository task is in a <code>PENDING</code> or <code>EXECUTING</code> state,
 *                 deleting an Amazon FSx for Lustre file system will fail with an HTTP status
 *                 code 400 (Bad Request).</p>
 *          </note>
 *          <important>
 *             <p>The data in a deleted file system is also deleted and can't be recovered by
 *                 any means.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DeleteFileSystemCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DeleteFileSystemCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const input = { // DeleteFileSystemRequest
 *   FileSystemId: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 *   WindowsConfiguration: { // DeleteFileSystemWindowsConfiguration
 *     SkipFinalBackup: true || false,
 *     FinalBackupTags: [ // Tags
 *       { // Tag
 *         Key: "STRING_VALUE", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   LustreConfiguration: { // DeleteFileSystemLustreConfiguration
 *     SkipFinalBackup: true || false,
 *     FinalBackupTags: [
 *       {
 *         Key: "STRING_VALUE", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   OpenZFSConfiguration: { // DeleteFileSystemOpenZFSConfiguration
 *     SkipFinalBackup: true || false,
 *     FinalBackupTags: [
 *       {
 *         Key: "STRING_VALUE", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *     ],
 *     Options: [ // DeleteFileSystemOpenZFSOptions
 *       "DELETE_CHILD_VOLUMES_AND_SNAPSHOTS",
 *     ],
 *   },
 * };
 * const command = new DeleteFileSystemCommand(input);
 * const response = await client.send(command);
 * // { // DeleteFileSystemResponse
 * //   FileSystemId: "STRING_VALUE",
 * //   Lifecycle: "AVAILABLE" || "CREATING" || "FAILED" || "DELETING" || "MISCONFIGURED" || "UPDATING" || "MISCONFIGURED_UNAVAILABLE",
 * //   WindowsResponse: { // DeleteFileSystemWindowsResponse
 * //     FinalBackupId: "STRING_VALUE",
 * //     FinalBackupTags: [ // Tags
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   LustreResponse: { // DeleteFileSystemLustreResponse
 * //     FinalBackupId: "STRING_VALUE",
 * //     FinalBackupTags: [
 * //       {
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   OpenZFSResponse: { // DeleteFileSystemOpenZFSResponse
 * //     FinalBackupId: "STRING_VALUE",
 * //     FinalBackupTags: [
 * //       {
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteFileSystemCommandInput - {@link DeleteFileSystemCommandInput}
 * @returns {@link DeleteFileSystemCommandOutput}
 * @see {@link DeleteFileSystemCommandInput} for command's `input` shape.
 * @see {@link DeleteFileSystemCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *  <p>No Amazon FSx file systems were found based upon supplied parameters.</p>
 *
 * @throws {@link IncompatibleParameterError} (client fault)
 *  <p>The error returned when a second request is received with the same client request
 *             token but different parameters settings. A client request token should always uniquely
 *             identify a single request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link ServiceLimitExceeded} (client fault)
 *  <p>An error indicating that a particular service limit was exceeded. You can increase
 *             some service limits by contacting Amazon Web Services Support.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 * @example To delete a file system
 * ```javascript
 * // This operation deletes an Amazon FSx file system.
 * const input = {
 *   "FileSystemId": "fs-0498eed5fe91001ec"
 * };
 * const command = new DeleteFileSystemCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "FileSystemId": "fs-0498eed5fe91001ec",
 *   "Lifecycle": "DELETING"
 * }
 * *\/
 * // example id: to-delete-a-file-system-1481847318348
 * ```
 *
 */
export class DeleteFileSystemCommand extends $Command<
  DeleteFileSystemCommandInput,
  DeleteFileSystemCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: DeleteFileSystemCommandInput) {
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
  ): Handler<DeleteFileSystemCommandInput, DeleteFileSystemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteFileSystemCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "DeleteFileSystemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DeleteFileSystemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteFileSystemCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFileSystemCommandOutput> {
    return de_DeleteFileSystemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
