// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListSessionLoggersRequest, ListSessionLoggersResponse } from "../models/models_0";
import { ListSessionLoggers } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSessionLoggersCommand}.
 */
export interface ListSessionLoggersCommandInput extends ListSessionLoggersRequest {}
/**
 * @public
 *
 * The output of {@link ListSessionLoggersCommand}.
 */
export interface ListSessionLoggersCommandOutput extends ListSessionLoggersResponse, __MetadataBearer {}

/**
 * <p>Lists all available session logger resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, ListSessionLoggersCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, ListSessionLoggersCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // ListSessionLoggersRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListSessionLoggersCommand(input);
 * const response = await client.send(command);
 * // { // ListSessionLoggersResponse
 * //   sessionLoggers: [ // SessionLoggerList
 * //     { // SessionLoggerSummary
 * //       sessionLoggerArn: "STRING_VALUE", // required
 * //       logConfiguration: { // LogConfiguration
 * //         s3: { // S3LogConfiguration
 * //           bucket: "STRING_VALUE", // required
 * //           keyPrefix: "STRING_VALUE",
 * //           bucketOwner: "STRING_VALUE",
 * //           logFileFormat: "JSONLines" || "Json", // required
 * //           folderStructure: "Flat" || "NestedByDate", // required
 * //         },
 * //       },
 * //       displayName: "STRING_VALUE",
 * //       creationDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSessionLoggersCommandInput - {@link ListSessionLoggersCommandInput}
 * @returns {@link ListSessionLoggersCommandOutput}
 * @see {@link ListSessionLoggersCommandInput} for command's `input` shape.
 * @see {@link ListSessionLoggersCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is an internal server error.</p>
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
 * @example List All Session Loggers
 * ```javascript
 * // Lists all session loggers in the account without pagination
 * const input = { /* empty *\/ };
 * const command = new ListSessionLoggersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   sessionLoggers: [
 *     {
 *       creationDate: "2024-01-15T10:30:00Z",
 *       displayName: "Session Logger with All Events",
 *       logConfiguration: {
 *         s3: {
 *           bucket: "my-session-logs-bucket-1",
 *           bucketOwner: "123456789012",
 *           folderStructure: "Flat",
 *           keyPrefix: "session-logs/all/events",
 *           logFileFormat: "Json"
 *         }
 *       },
 *       sessionLoggerArn: "arn:aws:workspaces-web:us-west-2:123456789012:sessionLogger/12345678-1234-1234-1234-123456789012"
 *     },
 *     {
 *       creationDate: "2024-01-15T14:45:00Z",
 *       displayName: "Session Logger with Each Events",
 *       logConfiguration: {
 *         s3: {
 *           bucket: "my-session-logs-bucket-2",
 *           bucketOwner: "123456789012",
 *           folderStructure: "NestedByDate",
 *           keyPrefix: "session-logs/each/event",
 *           logFileFormat: "JSONLines"
 *         }
 *       },
 *       sessionLoggerArn: "arn:aws:workspaces-web:us-west-2:123456789012:sessionLogger/87654321-4321-4321-4321-210987654321"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example List Session Loggers with Pagination
 * ```javascript
 * // Lists session loggers with pagination parameters
 * const input = {
 *   maxResults: 1,
 *   nextToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
 * };
 * const command = new ListSessionLoggersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   nextToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
 *   sessionLoggers: [
 *     {
 *       creationDate: "2024-03-15T12:45:00Z",
 *       displayName: "Session Logger Example with Pagination",
 *       logConfiguration: {
 *         s3: {
 *           bucket: "my-session-logs-bucket-3",
 *           bucketOwner: "123456789012",
 *           folderStructure: "Flat",
 *           keyPrefix: "session-logs/pagination/example",
 *           logFileFormat: "JSONLines"
 *         }
 *       },
 *       sessionLoggerArn: "arn:aws:workspaces-web:us-west-2:123456789012:sessionLogger/11111111-1111-1111-1111-111111111111"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListSessionLoggersCommand extends $Command
  .classBuilder<
    ListSessionLoggersCommandInput,
    ListSessionLoggersCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSErmineControlPlaneService", "ListSessionLoggers", {})
  .n("WorkSpacesWebClient", "ListSessionLoggersCommand")
  .sc(ListSessionLoggers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSessionLoggersRequest;
      output: ListSessionLoggersResponse;
    };
    sdk: {
      input: ListSessionLoggersCommandInput;
      output: ListSessionLoggersCommandOutput;
    };
  };
}
