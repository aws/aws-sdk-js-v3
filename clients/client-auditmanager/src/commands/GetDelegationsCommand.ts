// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetDelegationsRequest,
  GetDelegationsResponse,
  GetDelegationsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetDelegationsCommand, se_GetDelegationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDelegationsCommand}.
 */
export interface GetDelegationsCommandInput extends GetDelegationsRequest {}
/**
 * @public
 *
 * The output of {@link GetDelegationsCommand}.
 */
export interface GetDelegationsCommandOutput extends GetDelegationsResponse, __MetadataBearer {}

/**
 * <p> Gets a list of delegations from an audit owner to a delegate. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetDelegationsCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetDelegationsCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const input = { // GetDelegationsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetDelegationsCommand(input);
 * const response = await client.send(command);
 * // { // GetDelegationsResponse
 * //   delegations: [ // DelegationMetadataList
 * //     { // DelegationMetadata
 * //       id: "STRING_VALUE",
 * //       assessmentName: "STRING_VALUE",
 * //       assessmentId: "STRING_VALUE",
 * //       status: "IN_PROGRESS" || "UNDER_REVIEW" || "COMPLETE",
 * //       roleArn: "STRING_VALUE",
 * //       creationTime: new Date("TIMESTAMP"),
 * //       controlSetName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDelegationsCommandInput - {@link GetDelegationsCommandInput}
 * @returns {@link GetDelegationsCommandOutput}
 * @see {@link GetDelegationsCommandInput} for command's `input` shape.
 * @see {@link GetDelegationsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetDelegationsCommand extends $Command
  .classBuilder<
    GetDelegationsCommandInput,
    GetDelegationsCommandOutput,
    AuditManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AuditManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BedrockAssessmentManagerLambda", "GetDelegations", {})
  .n("AuditManagerClient", "GetDelegationsCommand")
  .f(void 0, GetDelegationsResponseFilterSensitiveLog)
  .ser(se_GetDelegationsCommand)
  .de(de_GetDelegationsCommand)
  .build() {}
