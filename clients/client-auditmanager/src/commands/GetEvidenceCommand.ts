// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetEvidenceRequest, GetEvidenceResponse } from "../models/models_0";
import { de_GetEvidenceCommand, se_GetEvidenceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEvidenceCommand}.
 */
export interface GetEvidenceCommandInput extends GetEvidenceRequest {}
/**
 * @public
 *
 * The output of {@link GetEvidenceCommand}.
 */
export interface GetEvidenceCommandOutput extends GetEvidenceResponse, __MetadataBearer {}

/**
 * <p> Gets information about a specified evidence item.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetEvidenceCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetEvidenceCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AuditManagerClient(config);
 * const input = { // GetEvidenceRequest
 *   assessmentId: "STRING_VALUE", // required
 *   controlSetId: "STRING_VALUE", // required
 *   evidenceFolderId: "STRING_VALUE", // required
 *   evidenceId: "STRING_VALUE", // required
 * };
 * const command = new GetEvidenceCommand(input);
 * const response = await client.send(command);
 * // { // GetEvidenceResponse
 * //   evidence: { // Evidence
 * //     dataSource: "STRING_VALUE",
 * //     evidenceAwsAccountId: "STRING_VALUE",
 * //     time: new Date("TIMESTAMP"),
 * //     eventSource: "STRING_VALUE",
 * //     eventName: "STRING_VALUE",
 * //     evidenceByType: "STRING_VALUE",
 * //     resourcesIncluded: [ // Resources
 * //       { // Resource
 * //         arn: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //         complianceCheck: "STRING_VALUE",
 * //       },
 * //     ],
 * //     attributes: { // EvidenceAttributes
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     iamId: "STRING_VALUE",
 * //     complianceCheck: "STRING_VALUE",
 * //     awsOrganization: "STRING_VALUE",
 * //     awsAccountId: "STRING_VALUE",
 * //     evidenceFolderId: "STRING_VALUE",
 * //     id: "STRING_VALUE",
 * //     assessmentReportSelection: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEvidenceCommandInput - {@link GetEvidenceCommandInput}
 * @returns {@link GetEvidenceCommandOutput}
 * @see {@link GetEvidenceCommandInput} for command's `input` shape.
 * @see {@link GetEvidenceCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetEvidenceCommand extends $Command
  .classBuilder<
    GetEvidenceCommandInput,
    GetEvidenceCommandOutput,
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
  .s("BedrockAssessmentManagerLambda", "GetEvidence", {})
  .n("AuditManagerClient", "GetEvidenceCommand")
  .f(void 0, void 0)
  .ser(se_GetEvidenceCommand)
  .de(de_GetEvidenceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEvidenceRequest;
      output: GetEvidenceResponse;
    };
    sdk: {
      input: GetEvidenceCommandInput;
      output: GetEvidenceCommandOutput;
    };
  };
}
