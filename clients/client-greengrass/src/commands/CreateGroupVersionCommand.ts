// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateGroupVersionRequest, CreateGroupVersionResponse } from "../models/models_0";
import { CreateGroupVersion } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateGroupVersionCommand}.
 */
export interface CreateGroupVersionCommandInput extends CreateGroupVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateGroupVersionCommand}.
 */
export interface CreateGroupVersionCommandOutput extends CreateGroupVersionResponse, __MetadataBearer {}

/**
 * Creates a version of a group which has already been defined.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateGroupVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateGroupVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // CreateGroupVersionRequest
 *   AmznClientToken: "STRING_VALUE",
 *   ConnectorDefinitionVersionArn: "STRING_VALUE",
 *   CoreDefinitionVersionArn: "STRING_VALUE",
 *   DeviceDefinitionVersionArn: "STRING_VALUE",
 *   FunctionDefinitionVersionArn: "STRING_VALUE",
 *   GroupId: "STRING_VALUE", // required
 *   LoggerDefinitionVersionArn: "STRING_VALUE",
 *   ResourceDefinitionVersionArn: "STRING_VALUE",
 *   SubscriptionDefinitionVersionArn: "STRING_VALUE",
 * };
 * const command = new CreateGroupVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateGroupVersionResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTimestamp: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Version: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateGroupVersionCommandInput - {@link CreateGroupVersionCommandInput}
 * @returns {@link CreateGroupVersionCommandOutput}
 * @see {@link CreateGroupVersionCommandInput} for command's `input` shape.
 * @see {@link CreateGroupVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 *
 * @public
 */
export class CreateGroupVersionCommand extends $Command
  .classBuilder<
    CreateGroupVersionCommandInput,
    CreateGroupVersionCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Greengrass", "CreateGroupVersion", {})
  .n("GreengrassClient", "CreateGroupVersionCommand")
  .sc(CreateGroupVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateGroupVersionRequest;
      output: CreateGroupVersionResponse;
    };
    sdk: {
      input: CreateGroupVersionCommandInput;
      output: CreateGroupVersionCommandOutput;
    };
  };
}
