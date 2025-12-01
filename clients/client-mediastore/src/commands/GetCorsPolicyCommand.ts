// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import type { GetCorsPolicyInput, GetCorsPolicyOutput } from "../models/models_0";
import { GetCorsPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCorsPolicyCommand}.
 */
export interface GetCorsPolicyCommandInput extends GetCorsPolicyInput {}
/**
 * @public
 *
 * The output of {@link GetCorsPolicyCommand}.
 */
export interface GetCorsPolicyCommandOutput extends GetCorsPolicyOutput, __MetadataBearer {}

/**
 * <p>Returns the cross-origin resource sharing (CORS) configuration information that is
 *          set for the container.</p>
 *          <p>To use this operation, you must have permission to perform the
 *             <code>MediaStore:GetCorsPolicy</code> action. By default, the container owner has this
 *          permission and can grant it to others.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, GetCorsPolicyCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, GetCorsPolicyCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * // import type { MediaStoreClientConfig } from "@aws-sdk/client-mediastore";
 * const config = {}; // type is MediaStoreClientConfig
 * const client = new MediaStoreClient(config);
 * const input = { // GetCorsPolicyInput
 *   ContainerName: "STRING_VALUE", // required
 * };
 * const command = new GetCorsPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetCorsPolicyOutput
 * //   CorsPolicy: [ // CorsPolicy // required
 * //     { // CorsRule
 * //       AllowedOrigins: [ // AllowedOrigins // required
 * //         "STRING_VALUE",
 * //       ],
 * //       AllowedMethods: [ // AllowedMethods
 * //         "PUT" || "GET" || "DELETE" || "HEAD",
 * //       ],
 * //       AllowedHeaders: [ // AllowedHeaders // required
 * //         "STRING_VALUE",
 * //       ],
 * //       MaxAgeSeconds: Number("int"),
 * //       ExposeHeaders: [ // ExposeHeaders
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetCorsPolicyCommandInput - {@link GetCorsPolicyCommandInput}
 * @returns {@link GetCorsPolicyCommandOutput}
 * @see {@link GetCorsPolicyCommandInput} for command's `input` shape.
 * @see {@link GetCorsPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for MediaStoreClient's `config` shape.
 *
 * @throws {@link ContainerInUseException} (client fault)
 *  <p>The container that you specified in the request already exists or is being
 *          updated.</p>
 *
 * @throws {@link ContainerNotFoundException} (client fault)
 *  <p>The container that you specified in the request does not exist.</p>
 *
 * @throws {@link CorsPolicyNotFoundException} (client fault)
 *  <p>The CORS policy that you specified in the request does not exist.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link MediaStoreServiceException}
 * <p>Base exception class for all service exceptions from MediaStore service.</p>
 *
 *
 * @public
 */
export class GetCorsPolicyCommand extends $Command
  .classBuilder<
    GetCorsPolicyCommandInput,
    GetCorsPolicyCommandOutput,
    MediaStoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaStoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaStore_20170901", "GetCorsPolicy", {})
  .n("MediaStoreClient", "GetCorsPolicyCommand")
  .sc(GetCorsPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCorsPolicyInput;
      output: GetCorsPolicyOutput;
    };
    sdk: {
      input: GetCorsPolicyCommandInput;
      output: GetCorsPolicyCommandOutput;
    };
  };
}
