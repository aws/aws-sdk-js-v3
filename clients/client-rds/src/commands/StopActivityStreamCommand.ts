// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StopActivityStreamRequest, StopActivityStreamResponse } from "../models/models_1";
import { de_StopActivityStreamCommand, se_StopActivityStreamCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopActivityStreamCommand}.
 */
export interface StopActivityStreamCommandInput extends StopActivityStreamRequest {}
/**
 * @public
 *
 * The output of {@link StopActivityStreamCommand}.
 */
export interface StopActivityStreamCommandOutput extends StopActivityStreamResponse, __MetadataBearer {}

/**
 * <p>Stops a database activity stream that was started using the Amazon Web Services console,
 *             the <code>start-activity-stream</code> CLI command, or the <code>StartActivityStream</code> operation.</p>
 *          <p>For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html">
 *                 Monitoring Amazon Aurora with Database Activity Streams</a>
 *             in the <i>Amazon Aurora User Guide</i>
 *             or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.html">
 *                 Monitoring Amazon RDS with Database Activity Streams</a>
 *             in the <i>Amazon RDS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, StopActivityStreamCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, StopActivityStreamCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // StopActivityStreamRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   ApplyImmediately: true || false,
 * };
 * const command = new StopActivityStreamCommand(input);
 * const response = await client.send(command);
 * // { // StopActivityStreamResponse
 * //   KmsKeyId: "STRING_VALUE",
 * //   KinesisStreamName: "STRING_VALUE",
 * //   Status: "stopped" || "starting" || "started" || "stopping",
 * // };
 *
 * ```
 *
 * @param StopActivityStreamCommandInput - {@link StopActivityStreamCommandInput}
 * @returns {@link StopActivityStreamCommandOutput}
 * @see {@link StopActivityStreamCommandInput} for command's `input` shape.
 * @see {@link StopActivityStreamCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The DB instance isn't in a valid state.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The specified resource ID was not found.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @public
 * @example To stop a database activity stream
 * ```javascript
 * // The following example stops an activity stream in an Aurora cluster named my-pg-cluster.
 * const input = {
 *   "ApplyImmediately": true,
 *   "ResourceArn": "arn:aws:rds:us-east-1:1234567890123:cluster:my-pg-cluster"
 * };
 * const command = new StopActivityStreamCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "KinesisStreamName": "aws-rds-das-cluster-0ABCDEFGHI1JKLM2NOPQ3R4S",
 *   "KmsKeyId": "arn:aws:kms:us-east-1:1234567890123:key/a12c345d-6ef7-890g-h123-456i789jk0l1",
 *   "Status": "stopping"
 * }
 * *\/
 * // example id: to-stop-a-database-activity-stream-1679945843823
 * ```
 *
 */
export class StopActivityStreamCommand extends $Command
  .classBuilder<
    StopActivityStreamCommandInput,
    StopActivityStreamCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "StopActivityStream", {})
  .n("RDSClient", "StopActivityStreamCommand")
  .f(void 0, void 0)
  .ser(se_StopActivityStreamCommand)
  .de(de_StopActivityStreamCommand)
  .build() {}
