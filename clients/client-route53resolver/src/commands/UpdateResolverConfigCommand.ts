// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateResolverConfigRequest, UpdateResolverConfigResponse } from "../models/models_0";
import { UpdateResolverConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateResolverConfigCommand}.
 */
export interface UpdateResolverConfigCommandInput extends UpdateResolverConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateResolverConfigCommand}.
 */
export interface UpdateResolverConfigCommandOutput extends UpdateResolverConfigResponse, __MetadataBearer {}

/**
 * Updates the behavior configuration of Route 53 Resolver behavior for a single VPC from Amazon Virtual Private Cloud.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, UpdateResolverConfigCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, UpdateResolverConfigCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // UpdateResolverConfigRequest
 *   ResourceId: "STRING_VALUE", // required
 *   AutodefinedReverseFlag: "ENABLE" || "DISABLE" || "USE_LOCAL_RESOURCE_SETTING", // required
 * };
 * const command = new UpdateResolverConfigCommand(input);
 * const response = await client.send(command);
 * // { // UpdateResolverConfigResponse
 * //   ResolverConfig: { // ResolverConfig
 * //     Id: "STRING_VALUE",
 * //     ResourceId: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     AutodefinedReverse: "ENABLING" || "ENABLED" || "DISABLING" || "DISABLED" || "UPDATING_TO_USE_LOCAL_RESOURCE_SETTING" || "USE_LOCAL_RESOURCE_SETTING",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateResolverConfigCommandInput - {@link UpdateResolverConfigCommandInput}
 * @returns {@link UpdateResolverConfigCommandOutput}
 * @see {@link UpdateResolverConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateResolverConfigCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource doesn't exist.
 *
 * @throws {@link ResourceUnavailableException} (client fault)
 *
 * The specified resource isn't available.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled. Try again in a few minutes.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * You have provided an invalid command. If you ran the `UpdateFirewallDomains` request. supported values are `ADD`, `REMOVE`, or `REPLACE` a domain.
 *
 * @throws {@link Route53ResolverServiceException}
 *
 * Base exception class for all service exceptions from Route53Resolver service.
 *
 * @public
 */
export class UpdateResolverConfigCommand extends command<UpdateResolverConfigCommandInput, UpdateResolverConfigCommandOutput>(
  _ep0,
  _mw0,
  "UpdateResolverConfig",
  UpdateResolverConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateResolverConfigRequest;
      output: UpdateResolverConfigResponse;
    };
    sdk: {
      input: UpdateResolverConfigCommandInput;
      output: UpdateResolverConfigCommandOutput;
    };
  };
}
