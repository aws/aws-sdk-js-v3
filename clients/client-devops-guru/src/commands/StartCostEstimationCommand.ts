// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartCostEstimationRequest, StartCostEstimationResponse } from "../models/models_0";
import { de_StartCostEstimationCommand, se_StartCostEstimationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartCostEstimationCommand}.
 */
export interface StartCostEstimationCommandInput extends StartCostEstimationRequest {}
/**
 * @public
 *
 * The output of {@link StartCostEstimationCommand}.
 */
export interface StartCostEstimationCommandOutput extends StartCostEstimationResponse, __MetadataBearer {}

/**
 * <p>Starts the creation of an estimate of the monthly cost to analyze your Amazon Web Services
 * 			resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, StartCostEstimationCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, StartCostEstimationCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const input = { // StartCostEstimationRequest
 *   ResourceCollection: { // CostEstimationResourceCollectionFilter
 *     CloudFormation: { // CloudFormationCostEstimationResourceCollectionFilter
 *       StackNames: [ // CostEstimationStackNames
 *         "STRING_VALUE",
 *       ],
 *     },
 *     Tags: [ // TagCostEstimationResourceCollectionFilters
 *       { // TagCostEstimationResourceCollectionFilter
 *         AppBoundaryKey: "STRING_VALUE", // required
 *         TagValues: [ // CostEstimationTagValues // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new StartCostEstimationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartCostEstimationCommandInput - {@link StartCostEstimationCommandInput}
 * @returns {@link StartCostEstimationCommandOutput}
 * @see {@link StartCostEstimationCommandInput} for command's `input` shape.
 * @see {@link StartCostEstimationCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have permissions to perform the requested operation. The user or role that
 * 			is making the request must have at least one IAM permissions policy attached that grants
 * 			the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the
 * 				<i>IAM User Guide</i>. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> An exception that is thrown when a conflict occurs. </p>
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
 * @public
 */
export class StartCostEstimationCommand extends $Command
  .classBuilder<
    StartCostEstimationCommandInput,
    StartCostEstimationCommandOutput,
    DevOpsGuruClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DevOpsGuruClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CapstoneControlPlaneService", "StartCostEstimation", {})
  .n("DevOpsGuruClient", "StartCostEstimationCommand")
  .f(void 0, void 0)
  .ser(se_StartCostEstimationCommand)
  .de(de_StartCostEstimationCommand)
  .build() {}
