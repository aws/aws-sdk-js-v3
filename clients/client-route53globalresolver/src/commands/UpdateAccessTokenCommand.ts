// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateAccessTokenInput, UpdateAccessTokenOutput } from "../models/models_0";
import type {
  Route53GlobalResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53GlobalResolverClient";
import { UpdateAccessToken$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAccessTokenCommand}.
 */
export interface UpdateAccessTokenCommandInput extends UpdateAccessTokenInput {}
/**
 * @public
 *
 * The output of {@link UpdateAccessTokenCommand}.
 */
export interface UpdateAccessTokenCommandOutput extends UpdateAccessTokenOutput, __MetadataBearer {}

/**
 * <p>Updates the configuration of an access token.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, UpdateAccessTokenCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, UpdateAccessTokenCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // UpdateAccessTokenInput
 *   accessTokenId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 * };
 * const command = new UpdateAccessTokenCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAccessTokenOutput
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateAccessTokenCommandInput - {@link UpdateAccessTokenCommandInput}
 * @returns {@link UpdateAccessTokenCommandOutput}
 * @see {@link UpdateAccessTokenCommandInput} for command's `input` shape.
 * @see {@link UpdateAccessTokenCommandOutput} for command's `response` shape.
 * @see {@link Route53GlobalResolverClientResolvedConfig | config} for Route53GlobalResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform this operation. Check your IAM permissions and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. This can occur when trying to modify a resource that is not in a valid state for the requested operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify the resource ID and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests. Wait a moment and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters are invalid. Check the parameter values and try again.</p>
 *
 * @throws {@link Route53GlobalResolverServiceException}
 * <p>Base exception class for all service exceptions from Route53GlobalResolver service.</p>
 *
 *
 * @public
 */
export class UpdateAccessTokenCommand extends $Command
  .classBuilder<
    UpdateAccessTokenCommandInput,
    UpdateAccessTokenCommandOutput,
    Route53GlobalResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53GlobalResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2DNSGlobalResolverCustomerAPI", "UpdateAccessToken", {})
  .n("Route53GlobalResolverClient", "UpdateAccessTokenCommand")
  .sc(UpdateAccessToken$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAccessTokenInput;
      output: UpdateAccessTokenOutput;
    };
    sdk: {
      input: UpdateAccessTokenCommandInput;
      output: UpdateAccessTokenCommandOutput;
    };
  };
}
