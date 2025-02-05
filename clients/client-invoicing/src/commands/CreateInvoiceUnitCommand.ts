// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InvoicingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InvoicingClient";
import { CreateInvoiceUnitRequest, CreateInvoiceUnitResponse } from "../models/models_0";
import { de_CreateInvoiceUnitCommand, se_CreateInvoiceUnitCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateInvoiceUnitCommand}.
 */
export interface CreateInvoiceUnitCommandInput extends CreateInvoiceUnitRequest {}
/**
 * @public
 *
 * The output of {@link CreateInvoiceUnitCommand}.
 */
export interface CreateInvoiceUnitCommandOutput extends CreateInvoiceUnitResponse, __MetadataBearer {}

/**
 * <p>This creates a new invoice unit with the provided definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InvoicingClient, CreateInvoiceUnitCommand } from "@aws-sdk/client-invoicing"; // ES Modules import
 * // const { InvoicingClient, CreateInvoiceUnitCommand } = require("@aws-sdk/client-invoicing"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new InvoicingClient(config);
 * const input = { // CreateInvoiceUnitRequest
 *   Name: "STRING_VALUE", // required
 *   InvoiceReceiver: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   TaxInheritanceDisabled: true || false,
 *   Rule: { // InvoiceUnitRule
 *     LinkedAccounts: [ // AccountIdList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   ResourceTags: [ // ResourceTagList
 *     { // ResourceTag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateInvoiceUnitCommand(input);
 * const response = await client.send(command);
 * // { // CreateInvoiceUnitResponse
 * //   InvoiceUnitArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateInvoiceUnitCommandInput - {@link CreateInvoiceUnitCommandInput}
 * @returns {@link CreateInvoiceUnitCommandOutput}
 * @see {@link CreateInvoiceUnitCommandInput} for command's `input` shape.
 * @see {@link CreateInvoiceUnitCommandOutput} for command's `response` shape.
 * @see {@link InvoicingClientResolvedConfig | config} for InvoicingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The processing request failed because of an unknown error, exception, or failure.
 * </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>
 *     The input fails to satisfy the constraints specified by an Amazon Web Services service.
 * </p>
 *
 * @throws {@link InvoicingServiceException}
 * <p>Base exception class for all service exceptions from Invoicing service.</p>
 *
 * @public
 * @example CreateInvoiceUnit
 * ```javascript
 * //
 * const input = {
 *   "Description": "Example Invoice Unit Description",
 *   "InvoiceReceiver": "111111111111",
 *   "Name": "Example Invoice Unit",
 *   "ResourceTags": [
 *     {
 *       "Key": "TagKey",
 *       "Value": "TagValue"
 *     }
 *   ],
 *   "Rule": {
 *     "LinkedAccounts": [
 *       "222222222222"
 *     ]
 *   },
 *   "TaxInheritanceDisabled": false
 * };
 * const command = new CreateInvoiceUnitCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "InvoiceUnitArn": "arn:aws:invoicing::000000000000:invoice-unit/12345678"
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 */
export class CreateInvoiceUnitCommand extends $Command
  .classBuilder<
    CreateInvoiceUnitCommandInput,
    CreateInvoiceUnitCommandOutput,
    InvoicingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InvoicingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Invoicing", "CreateInvoiceUnit", {})
  .n("InvoicingClient", "CreateInvoiceUnitCommand")
  .f(void 0, void 0)
  .ser(se_CreateInvoiceUnitCommand)
  .de(de_CreateInvoiceUnitCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateInvoiceUnitRequest;
      output: CreateInvoiceUnitResponse;
    };
    sdk: {
      input: CreateInvoiceUnitCommandInput;
      output: CreateInvoiceUnitCommandOutput;
    };
  };
}
