// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import type { ListDelegationRequestsRequest, ListDelegationRequestsResponse } from "../models/models_0";
import { ListDelegationRequests$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDelegationRequestsCommand}.
 */
export interface ListDelegationRequestsCommandInput extends ListDelegationRequestsRequest {}
/**
 * @public
 *
 * The output of {@link ListDelegationRequestsCommand}.
 */
export interface ListDelegationRequestsCommandOutput extends ListDelegationRequestsResponse, __MetadataBearer {}

/**
 * <p>Lists delegation requests based on the specified criteria.</p>
 *          <p>If a delegation request has no owner, even if it is assigned to a specific account, it will not be part of the
 *             <code>ListDelegationRequests</code> output for that account.</p>
 *          <p>
 *             For more details, see
 *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies-temporary-delegation.html#temporary-delegation-managing-permissions">
 *                 Managing Permissions for Delegation Requests</a>.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListDelegationRequestsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListDelegationRequestsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // ListDelegationRequestsRequest
 *   OwnerId: "STRING_VALUE",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListDelegationRequestsCommand(input);
 * const response = await client.send(command);
 * // { // ListDelegationRequestsResponse
 * //   DelegationRequests: [ // delegationRequestsListType
 * //     { // DelegationRequest
 * //       DelegationRequestId: "STRING_VALUE",
 * //       OwnerAccountId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       RequestMessage: "STRING_VALUE",
 * //       Permissions: { // DelegationPermission
 * //         PolicyTemplateArn: "STRING_VALUE",
 * //         Parameters: [ // policyParameterListType
 * //           { // PolicyParameter
 * //             Name: "STRING_VALUE",
 * //             Values: [ // policyParameterValuesListType
 * //               "STRING_VALUE",
 * //             ],
 * //             Type: "string" || "stringList",
 * //           },
 * //         ],
 * //       },
 * //       PermissionPolicy: "STRING_VALUE",
 * //       RolePermissionRestrictionArns: [ // rolePermissionRestrictionArnListType
 * //         "STRING_VALUE",
 * //       ],
 * //       OwnerId: "STRING_VALUE",
 * //       ApproverId: "STRING_VALUE",
 * //       State: "UNASSIGNED" || "ASSIGNED" || "PENDING_APPROVAL" || "FINALIZED" || "ACCEPTED" || "REJECTED" || "EXPIRED",
 * //       ExpirationTime: new Date("TIMESTAMP"),
 * //       RequestorId: "STRING_VALUE",
 * //       RequestorName: "STRING_VALUE",
 * //       CreateDate: new Date("TIMESTAMP"),
 * //       SessionDuration: Number("int"),
 * //       RedirectUrl: "STRING_VALUE",
 * //       Notes: "STRING_VALUE",
 * //       RejectionReason: "STRING_VALUE",
 * //       OnlySendByOwner: true || false,
 * //       UpdatedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * //   isTruncated: true || false,
 * // };
 *
 * ```
 *
 * @param ListDelegationRequestsCommandInput - {@link ListDelegationRequestsCommandInput}
 * @returns {@link ListDelegationRequestsCommandOutput}
 * @see {@link ListDelegationRequestsCommandInput} for command's `input` shape.
 * @see {@link ListDelegationRequestsCommandOutput} for command's `response` shape.
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
export class ListDelegationRequestsCommand extends $Command
  .classBuilder<
    ListDelegationRequestsCommandInput,
    ListDelegationRequestsCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "ListDelegationRequests", {})
  .n("IAMClient", "ListDelegationRequestsCommand")
  .sc(ListDelegationRequests$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDelegationRequestsRequest;
      output: ListDelegationRequestsResponse;
    };
    sdk: {
      input: ListDelegationRequestsCommandInput;
      output: ListDelegationRequestsCommandOutput;
    };
  };
}
