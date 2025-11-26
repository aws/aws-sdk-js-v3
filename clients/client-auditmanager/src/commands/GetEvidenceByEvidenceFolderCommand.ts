// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetEvidenceByEvidenceFolderRequest, GetEvidenceByEvidenceFolderResponse } from "../models/models_0";
import { GetEvidenceByEvidenceFolder } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEvidenceByEvidenceFolderCommand}.
 */
export interface GetEvidenceByEvidenceFolderCommandInput extends GetEvidenceByEvidenceFolderRequest {}
/**
 * @public
 *
 * The output of {@link GetEvidenceByEvidenceFolderCommand}.
 */
export interface GetEvidenceByEvidenceFolderCommandOutput
  extends GetEvidenceByEvidenceFolderResponse,
    __MetadataBearer {}

/**
 * <p> Gets all evidence from a specified evidence folder in Audit Manager. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetEvidenceByEvidenceFolderCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetEvidenceByEvidenceFolderCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = { // GetEvidenceByEvidenceFolderRequest
 *   assessmentId: "STRING_VALUE", // required
 *   controlSetId: "STRING_VALUE", // required
 *   evidenceFolderId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetEvidenceByEvidenceFolderCommand(input);
 * const response = await client.send(command);
 * // { // GetEvidenceByEvidenceFolderResponse
 * //   evidence: [ // EvidenceList
 * //     { // Evidence
 * //       dataSource: "STRING_VALUE",
 * //       evidenceAwsAccountId: "STRING_VALUE",
 * //       time: new Date("TIMESTAMP"),
 * //       eventSource: "STRING_VALUE",
 * //       eventName: "STRING_VALUE",
 * //       evidenceByType: "STRING_VALUE",
 * //       resourcesIncluded: [ // Resources
 * //         { // Resource
 * //           arn: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //           complianceCheck: "STRING_VALUE",
 * //         },
 * //       ],
 * //       attributes: { // EvidenceAttributes
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       iamId: "STRING_VALUE",
 * //       complianceCheck: "STRING_VALUE",
 * //       awsOrganization: "STRING_VALUE",
 * //       awsAccountId: "STRING_VALUE",
 * //       evidenceFolderId: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       assessmentReportSelection: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetEvidenceByEvidenceFolderCommandInput - {@link GetEvidenceByEvidenceFolderCommandInput}
 * @returns {@link GetEvidenceByEvidenceFolderCommandOutput}
 * @see {@link GetEvidenceByEvidenceFolderCommandInput} for command's `input` shape.
 * @see {@link GetEvidenceByEvidenceFolderCommandOutput} for command's `response` shape.
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
export class GetEvidenceByEvidenceFolderCommand extends $Command
  .classBuilder<
    GetEvidenceByEvidenceFolderCommandInput,
    GetEvidenceByEvidenceFolderCommandOutput,
    AuditManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AuditManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BedrockAssessmentManagerLambda", "GetEvidenceByEvidenceFolder", {})
  .n("AuditManagerClient", "GetEvidenceByEvidenceFolderCommand")
  .sc(GetEvidenceByEvidenceFolder)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEvidenceByEvidenceFolderRequest;
      output: GetEvidenceByEvidenceFolderResponse;
    };
    sdk: {
      input: GetEvidenceByEvidenceFolderCommandInput;
      output: GetEvidenceByEvidenceFolderCommandOutput;
    };
  };
}
