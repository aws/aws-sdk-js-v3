// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListAssessmentReportsRequest,
  ListAssessmentReportsResponse,
  ListAssessmentReportsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListAssessmentReportsCommand, se_ListAssessmentReportsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAssessmentReportsCommand}.
 */
export interface ListAssessmentReportsCommandInput extends ListAssessmentReportsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssessmentReportsCommand}.
 */
export interface ListAssessmentReportsCommandOutput extends ListAssessmentReportsResponse, __MetadataBearer {}

/**
 * <p> Returns a list of assessment reports created in Audit Manager. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, ListAssessmentReportsCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, ListAssessmentReportsCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = { // ListAssessmentReportsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAssessmentReportsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssessmentReportsResponse
 * //   assessmentReports: [ // AssessmentReportsMetadata
 * //     { // AssessmentReportMetadata
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       assessmentId: "STRING_VALUE",
 * //       assessmentName: "STRING_VALUE",
 * //       author: "STRING_VALUE",
 * //       status: "COMPLETE" || "IN_PROGRESS" || "FAILED",
 * //       creationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssessmentReportsCommandInput - {@link ListAssessmentReportsCommandInput}
 * @returns {@link ListAssessmentReportsCommandOutput}
 * @see {@link ListAssessmentReportsCommandInput} for command's `input` shape.
 * @see {@link ListAssessmentReportsCommandOutput} for command's `response` shape.
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
export class ListAssessmentReportsCommand extends $Command
  .classBuilder<
    ListAssessmentReportsCommandInput,
    ListAssessmentReportsCommandOutput,
    AuditManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AuditManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BedrockAssessmentManagerLambda", "ListAssessmentReports", {})
  .n("AuditManagerClient", "ListAssessmentReportsCommand")
  .f(void 0, ListAssessmentReportsResponseFilterSensitiveLog)
  .ser(se_ListAssessmentReportsCommand)
  .de(de_ListAssessmentReportsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssessmentReportsRequest;
      output: ListAssessmentReportsResponse;
    };
    sdk: {
      input: ListAssessmentReportsCommandInput;
      output: ListAssessmentReportsCommandOutput;
    };
  };
}
