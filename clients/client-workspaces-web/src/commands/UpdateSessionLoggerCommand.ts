// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateSessionLoggerRequest, UpdateSessionLoggerResponse } from "../models/models_0";
import { UpdateSessionLogger } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSessionLoggerCommand}.
 */
export interface UpdateSessionLoggerCommandInput extends UpdateSessionLoggerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSessionLoggerCommand}.
 */
export interface UpdateSessionLoggerCommandOutput extends UpdateSessionLoggerResponse, __MetadataBearer {}

/**
 * <p>Updates the details of a session logger.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, UpdateSessionLoggerCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, UpdateSessionLoggerCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // UpdateSessionLoggerRequest
 *   sessionLoggerArn: "STRING_VALUE", // required
 *   eventFilter: { // EventFilter Union: only one key present
 *     all: {},
 *     include: [ // Events
 *       "WebsiteInteract" || "FileDownloadFromSecureBrowserToRemoteDisk" || "FileTransferFromRemoteToLocalDisk" || "FileTransferFromLocalToRemoteDisk" || "FileUploadFromRemoteDiskToSecureBrowser" || "ContentPasteToWebsite" || "ContentTransferFromLocalToRemoteClipboard" || "ContentCopyFromWebsite" || "UrlLoad" || "TabOpen" || "TabClose" || "PrintJobSubmit" || "SessionConnect" || "SessionStart" || "SessionDisconnect" || "SessionEnd" || "UrlBlockByContentFilter",
 *     ],
 *   },
 *   logConfiguration: { // LogConfiguration
 *     s3: { // S3LogConfiguration
 *       bucket: "STRING_VALUE", // required
 *       keyPrefix: "STRING_VALUE",
 *       bucketOwner: "STRING_VALUE",
 *       logFileFormat: "JSONLines" || "Json", // required
 *       folderStructure: "Flat" || "NestedByDate", // required
 *     },
 *   },
 *   displayName: "STRING_VALUE",
 * };
 * const command = new UpdateSessionLoggerCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSessionLoggerResponse
 * //   sessionLogger: { // SessionLogger
 * //     sessionLoggerArn: "STRING_VALUE", // required
 * //     eventFilter: { // EventFilter Union: only one key present
 * //       all: {},
 * //       include: [ // Events
 * //         "WebsiteInteract" || "FileDownloadFromSecureBrowserToRemoteDisk" || "FileTransferFromRemoteToLocalDisk" || "FileTransferFromLocalToRemoteDisk" || "FileUploadFromRemoteDiskToSecureBrowser" || "ContentPasteToWebsite" || "ContentTransferFromLocalToRemoteClipboard" || "ContentCopyFromWebsite" || "UrlLoad" || "TabOpen" || "TabClose" || "PrintJobSubmit" || "SessionConnect" || "SessionStart" || "SessionDisconnect" || "SessionEnd" || "UrlBlockByContentFilter",
 * //       ],
 * //     },
 * //     logConfiguration: { // LogConfiguration
 * //       s3: { // S3LogConfiguration
 * //         bucket: "STRING_VALUE", // required
 * //         keyPrefix: "STRING_VALUE",
 * //         bucketOwner: "STRING_VALUE",
 * //         logFileFormat: "JSONLines" || "Json", // required
 * //         folderStructure: "Flat" || "NestedByDate", // required
 * //       },
 * //     },
 * //     customerManagedKey: "STRING_VALUE",
 * //     additionalEncryptionContext: { // EncryptionContextMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     associatedPortalArns: [ // ArnList
 * //       "STRING_VALUE",
 * //     ],
 * //     displayName: "STRING_VALUE",
 * //     creationDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateSessionLoggerCommandInput - {@link UpdateSessionLoggerCommandInput}
 * @returns {@link UpdateSessionLoggerCommandOutput}
 * @see {@link UpdateSessionLoggerCommandInput} for command's `input` shape.
 * @see {@link UpdateSessionLoggerCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>There is a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There is a validation error.</p>
 *
 * @throws {@link WorkSpacesWebServiceException}
 * <p>Base exception class for all service exceptions from WorkSpacesWeb service.</p>
 *
 *
 * @example Update Session Logger Event Filter
 * ```javascript
 * // Updates a session logger to capture specific events instead of all events
 * const input = {
 *   eventFilter: {
 *     include: [
 *       "SessionStart",
 *       "SessionEnd",
 *       "UrlLoad",
 *       "WebsiteInteract"
 *     ]
 *   },
 *   sessionLoggerArn: "arn:aws:workspaces-web:us-west-2:123456789012:sessionLogger/12345678-1234-1234-1234-123456789012"
 * };
 * const command = new UpdateSessionLoggerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   sessionLogger: {
 *     creationDate: "2024-01-15T10:30:00Z",
 *     displayName: "Updated Session Logger with Specific Events",
 *     eventFilter: {
 *       include: [
 *         "SessionStart",
 *         "SessionEnd",
 *         "UrlLoad",
 *         "WebsiteInteract"
 *       ]
 *     },
 *     logConfiguration: {
 *       s3: {
 *         bucket: "my-session-logs-bucket",
 *         bucketOwner: "123456789012",
 *         folderStructure: "Flat",
 *         keyPrefix: "updated/session-logs/each/event",
 *         logFileFormat: "Json"
 *       }
 *     },
 *     sessionLoggerArn: "arn:aws:workspaces-web:us-west-2:123456789012:sessionLogger/12345678-1234-1234-1234-123456789012"
 *   }
 * }
 * *\/
 * ```
 *
 * @example Update Session Logger Configuration
 * ```javascript
 * // Updates the log configuration of a session logger
 * const input = {
 *   logConfiguration: {
 *     s3: {
 *       bucket: "updated-my-session-logs-bucket-2",
 *       bucketOwner: "123456789012",
 *       folderStructure: "Flat",
 *       keyPrefix: "updated/key/prefix",
 *       logFileFormat: "Json"
 *     }
 *   },
 *   sessionLoggerArn: "arn:aws:workspaces-web:us-west-2:123456789012:sessionLogger/87654321-4321-4321-4321-210987654321"
 * };
 * const command = new UpdateSessionLoggerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   sessionLogger: {
 *     additionalEncryptionContext: {
 *       EncryptionContextKey: "EncryptionContextValue"
 *     },
 *     creationDate: "2024-01-15T14:45:00Z",
 *     customerManagedKey: "arn:aws:kms:us-west-2:123456789012:key/12345678-1234-1234-1234-123456789012",
 *     displayName: "Updated Session Logger with Log Config",
 *     eventFilter: {
 *       all:       { /* empty *\/ }
 *     },
 *     logConfiguration: {
 *       s3: {
 *         bucket: "updated-my-session-logs-bucket-2",
 *         bucketOwner: "123456789012",
 *         folderStructure: "Flat",
 *         keyPrefix: "updated/key/prefix",
 *         logFileFormat: "Json"
 *       }
 *     },
 *     sessionLoggerArn: "arn:aws:workspaces-web:us-west-2:123456789012:sessionLogger/87654321-4321-4321-4321-210987654321"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateSessionLoggerCommand extends $Command
  .classBuilder<
    UpdateSessionLoggerCommandInput,
    UpdateSessionLoggerCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSErmineControlPlaneService", "UpdateSessionLogger", {})
  .n("WorkSpacesWebClient", "UpdateSessionLoggerCommand")
  .sc(UpdateSessionLogger)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSessionLoggerRequest;
      output: UpdateSessionLoggerResponse;
    };
    sdk: {
      input: UpdateSessionLoggerCommandInput;
      output: UpdateSessionLoggerCommandOutput;
    };
  };
}
