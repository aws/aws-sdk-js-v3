// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import type { AssociateUserToPermissionGroupRequest, AssociateUserToPermissionGroupResponse } from "../models/models_0";
import { AssociateUserToPermissionGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateUserToPermissionGroupCommand}.
 */
export interface AssociateUserToPermissionGroupCommandInput extends AssociateUserToPermissionGroupRequest {}
/**
 * @public
 *
 * The output of {@link AssociateUserToPermissionGroupCommand}.
 */
export interface AssociateUserToPermissionGroupCommandOutput
  extends AssociateUserToPermissionGroupResponse,
    __MetadataBearer {}

/**
 * <p>Adds a user to a permission group to grant permissions for actions a user can perform in FinSpace.</p>
 *
 * @deprecated This method will be discontinued.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, AssociateUserToPermissionGroupCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, AssociateUserToPermissionGroupCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * // import type { FinspaceDataClientConfig } from "@aws-sdk/client-finspace-data";
 * const config = {}; // type is FinspaceDataClientConfig
 * const client = new FinspaceDataClient(config);
 * const input = { // AssociateUserToPermissionGroupRequest
 *   permissionGroupId: "STRING_VALUE", // required
 *   userId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new AssociateUserToPermissionGroupCommand(input);
 * const response = await client.send(command);
 * // { // AssociateUserToPermissionGroupResponse
 * //   statusCode: Number("int"),
 * // };
 *
 * ```
 *
 * @param AssociateUserToPermissionGroupCommandInput - {@link AssociateUserToPermissionGroupCommandInput}
 * @returns {@link AssociateUserToPermissionGroupCommandOutput}
 * @see {@link AssociateUserToPermissionGroupCommandInput} for command's `input` shape.
 * @see {@link AssociateUserToPermissionGroupCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for FinspaceDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with an existing resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceDataServiceException}
 * <p>Base exception class for all service exceptions from FinspaceData service.</p>
 *
 *
 * @public
 */
export class AssociateUserToPermissionGroupCommand extends $Command
  .classBuilder<
    AssociateUserToPermissionGroupCommandInput,
    AssociateUserToPermissionGroupCommandOutput,
    FinspaceDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceDataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHabaneroPublicAPI", "AssociateUserToPermissionGroup", {})
  .n("FinspaceDataClient", "AssociateUserToPermissionGroupCommand")
  .sc(AssociateUserToPermissionGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateUserToPermissionGroupRequest;
      output: AssociateUserToPermissionGroupResponse;
    };
    sdk: {
      input: AssociateUserToPermissionGroupCommandInput;
      output: AssociateUserToPermissionGroupCommandOutput;
    };
  };
}
