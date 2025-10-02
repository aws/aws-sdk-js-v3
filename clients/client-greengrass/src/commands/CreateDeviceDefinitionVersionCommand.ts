// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateDeviceDefinitionVersionRequest, CreateDeviceDefinitionVersionResponse } from "../models/models_0";
import {
  de_CreateDeviceDefinitionVersionCommand,
  se_CreateDeviceDefinitionVersionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDeviceDefinitionVersionCommand}.
 */
export interface CreateDeviceDefinitionVersionCommandInput extends CreateDeviceDefinitionVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateDeviceDefinitionVersionCommand}.
 */
export interface CreateDeviceDefinitionVersionCommandOutput
  extends CreateDeviceDefinitionVersionResponse,
    __MetadataBearer {}

/**
 * Creates a version of a device definition that has already been defined.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateDeviceDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateDeviceDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // CreateDeviceDefinitionVersionRequest
 *   AmznClientToken: "STRING_VALUE",
 *   DeviceDefinitionId: "STRING_VALUE", // required
 *   Devices: [ // __listOfDevice
 *     { // Device
 *       CertificateArn: "STRING_VALUE", // required
 *       Id: "STRING_VALUE", // required
 *       SyncShadow: true || false,
 *       ThingArn: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateDeviceDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateDeviceDefinitionVersionResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTimestamp: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Version: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDeviceDefinitionVersionCommandInput - {@link CreateDeviceDefinitionVersionCommandInput}
 * @returns {@link CreateDeviceDefinitionVersionCommandOutput}
 * @see {@link CreateDeviceDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link CreateDeviceDefinitionVersionCommandOutput} for command's `response` shape.
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
export class CreateDeviceDefinitionVersionCommand extends $Command
  .classBuilder<
    CreateDeviceDefinitionVersionCommandInput,
    CreateDeviceDefinitionVersionCommandOutput,
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
  .s("Greengrass", "CreateDeviceDefinitionVersion", {})
  .n("GreengrassClient", "CreateDeviceDefinitionVersionCommand")
  .f(void 0, void 0)
  .ser(se_CreateDeviceDefinitionVersionCommand)
  .de(de_CreateDeviceDefinitionVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDeviceDefinitionVersionRequest;
      output: CreateDeviceDefinitionVersionResponse;
    };
    sdk: {
      input: CreateDeviceDefinitionVersionCommandInput;
      output: CreateDeviceDefinitionVersionCommandOutput;
    };
  };
}
