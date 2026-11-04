// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateHostedZoneInput, AssociateHostedZoneOutput } from "../models/models_0";
import { AssociateHostedZone$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateHostedZoneCommand}.
 */
export interface AssociateHostedZoneCommandInput extends AssociateHostedZoneInput {}
/**
 * @public
 *
 * The output of {@link AssociateHostedZoneCommand}.
 */
export interface AssociateHostedZoneCommandOutput extends AssociateHostedZoneOutput, __MetadataBearer {}

/**
 * Associates a Route 53 private hosted zone with a Route 53 Global Resolver resource. This allows the resolver to resolve DNS queries for the private hosted zone from anywhere globally.
 *
 * > **Important:** Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, AssociateHostedZoneCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, AssociateHostedZoneCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // AssociateHostedZoneInput
 *   hostedZoneId: "STRING_VALUE", // required
 *   resourceArn: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 * };
 * const command = new AssociateHostedZoneCommand(input);
 * const response = await client.send(command);
 * // { // AssociateHostedZoneOutput
 * //   id: "STRING_VALUE", // required
 * //   resourceArn: "STRING_VALUE", // required
 * //   hostedZoneId: "STRING_VALUE", // required
 * //   hostedZoneName: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   status: "CREATING" || "OPERATIONAL" || "DELETING", // required
 * // };
 *
 * ```
 *
 * @param AssociateHostedZoneCommandInput - {@link AssociateHostedZoneCommandInput}
 * @returns {@link AssociateHostedZoneCommandOutput}
 * @see {@link AssociateHostedZoneCommandInput} for command's `input` shape.
 * @see {@link AssociateHostedZoneCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request would exceed one or more service quotas. Check your current usage and quotas, then try again.
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
export class AssociateHostedZoneCommand extends command<AssociateHostedZoneCommandInput, AssociateHostedZoneCommandOutput>(
  _ep0,
  _mw0,
  "AssociateHostedZone",
  AssociateHostedZone$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateHostedZoneInput;
      output: AssociateHostedZoneOutput;
    };
    sdk: {
      input: AssociateHostedZoneCommandInput;
      output: AssociateHostedZoneCommandOutput;
    };
  };
}
