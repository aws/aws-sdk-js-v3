// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DisassociateResolverQueryLogConfigRequest,
  DisassociateResolverQueryLogConfigResponse,
} from "../models/models_0";
import { DisassociateResolverQueryLogConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateResolverQueryLogConfigCommand}.
 */
export interface DisassociateResolverQueryLogConfigCommandInput extends DisassociateResolverQueryLogConfigRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateResolverQueryLogConfigCommand}.
 */
export interface DisassociateResolverQueryLogConfigCommandOutput extends DisassociateResolverQueryLogConfigResponse, __MetadataBearer {}

/**
 * Disassociates a VPC from a query logging configuration.
 *
 * > **Note:**
 * >
 * > Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, VPCs can be disassociated from the configuration in the following ways:
 * >
 * > - The accounts that you shared the configuration with can disassociate VPCs from the configuration.
 * > - You can stop sharing the configuration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, DisassociateResolverQueryLogConfigCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, DisassociateResolverQueryLogConfigCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // DisassociateResolverQueryLogConfigRequest
 *   ResolverQueryLogConfigId: "STRING_VALUE", // required
 *   ResourceId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateResolverQueryLogConfigCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateResolverQueryLogConfigResponse
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
 * @param DisassociateResolverQueryLogConfigCommandInput - {@link DisassociateResolverQueryLogConfigCommandInput}
 * @returns {@link DisassociateResolverQueryLogConfigCommandOutput}
 * @see {@link DisassociateResolverQueryLogConfigCommandInput} for command's `input` shape.
 * @see {@link DisassociateResolverQueryLogConfigCommandOutput} for command's `response` shape.
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
export class DisassociateResolverQueryLogConfigCommand extends command<DisassociateResolverQueryLogConfigCommandInput, DisassociateResolverQueryLogConfigCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateResolverQueryLogConfig",
  DisassociateResolverQueryLogConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateResolverQueryLogConfigRequest;
      output: DisassociateResolverQueryLogConfigResponse;
    };
    sdk: {
      input: DisassociateResolverQueryLogConfigCommandInput;
      output: DisassociateResolverQueryLogConfigCommandOutput;
    };
  };
}
