// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetChangeRequest, GetChangeResponse } from "../models/models_0";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetChange } from "../schemas/schemas_17_Change";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetChangeCommand}.
 */
export interface GetChangeCommandInput extends GetChangeRequest {}
/**
 * @public
 *
 * The output of {@link GetChangeCommand}.
 */
export interface GetChangeCommandOutput extends GetChangeResponse, __MetadataBearer {}

/**
 * <p>Returns the current status of a change batch request. The status is one of the
 * 			following values:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>PENDING</code> indicates that the changes in this request have not
 * 					propagated to all Amazon Route 53 DNS servers managing the hosted zone. This is the initial status of all
 * 					change batch requests.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>INSYNC</code> indicates that the changes have propagated to all Route 53
 * 					DNS servers managing the hosted zone. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetChangeCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetChangeCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // GetChangeRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetChangeCommand(input);
 * const response = await client.send(command);
 * // { // GetChangeResponse
 * //   ChangeInfo: { // ChangeInfo
 * //     Id: "STRING_VALUE", // required
 * //     Status: "PENDING" || "INSYNC", // required
 * //     SubmittedAt: new Date("TIMESTAMP"), // required
 * //     Comment: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetChangeCommandInput - {@link GetChangeCommandInput}
 * @returns {@link GetChangeCommandOutput}
 * @see {@link GetChangeCommandInput} for command's `input` shape.
 * @see {@link GetChangeCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchChange} (client fault)
 *  <p>A change with the specified change ID does not exist.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class GetChangeCommand extends $Command
  .classBuilder<
    GetChangeCommandInput,
    GetChangeCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getIdNormalizerPlugin(config)];
  })
  .s("AWSDnsV20130401", "GetChange", {})
  .n("Route53Client", "GetChangeCommand")
  .sc(GetChange)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetChangeRequest;
      output: GetChangeResponse;
    };
    sdk: {
      input: GetChangeCommandInput;
      output: GetChangeCommandOutput;
    };
  };
}
