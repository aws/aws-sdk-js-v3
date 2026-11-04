// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartActivityStreamRequest, StartActivityStreamResponse } from "../models/models_1";
import { StartActivityStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Starts a database activity stream to monitor activity on the database. For more information, see [Monitoring Amazon Aurora with Database Activity Streams](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html) in the *Amazon Aurora User Guide* or [Monitoring Amazon RDS with Database Activity Streams](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.html) in the *Amazon RDS User Guide*.
 *
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
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *
 * An error occurred accessing an Amazon Web Services KMS key.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *
 * The specified resource ID was not found.
 *
 * @throws {@link RDSServiceException}
 *
 * Base exception class for all service exceptions from RDS service.
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
export class StartActivityStreamCommand extends command<StartActivityStreamCommandInput, StartActivityStreamCommandOutput>(
  _ep0,
  _mw0,
  "StartActivityStream",
  StartActivityStream$
) {
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
