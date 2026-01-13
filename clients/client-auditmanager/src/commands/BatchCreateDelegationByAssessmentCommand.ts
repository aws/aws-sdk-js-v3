// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  BatchCreateDelegationByAssessmentRequest,
  BatchCreateDelegationByAssessmentResponse,
} from "../models/models_0";
import { BatchCreateDelegationByAssessment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchCreateDelegationByAssessmentCommand}.
 */
export interface BatchCreateDelegationByAssessmentCommandInput extends BatchCreateDelegationByAssessmentRequest {}
/**
 * @public
 *
 * The output of {@link BatchCreateDelegationByAssessmentCommand}.
 */
export interface BatchCreateDelegationByAssessmentCommandOutput extends BatchCreateDelegationByAssessmentResponse, __MetadataBearer {}

/**
 * <p> Creates a batch of delegations for an assessment in Audit Manager. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, BatchCreateDelegationByAssessmentCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, BatchCreateDelegationByAssessmentCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = { // BatchCreateDelegationByAssessmentRequest
 *   createDelegationRequests: [ // CreateDelegationRequests // required
 *     { // CreateDelegationRequest
 *       comment: "STRING_VALUE",
 *       controlSetId: "STRING_VALUE",
 *       roleArn: "STRING_VALUE",
 *       roleType: "PROCESS_OWNER" || "RESOURCE_OWNER",
 *     },
 *   ],
 *   assessmentId: "STRING_VALUE", // required
 * };
 * const command = new BatchCreateDelegationByAssessmentCommand(input);
 * const response = await client.send(command);
 * // { // BatchCreateDelegationByAssessmentResponse
 * //   delegations: [ // Delegations
 * //     { // Delegation
 * //       id: "STRING_VALUE",
 * //       assessmentName: "STRING_VALUE",
 * //       assessmentId: "STRING_VALUE",
 * //       status: "IN_PROGRESS" || "UNDER_REVIEW" || "COMPLETE",
 * //       roleArn: "STRING_VALUE",
 * //       roleType: "PROCESS_OWNER" || "RESOURCE_OWNER",
 * //       creationTime: new Date("TIMESTAMP"),
 * //       lastUpdated: new Date("TIMESTAMP"),
 * //       controlSetId: "STRING_VALUE",
 * //       comment: "STRING_VALUE",
 * //       createdBy: "STRING_VALUE",
 * //     },
 * //   ],
 * //   errors: [ // BatchCreateDelegationByAssessmentErrors
 * //     { // BatchCreateDelegationByAssessmentError
 * //       createDelegationRequest: { // CreateDelegationRequest
 * //         comment: "STRING_VALUE",
 * //         controlSetId: "STRING_VALUE",
 * //         roleArn: "STRING_VALUE",
 * //         roleType: "PROCESS_OWNER" || "RESOURCE_OWNER",
 * //       },
 * //       errorCode: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchCreateDelegationByAssessmentCommandInput - {@link BatchCreateDelegationByAssessmentCommandInput}
 * @returns {@link BatchCreateDelegationByAssessmentCommandOutput}
 * @see {@link BatchCreateDelegationByAssessmentCommandInput} for command's `input` shape.
 * @see {@link BatchCreateDelegationByAssessmentCommandOutput} for command's `response` shape.
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
export class BatchCreateDelegationByAssessmentCommand extends $Command
  .classBuilder<
    BatchCreateDelegationByAssessmentCommandInput,
    BatchCreateDelegationByAssessmentCommandOutput,
    AuditManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AuditManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BedrockAssessmentManagerLambda", "BatchCreateDelegationByAssessment", {})
  .n("AuditManagerClient", "BatchCreateDelegationByAssessmentCommand")
  .sc(BatchCreateDelegationByAssessment$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchCreateDelegationByAssessmentRequest;
      output: BatchCreateDelegationByAssessmentResponse;
    };
    sdk: {
      input: BatchCreateDelegationByAssessmentCommandInput;
      output: BatchCreateDelegationByAssessmentCommandOutput;
    };
  };
}
