// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAliasInput, GetAliasOutput } from "../models/models_0";
import {
  PaymentCryptographyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyClient";
import { de_GetAliasCommand, se_GetAliasCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAliasCommand}.
 */
export interface GetAliasCommandInput extends GetAliasInput {}
/**
 * @public
 *
 * The output of {@link GetAliasCommand}.
 */
export interface GetAliasCommandOutput extends GetAliasOutput, __MetadataBearer {}

/**
 * <p>Gets the Amazon Web Services Payment Cryptography key associated with the alias.</p>
 *          <p>
 *             <b>Cross-account use:</b> This operation can't be used across different Amazon Web Services accounts.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_CreateAlias.html">CreateAlias</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_DeleteAlias.html">DeleteAlias</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ListAliases.html">ListAliases</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_UpdateAlias.html">UpdateAlias</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyClient, GetAliasCommand } from "@aws-sdk/client-payment-cryptography"; // ES Modules import
 * // const { PaymentCryptographyClient, GetAliasCommand } = require("@aws-sdk/client-payment-cryptography"); // CommonJS import
 * const client = new PaymentCryptographyClient(config);
 * const input = { // GetAliasInput
 *   AliasName: "STRING_VALUE", // required
 * };
 * const command = new GetAliasCommand(input);
 * const response = await client.send(command);
 * // { // GetAliasOutput
 * //   Alias: { // Alias
 * //     AliasName: "STRING_VALUE", // required
 * //     KeyArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAliasCommandInput - {@link GetAliasCommandInput}
 * @returns {@link GetAliasCommandOutput}
 * @see {@link GetAliasCommandInput} for command's `input` shape.
 * @see {@link GetAliasCommandOutput} for command's `response` shape.
 * @see {@link PaymentCryptographyClientResolvedConfig | config} for PaymentCryptographyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was denied due to an invalid resource error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was denied due to an invalid request error.</p>
 *
 * @throws {@link PaymentCryptographyServiceException}
 * <p>Base exception class for all service exceptions from PaymentCryptography service.</p>
 *
 *
 * @public
 */
export class GetAliasCommand extends $Command
  .classBuilder<
    GetAliasCommandInput,
    GetAliasCommandOutput,
    PaymentCryptographyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PaymentCryptographyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PaymentCryptographyControlPlane", "GetAlias", {})
  .n("PaymentCryptographyClient", "GetAliasCommand")
  .f(void 0, void 0)
  .ser(se_GetAliasCommand)
  .de(de_GetAliasCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAliasInput;
      output: GetAliasOutput;
    };
    sdk: {
      input: GetAliasCommandInput;
      output: GetAliasCommandOutput;
    };
  };
}
