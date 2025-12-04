// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetChangeLogsRequest, GetChangeLogsResponse } from "../models/models_0";
import { GetChangeLogs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetChangeLogsCommand}.
 */
export interface GetChangeLogsCommandInput extends GetChangeLogsRequest {}
/**
 * @public
 *
 * The output of {@link GetChangeLogsCommand}.
 */
export interface GetChangeLogsCommandOutput extends GetChangeLogsResponse, __MetadataBearer {}

/**
 * <p> Gets a list of changelogs from Audit Manager. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetChangeLogsCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetChangeLogsCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = { // GetChangeLogsRequest
 *   assessmentId: "STRING_VALUE", // required
 *   controlSetId: "STRING_VALUE",
 *   controlId: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetChangeLogsCommand(input);
 * const response = await client.send(command);
 * // { // GetChangeLogsResponse
 * //   changeLogs: [ // ChangeLogs
 * //     { // ChangeLog
 * //       objectType: "ASSESSMENT" || "CONTROL_SET" || "CONTROL" || "DELEGATION" || "ASSESSMENT_REPORT",
 * //       objectName: "STRING_VALUE",
 * //       action: "CREATE" || "UPDATE_METADATA" || "ACTIVE" || "INACTIVE" || "DELETE" || "UNDER_REVIEW" || "REVIEWED" || "IMPORT_EVIDENCE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       createdBy: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetChangeLogsCommandInput - {@link GetChangeLogsCommandInput}
 * @returns {@link GetChangeLogsCommandOutput}
 * @see {@link GetChangeLogsCommandInput} for command's `input` shape.
 * @see {@link GetChangeLogsCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource that's specified in the request can't be found. </p>
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
export class GetChangeLogsCommand extends $Command
  .classBuilder<
    GetChangeLogsCommandInput,
    GetChangeLogsCommandOutput,
    AuditManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AuditManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BedrockAssessmentManagerLambda", "GetChangeLogs", {})
  .n("AuditManagerClient", "GetChangeLogsCommand")
  .sc(GetChangeLogs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetChangeLogsRequest;
      output: GetChangeLogsResponse;
    };
    sdk: {
      input: GetChangeLogsCommandInput;
      output: GetChangeLogsCommandOutput;
    };
  };
}
