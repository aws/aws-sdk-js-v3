// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateOutpostResolverRequest, CreateOutpostResolverResponse } from "../models/models_0";
import type {
  Route53ResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53ResolverClient";
import { CreateOutpostResolver } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateOutpostResolverCommand}.
 */
export interface CreateOutpostResolverCommandInput extends CreateOutpostResolverRequest {}
/**
 * @public
 *
 * The output of {@link CreateOutpostResolverCommand}.
 */
export interface CreateOutpostResolverCommandOutput extends CreateOutpostResolverResponse, __MetadataBearer {}

/**
 * <p>Creates a Route 53 Resolver on an Outpost.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, CreateOutpostResolverCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, CreateOutpostResolverCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // CreateOutpostResolverRequest
 *   CreatorRequestId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   InstanceCount: Number("int"),
 *   PreferredInstanceType: "STRING_VALUE", // required
 *   OutpostArn: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateOutpostResolverCommand(input);
 * const response = await client.send(command);
 * // { // CreateOutpostResolverResponse
 * //   OutpostResolver: { // OutpostResolver
 * //     Arn: "STRING_VALUE",
 * //     CreationTime: "STRING_VALUE",
 * //     ModificationTime: "STRING_VALUE",
 * //     CreatorRequestId: "STRING_VALUE",
 * //     Id: "STRING_VALUE",
 * //     InstanceCount: Number("int"),
 * //     PreferredInstanceType: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Status: "CREATING" || "OPERATIONAL" || "UPDATING" || "DELETING" || "ACTION_NEEDED" || "FAILED_CREATION" || "FAILED_DELETION",
 * //     StatusMessage: "STRING_VALUE",
 * //     OutpostArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateOutpostResolverCommandInput - {@link CreateOutpostResolverCommandInput}
 * @returns {@link CreateOutpostResolverCommandOutput}
 * @see {@link CreateOutpostResolverCommandInput} for command's `input` shape.
 * @see {@link CreateOutpostResolverCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The current account doesn't have the IAM permissions required to perform the specified Resolver operation.</p>
 *          <p>This error can also be thrown when a customer has reached the 5120 character limit for a
 * 			resource policy for CloudWatch Logs.</p>
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *  <p>We encountered an unknown error. Try again in a few minutes.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Fulfilling the request would cause one or more quotas to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Try again in a few minutes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>You have provided an invalid command. If you ran the <code>UpdateFirewallDomains</code> request. supported values are <code>ADD</code>,
 * 			<code>REMOVE</code>, or <code>REPLACE</code> a domain.</p>
 *
 * @throws {@link Route53ResolverServiceException}
 * <p>Base exception class for all service exceptions from Route53Resolver service.</p>
 *
 *
 * @public
 */
export class CreateOutpostResolverCommand extends $Command
  .classBuilder<
    CreateOutpostResolverCommandInput,
    CreateOutpostResolverCommandOutput,
    Route53ResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Resolver", "CreateOutpostResolver", {})
  .n("Route53ResolverClient", "CreateOutpostResolverCommand")
  .sc(CreateOutpostResolver)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateOutpostResolverRequest;
      output: CreateOutpostResolverResponse;
    };
    sdk: {
      input: CreateOutpostResolverCommandInput;
      output: CreateOutpostResolverCommandOutput;
    };
  };
}
