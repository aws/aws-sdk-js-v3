// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteGroupInput, DeleteGroupOutput } from "../models/models_0";
import { ResourceGroupsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsClient";
import { DeleteGroup } from "../schemas/schemas_3_Group";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteGroupCommand}.
 */
export interface DeleteGroupCommandInput extends DeleteGroupInput {}
/**
 * @public
 *
 * The output of {@link DeleteGroupCommand}.
 */
export interface DeleteGroupCommandOutput extends DeleteGroupOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified resource group. Deleting a resource group does not delete any
 *             resources that are members of the group; it only deletes the group structure.</p>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>resource-groups:DeleteGroup</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, DeleteGroupCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, DeleteGroupCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * // import type { ResourceGroupsClientConfig } from "@aws-sdk/client-resource-groups";
 * const config = {}; // type is ResourceGroupsClientConfig
 * const client = new ResourceGroupsClient(config);
 * const input = { // DeleteGroupInput
 *   GroupName: "STRING_VALUE",
 *   Group: "STRING_VALUE",
 * };
 * const command = new DeleteGroupCommand(input);
 * const response = await client.send(command);
 * // { // DeleteGroupOutput
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
 * @param DeleteGroupCommandInput - {@link DeleteGroupCommandInput}
 * @returns {@link DeleteGroupCommandOutput}
 * @see {@link DeleteGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteGroupCommandOutput} for command's `response` shape.
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
export class DeleteGroupCommand extends $Command
  .classBuilder<
    DeleteGroupCommandInput,
    DeleteGroupCommandOutput,
    ResourceGroupsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResourceGroupsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Ardi", "DeleteGroup", {})
  .n("ResourceGroupsClient", "DeleteGroupCommand")
  .sc(DeleteGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteGroupInput;
      output: DeleteGroupOutput;
    };
    sdk: {
      input: DeleteGroupCommandInput;
      output: DeleteGroupCommandOutput;
    };
  };
}
