// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeInstancePatchStatesRequest,
  DescribeInstancePatchStatesResult,
  DescribeInstancePatchStatesResultFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeInstancePatchStatesCommand, se_DescribeInstancePatchStatesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInstancePatchStatesCommand}.
 */
export interface DescribeInstancePatchStatesCommandInput extends DescribeInstancePatchStatesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstancePatchStatesCommand}.
 */
export interface DescribeInstancePatchStatesCommandOutput extends DescribeInstancePatchStatesResult, __MetadataBearer {}

/**
 * <p>Retrieves the high-level patch state of one or more managed nodes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeInstancePatchStatesCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeInstancePatchStatesCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SSMClient(config);
 * const input = { // DescribeInstancePatchStatesRequest
 *   InstanceIds: [ // InstanceIdList // required
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeInstancePatchStatesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstancePatchStatesResult
 * //   InstancePatchStates: [ // InstancePatchStateList
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
 * @param DescribeInstancePatchStatesCommandInput - {@link DescribeInstancePatchStatesCommandInput}
 * @returns {@link DescribeInstancePatchStatesCommandOutput}
 * @see {@link DescribeInstancePatchStatesCommandInput} for command's `input` shape.
 * @see {@link DescribeInstancePatchStatesCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DescribeInstancePatchStatesCommand extends $Command
  .classBuilder<
    DescribeInstancePatchStatesCommandInput,
    DescribeInstancePatchStatesCommandOutput,
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
  .s("AmazonSSM", "DescribeInstancePatchStates", {})
  .n("SSMClient", "DescribeInstancePatchStatesCommand")
  .f(void 0, DescribeInstancePatchStatesResultFilterSensitiveLog)
  .ser(se_DescribeInstancePatchStatesCommand)
  .de(de_DescribeInstancePatchStatesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInstancePatchStatesRequest;
      output: DescribeInstancePatchStatesResult;
    };
    sdk: {
      input: DescribeInstancePatchStatesCommandInput;
      output: DescribeInstancePatchStatesCommandOutput;
    };
  };
}
