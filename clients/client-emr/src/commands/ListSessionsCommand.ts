// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSessionsInput, ListSessionsOutput } from "../models/models_0";
import { ListSessions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSessionsCommand}.
 */
export interface ListSessionsCommandInput extends ListSessionsInput {}
/**
 * @public
 *
 * The output of {@link ListSessionsCommand}.
 */
export interface ListSessionsCommandOutput extends ListSessionsOutput, __MetadataBearer {}

/**
 * <p>Lists the sessions on a cluster. You can filter the results by session state. Newer sessions are returned first.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListSessionsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListSessionsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // ListSessionsInput
 *   ClusterId: "STRING_VALUE", // required
 *   SessionStates: [ // SessionStateList
 *     "SUBMITTED" || "STARTING" || "STARTED" || "IDLE" || "BUSY" || "TERMINATING" || "TERMINATED" || "FAILED",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListSessionsCommand(input);
 * const response = await client.send(command);
 * // { // ListSessionsOutput
 * //   Sessions: [ // SessionList
 * //     { // Session
 * //       Id: "STRING_VALUE", // required
 * //       ClusterId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE",
 * //       Arn: "STRING_VALUE", // required
 * //       State: "SUBMITTED" || "STARTING" || "STARTED" || "IDLE" || "BUSY" || "TERMINATING" || "TERMINATED" || "FAILED", // required
 * //       StateChangeReason: "STRING_VALUE",
 * //       ReleaseLabel: "STRING_VALUE",
 * //       ExecutionRoleArn: "STRING_VALUE",
 * //       AccountId: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       StartedAt: new Date("TIMESTAMP"),
 * //       EndedAt: new Date("TIMESTAMP"),
 * //       IdleSince: new Date("TIMESTAMP"),
 * //       EngineConfigurations: [ // ConfigurationList
 * //         { // Configuration
 * //           Classification: "STRING_VALUE",
 * //           Configurations: [
 * //             {
 * //               Classification: "STRING_VALUE",
 * //               Configurations: "<ConfigurationList>",
 * //               Properties: { // StringMap
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //           Properties: {
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       MonitoringConfiguration: { // SessionMonitoringConfiguration
 * //         CloudWatchLoggingConfiguration: { // SessionCloudWatchLoggingConfiguration
 * //           Enabled: true || false,
 * //           LogGroup: "STRING_VALUE",
 * //           LogStreamNamePrefix: "STRING_VALUE",
 * //           EncryptionKeyArn: "STRING_VALUE",
 * //           LogTypes: { // LogTypesMap
 * //             "<keys>": [ // XmlStringList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //         ManagedLoggingConfiguration: { // SessionManagedLoggingConfiguration
 * //           Enabled: true || false,
 * //           EncryptionKeyArn: "STRING_VALUE",
 * //         },
 * //         S3LoggingConfiguration: { // SessionS3LoggingConfiguration
 * //           Enabled: true || false,
 * //           LogUri: "STRING_VALUE",
 * //           EncryptionKeyArn: "STRING_VALUE",
 * //           LogTypes: {
 * //             "<keys>": [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //       },
 * //       SessionIdleTimeoutInMinutes: Number("long"),
 * //       ServerUrl: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSessionsCommandInput - {@link ListSessionsCommandInput}
 * @returns {@link ListSessionsCommandOutput}
 * @see {@link ListSessionsCommandInput} for command's `input` shape.
 * @see {@link ListSessionsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon EMR
 *          service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 *
 * @public
 */
export class ListSessionsCommand extends command<ListSessionsCommandInput, ListSessionsCommandOutput>(
  _ep0,
  _mw0,
  "ListSessions",
  ListSessions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSessionsInput;
      output: ListSessionsOutput;
    };
    sdk: {
      input: ListSessionsCommandInput;
      output: ListSessionsCommandOutput;
    };
  };
}
