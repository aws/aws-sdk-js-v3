// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BillingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateBillingViewRequest,
  CreateBillingViewRequestFilterSensitiveLog,
  CreateBillingViewResponse,
} from "../models/models_0";
import { de_CreateBillingViewCommand, se_CreateBillingViewCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBillingViewCommand}.
 */
export interface CreateBillingViewCommandInput extends CreateBillingViewRequest {}
/**
 * @public
 *
 * The output of {@link CreateBillingViewCommand}.
 */
export interface CreateBillingViewCommandOutput extends CreateBillingViewResponse, __MetadataBearer {}

/**
 * <p>
 * Creates a billing view with the specified billing view attributes.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingClient, CreateBillingViewCommand } from "@aws-sdk/client-billing"; // ES Modules import
 * // const { BillingClient, CreateBillingViewCommand } = require("@aws-sdk/client-billing"); // CommonJS import
 * const client = new BillingClient(config);
 * const input = { // CreateBillingViewRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   sourceViews: [ // BillingViewSourceViewsList // required
 *     "STRING_VALUE",
 *   ],
 *   dataFilterExpression: { // Expression
 *     dimensions: { // DimensionValues
 *       key: "LINKED_ACCOUNT", // required
 *       values: [ // Values // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *     tags: { // TagValues
 *       key: "STRING_VALUE", // required
 *       values: [ // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 *   resourceTags: [ // ResourceTagList
 *     { // ResourceTag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateBillingViewCommand(input);
 * const response = await client.send(command);
 * // { // CreateBillingViewResponse
 * //   arn: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateBillingViewCommandInput - {@link CreateBillingViewCommandInput}
 * @returns {@link CreateBillingViewCommandOutput}
 * @see {@link CreateBillingViewCommandInput} for command's `input` shape.
 * @see {@link CreateBillingViewCommandOutput} for command's `response` shape.
 * @see {@link BillingClientResolvedConfig | config} for BillingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>
 *       The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request.
 *     </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing failed because of an unknown error, exception, or failure.
 *       </p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>
 *       You've reached the limit of resources you can create, or exceeded the size of an individual resource.
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
 *
 * @example Invoke CreateBillingView
 * ```javascript
 * //
 * const input = {
 *   dataFilterExpression: {
 *     dimensions: {
 *       key: "LINKED_ACCOUNT",
 *       values: [
 *         "000000000000"
 *       ]
 *     }
 *   },
 *   description: "Custom Billing View Example",
 *   name: "Example Custom Billing View",
 *   sourceViews: [
 *     "arn:aws:billing::123456789101:billingview/primary"
 *   ]
 * };
 * const command = new CreateBillingViewCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   arn: "arn:aws:billing::123456789101:billingview/custom-46f47cb2-a11d-43f3-983d-470b5708a899",
 *   createdAt: 1719792001
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateBillingViewCommand extends $Command
  .classBuilder<
    CreateBillingViewCommandInput,
    CreateBillingViewCommandOutput,
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
  .s("AWSBilling", "CreateBillingView", {})
  .n("BillingClient", "CreateBillingViewCommand")
  .f(CreateBillingViewRequestFilterSensitiveLog, void 0)
  .ser(se_CreateBillingViewCommand)
  .de(de_CreateBillingViewCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBillingViewRequest;
      output: CreateBillingViewResponse;
    };
    sdk: {
      input: CreateBillingViewCommandInput;
      output: CreateBillingViewCommandOutput;
    };
  };
}
