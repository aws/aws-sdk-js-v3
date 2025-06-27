// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LaunchWizardClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LaunchWizardClient";
import { GetWorkloadDeploymentPatternInput, GetWorkloadDeploymentPatternOutput } from "../models/models_0";
import {
  de_GetWorkloadDeploymentPatternCommand,
  se_GetWorkloadDeploymentPatternCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWorkloadDeploymentPatternCommand}.
 */
export interface GetWorkloadDeploymentPatternCommandInput extends GetWorkloadDeploymentPatternInput {}
/**
 * @public
 *
 * The output of {@link GetWorkloadDeploymentPatternCommand}.
 */
export interface GetWorkloadDeploymentPatternCommandOutput
  extends GetWorkloadDeploymentPatternOutput,
    __MetadataBearer {}

/**
 * <p>Returns details for a given workload and deployment pattern, including the available
 *          specifications. You can use the <a href="https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_ListWorkloads.html">ListWorkloads</a>
 *          operation to discover the available workload names and the <a href="https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_ListWorkloadDeploymentPatterns.html">ListWorkloadDeploymentPatterns</a> operation to discover the available deployment
 *          pattern names of a given workload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LaunchWizardClient, GetWorkloadDeploymentPatternCommand } from "@aws-sdk/client-launch-wizard"; // ES Modules import
 * // const { LaunchWizardClient, GetWorkloadDeploymentPatternCommand } = require("@aws-sdk/client-launch-wizard"); // CommonJS import
 * const client = new LaunchWizardClient(config);
 * const input = { // GetWorkloadDeploymentPatternInput
 *   workloadName: "STRING_VALUE", // required
 *   deploymentPatternName: "STRING_VALUE", // required
 * };
 * const command = new GetWorkloadDeploymentPatternCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkloadDeploymentPatternOutput
 * //   workloadDeploymentPattern: { // WorkloadDeploymentPatternData
 * //     workloadName: "STRING_VALUE",
 * //     deploymentPatternName: "STRING_VALUE",
 * //     workloadVersionName: "STRING_VALUE",
 * //     displayName: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     status: "ACTIVE" || "INACTIVE" || "DISABLED" || "DELETED",
 * //     statusMessage: "STRING_VALUE",
 * //     specifications: [ // DeploymentSpecificationsData
 * //       { // DeploymentSpecificationsField
 * //         name: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //         allowedValues: [ // AllowedValues
 * //           "STRING_VALUE",
 * //         ],
 * //         required: "STRING_VALUE",
 * //         conditionals: [ // SpecificationsConditionalData
 * //           { // DeploymentConditionalField
 * //             name: "STRING_VALUE",
 * //             value: "STRING_VALUE",
 * //             comparator: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetWorkloadDeploymentPatternCommandInput - {@link GetWorkloadDeploymentPatternCommandInput}
 * @returns {@link GetWorkloadDeploymentPatternCommandOutput}
 * @see {@link GetWorkloadDeploymentPatternCommandInput} for command's `input` shape.
 * @see {@link GetWorkloadDeploymentPatternCommandOutput} for command's `response` shape.
 * @see {@link LaunchWizardClientResolvedConfig | config} for LaunchWizardClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. Retry your request, but if the problem persists, contact
 *          us with details by posting a question on <a href="https://repost.aws/">re:Post</a>.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified workload or deployment resource can't be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link LaunchWizardServiceException}
 * <p>Base exception class for all service exceptions from LaunchWizard service.</p>
 *
 *
 * @example Get details about a specific Workload deployment pattern
 * ```javascript
 * //
 * const input = {
 *   deploymentPatternName: "adSelfManagedNewVpc",
 *   workloadName: "MicrosoftActiveDirectory"
 * };
 * const command = new GetWorkloadDeploymentPatternCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   workloadDeploymentPattern: {
 *     deploymentPatternName: "adSelfManagedNewVpc",
 *     description: "Builds a new AWS environment (VPC and other components), and deploys AD DS into this new VPC.",
 *     displayName: "Self-managed AD - new VPC",
 *     specifications: [
 *       {
 *         description: "Number of Availability Zones to use in the VPC.",
 *         name: "NumberOfAZs",
 *         required: "Yes"
 *       },
 *       {
 *         description: "List of Availability Zones (AZs) to use for the subnets in the VPC.",
 *         name: "AvailabilityZones",
 *         required: "Yes"
 *       },
 *       {
 *         description: "CIDR block for the VPC.",
 *         name: "VPCCIDR",
 *         required: "Yes"
 *       }
 *     ],
 *     status: "ACTIVE",
 *     workloadName: "MicrosoftActiveDirectory",
 *     workloadVersionName: "2024-03-19-14-00-09"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetWorkloadDeploymentPatternCommand extends $Command
  .classBuilder<
    GetWorkloadDeploymentPatternCommandInput,
    GetWorkloadDeploymentPatternCommandOutput,
    LaunchWizardClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LaunchWizardClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LaunchWizard", "GetWorkloadDeploymentPattern", {})
  .n("LaunchWizardClient", "GetWorkloadDeploymentPatternCommand")
  .f(void 0, void 0)
  .ser(se_GetWorkloadDeploymentPatternCommand)
  .de(de_GetWorkloadDeploymentPatternCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWorkloadDeploymentPatternInput;
      output: GetWorkloadDeploymentPatternOutput;
    };
    sdk: {
      input: GetWorkloadDeploymentPatternCommandInput;
      output: GetWorkloadDeploymentPatternCommandOutput;
    };
  };
}
