// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteAccessTokenInput, DeleteAccessTokenOutput } from "../models/models_0";
import type {
  Route53GlobalResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53GlobalResolverClient";
import { DeleteAccessToken } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAccessTokenCommand}.
 */
export interface DeleteAccessTokenCommandInput extends DeleteAccessTokenInput {}
/**
 * @public
 *
 * The output of {@link DeleteAccessTokenCommand}.
 */
export interface DeleteAccessTokenCommandOutput extends DeleteAccessTokenOutput, __MetadataBearer {}

/**
 * <p>Deletes an access token. This operation cannot be undone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, DeleteAccessTokenCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, DeleteAccessTokenCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // DeleteAccessTokenInput
 *   accessTokenId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAccessTokenCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAccessTokenOutput
 * //   id: "STRING_VALUE", // required
 * //   status: "CREATING" || "OPERATIONAL" || "DELETING", // required
 * //   deletedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param DeleteAccessTokenCommandInput - {@link DeleteAccessTokenCommandInput}
 * @returns {@link DeleteAccessTokenCommandOutput}
 * @see {@link DeleteAccessTokenCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessTokenCommandOutput} for command's `response` shape.
 * @see {@link Route53GlobalResolverClientResolvedConfig | config} for Route53GlobalResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform this operation. Check your IAM permissions and try again.</p>
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
export class DeleteAccessTokenCommand extends $Command
  .classBuilder<
    DeleteAccessTokenCommandInput,
    DeleteAccessTokenCommandOutput,
    Route53GlobalResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53GlobalResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2DNSGlobalResolverCustomerAPI", "DeleteAccessToken", {})
  .n("Route53GlobalResolverClient", "DeleteAccessTokenCommand")
  .sc(DeleteAccessToken)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccessTokenInput;
      output: DeleteAccessTokenOutput;
    };
    sdk: {
      input: DeleteAccessTokenCommandInput;
      output: DeleteAccessTokenCommandOutput;
    };
  };
}
