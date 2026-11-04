// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCostEstimationRequest, GetCostEstimationResponse } from "../models/models_0";
import { GetCostEstimation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns an estimate of the monthly cost for DevOps Guru to analyze your Amazon Web Services resources. For more information, see [Estimate your Amazon DevOps Guru costs](https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html) and [Amazon DevOps Guru pricing](http://aws.amazon.com/devops-guru/pricing/).
 *
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
 *
 * You don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see [Access Management](https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html) in the *IAM User Guide*.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal failure in an Amazon service occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A requested resource could not be found
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to a request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Contains information about data passed in to a field during a request that is not valid.
 *
 * @throws {@link DevOpsGuruServiceException}
 *
 * Base exception class for all service exceptions from DevOpsGuru service.
 *
 * @public
 */
export class GetCostEstimationCommand extends command<GetCostEstimationCommandInput, GetCostEstimationCommandOutput>(
  _ep0,
  _mw0,
  "GetCostEstimation",
  GetCostEstimation$
) {
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
