// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CancelResizeMessage, ResizeProgressMessage } from "../models/models_0";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CancelResize } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelResizeCommand}.
 */
export interface CancelResizeCommandInput extends CancelResizeMessage {}
/**
 * @public
 *
 * The output of {@link CancelResizeCommand}.
 */
export interface CancelResizeCommandOutput extends ResizeProgressMessage, __MetadataBearer {}

/**
 * <p>Cancels a resize operation for a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CancelResizeCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CancelResizeCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // CancelResizeMessage
 *   ClusterIdentifier: "STRING_VALUE", // required
 * };
 * const command = new CancelResizeCommand(input);
 * const response = await client.send(command);
 * // { // ResizeProgressMessage
 * //   TargetNodeType: "STRING_VALUE",
 * //   TargetNumberOfNodes: Number("int"),
 * //   TargetClusterType: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   ImportTablesCompleted: [ // ImportTablesCompleted
 * //     "STRING_VALUE",
 * //   ],
 * //   ImportTablesInProgress: [ // ImportTablesInProgress
 * //     "STRING_VALUE",
 * //   ],
 * //   ImportTablesNotStarted: [ // ImportTablesNotStarted
 * //     "STRING_VALUE",
 * //   ],
 * //   AvgResizeRateInMegaBytesPerSecond: Number("double"),
 * //   TotalResizeDataInMegaBytes: Number("long"),
 * //   ProgressInMegaBytes: Number("long"),
 * //   ElapsedTimeInSeconds: Number("long"),
 * //   EstimatedTimeToCompletionInSeconds: Number("long"),
 * //   ResizeType: "STRING_VALUE",
 * //   Message: "STRING_VALUE",
 * //   TargetEncryptionType: "STRING_VALUE",
 * //   DataTransferProgressPercent: Number("double"),
 * // };
 *
 * ```
 *
 * @param CancelResizeCommandInput - {@link CancelResizeCommandInput}
 * @returns {@link CancelResizeCommandOutput}
 * @see {@link CancelResizeCommandInput} for command's `input` shape.
 * @see {@link CancelResizeCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *  <p>The specified cluster is not in the <code>available</code> state. </p>
 *
 * @throws {@link ResizeNotFoundFault} (client fault)
 *  <p>A resize operation for the specified cluster is not found.</p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class CancelResizeCommand extends $Command
  .classBuilder<
    CancelResizeCommandInput,
    CancelResizeCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "CancelResize", {})
  .n("RedshiftClient", "CancelResizeCommand")
  .sc(CancelResize)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelResizeMessage;
      output: ResizeProgressMessage;
    };
    sdk: {
      input: CancelResizeCommandInput;
      output: CancelResizeCommandOutput;
    };
  };
}
