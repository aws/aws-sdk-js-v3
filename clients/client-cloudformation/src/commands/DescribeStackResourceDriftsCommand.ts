// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeStackResourceDriftsInput, DescribeStackResourceDriftsOutput } from "../models/models_0";
import { de_DescribeStackResourceDriftsCommand, se_DescribeStackResourceDriftsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeStackResourceDriftsCommand}.
 */
export interface DescribeStackResourceDriftsCommandInput extends DescribeStackResourceDriftsInput {}
/**
 * @public
 *
 * The output of {@link DescribeStackResourceDriftsCommand}.
 */
export interface DescribeStackResourceDriftsCommandOutput extends DescribeStackResourceDriftsOutput, __MetadataBearer {}

/**
 * <p>Returns drift information for the resources that have been checked for drift in the
 *       specified stack. This includes actual and expected configuration values for resources where
 *       CloudFormation detects configuration drift.</p>
 *          <p>For a given stack, there will be one <code>StackResourceDrift</code> for each stack
 *       resource that has been checked for drift. Resources that haven't yet been checked for drift
 *       aren't included. Resources that don't currently support drift detection aren't checked, and so
 *       not included. For a list of resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-import-supported-resources.html">Resource
 *         type support for imports and drift detection</a>.</p>
 *          <p>Use <a>DetectStackResourceDrift</a> to detect drift on individual resources, or
 *         <a>DetectStackDrift</a> to detect drift on all supported resources for a given
 *       stack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStackResourceDriftsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStackResourceDriftsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // DescribeStackResourceDriftsInput
 *   StackName: "STRING_VALUE", // required
 *   StackResourceDriftStatusFilters: [ // StackResourceDriftStatusFilters
 *     "IN_SYNC" || "MODIFIED" || "DELETED" || "NOT_CHECKED" || "UNKNOWN",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeStackResourceDriftsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStackResourceDriftsOutput
 * //   StackResourceDrifts: [ // StackResourceDrifts // required
 * //     { // StackResourceDrift
 * //       StackId: "STRING_VALUE", // required
 * //       LogicalResourceId: "STRING_VALUE", // required
 * //       PhysicalResourceId: "STRING_VALUE",
 * //       PhysicalResourceIdContext: [ // PhysicalResourceIdContext
 * //         { // PhysicalResourceIdContextKeyValuePair
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       ResourceType: "STRING_VALUE", // required
 * //       ExpectedProperties: "STRING_VALUE",
 * //       ActualProperties: "STRING_VALUE",
 * //       PropertyDifferences: [ // PropertyDifferences
 * //         { // PropertyDifference
 * //           PropertyPath: "STRING_VALUE", // required
 * //           ExpectedValue: "STRING_VALUE", // required
 * //           ActualValue: "STRING_VALUE", // required
 * //           DifferenceType: "ADD" || "REMOVE" || "NOT_EQUAL", // required
 * //         },
 * //       ],
 * //       StackResourceDriftStatus: "IN_SYNC" || "MODIFIED" || "DELETED" || "NOT_CHECKED" || "UNKNOWN", // required
 * //       Timestamp: new Date("TIMESTAMP"), // required
 * //       ModuleInfo: { // ModuleInfo
 * //         TypeHierarchy: "STRING_VALUE",
 * //         LogicalIdHierarchy: "STRING_VALUE",
 * //       },
 * //       DriftStatusReason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeStackResourceDriftsCommandInput - {@link DescribeStackResourceDriftsCommandInput}
 * @returns {@link DescribeStackResourceDriftsCommandOutput}
 * @see {@link DescribeStackResourceDriftsCommandInput} for command's `input` shape.
 * @see {@link DescribeStackResourceDriftsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class DescribeStackResourceDriftsCommand extends $Command
  .classBuilder<
    DescribeStackResourceDriftsCommandInput,
    DescribeStackResourceDriftsCommandOutput,
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
  .s("CloudFormation", "DescribeStackResourceDrifts", {})
  .n("CloudFormationClient", "DescribeStackResourceDriftsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeStackResourceDriftsCommand)
  .de(de_DescribeStackResourceDriftsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeStackResourceDriftsInput;
      output: DescribeStackResourceDriftsOutput;
    };
    sdk: {
      input: DescribeStackResourceDriftsCommandInput;
      output: DescribeStackResourceDriftsCommandOutput;
    };
  };
}
