// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetCoreDefinitionVersionRequest, GetCoreDefinitionVersionResponse } from "../models/models_0";
import { de_GetCoreDefinitionVersionCommand, se_GetCoreDefinitionVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCoreDefinitionVersionCommand}.
 */
export interface GetCoreDefinitionVersionCommandInput extends GetCoreDefinitionVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetCoreDefinitionVersionCommand}.
 */
export interface GetCoreDefinitionVersionCommandOutput extends GetCoreDefinitionVersionResponse, __MetadataBearer {}

/**
 * Retrieves information about a core definition version.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetCoreDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetCoreDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GreengrassClient(config);
 * const input = { // GetCoreDefinitionVersionRequest
 *   CoreDefinitionId: "STRING_VALUE", // required
 *   CoreDefinitionVersionId: "STRING_VALUE", // required
 * };
 * const command = new GetCoreDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetCoreDefinitionVersionResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTimestamp: "STRING_VALUE",
 * //   Definition: { // CoreDefinitionVersion
 * //     Cores: [ // __listOfCore
 * //       { // Core
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
 * @param GetCoreDefinitionVersionCommandInput - {@link GetCoreDefinitionVersionCommandInput}
 * @returns {@link GetCoreDefinitionVersionCommandOutput}
 * @see {@link GetCoreDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link GetCoreDefinitionVersionCommandOutput} for command's `response` shape.
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
export class GetCoreDefinitionVersionCommand extends $Command
  .classBuilder<
    GetCoreDefinitionVersionCommandInput,
    GetCoreDefinitionVersionCommandOutput,
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
  .s("Greengrass", "GetCoreDefinitionVersion", {})
  .n("GreengrassClient", "GetCoreDefinitionVersionCommand")
  .f(void 0, void 0)
  .ser(se_GetCoreDefinitionVersionCommand)
  .de(de_GetCoreDefinitionVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCoreDefinitionVersionRequest;
      output: GetCoreDefinitionVersionResponse;
    };
    sdk: {
      input: GetCoreDefinitionVersionCommandInput;
      output: GetCoreDefinitionVersionCommandOutput;
    };
  };
}
