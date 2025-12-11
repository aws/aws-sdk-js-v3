// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeRecoverySnapshotsRequest, DescribeRecoverySnapshotsResponse } from "../models/models_0";
import { DescribeRecoverySnapshots } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRecoverySnapshotsCommand}.
 */
export interface DescribeRecoverySnapshotsCommandInput extends DescribeRecoverySnapshotsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRecoverySnapshotsCommand}.
 */
export interface DescribeRecoverySnapshotsCommandOutput extends DescribeRecoverySnapshotsResponse, __MetadataBearer {}

/**
 * <p>Lists all Recovery Snapshots for a single Source Server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, DescribeRecoverySnapshotsCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, DescribeRecoverySnapshotsCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // DescribeRecoverySnapshotsRequest
 *   sourceServerID: "STRING_VALUE", // required
 *   filters: { // DescribeRecoverySnapshotsRequestFilters
 *     fromDateTime: "STRING_VALUE",
 *     toDateTime: "STRING_VALUE",
 *   },
 *   order: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeRecoverySnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRecoverySnapshotsResponse
 * //   items: [ // RecoverySnapshotsList
 * //     { // RecoverySnapshot
 * //       snapshotID: "STRING_VALUE", // required
 * //       sourceServerID: "STRING_VALUE", // required
 * //       expectedTimestamp: "STRING_VALUE", // required
 * //       timestamp: "STRING_VALUE",
 * //       ebsSnapshots: [ // EbsSnapshotsList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRecoverySnapshotsCommandInput - {@link DescribeRecoverySnapshotsCommandInput}
 * @returns {@link DescribeRecoverySnapshotsCommandOutput}
 * @see {@link DescribeRecoverySnapshotsCommandInput} for command's `input` shape.
 * @see {@link DescribeRecoverySnapshotsCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 *
 * @public
 */
export class DescribeRecoverySnapshotsCommand extends $Command
  .classBuilder<
    DescribeRecoverySnapshotsCommandInput,
    DescribeRecoverySnapshotsCommandOutput,
    DrsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DrsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticDisasterRecoveryService", "DescribeRecoverySnapshots", {})
  .n("DrsClient", "DescribeRecoverySnapshotsCommand")
  .sc(DescribeRecoverySnapshots)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRecoverySnapshotsRequest;
      output: DescribeRecoverySnapshotsResponse;
    };
    sdk: {
      input: DescribeRecoverySnapshotsCommandInput;
      output: DescribeRecoverySnapshotsCommandOutput;
    };
  };
}
