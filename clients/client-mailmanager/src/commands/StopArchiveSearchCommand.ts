// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import type { StopArchiveSearchRequest, StopArchiveSearchResponse } from "../models/models_0";
import { StopArchiveSearch } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopArchiveSearchCommand}.
 */
export interface StopArchiveSearchCommandInput extends StopArchiveSearchRequest {}
/**
 * @public
 *
 * The output of {@link StopArchiveSearchCommand}.
 */
export interface StopArchiveSearchCommandOutput extends StopArchiveSearchResponse, __MetadataBearer {}

/**
 * <p>Stops an in-progress archive search job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, StopArchiveSearchCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, StopArchiveSearchCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
 * const client = new MailManagerClient(config);
 * const input = { // StopArchiveSearchRequest
 *   SearchId: "STRING_VALUE", // required
 * };
 * const command = new StopArchiveSearchCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopArchiveSearchCommandInput - {@link StopArchiveSearchCommandInput}
 * @returns {@link StopArchiveSearchCommandOutput}
 * @see {@link StopArchiveSearchCommandInput} for command's `input` shape.
 * @see {@link StopArchiveSearchCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Occurs when a user is denied access to a specific resource or action.</p>
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
export class StopArchiveSearchCommand extends $Command
  .classBuilder<
    StopArchiveSearchCommandInput,
    StopArchiveSearchCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MailManagerSvc", "StopArchiveSearch", {})
  .n("MailManagerClient", "StopArchiveSearchCommand")
  .sc(StopArchiveSearch)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopArchiveSearchRequest;
      output: {};
    };
    sdk: {
      input: StopArchiveSearchCommandInput;
      output: StopArchiveSearchCommandOutput;
    };
  };
}
