// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetResolverQueryLogConfigRequest, GetResolverQueryLogConfigResponse } from "../models/models_0";
import { GetResolverQueryLogConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetResolverQueryLogConfigCommand}.
 */
export interface GetResolverQueryLogConfigCommandInput extends GetResolverQueryLogConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetResolverQueryLogConfigCommand}.
 */
export interface GetResolverQueryLogConfigCommandOutput extends GetResolverQueryLogConfigResponse, __MetadataBearer {}

/**
 * Gets information about a specified Resolver query logging configuration, such as the number of VPCs that the configuration is logging queries for and the location that logs are sent to.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetResolverQueryLogConfigCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetResolverQueryLogConfigCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // GetResolverQueryLogConfigRequest
 *   ResolverQueryLogConfigId: "STRING_VALUE", // required
 * };
 * const command = new GetResolverQueryLogConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetResolverQueryLogConfigResponse
 * //   ResolverQueryLogConfig: { // ResolverQueryLogConfig
 * //     Id: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     Status: "CREATING" || "CREATED" || "DELETING" || "FAILED",
 * //     ShareStatus: "NOT_SHARED" || "SHARED_WITH_ME" || "SHARED_BY_ME",
 * //     AssociationCount: Number("int"),
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     DestinationArn: "STRING_VALUE",
 * //     CreatorRequestId: "STRING_VALUE",
 * //     CreationTime: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetResolverQueryLogConfigCommandInput - {@link GetResolverQueryLogConfigCommandInput}
 * @returns {@link GetResolverQueryLogConfigCommandOutput}
 * @see {@link GetResolverQueryLogConfigCommandInput} for command's `input` shape.
 * @see {@link GetResolverQueryLogConfigCommandOutput} for command's `response` shape.
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
export class GetResolverQueryLogConfigCommand extends command<GetResolverQueryLogConfigCommandInput, GetResolverQueryLogConfigCommandOutput>(
  _ep0,
  _mw0,
  "GetResolverQueryLogConfig",
  GetResolverQueryLogConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResolverQueryLogConfigRequest;
      output: GetResolverQueryLogConfigResponse;
    };
    sdk: {
      input: GetResolverQueryLogConfigCommandInput;
      output: GetResolverQueryLogConfigCommandOutput;
    };
  };
}
