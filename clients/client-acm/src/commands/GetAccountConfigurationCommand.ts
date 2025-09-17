// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAccountConfigurationResponse } from "../models/models_0";
import { de_GetAccountConfigurationCommand, se_GetAccountConfigurationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccountConfigurationCommand}.
 */
export interface GetAccountConfigurationCommandInput {}
/**
 * @public
 *
 * The output of {@link GetAccountConfigurationCommand}.
 */
export interface GetAccountConfigurationCommandOutput extends GetAccountConfigurationResponse, __MetadataBearer {}

/**
 * <p>Returns the account configuration options associated with an Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, GetAccountConfigurationCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, GetAccountConfigurationCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = {};
 * const command = new GetAccountConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountConfigurationResponse
 * //   ExpiryEvents: { // ExpiryEventsConfiguration
 * //     DaysBeforeExpiry: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAccountConfigurationCommandInput - {@link GetAccountConfigurationCommandInput}
 * @returns {@link GetAccountConfigurationCommandOutput}
 * @see {@link GetAccountConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetAccountConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have access required to perform this action.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded a quota.</p>
 *
 * @throws {@link ACMServiceException}
 * <p>Base exception class for all service exceptions from ACM service.</p>
 *
 *
 * @public
 */
export class GetAccountConfigurationCommand extends $Command
  .classBuilder<
    GetAccountConfigurationCommandInput,
    GetAccountConfigurationCommandOutput,
    ACMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ACMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CertificateManager", "GetAccountConfiguration", {})
  .n("ACMClient", "GetAccountConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetAccountConfigurationCommand)
  .de(de_GetAccountConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetAccountConfigurationResponse;
    };
    sdk: {
      input: GetAccountConfigurationCommandInput;
      output: GetAccountConfigurationCommandOutput;
    };
  };
}
