// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSessionLoggerRequest, CreateSessionLoggerResponse } from "../models/models_0";
import { CreateSessionLogger$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateSessionLoggerCommand}.
 */
export interface CreateSessionLoggerCommandInput extends CreateSessionLoggerRequest {}
/**
 * @public
 *
 * The output of {@link CreateSessionLoggerCommand}.
 */
export interface CreateSessionLoggerCommandOutput extends CreateSessionLoggerResponse, __MetadataBearer {}

/**
 * Creates a session logger.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, CreateSessionLoggerCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, CreateSessionLoggerCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // CreateSessionLoggerRequest
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
 *   customerManagedKey: "STRING_VALUE",
 *   additionalEncryptionContext: { // EncryptionContextMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateSessionLoggerCommand(input);
 * const response = await client.send(command);
 * // { // CreateSessionLoggerResponse
 * //   sessionLoggerArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateSessionLoggerCommandInput - {@link CreateSessionLoggerCommandInput}
 * @returns {@link CreateSessionLoggerCommandOutput}
 * @see {@link CreateSessionLoggerCommandInput} for command's `input` shape.
 * @see {@link CreateSessionLoggerCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is an internal server error.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The service quota has been exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * There is a throttling error.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * There is a validation error.
 *
 * @throws {@link WorkSpacesWebServiceException}
 *
 * Base exception class for all service exceptions from WorkSpacesWeb service.
 *
 * @example Create Session Logger with All Events
 * ```javascript
 * // Creates a session logger that captures all events and stores them in S3 with JSON format and flat folder structure
 * const input = {
 *   displayName: "Session Logger with All Events",
 *   eventFilter: {
 *     all:     { /* empty *\/ }
 *   },
 *   logConfiguration: {
 *     s3: {
 *       bucket: "my-session-logs-bucket",
 *       bucketOwner: "123456789012",
 *       folderStructure: "Flat",
 *       keyPrefix: "session-logs/all/events",
 *       logFileFormat: "Json"
 *     }
 *   }
 * };
 * const command = new CreateSessionLoggerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   sessionLoggerArn: "arn:aws:workspaces-web:us-west-2:123456789012:sessionLogger/12345678-1234-1234-1234-123456789012"
 * }
 * *\/
 * ```
 *
 * @example Create Session Logger with Specific Events
 * ```javascript
 * // Creates a session logger that captures only specific events with JSONLines format and nested folder structure
 * const input = {
 *   additionalEncryptionContext: {
 *     EncryptionContextKey: "EncryptionContextValue"
 *   },
 *   customerManagedKey: "arn:aws:kms:us-west-2:123456789012:key/12345678-1234-1234-1234-123456789012",
 *   displayName: "Session Logger with Each Events",
 *   eventFilter: {
 *     include: [
 *       "SessionStart",
 *       "SessionEnd",
 *       "UrlLoad",
 *       "WebsiteInteract"
 *     ]
 *   },
 *   logConfiguration: {
 *     s3: {
 *       bucket: "my-session-logs-bucket",
 *       bucketOwner: "123456789012",
 *       folderStructure: "NestedByDate",
 *       keyPrefix: "session-logs/each/event",
 *       logFileFormat: "JSONLines"
 *     }
 *   },
 *   tags: [
 *     {
 *       Key: "KEY-1",
 *       Value: "VALUE-1"
 *     },
 *     {
 *       Key: "KEY-2",
 *       Value: "VALUE-2"
 *     }
 *   ]
 * };
 * const command = new CreateSessionLoggerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   sessionLoggerArn: "arn:aws:workspaces-web:us-west-2:123456789012:sessionLogger/87654321-4321-4321-4321-210987654321"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateSessionLoggerCommand extends command<CreateSessionLoggerCommandInput, CreateSessionLoggerCommandOutput>(
  _ep0,
  _mw0,
  "CreateSessionLogger",
  CreateSessionLogger$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSessionLoggerRequest;
      output: CreateSessionLoggerResponse;
    };
    sdk: {
      input: CreateSessionLoggerCommandInput;
      output: CreateSessionLoggerCommandOutput;
    };
  };
}
