// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateGroupInput, UpdateGroupOutput } from "../models/models_0";
import { ResourceGroupsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsClient";
import { UpdateGroup } from "../schemas/schemas_3_Group";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateGroupCommand}.
 */
export interface UpdateGroupCommandInput extends UpdateGroupInput {}
/**
 * @public
 *
 * The output of {@link UpdateGroupCommand}.
 */
export interface UpdateGroupCommandOutput extends UpdateGroupOutput, __MetadataBearer {}

/**
 * <p>Updates the description for an existing group. You cannot update the name of a
 *             resource group.</p>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>resource-groups:UpdateGroup</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, UpdateGroupCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, UpdateGroupCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * // import type { ResourceGroupsClientConfig } from "@aws-sdk/client-resource-groups";
 * const config = {}; // type is ResourceGroupsClientConfig
 * const client = new ResourceGroupsClient(config);
 * const input = { // UpdateGroupInput
 *   GroupName: "STRING_VALUE",
 *   Group: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Criticality: Number("int"),
 *   Owner: "STRING_VALUE",
 *   DisplayName: "STRING_VALUE",
 * };
 * const command = new UpdateGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGroupOutput
 * //   Group: { // Group
 * //     GroupArn: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     Criticality: Number("int"),
 * //     Owner: "STRING_VALUE",
 * //     DisplayName: "STRING_VALUE",
 * //     ApplicationTag: { // ApplicationTag
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateGroupCommandInput - {@link UpdateGroupCommandInput}
 * @returns {@link UpdateGroupCommandOutput}
 * @see {@link UpdateGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateGroupCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsClientResolvedConfig | config} for ResourceGroupsClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request includes one or more parameters that violate validation rules.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The caller isn't authorized to make the request. Check permissions.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal error occurred while processing the request. Try again later.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>The request uses an HTTP method that isn't allowed for the specified resource.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the specified resources don't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>You've exceeded throttling limits by making too many requests in a period of
 *             time.</p>
 *
 * @throws {@link ResourceGroupsServiceException}
 * <p>Base exception class for all service exceptions from ResourceGroups service.</p>
 *
 *
 * @public
 */
export class UpdateGroupCommand extends $Command
  .classBuilder<
    UpdateGroupCommandInput,
    UpdateGroupCommandOutput,
    ResourceGroupsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResourceGroupsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Ardi", "UpdateGroup", {})
  .n("ResourceGroupsClient", "UpdateGroupCommand")
  .sc(UpdateGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateGroupInput;
      output: UpdateGroupOutput;
    };
    sdk: {
      input: UpdateGroupCommandInput;
      output: UpdateGroupCommandOutput;
    };
  };
}
