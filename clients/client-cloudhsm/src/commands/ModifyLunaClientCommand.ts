// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudHSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyLunaClientRequest, ModifyLunaClientResponse } from "../models/models_0";
import { de_ModifyLunaClientCommand, se_ModifyLunaClientCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyLunaClientCommand}.
 */
export interface ModifyLunaClientCommandInput extends ModifyLunaClientRequest {}
/**
 * @public
 *
 * The output of {@link ModifyLunaClientCommand}.
 */
export interface ModifyLunaClientCommandOutput extends ModifyLunaClientResponse, __MetadataBearer {}

/**
 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
 *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
 *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
 *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
 *          <p>
 *             <b>For information about the current version of AWS
 *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
 *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
 *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
 *       Reference</a>.</p>
 *          <p>Modifies the certificate used by the client.</p>
 *          <p>This action can potentially start a workflow to install the new certificate on the
 *       client's HSMs.</p>
 *
 * @deprecated This API is deprecated.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMClient, ModifyLunaClientCommand } from "@aws-sdk/client-cloudhsm"; // ES Modules import
 * // const { CloudHSMClient, ModifyLunaClientCommand } = require("@aws-sdk/client-cloudhsm"); // CommonJS import
 * // import type { CloudHSMClientConfig } from "@aws-sdk/client-cloudhsm";
 * const config = {}; // type is CloudHSMClientConfig
 * const client = new CloudHSMClient(config);
 * const input = { // ModifyLunaClientRequest
 *   ClientArn: "STRING_VALUE", // required
 *   Certificate: "STRING_VALUE", // required
 * };
 * const command = new ModifyLunaClientCommand(input);
 * const response = await client.send(command);
 * // { // ModifyLunaClientResponse
 * //   ClientArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ModifyLunaClientCommandInput - {@link ModifyLunaClientCommandInput}
 * @returns {@link ModifyLunaClientCommandOutput}
 * @see {@link ModifyLunaClientCommandInput} for command's `input` shape.
 * @see {@link ModifyLunaClientCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMClientResolvedConfig | config} for CloudHSMClient's `config` shape.
 *
 * @throws {@link CloudHsmServiceException} (client fault)
 *  <p>Indicates that an exception occurred in the AWS CloudHSM service.</p>
 *
 * @throws {@link CloudHSMServiceException}
 * <p>Base exception class for all service exceptions from CloudHSM service.</p>
 *
 *
 * @public
 */
export class ModifyLunaClientCommand extends $Command
  .classBuilder<
    ModifyLunaClientCommandInput,
    ModifyLunaClientCommandOutput,
    CloudHSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudHSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudHsmFrontendService", "ModifyLunaClient", {})
  .n("CloudHSMClient", "ModifyLunaClientCommand")
  .f(void 0, void 0)
  .ser(se_ModifyLunaClientCommand)
  .de(de_ModifyLunaClientCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyLunaClientRequest;
      output: ModifyLunaClientResponse;
    };
    sdk: {
      input: ModifyLunaClientCommandInput;
      output: ModifyLunaClientCommandOutput;
    };
  };
}
