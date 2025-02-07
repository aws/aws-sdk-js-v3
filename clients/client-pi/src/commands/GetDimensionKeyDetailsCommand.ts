// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetDimensionKeyDetailsRequest, GetDimensionKeyDetailsResponse } from "../models/models_0";
import { PIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PIClient";
import { de_GetDimensionKeyDetailsCommand, se_GetDimensionKeyDetailsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDimensionKeyDetailsCommand}.
 */
export interface GetDimensionKeyDetailsCommandInput extends GetDimensionKeyDetailsRequest {}
/**
 * @public
 *
 * The output of {@link GetDimensionKeyDetailsCommand}.
 */
export interface GetDimensionKeyDetailsCommandOutput extends GetDimensionKeyDetailsResponse, __MetadataBearer {}

/**
 * <p>Get the attributes of the specified dimension group for a DB instance or data source. For example, if you specify a SQL ID,
 *                 <code>GetDimensionKeyDetails</code> retrieves the full text of the dimension <code>db.sql.statement</code> associated with this ID.
 *             This operation is useful because <code>GetResourceMetrics</code> and <code>DescribeDimensionKeys</code> don't support retrieval of large
 *           SQL statement text, lock snapshots, and execution plans.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PIClient, GetDimensionKeyDetailsCommand } from "@aws-sdk/client-pi"; // ES Modules import
 * // const { PIClient, GetDimensionKeyDetailsCommand } = require("@aws-sdk/client-pi"); // CommonJS import
 * const client = new PIClient(config);
 * const input = { // GetDimensionKeyDetailsRequest
 *   ServiceType: "RDS" || "DOCDB", // required
 *   Identifier: "STRING_VALUE", // required
 *   Group: "STRING_VALUE", // required
 *   GroupIdentifier: "STRING_VALUE", // required
 *   RequestedDimensions: [ // RequestedDimensionList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetDimensionKeyDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetDimensionKeyDetailsResponse
 * //   Dimensions: [ // DimensionKeyDetailList
 * //     { // DimensionKeyDetail
 * //       Value: "STRING_VALUE",
 * //       Dimension: "STRING_VALUE",
 * //       Status: "AVAILABLE" || "PROCESSING" || "UNAVAILABLE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetDimensionKeyDetailsCommandInput - {@link GetDimensionKeyDetailsCommandInput}
 * @returns {@link GetDimensionKeyDetailsCommandOutput}
 * @see {@link GetDimensionKeyDetailsCommandInput} for command's `input` shape.
 * @see {@link GetDimensionKeyDetailsCommandOutput} for command's `response` shape.
 * @see {@link PIClientResolvedConfig | config} for PIClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>The request failed due to an unknown error.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>One of the arguments provided is invalid for this request.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>The user is not authorized to perform this request.</p>
 *
 * @throws {@link PIServiceException}
 * <p>Base exception class for all service exceptions from PI service.</p>
 *
 * @public
 */
export class GetDimensionKeyDetailsCommand extends $Command
  .classBuilder<
    GetDimensionKeyDetailsCommandInput,
    GetDimensionKeyDetailsCommandOutput,
    PIClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PIClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PerformanceInsightsv20180227", "GetDimensionKeyDetails", {})
  .n("PIClient", "GetDimensionKeyDetailsCommand")
  .f(void 0, void 0)
  .ser(se_GetDimensionKeyDetailsCommand)
  .de(de_GetDimensionKeyDetailsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDimensionKeyDetailsRequest;
      output: GetDimensionKeyDetailsResponse;
    };
    sdk: {
      input: GetDimensionKeyDetailsCommandInput;
      output: GetDimensionKeyDetailsCommandOutput;
    };
  };
}
