// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { ListCodeSigningConfigsRequest, ListCodeSigningConfigsResponse } from "../models/models_0";
import { de_ListCodeSigningConfigsCommand, se_ListCodeSigningConfigsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCodeSigningConfigsCommand}.
 */
export interface ListCodeSigningConfigsCommandInput extends ListCodeSigningConfigsRequest {}
/**
 * @public
 *
 * The output of {@link ListCodeSigningConfigsCommand}.
 */
export interface ListCodeSigningConfigsCommandOutput extends ListCodeSigningConfigsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuring-codesigning.html">code
 *         signing configurations</a>. A request returns up to 10,000 configurations per
 *       call. You can use the <code>MaxItems</code> parameter to return fewer configurations per call. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListCodeSigningConfigsCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListCodeSigningConfigsCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // ListCodeSigningConfigsRequest
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListCodeSigningConfigsCommand(input);
 * const response = await client.send(command);
 * // { // ListCodeSigningConfigsResponse
 * //   NextMarker: "STRING_VALUE",
 * //   CodeSigningConfigs: [ // CodeSigningConfigList
 * //     { // CodeSigningConfig
 * //       CodeSigningConfigId: "STRING_VALUE", // required
 * //       CodeSigningConfigArn: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //       AllowedPublishers: { // AllowedPublishers
 * //         SigningProfileVersionArns: [ // SigningProfileVersionArns // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       CodeSigningPolicies: { // CodeSigningPolicies
 * //         UntrustedArtifactOnDeployment: "Warn" || "Enforce",
 * //       },
 * //       LastModified: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCodeSigningConfigsCommandInput - {@link ListCodeSigningConfigsCommandInput}
 * @returns {@link ListCodeSigningConfigsCommandOutput}
 * @see {@link ListCodeSigningConfigsCommandInput} for command's `input` shape.
 * @see {@link ListCodeSigningConfigsCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The Lambda service encountered an internal error.</p>
 *
 * @throws {@link LambdaServiceException}
 * <p>Base exception class for all service exceptions from Lambda service.</p>
 *
 * @public
 */
export class ListCodeSigningConfigsCommand extends $Command
  .classBuilder<
    ListCodeSigningConfigsCommandInput,
    ListCodeSigningConfigsCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGirApiService", "ListCodeSigningConfigs", {})
  .n("LambdaClient", "ListCodeSigningConfigsCommand")
  .f(void 0, void 0)
  .ser(se_ListCodeSigningConfigsCommand)
  .de(de_ListCodeSigningConfigsCommand)
  .build() {}
