// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PromotePermissionCreatedFromPolicyRequest,
  PromotePermissionCreatedFromPolicyResponse,
} from "../models/models_0";
import { PromotePermissionCreatedFromPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PromotePermissionCreatedFromPolicyCommand}.
 */
export interface PromotePermissionCreatedFromPolicyCommandInput extends PromotePermissionCreatedFromPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PromotePermissionCreatedFromPolicyCommand}.
 */
export interface PromotePermissionCreatedFromPolicyCommandOutput extends PromotePermissionCreatedFromPolicyResponse, __MetadataBearer {}

/**
 * When you attach a resource-based policy to a resource, RAM automatically creates a resource share of `featureSet`=`CREATED_FROM_POLICY` with a managed permission that has the same IAM permissions as the original resource-based policy. However, this type of managed permission is visible to only the resource share owner, and the associated resource share can't be modified by using RAM.
 *
 * This operation creates a separate, fully manageable customer managed permission that has the same IAM permissions as the original resource-based policy. You can associate this customer managed permission to any resource shares.
 *
 * Before you use PromoteResourceShareCreatedFromPolicy, you should first run this operation to ensure that you have an appropriate customer managed permission that can be associated with the promoted resource share.
 *
 * > **Note:**
 * >
 * > - The original `CREATED_FROM_POLICY` policy isn't deleted, and resource shares using that original policy aren't automatically updated.
 * > - You can't modify a `CREATED_FROM_POLICY` resource share so you can't associate the new customer managed permission by using `ReplacePermsissionAssociations`. However, if you use PromoteResourceShareCreatedFromPolicy, that operation automatically associates the fully manageable customer managed permission to the newly promoted `STANDARD` resource share.
 * > - After you promote a resource share, if the original `CREATED_FROM_POLICY` managed permission has no other associations to A resource share, then RAM automatically deletes it.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, PromotePermissionCreatedFromPolicyCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, PromotePermissionCreatedFromPolicyCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * // import type { RAMClientConfig } from "@aws-sdk/client-ram";
 * const config = {}; // type is RAMClientConfig
 * const client = new RAMClient(config);
 * const input = { // PromotePermissionCreatedFromPolicyRequest
 *   permissionArn: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new PromotePermissionCreatedFromPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PromotePermissionCreatedFromPolicyResponse
 * //   permission: { // ResourceSharePermissionSummary
 * //     arn: "STRING_VALUE",
 * //     version: "STRING_VALUE",
 * //     defaultVersion: true || false,
 * //     name: "STRING_VALUE",
 * //     resourceType: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     creationTime: new Date("TIMESTAMP"),
 * //     lastUpdatedTime: new Date("TIMESTAMP"),
 * //     isResourceTypeDefault: true || false,
 * //     permissionType: "CUSTOMER_MANAGED" || "AWS_MANAGED",
 * //     featureSet: "CREATED_FROM_POLICY" || "PROMOTING_TO_STANDARD" || "STANDARD",
 * //     tags: [ // TagList
 * //       { // Tag
 * //         key: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   clientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PromotePermissionCreatedFromPolicyCommandInput - {@link PromotePermissionCreatedFromPolicyCommandInput}
 * @returns {@link PromotePermissionCreatedFromPolicyCommandOutput}
 * @see {@link PromotePermissionCreatedFromPolicyCommandInput} for command's `input` shape.
 * @see {@link PromotePermissionCreatedFromPolicyCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The operation failed because a parameter you specified isn't valid.
 *
 * @throws {@link InvalidPolicyException} (client fault)
 *
 * The operation failed because a policy you specified isn't valid.
 *
 * @throws {@link MalformedArnException} (client fault)
 *
 * The operation failed because the specified [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) has a format that isn't valid.
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *
 * The operation failed because a required input parameter is missing.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * The operation failed because the requested operation isn't permitted.
 *
 * @throws {@link ServerInternalException} (server fault)
 *
 * The operation failed because the service could not respond to the request due to an internal problem. Try again later.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The operation failed because the service isn't available. Try again later.
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
export class PromotePermissionCreatedFromPolicyCommand extends command<PromotePermissionCreatedFromPolicyCommandInput, PromotePermissionCreatedFromPolicyCommandOutput>(
  _ep0,
  _mw0,
  "PromotePermissionCreatedFromPolicy",
  PromotePermissionCreatedFromPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PromotePermissionCreatedFromPolicyRequest;
      output: PromotePermissionCreatedFromPolicyResponse;
    };
    sdk: {
      input: PromotePermissionCreatedFromPolicyCommandInput;
      output: PromotePermissionCreatedFromPolicyCommandOutput;
    };
  };
}
