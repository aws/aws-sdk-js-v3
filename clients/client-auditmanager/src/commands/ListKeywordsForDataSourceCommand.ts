// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListKeywordsForDataSourceRequest, ListKeywordsForDataSourceResponse } from "../models/models_0";
import { ListKeywordsForDataSource } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListKeywordsForDataSourceCommand}.
 */
export interface ListKeywordsForDataSourceCommandInput extends ListKeywordsForDataSourceRequest {}
/**
 * @public
 *
 * The output of {@link ListKeywordsForDataSourceCommand}.
 */
export interface ListKeywordsForDataSourceCommandOutput extends ListKeywordsForDataSourceResponse, __MetadataBearer {}

/**
 * <p>Returns a list of keywords that are pre-mapped to the specified control data
 *          source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, ListKeywordsForDataSourceCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, ListKeywordsForDataSourceCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = { // ListKeywordsForDataSourceRequest
 *   source: "AWS_Cloudtrail" || "AWS_Config" || "AWS_Security_Hub" || "AWS_API_Call" || "MANUAL", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListKeywordsForDataSourceCommand(input);
 * const response = await client.send(command);
 * // { // ListKeywordsForDataSourceResponse
 * //   keywords: [ // Keywords
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListKeywordsForDataSourceCommandInput - {@link ListKeywordsForDataSourceCommandInput}
 * @returns {@link ListKeywordsForDataSourceCommandOutput}
 * @see {@link ListKeywordsForDataSourceCommandInput} for command's `input` shape.
 * @see {@link ListKeywordsForDataSourceCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for AuditManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> Your account isn't registered with Audit Manager. Check the delegated
 *          administrator setup on the Audit Manager settings page, and try again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *          later. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request has invalid or missing parameters. </p>
 *
 * @throws {@link AuditManagerServiceException}
 * <p>Base exception class for all service exceptions from AuditManager service.</p>
 *
 *
 * @public
 */
export class ListKeywordsForDataSourceCommand extends $Command
  .classBuilder<
    ListKeywordsForDataSourceCommandInput,
    ListKeywordsForDataSourceCommandOutput,
    AuditManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AuditManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BedrockAssessmentManagerLambda", "ListKeywordsForDataSource", {})
  .n("AuditManagerClient", "ListKeywordsForDataSourceCommand")
  .sc(ListKeywordsForDataSource)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListKeywordsForDataSourceRequest;
      output: ListKeywordsForDataSourceResponse;
    };
    sdk: {
      input: ListKeywordsForDataSourceCommandInput;
      output: ListKeywordsForDataSourceCommandOutput;
    };
  };
}
