// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import { StopAddressListImportJobRequest, StopAddressListImportJobResponse } from "../models/models_0";
import { de_StopAddressListImportJobCommand, se_StopAddressListImportJobCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopAddressListImportJobCommand}.
 */
export interface StopAddressListImportJobCommandInput extends StopAddressListImportJobRequest {}
/**
 * @public
 *
 * The output of {@link StopAddressListImportJobCommand}.
 */
export interface StopAddressListImportJobCommandOutput extends StopAddressListImportJobResponse, __MetadataBearer {}

/**
 * <p>Stops an ongoing import job for an address list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, StopAddressListImportJobCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, StopAddressListImportJobCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MailManagerClient(config);
 * const input = { // StopAddressListImportJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new StopAddressListImportJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopAddressListImportJobCommandInput - {@link StopAddressListImportJobCommandInput}
 * @returns {@link StopAddressListImportJobCommandOutput}
 * @see {@link StopAddressListImportJobCommandInput} for command's `input` shape.
 * @see {@link StopAddressListImportJobCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Occurs when a user is denied access to a specific resource or action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Occurs when a requested resource is not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Occurs when a service's request rate limit is exceeded, resulting in throttling of further requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request validation has failed. For details, see the accompanying error message.</p>
 *
 * @throws {@link MailManagerServiceException}
 * <p>Base exception class for all service exceptions from MailManager service.</p>
 *
 * @public
 */
export class StopAddressListImportJobCommand extends $Command
  .classBuilder<
    StopAddressListImportJobCommandInput,
    StopAddressListImportJobCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MailManagerSvc", "StopAddressListImportJob", {})
  .n("MailManagerClient", "StopAddressListImportJobCommand")
  .f(void 0, void 0)
  .ser(se_StopAddressListImportJobCommand)
  .de(de_StopAddressListImportJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopAddressListImportJobRequest;
      output: {};
    };
    sdk: {
      input: StopAddressListImportJobCommandInput;
      output: StopAddressListImportJobCommandOutput;
    };
  };
}
