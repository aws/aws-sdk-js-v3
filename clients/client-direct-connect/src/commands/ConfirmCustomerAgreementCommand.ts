// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ConfirmCustomerAgreementRequest, ConfirmCustomerAgreementResponse } from "../models/models_0";
import { de_ConfirmCustomerAgreementCommand, se_ConfirmCustomerAgreementCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ConfirmCustomerAgreementCommand}.
 */
export interface ConfirmCustomerAgreementCommandInput extends ConfirmCustomerAgreementRequest {}
/**
 * @public
 *
 * The output of {@link ConfirmCustomerAgreementCommand}.
 */
export interface ConfirmCustomerAgreementCommandOutput extends ConfirmCustomerAgreementResponse, __MetadataBearer {}

/**
 * <p>
 *       The confirmation of the terms of agreement when creating the connection/link aggregation group (LAG).
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, ConfirmCustomerAgreementCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, ConfirmCustomerAgreementCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // ConfirmCustomerAgreementRequest
 *   agreementName: "STRING_VALUE",
 * };
 * const command = new ConfirmCustomerAgreementCommand(input);
 * const response = await client.send(command);
 * // { // ConfirmCustomerAgreementResponse
 * //   status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ConfirmCustomerAgreementCommandInput - {@link ConfirmCustomerAgreementCommandInput}
 * @returns {@link ConfirmCustomerAgreementCommandOutput}
 * @see {@link ConfirmCustomerAgreementCommandInput} for command's `input` shape.
 * @see {@link ConfirmCustomerAgreementCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 * @throws {@link DirectConnectClientException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *  <p>A server-side error occurred.</p>
 *
 * @throws {@link DirectConnectServiceException}
 * <p>Base exception class for all service exceptions from DirectConnect service.</p>
 *
 *
 * @public
 */
export class ConfirmCustomerAgreementCommand extends $Command
  .classBuilder<
    ConfirmCustomerAgreementCommandInput,
    ConfirmCustomerAgreementCommandOutput,
    DirectConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OvertureService", "ConfirmCustomerAgreement", {})
  .n("DirectConnectClient", "ConfirmCustomerAgreementCommand")
  .f(void 0, void 0)
  .ser(se_ConfirmCustomerAgreementCommand)
  .de(de_ConfirmCustomerAgreementCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ConfirmCustomerAgreementRequest;
      output: ConfirmCustomerAgreementResponse;
    };
    sdk: {
      input: ConfirmCustomerAgreementCommandInput;
      output: ConfirmCustomerAgreementCommandOutput;
    };
  };
}
