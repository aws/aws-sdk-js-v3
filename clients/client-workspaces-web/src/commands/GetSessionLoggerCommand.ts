// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetSessionLoggerRequest,
  GetSessionLoggerResponse,
  GetSessionLoggerResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetSessionLoggerCommand, se_GetSessionLoggerCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSessionLoggerCommand}.
 */
export interface GetSessionLoggerCommandInput extends GetSessionLoggerRequest {}
/**
 * @public
 *
 * The output of {@link GetSessionLoggerCommand}.
 */
export interface GetSessionLoggerCommandOutput extends GetSessionLoggerResponse, __MetadataBearer {}

/**
 * <p>Gets details about a specific session logger resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, GetSessionLoggerCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, GetSessionLoggerCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * const client = new WorkSpacesWebClient(config);
 * const input = { // GetSessionLoggerRequest
 *   sessionLoggerArn: "STRING_VALUE", // required
 * };
 * const command = new GetSessionLoggerCommand(input);
 * const response = await client.send(command);
 * // { // GetSessionLoggerResponse
 * //   sessionLogger: { // SessionLogger
 * //     sessionLoggerArn: "STRING_VALUE", // required
 * //     eventFilter: { // EventFilter Union: only one key present
 * //       all: {},
 * //       include: [ // Events
 * //         "WebsiteInteract" || "FileDownloadFromSecureBrowserToRemoteDisk" || "FileTransferFromRemoteToLocalDisk" || "FileTransferFromLocalToRemoteDisk" || "FileUploadFromRemoteDiskToSecureBrowser" || "ContentPasteToWebsite" || "ContentTransferFromLocalToRemoteClipboard" || "ContentCopyFromWebsite" || "UrlLoad" || "TabOpen" || "TabClose" || "PrintJobSubmit" || "SessionConnect" || "SessionStart" || "SessionDisconnect" || "SessionEnd",
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
 * @param GetSessionLoggerCommandInput - {@link GetSessionLoggerCommandInput}
 * @returns {@link GetSessionLoggerCommandOutput}
 * @see {@link GetSessionLoggerCommandInput} for command's `input` shape.
 * @see {@link GetSessionLoggerCommandOutput} for command's `response` shape.
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
 * @example Get Session Logger with All Events
 * ```javascript
 * // Retrieves a session logger configured for all events
 * const input = {
 *   sessionLoggerArn: "arn:aws:workspaces-web:us-west-2:123456789012:sessionLogger/12345678-1234-1234-1234-123456789012"
 * };
 * const command = new GetSessionLoggerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   sessionLogger: {
 *     associatedPortalArns: [
 *       "arn:aws:workspaces-web:us-west-2:123456789012:portal/87654321-4321-4321-4321-210987654321"
 *     ],
 *     creationDate: "2024-01-15T10:30:00Z",
 *     displayName: "Session Logger with All Events",
 *     eventFilter: {
 *       all:       { /* empty *\/ }
 *     },
 *     logConfiguration: {
 *       s3: {
 *         bucket: "my-session-logs-bucket-1",
 *         bucketOwner: "123456789012",
 *         folderStructure: "Flat",
 *         keyPrefix: "session-logs/all/events",
 *         logFileFormat: "Json"
 *       }
 *     },
 *     sessionLoggerArn: "arn:aws:workspaces-web:us-west-2:123456789012:sessionLogger/12345678-1234-1234-1234-123456789012"
 *   }
 * }
 * *\/
 * ```
 *
 * @example Get Session Logger with Specific Events
 * ```javascript
 * // Retrieves a session logger configured for specific events
 * const input = {
 *   sessionLoggerArn: "arn:aws:workspaces-web:us-west-2:123456789012:sessionLogger/87654321-4321-4321-4321-210987654321"
 * };
 * const command = new GetSessionLoggerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   sessionLogger: {
 *     additionalEncryptionContext: {
 *       EncryptionContextKey: "EncryptionContextValue"
 *     },
 *     creationDate: "2024-01-15T14:45:00Z",
 *     customerManagedKey: "arn:aws:kms:us-west-2:123456789012:key/12345678-1234-1234-1234-123456789012",
 *     displayName: "Session Logger with Each Events",
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
 *         bucket: "my-session-logs-bucket-2",
 *         bucketOwner: "123456789012",
 *         folderStructure: "NestedByDate",
 *         keyPrefix: "session-logs/each/event",
 *         logFileFormat: "JSONLines"
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
export class GetSessionLoggerCommand extends $Command
  .classBuilder<
    GetSessionLoggerCommandInput,
    GetSessionLoggerCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSErmineControlPlaneService", "GetSessionLogger", {})
  .n("WorkSpacesWebClient", "GetSessionLoggerCommand")
  .f(void 0, GetSessionLoggerResponseFilterSensitiveLog)
  .ser(se_GetSessionLoggerCommand)
  .de(de_GetSessionLoggerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSessionLoggerRequest;
      output: GetSessionLoggerResponse;
    };
    sdk: {
      input: GetSessionLoggerCommandInput;
      output: GetSessionLoggerCommandOutput;
    };
  };
}
