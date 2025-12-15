// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import type { CreateCoreDefinitionVersionRequest, CreateCoreDefinitionVersionResponse } from "../models/models_0";
import { CreateCoreDefinitionVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCoreDefinitionVersionCommand}.
 */
export interface CreateCoreDefinitionVersionCommandInput extends CreateCoreDefinitionVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateCoreDefinitionVersionCommand}.
 */
export interface CreateCoreDefinitionVersionCommandOutput
  extends CreateCoreDefinitionVersionResponse,
    __MetadataBearer {}

/**
 * Creates a version of a core definition that has already been defined. Greengrass groups must each contain exactly one Greengrass core.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateCoreDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateCoreDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // CreateCoreDefinitionVersionRequest
 *   AmznClientToken: "STRING_VALUE",
 *   CoreDefinitionId: "STRING_VALUE", // required
 *   Cores: [ // __listOfCore
 *     { // Core
 *       CertificateArn: "STRING_VALUE", // required
 *       Id: "STRING_VALUE", // required
 *       SyncShadow: true || false,
 *       ThingArn: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateCoreDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateCoreDefinitionVersionResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTimestamp: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Version: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCoreDefinitionVersionCommandInput - {@link CreateCoreDefinitionVersionCommandInput}
 * @returns {@link CreateCoreDefinitionVersionCommandOutput}
 * @see {@link CreateCoreDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link CreateCoreDefinitionVersionCommandOutput} for command's `response` shape.
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
export class CreateCoreDefinitionVersionCommand extends $Command
  .classBuilder<
    CreateCoreDefinitionVersionCommandInput,
    CreateCoreDefinitionVersionCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Greengrass", "CreateCoreDefinitionVersion", {})
  .n("GreengrassClient", "CreateCoreDefinitionVersionCommand")
  .sc(CreateCoreDefinitionVersion$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCoreDefinitionVersionRequest;
      output: CreateCoreDefinitionVersionResponse;
    };
    sdk: {
      input: CreateCoreDefinitionVersionCommandInput;
      output: CreateCoreDefinitionVersionCommandOutput;
    };
  };
}
