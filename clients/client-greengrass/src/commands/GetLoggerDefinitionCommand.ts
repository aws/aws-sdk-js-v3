// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetLoggerDefinitionRequest, GetLoggerDefinitionResponse } from "../models/models_0";
import { de_GetLoggerDefinitionCommand, se_GetLoggerDefinitionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLoggerDefinitionCommand}.
 */
export interface GetLoggerDefinitionCommandInput extends GetLoggerDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link GetLoggerDefinitionCommand}.
 */
export interface GetLoggerDefinitionCommandOutput extends GetLoggerDefinitionResponse, __MetadataBearer {}

/**
 * Retrieves information about a logger definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetLoggerDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetLoggerDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GreengrassClient(config);
 * const input = { // GetLoggerDefinitionRequest
 *   LoggerDefinitionId: "STRING_VALUE", // required
 * };
 * const command = new GetLoggerDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // GetLoggerDefinitionResponse
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
 * @param GetLoggerDefinitionCommandInput - {@link GetLoggerDefinitionCommandInput}
 * @returns {@link GetLoggerDefinitionCommandOutput}
 * @see {@link GetLoggerDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetLoggerDefinitionCommandOutput} for command's `response` shape.
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
export class GetLoggerDefinitionCommand extends $Command
  .classBuilder<
    GetLoggerDefinitionCommandInput,
    GetLoggerDefinitionCommandOutput,
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
  .s("Greengrass", "GetLoggerDefinition", {})
  .n("GreengrassClient", "GetLoggerDefinitionCommand")
  .f(void 0, void 0)
  .ser(se_GetLoggerDefinitionCommand)
  .de(de_GetLoggerDefinitionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLoggerDefinitionRequest;
      output: GetLoggerDefinitionResponse;
    };
    sdk: {
      input: GetLoggerDefinitionCommandInput;
      output: GetLoggerDefinitionCommandOutput;
    };
  };
}
