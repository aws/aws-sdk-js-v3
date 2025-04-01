// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateCoreDefinitionRequest, CreateCoreDefinitionResponse } from "../models/models_0";
import { de_CreateCoreDefinitionCommand, se_CreateCoreDefinitionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCoreDefinitionCommand}.
 */
export interface CreateCoreDefinitionCommandInput extends CreateCoreDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link CreateCoreDefinitionCommand}.
 */
export interface CreateCoreDefinitionCommandOutput extends CreateCoreDefinitionResponse, __MetadataBearer {}

/**
 * Creates a core definition. You may provide the initial version of the core definition now or use ''CreateCoreDefinitionVersion'' at a later time. Greengrass groups must each contain exactly one Greengrass core.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateCoreDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateCoreDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // CreateCoreDefinitionRequest
 *   AmznClientToken: "STRING_VALUE",
 *   InitialVersion: { // CoreDefinitionVersion
 *     Cores: [ // __listOfCore
 *       { // Core
 *         CertificateArn: "STRING_VALUE", // required
 *         Id: "STRING_VALUE", // required
 *         SyncShadow: true || false,
 *         ThingArn: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   Name: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateCoreDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // CreateCoreDefinitionResponse
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
 * @param CreateCoreDefinitionCommandInput - {@link CreateCoreDefinitionCommandInput}
 * @returns {@link CreateCoreDefinitionCommandOutput}
 * @see {@link CreateCoreDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateCoreDefinitionCommandOutput} for command's `response` shape.
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
export class CreateCoreDefinitionCommand extends $Command
  .classBuilder<
    CreateCoreDefinitionCommandInput,
    CreateCoreDefinitionCommandOutput,
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
  .s("Greengrass", "CreateCoreDefinition", {})
  .n("GreengrassClient", "CreateCoreDefinitionCommand")
  .f(void 0, void 0)
  .ser(se_CreateCoreDefinitionCommand)
  .de(de_CreateCoreDefinitionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCoreDefinitionRequest;
      output: CreateCoreDefinitionResponse;
    };
    sdk: {
      input: CreateCoreDefinitionCommandInput;
      output: CreateCoreDefinitionCommandOutput;
    };
  };
}
