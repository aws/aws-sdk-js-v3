// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BillingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetBillingViewRequest,
  GetBillingViewResponse,
  GetBillingViewResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetBillingViewCommand, se_GetBillingViewCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBillingViewCommand}.
 */
export interface GetBillingViewCommandInput extends GetBillingViewRequest {}
/**
 * @public
 *
 * The output of {@link GetBillingViewCommand}.
 */
export interface GetBillingViewCommandOutput extends GetBillingViewResponse, __MetadataBearer {}

/**
 * <p>Returns the metadata associated to the specified billing view ARN.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingClient, GetBillingViewCommand } from "@aws-sdk/client-billing"; // ES Modules import
 * // const { BillingClient, GetBillingViewCommand } = require("@aws-sdk/client-billing"); // CommonJS import
 * const client = new BillingClient(config);
 * const input = { // GetBillingViewRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetBillingViewCommand(input);
 * const response = await client.send(command);
 * // { // GetBillingViewResponse
 * //   billingView: { // BillingViewElement
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     billingViewType: "PRIMARY" || "BILLING_GROUP" || "CUSTOM",
 * //     ownerAccountId: "STRING_VALUE",
 * //     dataFilterExpression: { // Expression
 * //       dimensions: { // DimensionValues
 * //         key: "LINKED_ACCOUNT", // required
 * //         values: [ // Values // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       tags: { // TagValues
 * //         key: "STRING_VALUE", // required
 * //         values: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBillingViewCommandInput - {@link GetBillingViewCommandInput}
 * @returns {@link GetBillingViewCommandOutput}
 * @see {@link GetBillingViewCommandInput} for command's `input` shape.
 * @see {@link GetBillingViewCommandOutput} for command's `response` shape.
 * @see {@link BillingClientResolvedConfig | config} for BillingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing failed because of an unknown error, exception, or failure.
 *       </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>
 *       The specified ARN in the request doesn't exist.
 *     </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.
 *       </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *       </p>
 *
 * @throws {@link BillingServiceException}
 * <p>Base exception class for all service exceptions from Billing service.</p>
 *
 * @public
 */
export class GetBillingViewCommand extends $Command
  .classBuilder<
    GetBillingViewCommandInput,
    GetBillingViewCommandOutput,
    BillingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BillingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBilling", "GetBillingView", {})
  .n("BillingClient", "GetBillingViewCommand")
  .f(void 0, GetBillingViewResponseFilterSensitiveLog)
  .ser(se_GetBillingViewCommand)
  .de(de_GetBillingViewCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBillingViewRequest;
      output: GetBillingViewResponse;
    };
    sdk: {
      input: GetBillingViewCommandInput;
      output: GetBillingViewCommandOutput;
    };
  };
}
