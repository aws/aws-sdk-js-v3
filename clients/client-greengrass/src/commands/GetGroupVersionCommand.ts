// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetGroupVersionRequest, GetGroupVersionResponse } from "../models/models_0";
import { de_GetGroupVersionCommand, se_GetGroupVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetGroupVersionCommand}.
 */
export interface GetGroupVersionCommandInput extends GetGroupVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetGroupVersionCommand}.
 */
export interface GetGroupVersionCommandOutput extends GetGroupVersionResponse, __MetadataBearer {}

/**
 * Retrieves information about a group version.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetGroupVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetGroupVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // GetGroupVersionRequest
 *   GroupId: "STRING_VALUE", // required
 *   GroupVersionId: "STRING_VALUE", // required
 * };
 * const command = new GetGroupVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetGroupVersionResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTimestamp: "STRING_VALUE",
 * //   Definition: { // GroupVersion
 * //     ConnectorDefinitionVersionArn: "STRING_VALUE",
 * //     CoreDefinitionVersionArn: "STRING_VALUE",
 * //     DeviceDefinitionVersionArn: "STRING_VALUE",
 * //     FunctionDefinitionVersionArn: "STRING_VALUE",
 * //     LoggerDefinitionVersionArn: "STRING_VALUE",
 * //     ResourceDefinitionVersionArn: "STRING_VALUE",
 * //     SubscriptionDefinitionVersionArn: "STRING_VALUE",
 * //   },
 * //   Id: "STRING_VALUE",
 * //   Version: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetGroupVersionCommandInput - {@link GetGroupVersionCommandInput}
 * @returns {@link GetGroupVersionCommandOutput}
 * @see {@link GetGroupVersionCommandInput} for command's `input` shape.
 * @see {@link GetGroupVersionCommandOutput} for command's `response` shape.
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
export class GetGroupVersionCommand extends $Command
  .classBuilder<
    GetGroupVersionCommandInput,
    GetGroupVersionCommandOutput,
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
  .s("Greengrass", "GetGroupVersion", {})
  .n("GreengrassClient", "GetGroupVersionCommand")
  .f(void 0, void 0)
  .ser(se_GetGroupVersionCommand)
  .de(de_GetGroupVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGroupVersionRequest;
      output: GetGroupVersionResponse;
    };
    sdk: {
      input: GetGroupVersionCommandInput;
      output: GetGroupVersionCommandOutput;
    };
  };
}
