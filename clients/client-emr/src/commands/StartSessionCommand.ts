// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartSessionInput, StartSessionOutput } from "../models/models_0";
import { StartSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartSessionCommand}.
 */
export interface StartSessionCommandInput extends StartSessionInput {}
/**
 * @public
 *
 * The output of {@link StartSessionCommand}.
 */
export interface StartSessionCommandOutput extends StartSessionOutput, __MetadataBearer {}

/**
 * <p>Creates and starts a new Spark Connect session on the specified cluster. The cluster must be in the <code>RUNNING</code> or <code>WAITING</code> state and have sessions enabled. This operation is supported in Amazon EMR Spark 8.0.0 and later.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, StartSessionCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, StartSessionCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // StartSessionInput
 *   Name: "STRING_VALUE",
 *   ClusterId: "STRING_VALUE", // required
 *   ExecutionRoleArn: "STRING_VALUE",
 *   EngineConfigurations: [ // ConfigurationList
 *     { // Configuration
 *       Classification: "STRING_VALUE",
 *       Configurations: [
 *         {
 *           Classification: "STRING_VALUE",
 *           Configurations: "<ConfigurationList>",
 *           Properties: { // StringMap
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *       ],
 *       Properties: {
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   MonitoringConfiguration: { // SessionMonitoringConfiguration
 *     CloudWatchLoggingConfiguration: { // SessionCloudWatchLoggingConfiguration
 *       Enabled: true || false,
 *       LogGroup: "STRING_VALUE",
 *       LogStreamNamePrefix: "STRING_VALUE",
 *       EncryptionKeyArn: "STRING_VALUE",
 *       LogTypes: { // LogTypesMap
 *         "<keys>": [ // XmlStringList
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *     ManagedLoggingConfiguration: { // SessionManagedLoggingConfiguration
 *       Enabled: true || false,
 *       EncryptionKeyArn: "STRING_VALUE",
 *     },
 *     S3LoggingConfiguration: { // SessionS3LoggingConfiguration
 *       Enabled: true || false,
 *       LogUri: "STRING_VALUE",
 *       EncryptionKeyArn: "STRING_VALUE",
 *       LogTypes: {
 *         "<keys>": [
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   },
 *   SessionIdleTimeoutInMinutes: Number("long"),
 *   ClientRequestToken: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new StartSessionCommand(input);
 * const response = await client.send(command);
 * // { // StartSessionOutput
 * //   Id: "STRING_VALUE", // required
 * //   ClusterId: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   AccountId: "STRING_VALUE",
 * //   State: "SUBMITTED" || "STARTING" || "STARTED" || "IDLE" || "BUSY" || "TERMINATING" || "TERMINATED" || "FAILED",
 * // };
 *
 * ```
 *
 * @param StartSessionCommandInput - {@link StartSessionCommandInput}
 * @returns {@link StartSessionCommandOutput}
 * @see {@link StartSessionCommandInput} for command's `input` shape.
 * @see {@link StartSessionCommandOutput} for command's `response` shape.
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
export class StartSessionCommand extends command<StartSessionCommandInput, StartSessionCommandOutput>(
  _ep0,
  _mw0,
  "StartSession",
  StartSession$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartSessionInput;
      output: StartSessionOutput;
    };
    sdk: {
      input: StartSessionCommandInput;
      output: StartSessionCommandOutput;
    };
  };
}
