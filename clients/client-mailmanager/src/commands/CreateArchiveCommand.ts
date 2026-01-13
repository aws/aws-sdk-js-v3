// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import type { CreateArchiveRequest, CreateArchiveResponse } from "../models/models_0";
import { CreateArchive$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateArchiveCommand}.
 */
export interface CreateArchiveCommandInput extends CreateArchiveRequest {}
/**
 * @public
 *
 * The output of {@link CreateArchiveCommand}.
 */
export interface CreateArchiveCommandOutput extends CreateArchiveResponse, __MetadataBearer {}

/**
 * <p>Creates a new email archive resource for storing and retaining emails.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, CreateArchiveCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, CreateArchiveCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
 * const client = new MailManagerClient(config);
 * const input = { // CreateArchiveRequest
 *   ClientToken: "STRING_VALUE",
 *   ArchiveName: "STRING_VALUE", // required
 *   Retention: { // ArchiveRetention Union: only one key present
 *     RetentionPeriod: "THREE_MONTHS" || "SIX_MONTHS" || "NINE_MONTHS" || "ONE_YEAR" || "EIGHTEEN_MONTHS" || "TWO_YEARS" || "THIRTY_MONTHS" || "THREE_YEARS" || "FOUR_YEARS" || "FIVE_YEARS" || "SIX_YEARS" || "SEVEN_YEARS" || "EIGHT_YEARS" || "NINE_YEARS" || "TEN_YEARS" || "PERMANENT",
 *   },
 *   KmsKeyArn: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateArchiveCommand(input);
 * const response = await client.send(command);
 * // { // CreateArchiveResponse
 * //   ArchiveId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateArchiveCommandInput - {@link CreateArchiveCommandInput}
 * @returns {@link CreateArchiveCommandOutput}
 * @see {@link CreateArchiveCommandInput} for command's `input` shape.
 * @see {@link CreateArchiveCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Occurs when a user is denied access to a specific resource or action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
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
export class CreateArchiveCommand extends $Command
  .classBuilder<
    CreateArchiveCommandInput,
    CreateArchiveCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MailManagerSvc", "CreateArchive", {})
  .n("MailManagerClient", "CreateArchiveCommand")
  .sc(CreateArchive$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateArchiveRequest;
      output: CreateArchiveResponse;
    };
    sdk: {
      input: CreateArchiveCommandInput;
      output: CreateArchiveCommandOutput;
    };
  };
}
