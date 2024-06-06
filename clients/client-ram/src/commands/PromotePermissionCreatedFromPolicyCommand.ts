// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  PromotePermissionCreatedFromPolicyRequest,
  PromotePermissionCreatedFromPolicyResponse,
} from "../models/models_0";
import {
  de_PromotePermissionCreatedFromPolicyCommand,
  se_PromotePermissionCreatedFromPolicyCommand,
} from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface PromotePermissionCreatedFromPolicyCommandOutput
  extends PromotePermissionCreatedFromPolicyResponse,
    __MetadataBearer {}

/**
 * <p>When you attach a resource-based policy to a resource, RAM automatically creates
 *             a resource share of <code>featureSet</code>=<code>CREATED_FROM_POLICY</code> with a managed permission that
 *             has the same IAM permissions as the original resource-based policy. However, this type
 *             of managed permission is visible to only the resource share owner, and the associated resource share can't be modified by
 *             using RAM.</p>
 *          <p>This operation creates a separate, fully manageable customer managed permission that has the same IAM
 *             permissions as the original resource-based policy. You can associate this customer managed permission to any
 *             resource shares.</p>
 *          <p>Before you use <a>PromoteResourceShareCreatedFromPolicy</a>, you should
 *             first run this operation to ensure that you have an appropriate customer managed permission that can be
 *             associated with the promoted resource share.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>The original <code>CREATED_FROM_POLICY</code> policy isn't deleted, and
 *                         resource shares using that original policy aren't automatically
 *                         updated.</p>
 *                </li>
 *                <li>
 *                   <p>You can't modify a <code>CREATED_FROM_POLICY</code> resource share so you can't
 *                         associate the new customer managed permission by using
 *                         <code>ReplacePermsissionAssociations</code>. However, if you use <a>PromoteResourceShareCreatedFromPolicy</a>, that operation
 *                         automatically associates the fully manageable customer managed permission to the newly promoted
 *                             <code>STANDARD</code> resource share.</p>
 *                </li>
 *                <li>
 *                   <p>After you promote a resource share, if the original <code>CREATED_FROM_POLICY</code>
 *                         managed permission has no other associations to A resource share, then RAM automatically deletes
 *                         it.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, PromotePermissionCreatedFromPolicyCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, PromotePermissionCreatedFromPolicyCommand } = require("@aws-sdk/client-ram"); // CommonJS import
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
 *  <p>The operation failed because a parameter you specified isn't valid.</p>
 *
 * @throws {@link MalformedArnException} (client fault)
 *  <p>The operation failed because the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> has a format that isn't
 *             valid.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>The operation failed because a required input parameter is missing.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The operation failed because the requested operation isn't permitted.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The operation failed because the service could not respond to the request due to an
 *             internal problem. Try again later.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The operation failed because the service isn't available. Try again later.</p>
 *
 * @throws {@link UnknownResourceException} (client fault)
 *  <p>The operation failed because a specified resource couldn't be found.</p>
 *
 * @throws {@link RAMServiceException}
 * <p>Base exception class for all service exceptions from RAM service.</p>
 *
 * @public
 */
export class PromotePermissionCreatedFromPolicyCommand extends $Command
  .classBuilder<
    PromotePermissionCreatedFromPolicyCommandInput,
    PromotePermissionCreatedFromPolicyCommandOutput,
    RAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonResourceSharing", "PromotePermissionCreatedFromPolicy", {})
  .n("RAMClient", "PromotePermissionCreatedFromPolicyCommand")
  .f(void 0, void 0)
  .ser(se_PromotePermissionCreatedFromPolicyCommand)
  .de(de_PromotePermissionCreatedFromPolicyCommand)
  .build() {}
