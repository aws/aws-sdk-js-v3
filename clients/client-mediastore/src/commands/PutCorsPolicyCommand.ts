// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { PutCorsPolicyInput, PutCorsPolicyOutput } from "../models/models_0";
import { de_PutCorsPolicyCommand, se_PutCorsPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutCorsPolicyCommand}.
 */
export interface PutCorsPolicyCommandInput extends PutCorsPolicyInput {}
/**
 * @public
 *
 * The output of {@link PutCorsPolicyCommand}.
 */
export interface PutCorsPolicyCommandOutput extends PutCorsPolicyOutput, __MetadataBearer {}

/**
 * <p>Sets the cross-origin resource sharing (CORS) configuration on a container so that
 *          the container can service cross-origin requests. For example, you might want to enable a
 *          request whose origin is http://www.example.com to access your AWS Elemental MediaStore
 *          container at my.example.container.com by using the browser's XMLHttpRequest
 *          capability.</p>
 *          <p>To enable CORS on a container, you attach a CORS policy to the container. In the CORS
 *          policy, you configure rules that identify origins and the HTTP methods that can be executed
 *          on your container. The policy can contain up to 398,000 characters. You can add up to 100
 *          rules to a CORS policy. If more than one rule applies, the service uses the first
 *          applicable rule listed.</p>
 *          <p>To learn more about CORS, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/cors-policy.html">Cross-Origin Resource Sharing (CORS) in AWS Elemental MediaStore</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, PutCorsPolicyCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, PutCorsPolicyCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const input = { // PutCorsPolicyInput
 *   ContainerName: "STRING_VALUE", // required
 *   CorsPolicy: [ // CorsPolicy // required
 *     { // CorsRule
 *       AllowedOrigins: [ // AllowedOrigins // required
 *         "STRING_VALUE",
 *       ],
 *       AllowedMethods: [ // AllowedMethods
 *         "PUT" || "GET" || "DELETE" || "HEAD",
 *       ],
 *       AllowedHeaders: [ // AllowedHeaders // required
 *         "STRING_VALUE",
 *       ],
 *       MaxAgeSeconds: Number("int"),
 *       ExposeHeaders: [ // ExposeHeaders
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new PutCorsPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutCorsPolicyCommandInput - {@link PutCorsPolicyCommandInput}
 * @returns {@link PutCorsPolicyCommandOutput}
 * @see {@link PutCorsPolicyCommandInput} for command's `input` shape.
 * @see {@link PutCorsPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for MediaStoreClient's `config` shape.
 *
 * @throws {@link ContainerInUseException} (client fault)
 *  <p>The container that you specified in the request already exists or is being
 *          updated.</p>
 *
 * @throws {@link ContainerNotFoundException} (client fault)
 *  <p>The container that you specified in the request does not exist.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link MediaStoreServiceException}
 * <p>Base exception class for all service exceptions from MediaStore service.</p>
 *
 * @public
 */
export class PutCorsPolicyCommand extends $Command
  .classBuilder<
    PutCorsPolicyCommandInput,
    PutCorsPolicyCommandOutput,
    MediaStoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MediaStoreClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaStore_20170901", "PutCorsPolicy", {})
  .n("MediaStoreClient", "PutCorsPolicyCommand")
  .f(void 0, void 0)
  .ser(se_PutCorsPolicyCommand)
  .de(de_PutCorsPolicyCommand)
  .build() {}
