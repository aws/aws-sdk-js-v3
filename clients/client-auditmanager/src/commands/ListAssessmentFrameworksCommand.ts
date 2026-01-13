// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListAssessmentFrameworksRequest, ListAssessmentFrameworksResponse } from "../models/models_0";
import { ListAssessmentFrameworks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAssessmentFrameworksCommand}.
 */
export interface ListAssessmentFrameworksCommandInput extends ListAssessmentFrameworksRequest {}
/**
 * @public
 *
 * The output of {@link ListAssessmentFrameworksCommand}.
 */
export interface ListAssessmentFrameworksCommandOutput extends ListAssessmentFrameworksResponse, __MetadataBearer {}

/**
 * <p> Returns a list of the frameworks that are available in the Audit Manager framework
 *          library. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, ListAssessmentFrameworksCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, ListAssessmentFrameworksCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = { // ListAssessmentFrameworksRequest
 *   frameworkType: "Standard" || "Custom", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAssessmentFrameworksCommand(input);
 * const response = await client.send(command);
 * // { // ListAssessmentFrameworksResponse
 * //   frameworkMetadataList: [ // FrameworkMetadataList
 * //     { // AssessmentFrameworkMetadata
 * //       arn: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       type: "Standard" || "Custom",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       logo: "STRING_VALUE",
 * //       complianceType: "STRING_VALUE",
 * //       controlsCount: Number("int"),
 * //       controlSetsCount: Number("int"),
 * //       createdAt: new Date("TIMESTAMP"),
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssessmentFrameworksCommandInput - {@link ListAssessmentFrameworksCommandInput}
 * @returns {@link ListAssessmentFrameworksCommandOutput}
 * @see {@link ListAssessmentFrameworksCommandInput} for command's `input` shape.
 * @see {@link ListAssessmentFrameworksCommandOutput} for command's `response` shape.
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
export class ListAssessmentFrameworksCommand extends $Command
  .classBuilder<
    ListAssessmentFrameworksCommandInput,
    ListAssessmentFrameworksCommandOutput,
    AuditManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AuditManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BedrockAssessmentManagerLambda", "ListAssessmentFrameworks", {})
  .n("AuditManagerClient", "ListAssessmentFrameworksCommand")
  .sc(ListAssessmentFrameworks$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssessmentFrameworksRequest;
      output: ListAssessmentFrameworksResponse;
    };
    sdk: {
      input: ListAssessmentFrameworksCommandInput;
      output: ListAssessmentFrameworksCommandOutput;
    };
  };
}
