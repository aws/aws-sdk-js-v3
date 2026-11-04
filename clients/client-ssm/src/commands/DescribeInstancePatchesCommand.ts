// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeInstancePatchesRequest, DescribeInstancePatchesResult } from "../models/models_0";
import { DescribeInstancePatches$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves information about the patches on the specified managed node and their state relative to the patch baseline being used for the node.
 *
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
 *
 * An error occurred on the server side.
 *
 * @throws {@link InvalidFilter} (client fault)
 *
 * The filter name isn't valid. Verify that you entered the correct name and try again.
 *
 * @throws {@link InvalidInstanceId} (client fault)
 *
 * The following problems can cause this exception:
 *
 * - You don't have permission to access the managed node.
 * - Amazon Web Services Systems Manager Agent (SSM Agent) isn't running. Verify that SSM Agent is running.
 * - SSM Agent isn't registered with the SSM endpoint. Try reinstalling SSM Agent.
 * - The managed node isn't in a valid state. Valid states are: `Running`, `Pending`, `Stopped`, and `Stopping`. Invalid states are: `Shutting-down` and `Terminated`.
 *
 * @throws {@link InvalidNextToken} (client fault)
 *
 * The specified token isn't valid.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class DescribeInstancePatchesCommand extends command<DescribeInstancePatchesCommandInput, DescribeInstancePatchesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeInstancePatches",
  DescribeInstancePatches$
) {
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
