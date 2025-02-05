// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetCostEstimateRequest, GetCostEstimateResult } from "../models/models_1";
import { de_GetCostEstimateCommand, se_GetCostEstimateCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCostEstimateCommand}.
 */
export interface GetCostEstimateCommandInput extends GetCostEstimateRequest {}
/**
 * @public
 *
 * The output of {@link GetCostEstimateCommand}.
 */
export interface GetCostEstimateCommandOutput extends GetCostEstimateResult, __MetadataBearer {}

/**
 * <p>Retrieves information about the cost estimate for a specified resource. A cost estimate
 *       will not generate for a resource that has been deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetCostEstimateCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetCostEstimateCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new LightsailClient(config);
 * const input = { // GetCostEstimateRequest
 *   resourceName: "STRING_VALUE", // required
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 * };
 * const command = new GetCostEstimateCommand(input);
 * const response = await client.send(command);
 * // { // GetCostEstimateResult
 * //   resourcesBudgetEstimate: [ // ResourcesBudgetEstimate
 * //     { // ResourceBudgetEstimate
 * //       resourceName: "STRING_VALUE",
 * //       resourceType: "ContainerService" || "Instance" || "StaticIp" || "KeyPair" || "InstanceSnapshot" || "Domain" || "PeeredVpc" || "LoadBalancer" || "LoadBalancerTlsCertificate" || "Disk" || "DiskSnapshot" || "RelationalDatabase" || "RelationalDatabaseSnapshot" || "ExportSnapshotRecord" || "CloudFormationStackRecord" || "Alarm" || "ContactMethod" || "Distribution" || "Certificate" || "Bucket",
 * //       costEstimates: [ // CostEstimates
 * //         { // CostEstimate
 * //           usageType: "STRING_VALUE",
 * //           resultsByTime: [ // EstimatesByTime
 * //             { // EstimateByTime
 * //               usageCost: Number("double"),
 * //               pricingUnit: "GB" || "Hrs" || "GB-Mo" || "Bundles" || "Queries",
 * //               unit: Number("double"),
 * //               currency: "USD",
 * //               timePeriod: { // TimePeriod
 * //                 start: new Date("TIMESTAMP"),
 * //                 end: new Date("TIMESTAMP"),
 * //               },
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       startTime: new Date("TIMESTAMP"),
 * //       endTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetCostEstimateCommandInput - {@link GetCostEstimateCommandInput}
 * @returns {@link GetCostEstimateCommandOutput}
 * @see {@link GetCostEstimateCommandInput} for command's `input` shape.
 * @see {@link GetCostEstimateCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 * @public
 */
export class GetCostEstimateCommand extends $Command
  .classBuilder<
    GetCostEstimateCommandInput,
    GetCostEstimateCommandOutput,
    LightsailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LightsailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Lightsail_20161128", "GetCostEstimate", {})
  .n("LightsailClient", "GetCostEstimateCommand")
  .f(void 0, void 0)
  .ser(se_GetCostEstimateCommand)
  .de(de_GetCostEstimateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCostEstimateRequest;
      output: GetCostEstimateResult;
    };
    sdk: {
      input: GetCostEstimateCommandInput;
      output: GetCostEstimateCommandOutput;
    };
  };
}
