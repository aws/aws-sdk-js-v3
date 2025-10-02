// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAvailablePatchesRequest, DescribeAvailablePatchesResult } from "../models/models_0";
import { de_DescribeAvailablePatchesCommand, se_DescribeAvailablePatchesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAvailablePatchesCommand}.
 */
export interface DescribeAvailablePatchesCommandInput extends DescribeAvailablePatchesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAvailablePatchesCommand}.
 */
export interface DescribeAvailablePatchesCommandOutput extends DescribeAvailablePatchesResult, __MetadataBearer {}

/**
 * <p>Lists all patches eligible to be included in a patch baseline.</p>
 *          <note>
 *             <p>Currently, <code>DescribeAvailablePatches</code> supports only the Amazon Linux 1, Amazon
 *     Linux 2, and Windows Server operating systems.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeAvailablePatchesCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeAvailablePatchesCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // DescribeAvailablePatchesRequest
 *   Filters: [ // PatchOrchestratorFilterList
 *     { // PatchOrchestratorFilter
 *       Key: "STRING_VALUE",
 *       Values: [ // PatchOrchestratorFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeAvailablePatchesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAvailablePatchesResult
 * //   Patches: [ // PatchList
 * //     { // Patch
 * //       Id: "STRING_VALUE",
 * //       ReleaseDate: new Date("TIMESTAMP"),
 * //       Title: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       ContentUrl: "STRING_VALUE",
 * //       Vendor: "STRING_VALUE",
 * //       ProductFamily: "STRING_VALUE",
 * //       Product: "STRING_VALUE",
 * //       Classification: "STRING_VALUE",
 * //       MsrcSeverity: "STRING_VALUE",
 * //       KbNumber: "STRING_VALUE",
 * //       MsrcNumber: "STRING_VALUE",
 * //       Language: "STRING_VALUE",
 * //       AdvisoryIds: [ // PatchAdvisoryIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       BugzillaIds: [ // PatchBugzillaIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       CVEIds: [ // PatchCVEIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       Name: "STRING_VALUE",
 * //       Epoch: Number("int"),
 * //       Version: "STRING_VALUE",
 * //       Release: "STRING_VALUE",
 * //       Arch: "STRING_VALUE",
 * //       Severity: "STRING_VALUE",
 * //       Repository: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAvailablePatchesCommandInput - {@link DescribeAvailablePatchesCommandInput}
 * @returns {@link DescribeAvailablePatchesCommandOutput}
 * @see {@link DescribeAvailablePatchesCommandInput} for command's `input` shape.
 * @see {@link DescribeAvailablePatchesCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class DescribeAvailablePatchesCommand extends $Command
  .classBuilder<
    DescribeAvailablePatchesCommandInput,
    DescribeAvailablePatchesCommandOutput,
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
  .s("AmazonSSM", "DescribeAvailablePatches", {})
  .n("SSMClient", "DescribeAvailablePatchesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAvailablePatchesCommand)
  .de(de_DescribeAvailablePatchesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAvailablePatchesRequest;
      output: DescribeAvailablePatchesResult;
    };
    sdk: {
      input: DescribeAvailablePatchesCommandInput;
      output: DescribeAvailablePatchesCommandOutput;
    };
  };
}
