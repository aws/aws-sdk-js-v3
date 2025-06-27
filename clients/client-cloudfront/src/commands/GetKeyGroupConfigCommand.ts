// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetKeyGroupConfigRequest, GetKeyGroupConfigResult } from "../models/models_1";
import { de_GetKeyGroupConfigCommand, se_GetKeyGroupConfigCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetKeyGroupConfigCommand}.
 */
export interface GetKeyGroupConfigCommandInput extends GetKeyGroupConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetKeyGroupConfigCommand}.
 */
export interface GetKeyGroupConfigCommandOutput extends GetKeyGroupConfigResult, __MetadataBearer {}

/**
 * <p>Gets a key group configuration.</p> <p>To get a key group configuration, you must provide the key group's identifier. If the key group is referenced in a distribution's cache behavior, you can get the key group's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the key group is not referenced in a cache behavior, you can get the identifier using <code>ListKeyGroups</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetKeyGroupConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetKeyGroupConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // GetKeyGroupConfigRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetKeyGroupConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetKeyGroupConfigResult
 * //   KeyGroupConfig: { // KeyGroupConfig
 * //     Name: "STRING_VALUE", // required
 * //     Items: [ // PublicKeyIdList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     Comment: "STRING_VALUE",
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetKeyGroupConfigCommandInput - {@link GetKeyGroupConfigCommandInput}
 * @returns {@link GetKeyGroupConfigCommandOutput}
 * @see {@link GetKeyGroupConfigCommandInput} for command's `input` shape.
 * @see {@link GetKeyGroupConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link NoSuchResource} (client fault)
 *  <p>A resource that was specified is not valid.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class GetKeyGroupConfigCommand extends $Command
  .classBuilder<
    GetKeyGroupConfigCommandInput,
    GetKeyGroupConfigCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Cloudfront2020_05_31", "GetKeyGroupConfig", {})
  .n("CloudFrontClient", "GetKeyGroupConfigCommand")
  .f(void 0, void 0)
  .ser(se_GetKeyGroupConfigCommand)
  .de(de_GetKeyGroupConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetKeyGroupConfigRequest;
      output: GetKeyGroupConfigResult;
    };
    sdk: {
      input: GetKeyGroupConfigCommandInput;
      output: GetKeyGroupConfigCommandOutput;
    };
  };
}
