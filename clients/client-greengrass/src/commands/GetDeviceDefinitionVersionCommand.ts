// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetDeviceDefinitionVersionRequest, GetDeviceDefinitionVersionResponse } from "../models/models_0";
import { de_GetDeviceDefinitionVersionCommand, se_GetDeviceDefinitionVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDeviceDefinitionVersionCommand}.
 */
export interface GetDeviceDefinitionVersionCommandInput extends GetDeviceDefinitionVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetDeviceDefinitionVersionCommand}.
 */
export interface GetDeviceDefinitionVersionCommandOutput extends GetDeviceDefinitionVersionResponse, __MetadataBearer {}

/**
 * Retrieves information about a device definition version.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetDeviceDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetDeviceDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // GetDeviceDefinitionVersionRequest
 *   DeviceDefinitionId: "STRING_VALUE", // required
 *   DeviceDefinitionVersionId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetDeviceDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetDeviceDefinitionVersionResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTimestamp: "STRING_VALUE",
 * //   Definition: { // DeviceDefinitionVersion
 * //     Devices: [ // __listOfDevice
 * //       { // Device
 * //         CertificateArn: "STRING_VALUE", // required
 * //         Id: "STRING_VALUE", // required
 * //         SyncShadow: true || false,
 * //         ThingArn: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   Id: "STRING_VALUE",
 * //   NextToken: "STRING_VALUE",
 * //   Version: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDeviceDefinitionVersionCommandInput - {@link GetDeviceDefinitionVersionCommandInput}
 * @returns {@link GetDeviceDefinitionVersionCommandOutput}
 * @see {@link GetDeviceDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link GetDeviceDefinitionVersionCommandOutput} for command's `response` shape.
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
export class GetDeviceDefinitionVersionCommand extends $Command
  .classBuilder<
    GetDeviceDefinitionVersionCommandInput,
    GetDeviceDefinitionVersionCommandOutput,
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
  .s("Greengrass", "GetDeviceDefinitionVersion", {})
  .n("GreengrassClient", "GetDeviceDefinitionVersionCommand")
  .f(void 0, void 0)
  .ser(se_GetDeviceDefinitionVersionCommand)
  .de(de_GetDeviceDefinitionVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDeviceDefinitionVersionRequest;
      output: GetDeviceDefinitionVersionResponse;
    };
    sdk: {
      input: GetDeviceDefinitionVersionCommandInput;
      output: GetDeviceDefinitionVersionCommandOutput;
    };
  };
}
