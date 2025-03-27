// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import { StartAddressListImportJobRequest, StartAddressListImportJobResponse } from "../models/models_0";
import { de_StartAddressListImportJobCommand, se_StartAddressListImportJobCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartAddressListImportJobCommand}.
 */
export interface StartAddressListImportJobCommandInput extends StartAddressListImportJobRequest {}
/**
 * @public
 *
 * The output of {@link StartAddressListImportJobCommand}.
 */
export interface StartAddressListImportJobCommandOutput extends StartAddressListImportJobResponse, __MetadataBearer {}

/**
 * <p>Starts an import job for an address list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, StartAddressListImportJobCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, StartAddressListImportJobCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * const client = new MailManagerClient(config);
 * const input = { // StartAddressListImportJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new StartAddressListImportJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartAddressListImportJobCommandInput - {@link StartAddressListImportJobCommandInput}
 * @returns {@link StartAddressListImportJobCommandOutput}
 * @see {@link StartAddressListImportJobCommandInput} for command's `input` shape.
 * @see {@link StartAddressListImportJobCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Occurs when an operation exceeds a predefined service quota or limit.</p>
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
 *
 * @public
 */
export class StartAddressListImportJobCommand extends $Command
  .classBuilder<
    StartAddressListImportJobCommandInput,
    StartAddressListImportJobCommandOutput,
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
  .s("MailManagerSvc", "StartAddressListImportJob", {})
  .n("MailManagerClient", "StartAddressListImportJobCommand")
  .f(void 0, void 0)
  .ser(se_StartAddressListImportJobCommand)
  .de(de_StartAddressListImportJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartAddressListImportJobRequest;
      output: {};
    };
    sdk: {
      input: StartAddressListImportJobCommandInput;
      output: StartAddressListImportJobCommandOutput;
    };
  };
}
