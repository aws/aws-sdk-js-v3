// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetDeviceDefinitionRequest, GetDeviceDefinitionResponse } from "../models/models_0";
import { de_GetDeviceDefinitionCommand, se_GetDeviceDefinitionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDeviceDefinitionCommand}.
 */
export interface GetDeviceDefinitionCommandInput extends GetDeviceDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link GetDeviceDefinitionCommand}.
 */
export interface GetDeviceDefinitionCommandOutput extends GetDeviceDefinitionResponse, __MetadataBearer {}

/**
 * Retrieves information about a device definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetDeviceDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetDeviceDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // GetDeviceDefinitionRequest
 *   DeviceDefinitionId: "STRING_VALUE", // required
 * };
 * const command = new GetDeviceDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // GetDeviceDefinitionResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTimestamp: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   LastUpdatedTimestamp: "STRING_VALUE",
 * //   LatestVersion: "STRING_VALUE",
 * //   LatestVersionArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDeviceDefinitionCommandInput - {@link GetDeviceDefinitionCommandInput}
 * @returns {@link GetDeviceDefinitionCommandOutput}
 * @see {@link GetDeviceDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetDeviceDefinitionCommandOutput} for command's `response` shape.
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
export class GetDeviceDefinitionCommand extends $Command
  .classBuilder<
    GetDeviceDefinitionCommandInput,
    GetDeviceDefinitionCommandOutput,
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
  .s("Greengrass", "GetDeviceDefinition", {})
  .n("GreengrassClient", "GetDeviceDefinitionCommand")
  .f(void 0, void 0)
  .ser(se_GetDeviceDefinitionCommand)
  .de(de_GetDeviceDefinitionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDeviceDefinitionRequest;
      output: GetDeviceDefinitionResponse;
    };
    sdk: {
      input: GetDeviceDefinitionCommandInput;
      output: GetDeviceDefinitionCommandOutput;
    };
  };
}
