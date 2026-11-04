// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAccessTokenInput, GetAccessTokenOutput } from "../models/models_0";
import { GetAccessToken$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAccessTokenCommand}.
 */
export interface GetAccessTokenCommandInput extends GetAccessTokenInput {}
/**
 * @public
 *
 * The output of {@link GetAccessTokenCommand}.
 */
export interface GetAccessTokenCommandOutput extends GetAccessTokenOutput, __MetadataBearer {}

/**
 * Retrieves information about an access token.
 *
 * > **Important:** Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, GetAccessTokenCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, GetAccessTokenCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // GetAccessTokenInput
 *   accessTokenId: "STRING_VALUE", // required
 * };
 * const command = new GetAccessTokenCommand(input);
 * const response = await client.send(command);
 * // { // GetAccessTokenOutput
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   clientToken: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   dnsViewId: "STRING_VALUE", // required
 * //   expiresAt: new Date("TIMESTAMP"), // required
 * //   globalResolverId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE",
 * //   status: "CREATING" || "OPERATIONAL" || "DELETING", // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   value: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetAccessTokenCommandInput - {@link GetAccessTokenCommandInput}
 * @returns {@link GetAccessTokenCommandOutput}
 * @see {@link GetAccessTokenCommandInput} for command's `input` shape.
 * @see {@link GetAccessTokenCommandOutput} for command's `response` shape.
 * @see {@link Route53GlobalResolverClientResolvedConfig | config} for Route53GlobalResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have permission to perform this operation. Check your IAM permissions and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found. Verify the resource ID and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled due to too many requests. Wait a moment and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input parameters are invalid. Check the parameter values and try again.
 *
 * @throws {@link Route53GlobalResolverServiceException}
 *
 * Base exception class for all service exceptions from Route53GlobalResolver service.
 *
 * @public
 */
export class GetAccessTokenCommand extends command<GetAccessTokenCommandInput, GetAccessTokenCommandOutput>(
  _ep0,
  _mw0,
  "GetAccessToken",
  GetAccessToken$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccessTokenInput;
      output: GetAccessTokenOutput;
    };
    sdk: {
      input: GetAccessTokenCommandInput;
      output: GetAccessTokenCommandOutput;
    };
  };
}
