// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreatePermissionVersionRequest, CreatePermissionVersionResponse } from "../models/models_0";
import type { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { CreatePermissionVersion } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePermissionVersionCommand}.
 */
export interface CreatePermissionVersionCommandInput extends CreatePermissionVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreatePermissionVersionCommand}.
 */
export interface CreatePermissionVersionCommandOutput extends CreatePermissionVersionResponse, __MetadataBearer {}

/**
 * <p>Creates a new version of the specified customer managed permission. The new version is automatically set as
 *             the default version of the customer managed permission. New resource shares automatically use the default
 *             permission. Existing resource shares continue to use their original permission versions,
 *             but you can use <a>ReplacePermissionAssociations</a> to update them.</p>
 *          <p>If the specified customer managed permission already has the maximum of 5 versions, then
 *             you must delete one of the existing versions before you can create a new one.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, CreatePermissionVersionCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, CreatePermissionVersionCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * // import type { RAMClientConfig } from "@aws-sdk/client-ram";
 * const config = {}; // type is RAMClientConfig
 * const client = new RAMClient(config);
 * const input = { // CreatePermissionVersionRequest
 *   permissionArn: "STRING_VALUE", // required
 *   policyTemplate: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreatePermissionVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreatePermissionVersionResponse
 * //   permission: { // ResourceSharePermissionDetail
 * //     arn: "STRING_VALUE",
 * //     version: "STRING_VALUE",
 * //     defaultVersion: true || false,
 * //     name: "STRING_VALUE",
 * //     resourceType: "STRING_VALUE",
 * //     permission: "STRING_VALUE",
 * //     creationTime: new Date("TIMESTAMP"),
 * //     lastUpdatedTime: new Date("TIMESTAMP"),
 * //     isResourceTypeDefault: true || false,
 * //     permissionType: "CUSTOMER_MANAGED" || "AWS_MANAGED",
 * //     featureSet: "CREATED_FROM_POLICY" || "PROMOTING_TO_STANDARD" || "STANDARD",
 * //     status: "ATTACHABLE" || "UNATTACHABLE" || "DELETING" || "DELETED",
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
 * @param CreatePermissionVersionCommandInput - {@link CreatePermissionVersionCommandInput}
 * @returns {@link CreatePermissionVersionCommandOutput}
 * @see {@link CreatePermissionVersionCommandInput} for command's `input` shape.
 * @see {@link CreatePermissionVersionCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>The operation failed because the client token input parameter matched one that was
 *             used with a previous call to the operation, but at least one of the other input
 *             parameters is different from the previous call.</p>
 *
 * @throws {@link InvalidClientTokenException} (client fault)
 *  <p>The operation failed because the specified client token isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The operation failed because a parameter you specified isn't valid.</p>
 *
 * @throws {@link InvalidPolicyException} (client fault)
 *  <p>The operation failed because a policy you specified isn't valid.</p>
 *
 * @throws {@link MalformedArnException} (client fault)
 *  <p>The operation failed because the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> has a format that isn't
 *             valid.</p>
 *
 * @throws {@link MalformedPolicyTemplateException} (client fault)
 *  <p>The operation failed because the policy template that you provided isn't valid.</p>
 *
 * @throws {@link PermissionVersionsLimitExceededException} (client fault)
 *  <p>The operation failed because it would exceed the limit for the number of versions you
 *             can have for a permission. To view the limits for your Amazon Web Services account, see the <a href="https://console.aws.amazon.com/servicequotas/home/services/ram/quotas">RAM page in the
 *                 Service Quotas console</a>.</p>
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
 *
 * @public
 */
export class CreatePermissionVersionCommand extends $Command
  .classBuilder<
    CreatePermissionVersionCommandInput,
    CreatePermissionVersionCommandOutput,
    RAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonResourceSharing", "CreatePermissionVersion", {})
  .n("RAMClient", "CreatePermissionVersionCommand")
  .sc(CreatePermissionVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePermissionVersionRequest;
      output: CreatePermissionVersionResponse;
    };
    sdk: {
      input: CreatePermissionVersionCommandInput;
      output: CreatePermissionVersionCommandOutput;
    };
  };
}
