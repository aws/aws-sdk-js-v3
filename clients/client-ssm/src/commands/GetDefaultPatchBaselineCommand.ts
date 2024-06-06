// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetDefaultPatchBaselineRequest, GetDefaultPatchBaselineResult } from "../models/models_1";
import { de_GetDefaultPatchBaselineCommand, se_GetDefaultPatchBaselineCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDefaultPatchBaselineCommand}.
 */
export interface GetDefaultPatchBaselineCommandInput extends GetDefaultPatchBaselineRequest {}
/**
 * @public
 *
 * The output of {@link GetDefaultPatchBaselineCommand}.
 */
export interface GetDefaultPatchBaselineCommandOutput extends GetDefaultPatchBaselineResult, __MetadataBearer {}

/**
 * <p>Retrieves the default patch baseline. Amazon Web Services Systems Manager supports creating multiple default patch
 *    baselines. For example, you can create a default patch baseline for each operating system.</p>
 *          <p>If you don't specify an operating system value, the default patch baseline for Windows is
 *    returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetDefaultPatchBaselineCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetDefaultPatchBaselineCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // GetDefaultPatchBaselineRequest
 *   OperatingSystem: "WINDOWS" || "AMAZON_LINUX" || "AMAZON_LINUX_2" || "AMAZON_LINUX_2022" || "UBUNTU" || "REDHAT_ENTERPRISE_LINUX" || "SUSE" || "CENTOS" || "ORACLE_LINUX" || "DEBIAN" || "MACOS" || "RASPBIAN" || "ROCKY_LINUX" || "ALMA_LINUX" || "AMAZON_LINUX_2023",
 * };
 * const command = new GetDefaultPatchBaselineCommand(input);
 * const response = await client.send(command);
 * // { // GetDefaultPatchBaselineResult
 * //   BaselineId: "STRING_VALUE",
 * //   OperatingSystem: "WINDOWS" || "AMAZON_LINUX" || "AMAZON_LINUX_2" || "AMAZON_LINUX_2022" || "UBUNTU" || "REDHAT_ENTERPRISE_LINUX" || "SUSE" || "CENTOS" || "ORACLE_LINUX" || "DEBIAN" || "MACOS" || "RASPBIAN" || "ROCKY_LINUX" || "ALMA_LINUX" || "AMAZON_LINUX_2023",
 * // };
 *
 * ```
 *
 * @param GetDefaultPatchBaselineCommandInput - {@link GetDefaultPatchBaselineCommandInput}
 * @returns {@link GetDefaultPatchBaselineCommandOutput}
 * @see {@link GetDefaultPatchBaselineCommandInput} for command's `input` shape.
 * @see {@link GetDefaultPatchBaselineCommandOutput} for command's `response` shape.
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
export class GetDefaultPatchBaselineCommand extends $Command
  .classBuilder<
    GetDefaultPatchBaselineCommandInput,
    GetDefaultPatchBaselineCommandOutput,
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
  .s("AmazonSSM", "GetDefaultPatchBaseline", {})
  .n("SSMClient", "GetDefaultPatchBaselineCommand")
  .f(void 0, void 0)
  .ser(se_GetDefaultPatchBaselineCommand)
  .de(de_GetDefaultPatchBaselineCommand)
  .build() {}
