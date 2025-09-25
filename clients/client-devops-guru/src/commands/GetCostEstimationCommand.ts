// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetCostEstimationRequest, GetCostEstimationResponse } from "../models/models_0";
import { GetCostEstimation } from "../schemas/schemas_11_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCostEstimationCommand}.
 */
export interface GetCostEstimationCommandInput extends GetCostEstimationRequest {}
/**
 * @public
 *
 * The output of {@link GetCostEstimationCommand}.
 */
export interface GetCostEstimationCommandOutput extends GetCostEstimationResponse, __MetadataBearer {}

/**
 * <p>Returns an estimate of the monthly cost for DevOps Guru to analyze your Amazon Web Services resources.
 * 			For more information,
 * 			see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your
 * 			Amazon DevOps Guru costs</a> and
 * 			<a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, GetCostEstimationCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, GetCostEstimationCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * // import type { DevOpsGuruClientConfig } from "@aws-sdk/client-devops-guru";
 * const config = {}; // type is DevOpsGuruClientConfig
 * const client = new DevOpsGuruClient(config);
 * const input = { // GetCostEstimationRequest
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetCostEstimationCommand(input);
 * const response = await client.send(command);
 * // { // GetCostEstimationResponse
 * //   ResourceCollection: { // CostEstimationResourceCollectionFilter
 * //     CloudFormation: { // CloudFormationCostEstimationResourceCollectionFilter
 * //       StackNames: [ // CostEstimationStackNames
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     Tags: [ // TagCostEstimationResourceCollectionFilters
 * //       { // TagCostEstimationResourceCollectionFilter
 * //         AppBoundaryKey: "STRING_VALUE", // required
 * //         TagValues: [ // CostEstimationTagValues // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   Status: "ONGOING" || "COMPLETED",
 * //   Costs: [ // ServiceResourceCosts
 * //     { // ServiceResourceCost
 * //       Type: "STRING_VALUE",
 * //       State: "ACTIVE" || "INACTIVE",
 * //       Count: Number("int"),
 * //       UnitCost: Number("double"),
 * //       Cost: Number("double"),
 * //     },
 * //   ],
 * //   TimeRange: { // CostEstimationTimeRange
 * //     StartTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //   },
 * //   TotalCost: Number("double"),
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCostEstimationCommandInput - {@link GetCostEstimationCommandInput}
 * @returns {@link GetCostEstimationCommandOutput}
 * @see {@link GetCostEstimationCommandInput} for command's `input` shape.
 * @see {@link GetCostEstimationCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have permissions to perform the requested operation. The user or role that
 * 			is making the request must have at least one IAM permissions policy attached that grants
 * 			the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the
 * 				<i>IAM User Guide</i>. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal failure in an Amazon service occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource could not be found</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to a request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Contains information about data passed in to a field during a request that is not
 * 			valid. </p>
 *
 * @throws {@link DevOpsGuruServiceException}
 * <p>Base exception class for all service exceptions from DevOpsGuru service.</p>
 *
 *
 * @public
 */
export class GetCostEstimationCommand extends $Command
  .classBuilder<
    GetCostEstimationCommandInput,
    GetCostEstimationCommandOutput,
    DevOpsGuruClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsGuruClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CapstoneControlPlaneService", "GetCostEstimation", {})
  .n("DevOpsGuruClient", "GetCostEstimationCommand")
  .sc(GetCostEstimation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCostEstimationRequest;
      output: GetCostEstimationResponse;
    };
    sdk: {
      input: GetCostEstimationCommandInput;
      output: GetCostEstimationCommandOutput;
    };
  };
}
