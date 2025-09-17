// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribePatchGroupStateRequest, DescribePatchGroupStateResult } from "../models/models_1";
import { de_DescribePatchGroupStateCommand, se_DescribePatchGroupStateCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePatchGroupStateCommand}.
 */
export interface DescribePatchGroupStateCommandInput extends DescribePatchGroupStateRequest {}
/**
 * @public
 *
 * The output of {@link DescribePatchGroupStateCommand}.
 */
export interface DescribePatchGroupStateCommandOutput extends DescribePatchGroupStateResult, __MetadataBearer {}

/**
 * <p>Returns high-level aggregated patch compliance state information for a patch group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribePatchGroupStateCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribePatchGroupStateCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // DescribePatchGroupStateRequest
 *   PatchGroup: "STRING_VALUE", // required
 * };
 * const command = new DescribePatchGroupStateCommand(input);
 * const response = await client.send(command);
 * // { // DescribePatchGroupStateResult
 * //   Instances: Number("int"),
 * //   InstancesWithInstalledPatches: Number("int"),
 * //   InstancesWithInstalledOtherPatches: Number("int"),
 * //   InstancesWithInstalledPendingRebootPatches: Number("int"),
 * //   InstancesWithInstalledRejectedPatches: Number("int"),
 * //   InstancesWithMissingPatches: Number("int"),
 * //   InstancesWithFailedPatches: Number("int"),
 * //   InstancesWithNotApplicablePatches: Number("int"),
 * //   InstancesWithUnreportedNotApplicablePatches: Number("int"),
 * //   InstancesWithCriticalNonCompliantPatches: Number("int"),
 * //   InstancesWithSecurityNonCompliantPatches: Number("int"),
 * //   InstancesWithOtherNonCompliantPatches: Number("int"),
 * //   InstancesWithAvailableSecurityUpdates: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribePatchGroupStateCommandInput - {@link DescribePatchGroupStateCommandInput}
 * @returns {@link DescribePatchGroupStateCommandOutput}
 * @see {@link DescribePatchGroupStateCommandInput} for command's `input` shape.
 * @see {@link DescribePatchGroupStateCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class DescribePatchGroupStateCommand extends $Command
  .classBuilder<
    DescribePatchGroupStateCommandInput,
    DescribePatchGroupStateCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "DescribePatchGroupState", {})
  .n("SSMClient", "DescribePatchGroupStateCommand")
  .f(void 0, void 0)
  .ser(se_DescribePatchGroupStateCommand)
  .de(de_DescribePatchGroupStateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePatchGroupStateRequest;
      output: DescribePatchGroupStateResult;
    };
    sdk: {
      input: DescribePatchGroupStateCommandInput;
      output: DescribePatchGroupStateCommandOutput;
    };
  };
}
