// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetAssociatedRoleRequest, GetAssociatedRoleResponse } from "../models/models_0";
import { de_GetAssociatedRoleCommand, se_GetAssociatedRoleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAssociatedRoleCommand}.
 */
export interface GetAssociatedRoleCommandInput extends GetAssociatedRoleRequest {}
/**
 * @public
 *
 * The output of {@link GetAssociatedRoleCommand}.
 */
export interface GetAssociatedRoleCommandOutput extends GetAssociatedRoleResponse, __MetadataBearer {}

/**
 * Retrieves the role associated with a particular group.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetAssociatedRoleCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetAssociatedRoleCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GreengrassClient(config);
 * const input = { // GetAssociatedRoleRequest
 *   GroupId: "STRING_VALUE", // required
 * };
 * const command = new GetAssociatedRoleCommand(input);
 * const response = await client.send(command);
 * // { // GetAssociatedRoleResponse
 * //   AssociatedAt: "STRING_VALUE",
 * //   RoleArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAssociatedRoleCommandInput - {@link GetAssociatedRoleCommandInput}
 * @returns {@link GetAssociatedRoleCommandOutput}
 * @see {@link GetAssociatedRoleCommandInput} for command's `input` shape.
 * @see {@link GetAssociatedRoleCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 * @public
 */
export class GetAssociatedRoleCommand extends $Command
  .classBuilder<
    GetAssociatedRoleCommandInput,
    GetAssociatedRoleCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Greengrass", "GetAssociatedRole", {})
  .n("GreengrassClient", "GetAssociatedRoleCommand")
  .f(void 0, void 0)
  .ser(se_GetAssociatedRoleCommand)
  .de(de_GetAssociatedRoleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAssociatedRoleRequest;
      output: GetAssociatedRoleResponse;
    };
    sdk: {
      input: GetAssociatedRoleCommandInput;
      output: GetAssociatedRoleCommandOutput;
    };
  };
}
