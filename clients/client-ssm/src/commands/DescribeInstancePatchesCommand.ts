// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeInstancePatchesRequest, DescribeInstancePatchesResult } from "../models/models_0";
import { DescribeInstancePatches$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInstancePatchesCommand}.
 */
export interface DescribeInstancePatchesCommandInput extends DescribeInstancePatchesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstancePatchesCommand}.
 */
export interface DescribeInstancePatchesCommandOutput extends DescribeInstancePatchesResult, __MetadataBearer {}

/**
 * <p>Retrieves information about the patches on the specified managed node and their state
 *    relative to the patch baseline being used for the node.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeInstancePatchesCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeInstancePatchesCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // DescribeInstancePatchesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Filters: [ // PatchOrchestratorFilterList
 *     { // PatchOrchestratorFilter
 *       Key: "STRING_VALUE",
 *       Values: [ // PatchOrchestratorFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeInstancePatchesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstancePatchesResult
 * //   Patches: [ // PatchComplianceDataList
 * //     { // PatchComplianceData
 * //       Title: "STRING_VALUE", // required
 * //       KBId: "STRING_VALUE", // required
 * //       Classification: "STRING_VALUE", // required
 * //       Severity: "STRING_VALUE", // required
 * //       State: "INSTALLED" || "INSTALLED_OTHER" || "INSTALLED_PENDING_REBOOT" || "INSTALLED_REJECTED" || "MISSING" || "NOT_APPLICABLE" || "FAILED" || "AVAILABLE_SECURITY_UPDATE", // required
 * //       InstalledTime: new Date("TIMESTAMP"), // required
 * //       CVEIds: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeInstancePatchesCommandInput - {@link DescribeInstancePatchesCommandInput}
 * @returns {@link DescribeInstancePatchesCommandOutput}
 * @see {@link DescribeInstancePatchesCommandInput} for command's `input` shape.
 * @see {@link DescribeInstancePatchesCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidFilter} (client fault)
 *  <p>The filter name isn't valid. Verify that you entered the correct name and try again.</p>
 *
 * @throws {@link InvalidInstanceId} (client fault)
 *  <p>The following problems can cause this exception:</p>
 *          <ul>
 *             <li>
 *                <p>You don't have permission to access the managed node.</p>
 *             </li>
 *             <li>
 *                <p>Amazon Web Services Systems Manager Agent (SSM Agent) isn't running. Verify that SSM Agent is
 *      running.</p>
 *             </li>
 *             <li>
 *                <p>SSM Agent isn't registered with the SSM endpoint. Try reinstalling SSM Agent.</p>
 *             </li>
 *             <li>
 *                <p>The managed node isn't in a valid state. Valid states are: <code>Running</code>,
 *       <code>Pending</code>, <code>Stopped</code>, and <code>Stopping</code>. Invalid states are:
 *       <code>Shutting-down</code> and <code>Terminated</code>.</p>
 *             </li>
 *          </ul>
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
export class DescribeInstancePatchesCommand extends $Command
  .classBuilder<
    DescribeInstancePatchesCommandInput,
    DescribeInstancePatchesCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "DescribeInstancePatches", {})
  .n("SSMClient", "DescribeInstancePatchesCommand")
  .sc(DescribeInstancePatches$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInstancePatchesRequest;
      output: DescribeInstancePatchesResult;
    };
    sdk: {
      input: DescribeInstancePatchesCommandInput;
      output: DescribeInstancePatchesCommandOutput;
    };
  };
}
