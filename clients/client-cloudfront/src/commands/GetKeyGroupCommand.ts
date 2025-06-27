// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetKeyGroupRequest, GetKeyGroupResult } from "../models/models_1";
import { de_GetKeyGroupCommand, se_GetKeyGroupCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetKeyGroupCommand}.
 */
export interface GetKeyGroupCommandInput extends GetKeyGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetKeyGroupCommand}.
 */
export interface GetKeyGroupCommandOutput extends GetKeyGroupResult, __MetadataBearer {}

/**
 * <p>Gets a key group, including the date and time when the key group was last modified.</p> <p>To get a key group, you must provide the key group's identifier. If the key group is referenced in a distribution's cache behavior, you can get the key group's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the key group is not referenced in a cache behavior, you can get the identifier using <code>ListKeyGroups</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetKeyGroupCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetKeyGroupCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // GetKeyGroupRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetKeyGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetKeyGroupResult
 * //   KeyGroup: { // KeyGroup
 * //     Id: "STRING_VALUE", // required
 * //     LastModifiedTime: new Date("TIMESTAMP"), // required
 * //     KeyGroupConfig: { // KeyGroupConfig
 * //       Name: "STRING_VALUE", // required
 * //       Items: [ // PublicKeyIdList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       Comment: "STRING_VALUE",
 * //     },
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetKeyGroupCommandInput - {@link GetKeyGroupCommandInput}
 * @returns {@link GetKeyGroupCommandOutput}
 * @see {@link GetKeyGroupCommandInput} for command's `input` shape.
 * @see {@link GetKeyGroupCommandOutput} for command's `response` shape.
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
export class GetKeyGroupCommand extends $Command
  .classBuilder<
    GetKeyGroupCommandInput,
    GetKeyGroupCommandOutput,
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
  .s("Cloudfront2020_05_31", "GetKeyGroup", {})
  .n("CloudFrontClient", "GetKeyGroupCommand")
  .f(void 0, void 0)
  .ser(se_GetKeyGroupCommand)
  .de(de_GetKeyGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetKeyGroupRequest;
      output: GetKeyGroupResult;
    };
    sdk: {
      input: GetKeyGroupCommandInput;
      output: GetKeyGroupCommandOutput;
    };
  };
}
