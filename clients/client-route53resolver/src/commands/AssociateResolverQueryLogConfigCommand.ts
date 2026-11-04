// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  AssociateResolverQueryLogConfigRequest,
  AssociateResolverQueryLogConfigResponse,
} from "../models/models_0";
import { AssociateResolverQueryLogConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateResolverQueryLogConfigCommand}.
 */
export interface AssociateResolverQueryLogConfigCommandInput extends AssociateResolverQueryLogConfigRequest {}
/**
 * @public
 *
 * The output of {@link AssociateResolverQueryLogConfigCommand}.
 */
export interface AssociateResolverQueryLogConfigCommandOutput extends AssociateResolverQueryLogConfigResponse, __MetadataBearer {}

/**
 * Associates an Amazon VPC with a specified query logging configuration. Route 53 Resolver logs DNS queries that originate in all of the Amazon VPCs that are associated with a specified query logging configuration. To associate more than one VPC with a configuration, submit one `AssociateResolverQueryLogConfig` request for each VPC.
 *
 * > **Note:** The VPCs that you associate with a query logging configuration must be in the same Region as the configuration.
 *
 * To remove a VPC from a query logging configuration, see [DisassociateResolverQueryLogConfig](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, AssociateResolverQueryLogConfigCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, AssociateResolverQueryLogConfigCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // AssociateResolverQueryLogConfigRequest
 *   ResolverQueryLogConfigId: "STRING_VALUE", // required
 *   ResourceId: "STRING_VALUE", // required
 * };
 * const command = new AssociateResolverQueryLogConfigCommand(input);
 * const response = await client.send(command);
 * // { // AssociateResolverQueryLogConfigResponse
 * //   ResolverQueryLogConfigAssociation: { // ResolverQueryLogConfigAssociation
 * //     Id: "STRING_VALUE",
 * //     ResolverQueryLogConfigId: "STRING_VALUE",
 * //     ResourceId: "STRING_VALUE",
 * //     Status: "CREATING" || "ACTIVE" || "ACTION_NEEDED" || "DELETING" || "FAILED",
 * //     Error: "NONE" || "DESTINATION_NOT_FOUND" || "ACCESS_DENIED" || "INTERNAL_SERVICE_ERROR",
 * //     ErrorMessage: "STRING_VALUE",
 * //     CreationTime: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateResolverQueryLogConfigCommandInput - {@link AssociateResolverQueryLogConfigCommandInput}
 * @returns {@link AssociateResolverQueryLogConfigCommandOutput}
 * @see {@link AssociateResolverQueryLogConfigCommandInput} for command's `input` shape.
 * @see {@link AssociateResolverQueryLogConfigCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The current account doesn't have the IAM permissions required to perform the specified Resolver operation.
 *
 * This error can also be thrown when a customer has reached the 5120 character limit for a resource policy for CloudWatch Logs.
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *
 * We encountered an unknown error. Try again in a few minutes.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters in this request are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is invalid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request caused one or more limits to be exceeded.
 *
 * @throws {@link ResourceExistsException} (client fault)
 *
 * The resource that you tried to create already exists.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled. Try again in a few minutes.
 *
 * @throws {@link Route53ResolverServiceException}
 *
 * Base exception class for all service exceptions from Route53Resolver service.
 *
 * @public
 */
export class AssociateResolverQueryLogConfigCommand extends command<AssociateResolverQueryLogConfigCommandInput, AssociateResolverQueryLogConfigCommandOutput>(
  _ep0,
  _mw0,
  "AssociateResolverQueryLogConfig",
  AssociateResolverQueryLogConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateResolverQueryLogConfigRequest;
      output: AssociateResolverQueryLogConfigResponse;
    };
    sdk: {
      input: AssociateResolverQueryLogConfigCommandInput;
      output: AssociateResolverQueryLogConfigCommandOutput;
    };
  };
}
