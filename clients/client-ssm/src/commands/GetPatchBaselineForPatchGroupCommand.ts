// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetPatchBaselineForPatchGroupRequest, GetPatchBaselineForPatchGroupResult } from "../models/models_1";
import {
  de_GetPatchBaselineForPatchGroupCommand,
  se_GetPatchBaselineForPatchGroupCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPatchBaselineForPatchGroupCommand}.
 */
export interface GetPatchBaselineForPatchGroupCommandInput extends GetPatchBaselineForPatchGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetPatchBaselineForPatchGroupCommand}.
 */
export interface GetPatchBaselineForPatchGroupCommandOutput
  extends GetPatchBaselineForPatchGroupResult,
    __MetadataBearer {}

/**
 * <p>Retrieves the patch baseline that should be used for the specified patch group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetPatchBaselineForPatchGroupCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetPatchBaselineForPatchGroupCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // GetPatchBaselineForPatchGroupRequest
 *   PatchGroup: "STRING_VALUE", // required
 *   OperatingSystem: "WINDOWS" || "AMAZON_LINUX" || "AMAZON_LINUX_2" || "AMAZON_LINUX_2022" || "UBUNTU" || "REDHAT_ENTERPRISE_LINUX" || "SUSE" || "CENTOS" || "ORACLE_LINUX" || "DEBIAN" || "MACOS" || "RASPBIAN" || "ROCKY_LINUX" || "ALMA_LINUX" || "AMAZON_LINUX_2023",
 * };
 * const command = new GetPatchBaselineForPatchGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetPatchBaselineForPatchGroupResult
 * //   BaselineId: "STRING_VALUE",
 * //   PatchGroup: "STRING_VALUE",
 * //   OperatingSystem: "WINDOWS" || "AMAZON_LINUX" || "AMAZON_LINUX_2" || "AMAZON_LINUX_2022" || "UBUNTU" || "REDHAT_ENTERPRISE_LINUX" || "SUSE" || "CENTOS" || "ORACLE_LINUX" || "DEBIAN" || "MACOS" || "RASPBIAN" || "ROCKY_LINUX" || "ALMA_LINUX" || "AMAZON_LINUX_2023",
 * // };
 *
 * ```
 *
 * @param GetPatchBaselineForPatchGroupCommandInput - {@link GetPatchBaselineForPatchGroupCommandInput}
 * @returns {@link GetPatchBaselineForPatchGroupCommandOutput}
 * @see {@link GetPatchBaselineForPatchGroupCommandInput} for command's `input` shape.
 * @see {@link GetPatchBaselineForPatchGroupCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 * @public
 */
export class GetPatchBaselineForPatchGroupCommand extends $Command
  .classBuilder<
    GetPatchBaselineForPatchGroupCommandInput,
    GetPatchBaselineForPatchGroupCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "GetPatchBaselineForPatchGroup", {})
  .n("SSMClient", "GetPatchBaselineForPatchGroupCommand")
  .f(void 0, void 0)
  .ser(se_GetPatchBaselineForPatchGroupCommand)
  .de(de_GetPatchBaselineForPatchGroupCommand)
  .build() {}
