// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisableDNSViewInput, DisableDNSViewOutput } from "../models/models_0";
import { DisableDNSView$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisableDNSViewCommand}.
 */
export interface DisableDNSViewCommandInput extends DisableDNSViewInput {}
/**
 * @public
 *
 * The output of {@link DisableDNSViewCommand}.
 */
export interface DisableDNSViewCommandOutput extends DisableDNSViewOutput, __MetadataBearer {}

/**
 * Disables a DNS view, preventing it from serving DNS queries.
 *
 * > **Important:** Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, DisableDNSViewCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, DisableDNSViewCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // DisableDNSViewInput
 *   dnsViewId: "STRING_VALUE", // required
 * };
 * const command = new DisableDNSViewCommand(input);
 * const response = await client.send(command);
 * // { // DisableDNSViewOutput
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   clientToken: "STRING_VALUE",
 * //   dnssecValidation: "ENABLED" || "DISABLED", // required
 * //   ednsClientSubnet: "ENABLED" || "DISABLED", // required
 * //   firewallRulesFailOpen: "ENABLED" || "DISABLED", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   globalResolverId: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   status: "CREATING" || "OPERATIONAL" || "UPDATING" || "ENABLING" || "DISABLING" || "DISABLED" || "DELETING", // required
 * // };
 *
 * ```
 *
 * @param DisableDNSViewCommandInput - {@link DisableDNSViewCommandInput}
 * @returns {@link DisableDNSViewCommandOutput}
 * @see {@link DisableDNSViewCommandInput} for command's `input` shape.
 * @see {@link DisableDNSViewCommandOutput} for command's `response` shape.
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
export class DisableDNSViewCommand extends command<DisableDNSViewCommandInput, DisableDNSViewCommandOutput>(
  _ep0,
  _mw0,
  "DisableDNSView",
  DisableDNSView$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableDNSViewInput;
      output: DisableDNSViewOutput;
    };
    sdk: {
      input: DisableDNSViewCommandInput;
      output: DisableDNSViewCommandOutput;
    };
  };
}
