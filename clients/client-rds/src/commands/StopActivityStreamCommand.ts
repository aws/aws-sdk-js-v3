// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopActivityStreamRequest, StopActivityStreamResponse } from "../models/models_1";
import { StopActivityStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Stops a database activity stream that was started using the Amazon Web Services console, the `start-activity-stream` CLI command, or the `StartActivityStream` operation.
 *
 * For more information, see [Monitoring Amazon Aurora with Database Activity Streams](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html) in the *Amazon Aurora User Guide* or [Monitoring Amazon RDS with Database Activity Streams](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.html) in the *Amazon RDS User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, StopActivityStreamCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, StopActivityStreamCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
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
 *
 * `DBClusterIdentifier` doesn't refer to an existing DB cluster.
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *
 * `DBInstanceIdentifier` doesn't refer to an existing DB instance.
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *
 * The requested operation can't be performed while the cluster is in this state.
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *
 * The DB instance isn't in a valid state.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *
 * The specified resource ID was not found.
 *
 * @throws {@link RDSServiceException}
 *
 * Base exception class for all service exceptions from RDS service.
 *
 * @example To stop a database activity stream
 * ```javascript
 * // The following example stops an activity stream in an Aurora cluster named my-pg-cluster.
 * const input = {
 *   ApplyImmediately: true,
 *   ResourceArn: "arn:aws:rds:us-east-1:1234567890123:cluster:my-pg-cluster"
 * };
 * const command = new StopActivityStreamCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   KinesisStreamName: "aws-rds-das-cluster-0ABCDEFGHI1JKLM2NOPQ3R4S",
 *   KmsKeyId: "arn:aws:kms:us-east-1:1234567890123:key/a12c345d-6ef7-890g-h123-456i789jk0l1",
 *   Status: "stopping"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StopActivityStreamCommand extends command<StopActivityStreamCommandInput, StopActivityStreamCommandOutput>(
  _ep0,
  _mw0,
  "StopActivityStream",
  StopActivityStream$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopActivityStreamRequest;
      output: StopActivityStreamResponse;
    };
    sdk: {
      input: StopActivityStreamCommandInput;
      output: StopActivityStreamCommandOutput;
    };
  };
}
