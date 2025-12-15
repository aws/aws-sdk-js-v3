// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListAssessmentFrameworkShareRequestsRequest,
  ListAssessmentFrameworkShareRequestsResponse,
} from "../models/models_0";
import { ListAssessmentFrameworkShareRequests$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAssessmentFrameworkShareRequestsCommand}.
 */
export interface ListAssessmentFrameworkShareRequestsCommandInput extends ListAssessmentFrameworkShareRequestsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssessmentFrameworkShareRequestsCommand}.
 */
export interface ListAssessmentFrameworkShareRequestsCommandOutput
  extends ListAssessmentFrameworkShareRequestsResponse,
    __MetadataBearer {}

/**
 * <p> Returns a list of sent or received share requests for custom frameworks in Audit Manager. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, ListAssessmentFrameworkShareRequestsCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, ListAssessmentFrameworkShareRequestsCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = { // ListAssessmentFrameworkShareRequestsRequest
 *   requestType: "SENT" || "RECEIVED", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAssessmentFrameworkShareRequestsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssessmentFrameworkShareRequestsResponse
 * //   assessmentFrameworkShareRequests: [ // AssessmentFrameworkShareRequestList
 * //     { // AssessmentFrameworkShareRequest
 * //       id: "STRING_VALUE",
 * //       frameworkId: "STRING_VALUE",
 * //       frameworkName: "STRING_VALUE",
 * //       frameworkDescription: "STRING_VALUE",
 * //       status: "ACTIVE" || "REPLICATING" || "SHARED" || "EXPIRING" || "FAILED" || "EXPIRED" || "DECLINED" || "REVOKED",
 * //       sourceAccount: "STRING_VALUE",
 * //       destinationAccount: "STRING_VALUE",
 * //       destinationRegion: "STRING_VALUE",
 * //       expirationTime: new Date("TIMESTAMP"),
 * //       creationTime: new Date("TIMESTAMP"),
 * //       lastUpdated: new Date("TIMESTAMP"),
 * //       comment: "STRING_VALUE",
 * //       standardControlsCount: Number("int"),
 * //       customControlsCount: Number("int"),
 * //       complianceType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssessmentFrameworkShareRequestsCommandInput - {@link ListAssessmentFrameworkShareRequestsCommandInput}
 * @returns {@link ListAssessmentFrameworkShareRequestsCommandOutput}
 * @see {@link ListAssessmentFrameworkShareRequestsCommandInput} for command's `input` shape.
 * @see {@link ListAssessmentFrameworkShareRequestsCommandOutput} for command's `response` shape.
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
export class ListAssessmentFrameworkShareRequestsCommand extends $Command
  .classBuilder<
    ListAssessmentFrameworkShareRequestsCommandInput,
    ListAssessmentFrameworkShareRequestsCommandOutput,
    AuditManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AuditManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BedrockAssessmentManagerLambda", "ListAssessmentFrameworkShareRequests", {})
  .n("AuditManagerClient", "ListAssessmentFrameworkShareRequestsCommand")
  .sc(ListAssessmentFrameworkShareRequests$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssessmentFrameworkShareRequestsRequest;
      output: ListAssessmentFrameworkShareRequestsResponse;
    };
    sdk: {
      input: ListAssessmentFrameworkShareRequestsCommandInput;
      output: ListAssessmentFrameworkShareRequestsCommandOutput;
    };
  };
}
