// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeStackInstanceInput, DescribeStackInstanceOutput } from "../models/models_0";
import { de_DescribeStackInstanceCommand, se_DescribeStackInstanceCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeStackInstanceCommand}.
 */
export interface DescribeStackInstanceCommandInput extends DescribeStackInstanceInput {}
/**
 * @public
 *
 * The output of {@link DescribeStackInstanceCommand}.
 */
export interface DescribeStackInstanceCommandOutput extends DescribeStackInstanceOutput, __MetadataBearer {}

/**
 * <p>Returns the stack instance that's associated with the specified StackSet, Amazon Web Services account,
 *       and Amazon Web Services Region.</p>
 *          <p>For a list of stack instances that are associated with a specific StackSet, use <a>ListStackInstances</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStackInstanceCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStackInstanceCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // DescribeStackInstanceInput
 *   StackSetName: "STRING_VALUE", // required
 *   StackInstanceAccount: "STRING_VALUE", // required
 *   StackInstanceRegion: "STRING_VALUE", // required
 *   CallAs: "SELF" || "DELEGATED_ADMIN",
 * };
 * const command = new DescribeStackInstanceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStackInstanceOutput
 * //   StackInstance: { // StackInstance
 * //     StackSetId: "STRING_VALUE",
 * //     Region: "STRING_VALUE",
 * //     Account: "STRING_VALUE",
 * //     StackId: "STRING_VALUE",
 * //     ParameterOverrides: [ // Parameters
 * //       { // Parameter
 * //         ParameterKey: "STRING_VALUE",
 * //         ParameterValue: "STRING_VALUE",
 * //         UsePreviousValue: true || false,
 * //         ResolvedValue: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Status: "CURRENT" || "OUTDATED" || "INOPERABLE",
 * //     StackInstanceStatus: { // StackInstanceComprehensiveStatus
 * //       DetailedStatus: "PENDING" || "RUNNING" || "SUCCEEDED" || "FAILED" || "CANCELLED" || "INOPERABLE" || "SKIPPED_SUSPENDED_ACCOUNT" || "FAILED_IMPORT",
 * //     },
 * //     StatusReason: "STRING_VALUE",
 * //     OrganizationalUnitId: "STRING_VALUE",
 * //     DriftStatus: "DRIFTED" || "IN_SYNC" || "UNKNOWN" || "NOT_CHECKED",
 * //     LastDriftCheckTimestamp: new Date("TIMESTAMP"),
 * //     LastOperationId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeStackInstanceCommandInput - {@link DescribeStackInstanceCommandInput}
 * @returns {@link DescribeStackInstanceCommandOutput}
 * @see {@link DescribeStackInstanceCommandInput} for command's `input` shape.
 * @see {@link DescribeStackInstanceCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link StackInstanceNotFoundException} (client fault)
 *  <p>The specified stack instance doesn't exist.</p>
 *
 * @throws {@link StackSetNotFoundException} (client fault)
 *  <p>The specified stack set doesn't exist.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class DescribeStackInstanceCommand extends $Command
  .classBuilder<
    DescribeStackInstanceCommandInput,
    DescribeStackInstanceCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudFormation", "DescribeStackInstance", {})
  .n("CloudFormationClient", "DescribeStackInstanceCommand")
  .f(void 0, void 0)
  .ser(se_DescribeStackInstanceCommand)
  .de(de_DescribeStackInstanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeStackInstanceInput;
      output: DescribeStackInstanceOutput;
    };
    sdk: {
      input: DescribeStackInstanceCommandInput;
      output: DescribeStackInstanceCommandOutput;
    };
  };
}
