// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartActivityStreamRequest, StartActivityStreamResponse } from "../models/models_1";
import { de_StartActivityStreamCommand, se_StartActivityStreamCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartActivityStreamCommand}.
 */
export interface StartActivityStreamCommandInput extends StartActivityStreamRequest {}
/**
 * @public
 *
 * The output of {@link StartActivityStreamCommand}.
 */
export interface StartActivityStreamCommandOutput extends StartActivityStreamResponse, __MetadataBearer {}

/**
 * <p>Starts a database activity stream to monitor activity on the database.
 *             For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html">
 *                 Monitoring Amazon Aurora with Database Activity Streams</a>
 *             in the <i>Amazon Aurora User Guide</i> or
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.html">
 *                 Monitoring Amazon RDS with Database Activity Streams</a>
 *             in the <i>Amazon RDS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, StartActivityStreamCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, StartActivityStreamCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // StartActivityStreamRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   Mode: "sync" || "async", // required
 *   KmsKeyId: "STRING_VALUE", // required
 *   ApplyImmediately: true || false,
 *   EngineNativeAuditFieldsIncluded: true || false,
 * };
 * const command = new StartActivityStreamCommand(input);
 * const response = await client.send(command);
 * // { // StartActivityStreamResponse
 * //   KmsKeyId: "STRING_VALUE",
 * //   KinesisStreamName: "STRING_VALUE",
 * //   Status: "stopped" || "starting" || "started" || "stopping",
 * //   Mode: "sync" || "async",
 * //   EngineNativeAuditFieldsIncluded: true || false,
 * //   ApplyImmediately: true || false,
 * // };
 *
 * ```
 *
 * @param StartActivityStreamCommandInput - {@link StartActivityStreamCommandInput}
 * @returns {@link StartActivityStreamCommandOutput}
 * @see {@link StartActivityStreamCommandInput} for command's `input` shape.
 * @see {@link StartActivityStreamCommandOutput} for command's `response` shape.
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
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>An error occurred accessing an Amazon Web Services KMS key.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The specified resource ID was not found.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To start a database activity stream
 * ```javascript
 * // The following example starts an asynchronous activity stream to monitor an Aurora cluster named my-pg-cluster.
 * const input = {
 *   ApplyImmediately: true,
 *   KmsKeyId: "arn:aws:kms:us-east-1:1234567890123:key/a12c345d-6ef7-890g-h123-456i789jk0l1",
 *   Mode: "async",
 *   ResourceArn: "arn:aws:rds:us-east-1:1234567890123:cluster:my-pg-cluster"
 * };
 * const command = new StartActivityStreamCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ApplyImmediately: true,
 *   KinesisStreamName: "aws-rds-das-cluster-0ABCDEFGHI1JKLM2NOPQ3R4S",
 *   KmsKeyId: "arn:aws:kms:us-east-1:1234567890123:key/a12c345d-6ef7-890g-h123-456i789jk0l1",
 *   Mode: "async",
 *   Status: "starting"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StartActivityStreamCommand extends $Command
  .classBuilder<
    StartActivityStreamCommandInput,
    StartActivityStreamCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "StartActivityStream", {})
  .n("RDSClient", "StartActivityStreamCommand")
  .f(void 0, void 0)
  .ser(se_StartActivityStreamCommand)
  .de(de_StartActivityStreamCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartActivityStreamRequest;
      output: StartActivityStreamResponse;
    };
    sdk: {
      input: StartActivityStreamCommandInput;
      output: StartActivityStreamCommandOutput;
    };
  };
}
