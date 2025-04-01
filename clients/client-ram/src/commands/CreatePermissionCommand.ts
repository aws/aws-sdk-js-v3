// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreatePermissionRequest, CreatePermissionResponse } from "../models/models_0";
import { de_CreatePermissionCommand, se_CreatePermissionCommand } from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePermissionCommand}.
 */
export interface CreatePermissionCommandInput extends CreatePermissionRequest {}
/**
 * @public
 *
 * The output of {@link CreatePermissionCommand}.
 */
export interface CreatePermissionCommandOutput extends CreatePermissionResponse, __MetadataBearer {}

/**
 * <p>Creates a customer managed permission for a specified resource type that you can attach to resource shares.
 *             It is created in the Amazon Web Services Region in which you call the operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, CreatePermissionCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, CreatePermissionCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const input = { // CreatePermissionRequest
 *   name: "STRING_VALUE", // required
 *   resourceType: "STRING_VALUE", // required
 *   policyTemplate: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreatePermissionCommand(input);
 * const response = await client.send(command);
 * // { // CreatePermissionResponse
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
 * @param CreatePermissionCommandInput - {@link CreatePermissionCommandInput}
 * @returns {@link CreatePermissionCommandOutput}
 * @see {@link CreatePermissionCommandInput} for command's `input` shape.
 * @see {@link CreatePermissionCommandOutput} for command's `response` shape.
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
 * @throws {@link MalformedPolicyTemplateException} (client fault)
 *  <p>The operation failed because the policy template that you provided isn't valid.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The operation failed because the requested operation isn't permitted.</p>
 *
 * @throws {@link PermissionAlreadyExistsException} (client fault)
 *  <p>The operation failed because a permission with the specified name already exists in
 *             the requested Amazon Web Services Region. Choose a different name.</p>
 *
 * @throws {@link PermissionLimitExceededException} (client fault)
 *  <p>The operation failed because it would exceed the maximum number of permissions you can
 *             create in each Amazon Web Services Region. To view the limits for your Amazon Web Services account, see the <a href="https://console.aws.amazon.com/servicequotas/home/services/ram/quotas">RAM page in the
 *                 Service Quotas console</a>.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The operation failed because the service could not respond to the request due to an
 *             internal problem. Try again later.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The operation failed because the service isn't available. Try again later.</p>
 *
 * @throws {@link RAMServiceException}
 * <p>Base exception class for all service exceptions from RAM service.</p>
 *
 *
 * @public
 */
export class CreatePermissionCommand extends $Command
  .classBuilder<
    CreatePermissionCommandInput,
    CreatePermissionCommandOutput,
    RAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonResourceSharing", "CreatePermission", {})
  .n("RAMClient", "CreatePermissionCommand")
  .f(void 0, void 0)
  .ser(se_CreatePermissionCommand)
  .de(de_CreatePermissionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePermissionRequest;
      output: CreatePermissionResponse;
    };
    sdk: {
      input: CreatePermissionCommandInput;
      output: CreatePermissionCommandOutput;
    };
  };
}
