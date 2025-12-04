// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import type { StartArchiveSearchRequest, StartArchiveSearchResponse } from "../models/models_0";
import { StartArchiveSearch } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartArchiveSearchCommand}.
 */
export interface StartArchiveSearchCommandInput extends StartArchiveSearchRequest {}
/**
 * @public
 *
 * The output of {@link StartArchiveSearchCommand}.
 */
export interface StartArchiveSearchCommandOutput extends StartArchiveSearchResponse, __MetadataBearer {}

/**
 * <p>Initiates a search across emails in the specified archive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, StartArchiveSearchCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, StartArchiveSearchCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
 * const client = new MailManagerClient(config);
 * const input = { // StartArchiveSearchRequest
 *   ArchiveId: "STRING_VALUE", // required
 *   Filters: { // ArchiveFilters
 *     Include: [ // ArchiveFilterConditions
 *       { // ArchiveFilterCondition Union: only one key present
 *         StringExpression: { // ArchiveStringExpression
 *           Evaluate: { // ArchiveStringToEvaluate Union: only one key present
 *             Attribute: "TO" || "FROM" || "CC" || "SUBJECT" || "ENVELOPE_TO" || "ENVELOPE_FROM",
 *           },
 *           Operator: "CONTAINS", // required
 *           Values: [ // StringValueList // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *         BooleanExpression: { // ArchiveBooleanExpression
 *           Evaluate: { // ArchiveBooleanToEvaluate Union: only one key present
 *             Attribute: "HAS_ATTACHMENTS",
 *           },
 *           Operator: "IS_TRUE" || "IS_FALSE", // required
 *         },
 *       },
 *     ],
 *     Unless: [
 *       {//  Union: only one key present
 *         StringExpression: {
 *           Evaluate: {//  Union: only one key present
 *             Attribute: "TO" || "FROM" || "CC" || "SUBJECT" || "ENVELOPE_TO" || "ENVELOPE_FROM",
 *           },
 *           Operator: "CONTAINS", // required
 *           Values: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *         BooleanExpression: {
 *           Evaluate: {//  Union: only one key present
 *             Attribute: "HAS_ATTACHMENTS",
 *           },
 *           Operator: "IS_TRUE" || "IS_FALSE", // required
 *         },
 *       },
 *     ],
 *   },
 *   FromTimestamp: new Date("TIMESTAMP"), // required
 *   ToTimestamp: new Date("TIMESTAMP"), // required
 *   MaxResults: Number("int"), // required
 * };
 * const command = new StartArchiveSearchCommand(input);
 * const response = await client.send(command);
 * // { // StartArchiveSearchResponse
 * //   SearchId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartArchiveSearchCommandInput - {@link StartArchiveSearchCommandInput}
 * @returns {@link StartArchiveSearchCommandOutput}
 * @see {@link StartArchiveSearchCommandInput} for command's `input` shape.
 * @see {@link StartArchiveSearchCommandOutput} for command's `response` shape.
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
export class StartArchiveSearchCommand extends $Command
  .classBuilder<
    StartArchiveSearchCommandInput,
    StartArchiveSearchCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MailManagerSvc", "StartArchiveSearch", {})
  .n("MailManagerClient", "StartArchiveSearchCommand")
  .sc(StartArchiveSearch)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartArchiveSearchRequest;
      output: StartArchiveSearchResponse;
    };
    sdk: {
      input: StartArchiveSearchCommandInput;
      output: StartArchiveSearchCommandOutput;
    };
  };
}
