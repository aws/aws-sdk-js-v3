// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateGroupRequest, CreateGroupResponse } from "../models/models_0";
import { de_CreateGroupCommand, se_CreateGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateGroupCommand}.
 */
export interface CreateGroupCommandInput extends CreateGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateGroupCommand}.
 */
export interface CreateGroupCommandOutput extends CreateGroupResponse, __MetadataBearer {}

/**
 * Creates a group. You may provide the initial version of the group or use ''CreateGroupVersion'' at a later time. Tip: You can use the ''gg_group_setup'' package (https://github.com/awslabs/aws-greengrass-group-setup) as a library or command-line application to create and deploy Greengrass groups.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateGroupCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateGroupCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // CreateGroupRequest
 *   AmznClientToken: "STRING_VALUE",
 *   InitialVersion: { // GroupVersion
 *     ConnectorDefinitionVersionArn: "STRING_VALUE",
 *     CoreDefinitionVersionArn: "STRING_VALUE",
 *     DeviceDefinitionVersionArn: "STRING_VALUE",
 *     FunctionDefinitionVersionArn: "STRING_VALUE",
 *     LoggerDefinitionVersionArn: "STRING_VALUE",
 *     ResourceDefinitionVersionArn: "STRING_VALUE",
 *     SubscriptionDefinitionVersionArn: "STRING_VALUE",
 *   },
 *   Name: "STRING_VALUE", // required
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateGroupResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTimestamp: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   LastUpdatedTimestamp: "STRING_VALUE",
 * //   LatestVersion: "STRING_VALUE",
 * //   LatestVersionArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateGroupCommandInput - {@link CreateGroupCommandInput}
 * @returns {@link CreateGroupCommandOutput}
 * @see {@link CreateGroupCommandInput} for command's `input` shape.
 * @see {@link CreateGroupCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 * @public
 */
export class CreateGroupCommand extends $Command
  .classBuilder<
    CreateGroupCommandInput,
    CreateGroupCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Greengrass", "CreateGroup", {})
  .n("GreengrassClient", "CreateGroupCommand")
  .f(void 0, void 0)
  .ser(se_CreateGroupCommand)
  .de(de_CreateGroupCommand)
  .build() {}
