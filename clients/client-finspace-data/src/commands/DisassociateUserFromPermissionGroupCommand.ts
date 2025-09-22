// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import {
  DisassociateUserFromPermissionGroupRequest,
  DisassociateUserFromPermissionGroupResponse,
} from "../models/models_0";
import { DisassociateUserFromPermissionGroup } from "../schemas/schemas_3_User";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateUserFromPermissionGroupCommand}.
 */
export interface DisassociateUserFromPermissionGroupCommandInput extends DisassociateUserFromPermissionGroupRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateUserFromPermissionGroupCommand}.
 */
export interface DisassociateUserFromPermissionGroupCommandOutput
  extends DisassociateUserFromPermissionGroupResponse,
    __MetadataBearer {}

/**
 * <p>Removes a user from a permission group.</p>
 *
 * @deprecated This method will be discontinued.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, DisassociateUserFromPermissionGroupCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, DisassociateUserFromPermissionGroupCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * // import type { FinspaceDataClientConfig } from "@aws-sdk/client-finspace-data";
 * const config = {}; // type is FinspaceDataClientConfig
 * const client = new FinspaceDataClient(config);
 * const input = { // DisassociateUserFromPermissionGroupRequest
 *   permissionGroupId: "STRING_VALUE", // required
 *   userId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DisassociateUserFromPermissionGroupCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateUserFromPermissionGroupResponse
 * //   statusCode: Number("int"),
 * // };
 *
 * ```
 *
 * @param DisassociateUserFromPermissionGroupCommandInput - {@link DisassociateUserFromPermissionGroupCommandInput}
 * @returns {@link DisassociateUserFromPermissionGroupCommandOutput}
 * @see {@link DisassociateUserFromPermissionGroupCommandInput} for command's `input` shape.
 * @see {@link DisassociateUserFromPermissionGroupCommandOutput} for command's `response` shape.
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
export class DisassociateUserFromPermissionGroupCommand extends $Command
  .classBuilder<
    DisassociateUserFromPermissionGroupCommandInput,
    DisassociateUserFromPermissionGroupCommandOutput,
    FinspaceDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceDataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHabaneroPublicAPI", "DisassociateUserFromPermissionGroup", {})
  .n("FinspaceDataClient", "DisassociateUserFromPermissionGroupCommand")
  .sc(DisassociateUserFromPermissionGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateUserFromPermissionGroupRequest;
      output: DisassociateUserFromPermissionGroupResponse;
    };
    sdk: {
      input: DisassociateUserFromPermissionGroupCommandInput;
      output: DisassociateUserFromPermissionGroupCommandOutput;
    };
  };
}
