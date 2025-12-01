// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetObjectTypeAttributeStatisticsRequest, GetObjectTypeAttributeStatisticsResponse } from "../models/models_0";
import { GetObjectTypeAttributeStatistics } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetObjectTypeAttributeStatisticsCommand}.
 */
export interface GetObjectTypeAttributeStatisticsCommandInput extends GetObjectTypeAttributeStatisticsRequest {}
/**
 * @public
 *
 * The output of {@link GetObjectTypeAttributeStatisticsCommand}.
 */
export interface GetObjectTypeAttributeStatisticsCommandOutput
  extends GetObjectTypeAttributeStatisticsResponse,
    __MetadataBearer {}

/**
 * <p>The GetObjectTypeAttributeValues API delivers statistical insights about attributes within a specific object type, but is exclusively available for domains with data store enabled. This API performs daily calculations to provide statistical information about your attribute values, helping you understand patterns and trends in your data. The statistical calculations are performed once per day, providing a consistent snapshot of your attribute data characteristics.</p>
 *          <note>
 *             <p>You'll receive null values in two scenarios: </p>
 *             <p>During the first period after enabling data vault (unless a calculation cycle occurs, which happens once daily).</p>
 *             <p>For attributes that don't contain numeric values.
 *       </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetObjectTypeAttributeStatisticsCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetObjectTypeAttributeStatisticsCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // GetObjectTypeAttributeStatisticsRequest
 *   DomainName: "STRING_VALUE", // required
 *   ObjectTypeName: "STRING_VALUE", // required
 *   AttributeName: "STRING_VALUE", // required
 * };
 * const command = new GetObjectTypeAttributeStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // GetObjectTypeAttributeStatisticsResponse
 * //   Statistics: { // GetObjectTypeAttributeStatisticsStats
 * //     Maximum: Number("double"), // required
 * //     Minimum: Number("double"), // required
 * //     Average: Number("double"), // required
 * //     StandardDeviation: Number("double"), // required
 * //     Percentiles: { // GetObjectTypeAttributeStatisticsPercentiles
 * //       P5: Number("double"), // required
 * //       P25: Number("double"), // required
 * //       P50: Number("double"), // required
 * //       P75: Number("double"), // required
 * //       P95: Number("double"), // required
 * //     },
 * //   },
 * //   CalculatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetObjectTypeAttributeStatisticsCommandInput - {@link GetObjectTypeAttributeStatisticsCommandInput}
 * @returns {@link GetObjectTypeAttributeStatisticsCommandOutput}
 * @see {@link GetObjectTypeAttributeStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetObjectTypeAttributeStatisticsCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 *
 * @public
 */
export class GetObjectTypeAttributeStatisticsCommand extends $Command
  .classBuilder<
    GetObjectTypeAttributeStatisticsCommandInput,
    GetObjectTypeAttributeStatisticsCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "GetObjectTypeAttributeStatistics", {})
  .n("CustomerProfilesClient", "GetObjectTypeAttributeStatisticsCommand")
  .sc(GetObjectTypeAttributeStatistics)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetObjectTypeAttributeStatisticsRequest;
      output: GetObjectTypeAttributeStatisticsResponse;
    };
    sdk: {
      input: GetObjectTypeAttributeStatisticsCommandInput;
      output: GetObjectTypeAttributeStatisticsCommandOutput;
    };
  };
}
