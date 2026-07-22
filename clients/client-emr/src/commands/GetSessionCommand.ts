// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSessionInput, GetSessionOutput } from "../models/models_0";
import { GetSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSessionCommand}.
 */
export interface GetSessionCommandInput extends GetSessionInput {}
/**
 * @public
 *
 * The output of {@link GetSessionCommand}.
 */
export interface GetSessionCommandOutput extends GetSessionOutput, __MetadataBearer {}

/**
 * <p>Returns detailed information about a session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, GetSessionCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, GetSessionCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // GetSessionInput
 *   ClusterId: "STRING_VALUE", // required
 *   SessionId: "STRING_VALUE", // required
 * };
 * const command = new GetSessionCommand(input);
 * const response = await client.send(command);
 * // { // GetSessionOutput
 * //   Session: { // Session
 * //     Id: "STRING_VALUE", // required
 * //     ClusterId: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE",
 * //     Arn: "STRING_VALUE", // required
 * //     State: "SUBMITTED" || "STARTING" || "STARTED" || "IDLE" || "BUSY" || "TERMINATING" || "TERMINATED" || "FAILED", // required
 * //     StateChangeReason: "STRING_VALUE",
 * //     ReleaseLabel: "STRING_VALUE",
 * //     ExecutionRoleArn: "STRING_VALUE",
 * //     AccountId: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //     StartedAt: new Date("TIMESTAMP"),
 * //     EndedAt: new Date("TIMESTAMP"),
 * //     IdleSince: new Date("TIMESTAMP"),
 * //     EngineConfigurations: [ // ConfigurationList
 * //       { // Configuration
 * //         Classification: "STRING_VALUE",
 * //         Configurations: [
 * //           {
 * //             Classification: "STRING_VALUE",
 * //             Configurations: "<ConfigurationList>",
 * //             Properties: { // StringMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //         Properties: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     MonitoringConfiguration: { // SessionMonitoringConfiguration
 * //       CloudWatchLoggingConfiguration: { // SessionCloudWatchLoggingConfiguration
 * //         Enabled: true || false,
 * //         LogGroup: "STRING_VALUE",
 * //         LogStreamNamePrefix: "STRING_VALUE",
 * //         EncryptionKeyArn: "STRING_VALUE",
 * //         LogTypes: { // LogTypesMap
 * //           "<keys>": [ // XmlStringList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       ManagedLoggingConfiguration: { // SessionManagedLoggingConfiguration
 * //         Enabled: true || false,
 * //         EncryptionKeyArn: "STRING_VALUE",
 * //       },
 * //       S3LoggingConfiguration: { // SessionS3LoggingConfiguration
 * //         Enabled: true || false,
 * //         LogUri: "STRING_VALUE",
 * //         EncryptionKeyArn: "STRING_VALUE",
 * //         LogTypes: {
 * //           "<keys>": [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     },
 * //     SessionIdleTimeoutInMinutes: Number("long"),
 * //     ServerUrl: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSessionCommandInput - {@link GetSessionCommandInput}
 * @returns {@link GetSessionCommandOutput}
 * @see {@link GetSessionCommandInput} for command's `input` shape.
 * @see {@link GetSessionCommandOutput} for command's `response` shape.
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
export class GetSessionCommand extends command<GetSessionCommandInput, GetSessionCommandOutput>(
  _ep0,
  _mw0,
  "GetSession",
  GetSession$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSessionInput;
      output: GetSessionOutput;
    };
    sdk: {
      input: GetSessionCommandInput;
      output: GetSessionCommandOutput;
    };
  };
}
