// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import {
  GenerateServiceLastAccessedDetailsRequest,
  GenerateServiceLastAccessedDetailsResponse,
} from "../models/models_0";
import { GenerateServiceLastAccessedDetails } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GenerateServiceLastAccessedDetailsCommand}.
 */
export interface GenerateServiceLastAccessedDetailsCommandInput extends GenerateServiceLastAccessedDetailsRequest {}
/**
 * @public
 *
 * The output of {@link GenerateServiceLastAccessedDetailsCommand}.
 */
export interface GenerateServiceLastAccessedDetailsCommandOutput
  extends GenerateServiceLastAccessedDetailsResponse,
    __MetadataBearer {}

/**
 * <p>Generates a report that includes details about when an IAM resource (user, group,
 *             role, or policy) was last used in an attempt to access Amazon Web Services services. Recent activity
 *             usually appears within four hours. IAM reports activity for at least the last 400
 *             days, or less if your Region began supporting this feature within the last year. For
 *             more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions where data is tracked</a>. For more information about services and
 *             actions for which action last accessed information is displayed, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor-action-last-accessed.html">IAM
 *                 action last accessed information services and actions</a>.</p>
 *          <important>
 *             <p>The service last accessed data includes all attempts to access an Amazon Web Services API, not
 *                 just the successful ones. This includes all attempts that were made using the
 *                 Amazon Web Services Management Console, the Amazon Web Services API through any of the SDKs, or any of the command line tools.
 *                 An unexpected entry in the service last accessed data does not mean that your
 *                 account has been compromised, because the request might have been denied. Refer to
 *                 your CloudTrail logs as the authoritative source for information about all API calls
 *                 and whether they were successful or denied access. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">Logging
 *                     IAM events with CloudTrail</a> in the
 *                     <i>IAM User Guide</i>.</p>
 *          </important>
 *          <p>The <code>GenerateServiceLastAccessedDetails</code> operation returns a
 *                 <code>JobId</code>. Use this parameter in the following operations to retrieve the
 *             following details from your report: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetails.html">GetServiceLastAccessedDetails</a> – Use this operation for
 *                     users, groups, roles, or policies to list every Amazon Web Services service that the resource
 *                     could access using permissions policies. For each service, the response includes
 *                     information about the most recent access attempt.</p>
 *                <p>The <code>JobId</code> returned by
 *                         <code>GenerateServiceLastAccessedDetail</code> must be used by the same role
 *                     within a session, or by the same user when used to call
 *                         <code>GetServiceLastAccessedDetail</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetailsWithEntities.html">GetServiceLastAccessedDetailsWithEntities</a> – Use this
 *                     operation for groups and policies to list information about the associated
 *                     entities (users or roles) that attempted to access a specific Amazon Web Services service.
 *                 </p>
 *             </li>
 *          </ul>
 *          <p>To check the status of the <code>GenerateServiceLastAccessedDetails</code> request,
 *             use the <code>JobId</code> parameter in the same operations and test the
 *                 <code>JobStatus</code> response parameter.</p>
 *          <p>For additional information about the permissions policies that allow an identity
 *             (user, group, or role) to access specific services, use the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPoliciesGrantingServiceAccess.html">ListPoliciesGrantingServiceAccess</a> operation.</p>
 *          <note>
 *             <p>Service last accessed data does not use other policy types when determining
 *                 whether a resource could access a service. These other policy types include
 *                 resource-based policies, access control lists, Organizations policies, IAM permissions
 *                 boundaries, and STS assume role policies. It only applies permissions policy
 *                 logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the
 *                 <i>IAM User Guide</i>.</p>
 *          </note>
 *          <p>For more information about service and action last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using service last accessed data</a> in the
 *                 <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GenerateServiceLastAccessedDetailsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GenerateServiceLastAccessedDetailsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // GenerateServiceLastAccessedDetailsRequest
 *   Arn: "STRING_VALUE", // required
 *   Granularity: "SERVICE_LEVEL" || "ACTION_LEVEL",
 * };
 * const command = new GenerateServiceLastAccessedDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GenerateServiceLastAccessedDetailsResponse
 * //   JobId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GenerateServiceLastAccessedDetailsCommandInput - {@link GenerateServiceLastAccessedDetailsCommandInput}
 * @returns {@link GenerateServiceLastAccessedDetailsCommandOutput}
 * @see {@link GenerateServiceLastAccessedDetailsCommandInput} for command's `input` shape.
 * @see {@link GenerateServiceLastAccessedDetailsCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @example To generate a service last accessed data report for a policy
 * ```javascript
 * // The following operation generates a report for the policy: ExamplePolicy1
 * const input = {
 *   Arn: "arn:aws:iam::123456789012:policy/ExamplePolicy1"
 * };
 * const command = new GenerateServiceLastAccessedDetailsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   JobId: "examplef-1305-c245-eba4-71fe298bcda7"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GenerateServiceLastAccessedDetailsCommand extends $Command
  .classBuilder<
    GenerateServiceLastAccessedDetailsCommandInput,
    GenerateServiceLastAccessedDetailsCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "GenerateServiceLastAccessedDetails", {})
  .n("IAMClient", "GenerateServiceLastAccessedDetailsCommand")
  .sc(GenerateServiceLastAccessedDetails)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GenerateServiceLastAccessedDetailsRequest;
      output: GenerateServiceLastAccessedDetailsResponse;
    };
    sdk: {
      input: GenerateServiceLastAccessedDetailsCommandInput;
      output: GenerateServiceLastAccessedDetailsCommandOutput;
    };
  };
}
