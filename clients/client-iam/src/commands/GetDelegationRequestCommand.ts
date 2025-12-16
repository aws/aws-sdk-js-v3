// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import type { GetDelegationRequestRequest, GetDelegationRequestResponse } from "../models/models_0";
import { GetDelegationRequest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDelegationRequestCommand}.
 */
export interface GetDelegationRequestCommandInput extends GetDelegationRequestRequest {}
/**
 * @public
 *
 * The output of {@link GetDelegationRequestCommand}.
 */
export interface GetDelegationRequestCommandOutput extends GetDelegationRequestResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a specific delegation request.</p>
 *          <p>
 *             If a delegation request has no owner or owner account, <code>GetDelegationRequest</code> for that delegation request can be called by any account.
 *             If the owner account is assigned but there is
 *             no owner id, only identities within that owner account can call <code>GetDelegationRequest</code>
 *             for the delegation request. Once the delegation request is fully owned, the owner of the request gets
 *             a default permission to get that delegation request. For more details, see
 *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies-temporary-delegation.html#temporary-delegation-managing-permissions">
 *                 Managing Permissions for Delegation Requests</a>.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetDelegationRequestCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetDelegationRequestCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // GetDelegationRequestRequest
 *   DelegationRequestId: "STRING_VALUE", // required
 *   DelegationPermissionCheck: true || false,
 * };
 * const command = new GetDelegationRequestCommand(input);
 * const response = await client.send(command);
 * // { // GetDelegationRequestResponse
 * //   DelegationRequest: { // DelegationRequest
 * //     DelegationRequestId: "STRING_VALUE",
 * //     OwnerAccountId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     RequestMessage: "STRING_VALUE",
 * //     Permissions: { // DelegationPermission
 * //       PolicyTemplateArn: "STRING_VALUE",
 * //       Parameters: [ // policyParameterListType
 * //         { // PolicyParameter
 * //           Name: "STRING_VALUE",
 * //           Values: [ // policyParameterValuesListType
 * //             "STRING_VALUE",
 * //           ],
 * //           Type: "string" || "stringList",
 * //         },
 * //       ],
 * //     },
 * //     PermissionPolicy: "STRING_VALUE",
 * //     RolePermissionRestrictionArns: [ // rolePermissionRestrictionArnListType
 * //       "STRING_VALUE",
 * //     ],
 * //     OwnerId: "STRING_VALUE",
 * //     ApproverId: "STRING_VALUE",
 * //     State: "UNASSIGNED" || "ASSIGNED" || "PENDING_APPROVAL" || "FINALIZED" || "ACCEPTED" || "REJECTED" || "EXPIRED",
 * //     ExpirationTime: new Date("TIMESTAMP"),
 * //     RequestorId: "STRING_VALUE",
 * //     RequestorName: "STRING_VALUE",
 * //     CreateDate: new Date("TIMESTAMP"),
 * //     SessionDuration: Number("int"),
 * //     RedirectUrl: "STRING_VALUE",
 * //     Notes: "STRING_VALUE",
 * //     RejectionReason: "STRING_VALUE",
 * //     OnlySendByOwner: true || false,
 * //     UpdatedTime: new Date("TIMESTAMP"),
 * //   },
 * //   PermissionCheckStatus: "COMPLETE" || "IN_PROGRESS" || "FAILED",
 * //   PermissionCheckResult: "ALLOWED" || "DENIED" || "UNSURE",
 * // };
 *
 * ```
 *
 * @param GetDelegationRequestCommandInput - {@link GetDelegationRequestCommandInput}
 * @returns {@link GetDelegationRequestCommandOutput}
 * @see {@link GetDelegationRequestCommandInput} for command's `input` shape.
 * @see {@link GetDelegationRequestCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @public
 */
export class GetDelegationRequestCommand extends $Command
  .classBuilder<
    GetDelegationRequestCommandInput,
    GetDelegationRequestCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "GetDelegationRequest", {})
  .n("IAMClient", "GetDelegationRequestCommand")
  .sc(GetDelegationRequest$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDelegationRequestRequest;
      output: GetDelegationRequestResponse;
    };
    sdk: {
      input: GetDelegationRequestCommandInput;
      output: GetDelegationRequestCommandOutput;
    };
  };
}
