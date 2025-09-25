// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateEntitlementRequest, CreateEntitlementResult } from "../models/models_0";
import { CreateEntitlement } from "../schemas/schemas_13_Entitlement";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEntitlementCommand}.
 */
export interface CreateEntitlementCommandInput extends CreateEntitlementRequest {}
/**
 * @public
 *
 * The output of {@link CreateEntitlementCommand}.
 */
export interface CreateEntitlementCommandOutput extends CreateEntitlementResult, __MetadataBearer {}

/**
 * <p>Creates a new entitlement. Entitlements control access to specific applications within
 *             a stack, based on user attributes. Entitlements apply to SAML 2.0 federated user
 *             identities. Amazon AppStream 2.0 user pool and streaming URL users are entitled to all
 *             applications in a stack. Entitlements don't apply to the desktop stream view
 *             application, or to applications managed by a dynamic app provider using the Dynamic
 *             Application Framework.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, CreateEntitlementCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, CreateEntitlementCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // CreateEntitlementRequest
 *   Name: "STRING_VALUE", // required
 *   StackName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   AppVisibility: "ALL" || "ASSOCIATED", // required
 *   Attributes: [ // EntitlementAttributeList // required
 *     { // EntitlementAttribute
 *       Name: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateEntitlementCommand(input);
 * const response = await client.send(command);
 * // { // CreateEntitlementResult
 * //   Entitlement: { // Entitlement
 * //     Name: "STRING_VALUE", // required
 * //     StackName: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     AppVisibility: "ALL" || "ASSOCIATED", // required
 * //     Attributes: [ // EntitlementAttributeList // required
 * //       { // EntitlementAttribute
 * //         Name: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateEntitlementCommandInput - {@link CreateEntitlementCommandInput}
 * @returns {@link CreateEntitlementCommandOutput}
 * @see {@link CreateEntitlementCommandInput} for command's `input` shape.
 * @see {@link CreateEntitlementCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link EntitlementAlreadyExistsException} (client fault)
 *  <p>The entitlement already exists.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested limit exceeds the permitted limit for an account.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 *
 * @public
 */
export class CreateEntitlementCommand extends $Command
  .classBuilder<
    CreateEntitlementCommandInput,
    CreateEntitlementCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "CreateEntitlement", {})
  .n("AppStreamClient", "CreateEntitlementCommand")
  .sc(CreateEntitlement)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEntitlementRequest;
      output: CreateEntitlementResult;
    };
    sdk: {
      input: CreateEntitlementCommandInput;
      output: CreateEntitlementCommandOutput;
    };
  };
}
