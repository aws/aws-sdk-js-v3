// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeInstancePatchStatesForPatchGroupRequest,
  DescribeInstancePatchStatesForPatchGroupResult,
  DescribeInstancePatchStatesForPatchGroupResultFilterSensitiveLog,
} from "../models/models_0";
import {
  de_DescribeInstancePatchStatesForPatchGroupCommand,
  se_DescribeInstancePatchStatesForPatchGroupCommand,
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
 * The input for {@link DescribeInstancePatchStatesForPatchGroupCommand}.
 */
export interface DescribeInstancePatchStatesForPatchGroupCommandInput
  extends DescribeInstancePatchStatesForPatchGroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstancePatchStatesForPatchGroupCommand}.
 */
export interface DescribeInstancePatchStatesForPatchGroupCommandOutput
  extends DescribeInstancePatchStatesForPatchGroupResult,
    __MetadataBearer {}

/**
 * <p>Retrieves the high-level patch state for the managed nodes in the specified patch
 *    group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeInstancePatchStatesForPatchGroupCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeInstancePatchStatesForPatchGroupCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // DescribeInstancePatchStatesForPatchGroupRequest
 *   PatchGroup: "STRING_VALUE", // required
 *   Filters: [ // InstancePatchStateFilterList
 *     { // InstancePatchStateFilter
 *       Key: "STRING_VALUE", // required
 *       Values: [ // InstancePatchStateFilterValues // required
 *         "STRING_VALUE",
 *       ],
 *       Type: "Equal" || "NotEqual" || "LessThan" || "GreaterThan", // required
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeInstancePatchStatesForPatchGroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstancePatchStatesForPatchGroupResult
 * //   InstancePatchStates: [ // InstancePatchStatesList
 * //     { // InstancePatchState
 * //       InstanceId: "STRING_VALUE", // required
 * //       PatchGroup: "STRING_VALUE", // required
 * //       BaselineId: "STRING_VALUE", // required
 * //       SnapshotId: "STRING_VALUE",
 * //       InstallOverrideList: "STRING_VALUE",
 * //       OwnerInformation: "STRING_VALUE",
 * //       InstalledCount: Number("int"),
 * //       InstalledOtherCount: Number("int"),
 * //       InstalledPendingRebootCount: Number("int"),
 * //       InstalledRejectedCount: Number("int"),
 * //       MissingCount: Number("int"),
 * //       FailedCount: Number("int"),
 * //       UnreportedNotApplicableCount: Number("int"),
 * //       NotApplicableCount: Number("int"),
 * //       AvailableSecurityUpdateCount: Number("int"),
 * //       OperationStartTime: new Date("TIMESTAMP"), // required
 * //       OperationEndTime: new Date("TIMESTAMP"), // required
 * //       Operation: "Scan" || "Install", // required
 * //       LastNoRebootInstallOperationTime: new Date("TIMESTAMP"),
 * //       RebootOption: "RebootIfNeeded" || "NoReboot",
 * //       CriticalNonCompliantCount: Number("int"),
 * //       SecurityNonCompliantCount: Number("int"),
 * //       OtherNonCompliantCount: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeInstancePatchStatesForPatchGroupCommandInput - {@link DescribeInstancePatchStatesForPatchGroupCommandInput}
 * @returns {@link DescribeInstancePatchStatesForPatchGroupCommandOutput}
 * @see {@link DescribeInstancePatchStatesForPatchGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeInstancePatchStatesForPatchGroupCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidFilter} (client fault)
 *  <p>The filter name isn't valid. Verify that you entered the correct name and try again.</p>
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
export class DescribeInstancePatchStatesForPatchGroupCommand extends $Command
  .classBuilder<
    DescribeInstancePatchStatesForPatchGroupCommandInput,
    DescribeInstancePatchStatesForPatchGroupCommandOutput,
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
  .s("AmazonSSM", "DescribeInstancePatchStatesForPatchGroup", {})
  .n("SSMClient", "DescribeInstancePatchStatesForPatchGroupCommand")
  .f(void 0, DescribeInstancePatchStatesForPatchGroupResultFilterSensitiveLog)
  .ser(se_DescribeInstancePatchStatesForPatchGroupCommand)
  .de(de_DescribeInstancePatchStatesForPatchGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInstancePatchStatesForPatchGroupRequest;
      output: DescribeInstancePatchStatesForPatchGroupResult;
    };
    sdk: {
      input: DescribeInstancePatchStatesForPatchGroupCommandInput;
      output: DescribeInstancePatchStatesForPatchGroupCommandOutput;
    };
  };
}
