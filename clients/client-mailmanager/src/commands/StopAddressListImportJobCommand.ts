// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import type { StopAddressListImportJobRequest, StopAddressListImportJobResponse } from "../models/models_0";
import { StopAddressListImportJob$ } from "../schemas/schemas_0";

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
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MailManagerSvc", "StopAddressListImportJob", {})
  .n("MailManagerClient", "StopAddressListImportJobCommand")
  .sc(StopAddressListImportJob$)
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
