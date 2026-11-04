// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetWorkloadDeploymentPatternInput, GetWorkloadDeploymentPatternOutput } from "../models/models_0";
import { GetWorkloadDeploymentPattern$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface GetWorkloadDeploymentPatternCommandOutput extends GetWorkloadDeploymentPatternOutput, __MetadataBearer {}

/**
 * Returns details for a given workload and deployment pattern, including the available specifications. You can use the [ListWorkloads](https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_ListWorkloads.html) operation to discover the available workload names and the [ListWorkloadDeploymentPatterns](https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_ListWorkloadDeploymentPatterns.html) operation to discover the available deployment pattern names of a given workload.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LaunchWizardClient, GetWorkloadDeploymentPatternCommand } from "@aws-sdk/client-launch-wizard"; // ES Modules import
 * // const { LaunchWizardClient, GetWorkloadDeploymentPatternCommand } = require("@aws-sdk/client-launch-wizard"); // CommonJS import
 * // import type { LaunchWizardClientConfig } from "@aws-sdk/client-launch-wizard";
 * const config = {}; // type is LaunchWizardClientConfig
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
 * //     deploymentPatternVersionName: "STRING_VALUE",
 * //     displayName: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     status: "ACTIVE" || "INACTIVE" || "DISABLED" || "DELETED",
 * //     statusMessage: "STRING_VALUE",
 * //     accountConstraints: [ // AccountConstraintsList
 * //       { // AccountConstraint Union: only one key present
 * //         managementAccount: {},
 * //         delegatedAdmin: { // DelegatedAdminConstraint
 * //           servicePrincipal: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     ],
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
 *
 * An internal error has occurred. Retry your request, but if the problem persists, contact us with details by posting a question on [re:Post](https://repost.aws/).
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified workload or deployment resource can't be found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link LaunchWizardServiceException}
 *
 * Base exception class for all service exceptions from LaunchWizard service.
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
 *     deploymentPatternVersionName: "2024-03-19-14-00-09",
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
 *     workloadName: "MicrosoftActiveDirectory"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetWorkloadDeploymentPatternCommand extends command<GetWorkloadDeploymentPatternCommandInput, GetWorkloadDeploymentPatternCommandOutput>(
  _ep0,
  _mw0,
  "GetWorkloadDeploymentPattern",
  GetWorkloadDeploymentPattern$
) {
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
