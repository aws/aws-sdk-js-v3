// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import { GetArchiveRequest, GetArchiveResponse } from "../models/models_0";
import { de_GetArchiveCommand, se_GetArchiveCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetArchiveCommand}.
 */
export interface GetArchiveCommandInput extends GetArchiveRequest {}
/**
 * @public
 *
 * The output of {@link GetArchiveCommand}.
 */
export interface GetArchiveCommandOutput extends GetArchiveResponse, __MetadataBearer {}

/**
 * <p>Retrieves the full details and current state of a specified email archive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, GetArchiveCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, GetArchiveCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
 * const client = new MailManagerClient(config);
 * const input = { // GetArchiveRequest
 *   ArchiveId: "STRING_VALUE", // required
 * };
 * const command = new GetArchiveCommand(input);
 * const response = await client.send(command);
 * // { // GetArchiveResponse
 * //   ArchiveId: "STRING_VALUE", // required
 * //   ArchiveName: "STRING_VALUE", // required
 * //   ArchiveArn: "STRING_VALUE", // required
 * //   ArchiveState: "ACTIVE" || "PENDING_DELETION", // required
 * //   Retention: { // ArchiveRetention Union: only one key present
 * //     RetentionPeriod: "THREE_MONTHS" || "SIX_MONTHS" || "NINE_MONTHS" || "ONE_YEAR" || "EIGHTEEN_MONTHS" || "TWO_YEARS" || "THIRTY_MONTHS" || "THREE_YEARS" || "FOUR_YEARS" || "FIVE_YEARS" || "SIX_YEARS" || "SEVEN_YEARS" || "EIGHT_YEARS" || "NINE_YEARS" || "TEN_YEARS" || "PERMANENT",
 * //   },
 * //   CreatedTimestamp: new Date("TIMESTAMP"),
 * //   LastUpdatedTimestamp: new Date("TIMESTAMP"),
 * //   KmsKeyArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetArchiveCommandInput - {@link GetArchiveCommandInput}
 * @returns {@link GetArchiveCommandOutput}
 * @see {@link GetArchiveCommandInput} for command's `input` shape.
 * @see {@link GetArchiveCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Occurs when a user is denied access to a specific resource or action.</p>
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
export class GetArchiveCommand extends $Command
  .classBuilder<
    GetArchiveCommandInput,
    GetArchiveCommandOutput,
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
  .s("MailManagerSvc", "GetArchive", {})
  .n("MailManagerClient", "GetArchiveCommand")
  .f(void 0, void 0)
  .ser(se_GetArchiveCommand)
  .de(de_GetArchiveCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetArchiveRequest;
      output: GetArchiveResponse;
    };
    sdk: {
      input: GetArchiveCommandInput;
      output: GetArchiveCommandOutput;
    };
  };
}
