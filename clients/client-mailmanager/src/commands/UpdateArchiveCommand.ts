// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import { UpdateArchiveRequest, UpdateArchiveResponse } from "../models/models_0";
import { UpdateArchive } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateArchiveCommand}.
 */
export interface UpdateArchiveCommandInput extends UpdateArchiveRequest {}
/**
 * @public
 *
 * The output of {@link UpdateArchiveCommand}.
 */
export interface UpdateArchiveCommandOutput extends UpdateArchiveResponse, __MetadataBearer {}

/**
 * <p>Updates the attributes of an existing email archive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, UpdateArchiveCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, UpdateArchiveCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
 * const client = new MailManagerClient(config);
 * const input = { // UpdateArchiveRequest
 *   ArchiveId: "STRING_VALUE", // required
 *   ArchiveName: "STRING_VALUE",
 *   Retention: { // ArchiveRetention Union: only one key present
 *     RetentionPeriod: "THREE_MONTHS" || "SIX_MONTHS" || "NINE_MONTHS" || "ONE_YEAR" || "EIGHTEEN_MONTHS" || "TWO_YEARS" || "THIRTY_MONTHS" || "THREE_YEARS" || "FOUR_YEARS" || "FIVE_YEARS" || "SIX_YEARS" || "SEVEN_YEARS" || "EIGHT_YEARS" || "NINE_YEARS" || "TEN_YEARS" || "PERMANENT",
 *   },
 * };
 * const command = new UpdateArchiveCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateArchiveCommandInput - {@link UpdateArchiveCommandInput}
 * @returns {@link UpdateArchiveCommandOutput}
 * @see {@link UpdateArchiveCommandInput} for command's `input` shape.
 * @see {@link UpdateArchiveCommandOutput} for command's `response` shape.
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
export class UpdateArchiveCommand extends $Command
  .classBuilder<
    UpdateArchiveCommandInput,
    UpdateArchiveCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MailManagerSvc", "UpdateArchive", {})
  .n("MailManagerClient", "UpdateArchiveCommand")
  .sc(UpdateArchive)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateArchiveRequest;
      output: {};
    };
    sdk: {
      input: UpdateArchiveCommandInput;
      output: UpdateArchiveCommandOutput;
    };
  };
}
