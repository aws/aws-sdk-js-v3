// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import { GetArchiveSearchRequest, GetArchiveSearchResponse } from "../models/models_0";
import { GetArchiveSearch } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetArchiveSearchCommand}.
 */
export interface GetArchiveSearchCommandInput extends GetArchiveSearchRequest {}
/**
 * @public
 *
 * The output of {@link GetArchiveSearchCommand}.
 */
export interface GetArchiveSearchCommandOutput extends GetArchiveSearchResponse, __MetadataBearer {}

/**
 * <p>Retrieves the details and current status of a specific email archive search job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, GetArchiveSearchCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, GetArchiveSearchCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
 * const client = new MailManagerClient(config);
 * const input = { // GetArchiveSearchRequest
 *   SearchId: "STRING_VALUE", // required
 * };
 * const command = new GetArchiveSearchCommand(input);
 * const response = await client.send(command);
 * // { // GetArchiveSearchResponse
 * //   ArchiveId: "STRING_VALUE",
 * //   Filters: { // ArchiveFilters
 * //     Include: [ // ArchiveFilterConditions
 * //       { // ArchiveFilterCondition Union: only one key present
 * //         StringExpression: { // ArchiveStringExpression
 * //           Evaluate: { // ArchiveStringToEvaluate Union: only one key present
 * //             Attribute: "TO" || "FROM" || "CC" || "SUBJECT" || "ENVELOPE_TO" || "ENVELOPE_FROM",
 * //           },
 * //           Operator: "CONTAINS", // required
 * //           Values: [ // StringValueList // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         BooleanExpression: { // ArchiveBooleanExpression
 * //           Evaluate: { // ArchiveBooleanToEvaluate Union: only one key present
 * //             Attribute: "HAS_ATTACHMENTS",
 * //           },
 * //           Operator: "IS_TRUE" || "IS_FALSE", // required
 * //         },
 * //       },
 * //     ],
 * //     Unless: [
 * //       {//  Union: only one key present
 * //         StringExpression: {
 * //           Evaluate: {//  Union: only one key present
 * //             Attribute: "TO" || "FROM" || "CC" || "SUBJECT" || "ENVELOPE_TO" || "ENVELOPE_FROM",
 * //           },
 * //           Operator: "CONTAINS", // required
 * //           Values: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         BooleanExpression: {
 * //           Evaluate: {//  Union: only one key present
 * //             Attribute: "HAS_ATTACHMENTS",
 * //           },
 * //           Operator: "IS_TRUE" || "IS_FALSE", // required
 * //         },
 * //       },
 * //     ],
 * //   },
 * //   FromTimestamp: new Date("TIMESTAMP"),
 * //   ToTimestamp: new Date("TIMESTAMP"),
 * //   MaxResults: Number("int"),
 * //   Status: { // SearchStatus
 * //     SubmissionTimestamp: new Date("TIMESTAMP"),
 * //     CompletionTimestamp: new Date("TIMESTAMP"),
 * //     State: "QUEUED" || "RUNNING" || "COMPLETED" || "FAILED" || "CANCELLED",
 * //     ErrorMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetArchiveSearchCommandInput - {@link GetArchiveSearchCommandInput}
 * @returns {@link GetArchiveSearchCommandOutput}
 * @see {@link GetArchiveSearchCommandInput} for command's `input` shape.
 * @see {@link GetArchiveSearchCommandOutput} for command's `response` shape.
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
export class GetArchiveSearchCommand extends $Command
  .classBuilder<
    GetArchiveSearchCommandInput,
    GetArchiveSearchCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MailManagerSvc", "GetArchiveSearch", {})
  .n("MailManagerClient", "GetArchiveSearchCommand")
  .sc(GetArchiveSearch)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetArchiveSearchRequest;
      output: GetArchiveSearchResponse;
    };
    sdk: {
      input: GetArchiveSearchCommandInput;
      output: GetArchiveSearchCommandOutput;
    };
  };
}
