// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeClusterTracksMessage, TrackListMessage } from "../models/models_1";
import { de_DescribeClusterTracksCommand, se_DescribeClusterTracksCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeClusterTracksCommand}.
 */
export interface DescribeClusterTracksCommandInput extends DescribeClusterTracksMessage {}
/**
 * @public
 *
 * The output of {@link DescribeClusterTracksCommand}.
 */
export interface DescribeClusterTracksCommandOutput extends TrackListMessage, __MetadataBearer {}

/**
 * <p>Returns a list of all the available maintenance tracks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeClusterTracksCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeClusterTracksCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DescribeClusterTracksMessage
 *   MaintenanceTrackName: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeClusterTracksCommand(input);
 * const response = await client.send(command);
 * // { // TrackListMessage
 * //   MaintenanceTracks: [ // TrackList
 * //     { // MaintenanceTrack
 * //       MaintenanceTrackName: "STRING_VALUE",
 * //       DatabaseVersion: "STRING_VALUE",
 * //       UpdateTargets: [ // EligibleTracksToUpdateList
 * //         { // UpdateTarget
 * //           MaintenanceTrackName: "STRING_VALUE",
 * //           DatabaseVersion: "STRING_VALUE",
 * //           SupportedOperations: [ // SupportedOperationList
 * //             { // SupportedOperation
 * //               OperationName: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeClusterTracksCommandInput - {@link DescribeClusterTracksCommandInput}
 * @returns {@link DescribeClusterTracksCommandOutput}
 * @see {@link DescribeClusterTracksCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterTracksCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link InvalidClusterTrackFault} (client fault)
 *  <p>The provided cluster track name is not valid.</p>
 *
 * @throws {@link UnauthorizedOperation} (client fault)
 *  <p>Your account is not authorized to perform the requested operation.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class DescribeClusterTracksCommand extends $Command
  .classBuilder<
    DescribeClusterTracksCommandInput,
    DescribeClusterTracksCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServiceVersion20121201", "DescribeClusterTracks", {})
  .n("RedshiftClient", "DescribeClusterTracksCommand")
  .f(void 0, void 0)
  .ser(se_DescribeClusterTracksCommand)
  .de(de_DescribeClusterTracksCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeClusterTracksMessage;
      output: TrackListMessage;
    };
    sdk: {
      input: DescribeClusterTracksCommandInput;
      output: DescribeClusterTracksCommandOutput;
    };
  };
}
