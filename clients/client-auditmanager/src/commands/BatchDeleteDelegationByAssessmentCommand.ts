// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  BatchDeleteDelegationByAssessmentRequest,
  BatchDeleteDelegationByAssessmentResponse,
} from "../models/models_0";
import { BatchDeleteDelegationByAssessment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteDelegationByAssessmentCommand}.
 */
export interface BatchDeleteDelegationByAssessmentCommandInput extends BatchDeleteDelegationByAssessmentRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteDelegationByAssessmentCommand}.
 */
export interface BatchDeleteDelegationByAssessmentCommandOutput
  extends BatchDeleteDelegationByAssessmentResponse,
    __MetadataBearer {}

/**
 * <p> Deletes a batch of delegations for an assessment in Audit Manager. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, BatchDeleteDelegationByAssessmentCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, BatchDeleteDelegationByAssessmentCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = { // BatchDeleteDelegationByAssessmentRequest
 *   delegationIds: [ // DelegationIds // required
 *     "STRING_VALUE",
 *   ],
 *   assessmentId: "STRING_VALUE", // required
 * };
 * const command = new BatchDeleteDelegationByAssessmentCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteDelegationByAssessmentResponse
 * //   errors: [ // BatchDeleteDelegationByAssessmentErrors
 * //     { // BatchDeleteDelegationByAssessmentError
 * //       delegationId: "STRING_VALUE",
 * //       errorCode: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteDelegationByAssessmentCommandInput - {@link BatchDeleteDelegationByAssessmentCommandInput}
 * @returns {@link BatchDeleteDelegationByAssessmentCommandOutput}
 * @see {@link BatchDeleteDelegationByAssessmentCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteDelegationByAssessmentCommandOutput} for command's `response` shape.
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
export class BatchDeleteDelegationByAssessmentCommand extends $Command
  .classBuilder<
    BatchDeleteDelegationByAssessmentCommandInput,
    BatchDeleteDelegationByAssessmentCommandOutput,
    AuditManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AuditManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BedrockAssessmentManagerLambda", "BatchDeleteDelegationByAssessment", {})
  .n("AuditManagerClient", "BatchDeleteDelegationByAssessmentCommand")
  .sc(BatchDeleteDelegationByAssessment$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteDelegationByAssessmentRequest;
      output: BatchDeleteDelegationByAssessmentResponse;
    };
    sdk: {
      input: BatchDeleteDelegationByAssessmentCommandInput;
      output: BatchDeleteDelegationByAssessmentCommandOutput;
    };
  };
}
