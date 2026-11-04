// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateResourceShareRequest, CreateResourceShareResponse } from "../models/models_0";
import { CreateResourceShare$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateResourceShareCommand}.
 */
export interface CreateResourceShareCommandInput extends CreateResourceShareRequest {}
/**
 * @public
 *
 * The output of {@link CreateResourceShareCommand}.
 */
export interface CreateResourceShareCommandOutput extends CreateResourceShareResponse, __MetadataBearer {}

/**
 * Creates a resource share. You can provide a list of the [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) for the resources that you want to share, a list of principals you want to share the resources with, the permissions to grant those principals, and optionally source constraints to enhance security for service principal sharing.
 *
 * > **Note:** Sharing a resource makes it available for use by principals outside of the Amazon Web Services account that created the resource. Sharing doesn't change any permissions or quotas that apply to the resource in the account that created it.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, CreateResourceShareCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, CreateResourceShareCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * // import type { RAMClientConfig } from "@aws-sdk/client-ram";
 * const config = {}; // type is RAMClientConfig
 * const client = new RAMClient(config);
 * const input = { // CreateResourceShareRequest
 *   name: "STRING_VALUE", // required
 *   resourceArns: [ // ResourceArnList
 *     "STRING_VALUE",
 *   ],
 *   principals: [ // PrincipalArnOrIdList
 *     "STRING_VALUE",
 *   ],
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   allowExternalPrincipals: true || false,
 *   clientToken: "STRING_VALUE",
 *   permissionArns: [ // PermissionArnList
 *     "STRING_VALUE",
 *   ],
 *   sources: [ // SourceArnOrAccountList
 *     "STRING_VALUE",
 *   ],
 *   resourceShareConfiguration: { // ResourceShareConfiguration
 *     retainSharingOnAccountLeaveOrganization: true || false,
 *   },
 * };
 * const command = new CreateResourceShareCommand(input);
 * const response = await client.send(command);
 * // { // CreateResourceShareResponse
 * //   resourceShare: { // ResourceShare
 * //     resourceShareArn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     owningAccountId: "STRING_VALUE",
 * //     allowExternalPrincipals: true || false,
 * //     status: "PENDING" || "ACTIVE" || "FAILED" || "DELETING" || "DELETED",
 * //     statusMessage: "STRING_VALUE",
 * //     tags: [ // TagList
 * //       { // Tag
 * //         key: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     creationTime: new Date("TIMESTAMP"),
 * //     lastUpdatedTime: new Date("TIMESTAMP"),
 * //     featureSet: "CREATED_FROM_POLICY" || "PROMOTING_TO_STANDARD" || "STANDARD",
 * //     resourceShareConfiguration: { // ResourceShareConfiguration
 * //       retainSharingOnAccountLeaveOrganization: true || false,
 * //     },
 * //   },
 * //   clientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateResourceShareCommandInput - {@link CreateResourceShareCommandInput}
 * @returns {@link CreateResourceShareCommandOutput}
 * @see {@link CreateResourceShareCommandInput} for command's `input` shape.
 * @see {@link CreateResourceShareCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *
 * The operation failed because the client token input parameter matched one that was used with a previous call to the operation, but at least one of the other input parameters is different from the previous call.
 *
 * @throws {@link InvalidClientTokenException} (client fault)
 *
 * The operation failed because the specified client token isn't valid.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The operation failed because a parameter you specified isn't valid.
 *
 * @throws {@link InvalidStateTransitionException} (client fault)
 *
 * The operation failed because the requested operation isn't valid for the resource share in its current state.
 *
 * @throws {@link MalformedArnException} (client fault)
 *
 * The operation failed because the specified [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) has a format that isn't valid.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * The operation failed because the requested operation isn't permitted.
 *
 * @throws {@link ResourceShareLimitExceededException} (client fault)
 *
 * The operation failed because it would exceed the limit for resource shares for your account. You can associate up to 100 resources per call. To view the limits for your Amazon Web Services account, see the [RAM page in the Service Quotas console](https://console.aws.amazon.com/servicequotas/home/services/ram/quotas).
 *
 * @throws {@link ServerInternalException} (server fault)
 *
 * The operation failed because the service could not respond to the request due to an internal problem. Try again later.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The operation failed because the service isn't available. Try again later.
 *
 * @throws {@link TagLimitExceededException} (client fault)
 *
 * The operation failed because it would exceed the limit for tags for your Amazon Web Services account.
 *
 * @throws {@link TagPolicyViolationException} (client fault)
 *
 * The operation failed because the specified tag key is a reserved word and can't be used.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The operation failed because it exceeded the rate at which you are allowed to perform this operation. Please try again later.
 *
 * @throws {@link UnknownResourceException} (client fault)
 *
 * The operation failed because a specified resource couldn't be found.
 *
 * @throws {@link RAMServiceException}
 *
 * Base exception class for all service exceptions from RAM service.
 *
 * @public
 */
export class CreateResourceShareCommand extends command<CreateResourceShareCommandInput, CreateResourceShareCommandOutput>(
  _ep0,
  _mw0,
  "CreateResourceShare",
  CreateResourceShare$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateResourceShareRequest;
      output: CreateResourceShareResponse;
    };
    sdk: {
      input: CreateResourceShareCommandInput;
      output: CreateResourceShareCommandOutput;
    };
  };
}
