// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAccessTokenInput, DeleteAccessTokenOutput } from "../models/models_0";
import { DeleteAccessToken$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes an access token. This operation cannot be undone.
 *
 * > **Important:** Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 *
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
 *
 * You don't have permission to perform this operation. Check your IAM permissions and try again.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request conflicts with the current state of the resource. This can occur when trying to modify a resource that is not in a valid state for the requested operation.
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
export class DeleteAccessTokenCommand extends command<DeleteAccessTokenCommandInput, DeleteAccessTokenCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAccessToken",
  DeleteAccessToken$
) {
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
