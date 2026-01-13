// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import type { CreateDeviceDefinitionRequest, CreateDeviceDefinitionResponse } from "../models/models_0";
import { CreateDeviceDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDeviceDefinitionCommand}.
 */
export interface CreateDeviceDefinitionCommandInput extends CreateDeviceDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link CreateDeviceDefinitionCommand}.
 */
export interface CreateDeviceDefinitionCommandOutput extends CreateDeviceDefinitionResponse, __MetadataBearer {}

/**
 * Creates a device definition. You may provide the initial version of the device definition now or use ''CreateDeviceDefinitionVersion'' at a later time.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateDeviceDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateDeviceDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // CreateDeviceDefinitionRequest
 *   AmznClientToken: "STRING_VALUE",
 *   InitialVersion: { // DeviceDefinitionVersion
 *     Devices: [ // __listOfDevice
 *       { // Device
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
 * const command = new CreateDeviceDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // CreateDeviceDefinitionResponse
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
 * @param CreateDeviceDefinitionCommandInput - {@link CreateDeviceDefinitionCommandInput}
 * @returns {@link CreateDeviceDefinitionCommandOutput}
 * @see {@link CreateDeviceDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateDeviceDefinitionCommandOutput} for command's `response` shape.
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
export class CreateDeviceDefinitionCommand extends $Command
  .classBuilder<
    CreateDeviceDefinitionCommandInput,
    CreateDeviceDefinitionCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Greengrass", "CreateDeviceDefinition", {})
  .n("GreengrassClient", "CreateDeviceDefinitionCommand")
  .sc(CreateDeviceDefinition$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDeviceDefinitionRequest;
      output: CreateDeviceDefinitionResponse;
    };
    sdk: {
      input: CreateDeviceDefinitionCommandInput;
      output: CreateDeviceDefinitionCommandOutput;
    };
  };
}
