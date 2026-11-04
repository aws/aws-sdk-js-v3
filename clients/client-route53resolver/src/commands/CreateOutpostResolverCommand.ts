// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateOutpostResolverRequest, CreateOutpostResolverResponse } from "../models/models_0";
import { CreateOutpostResolver$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a Route 53 Resolver on an Outpost.
 *
 * > **Note:** This operation applies to first-generation Outposts only. On second-generation Outposts, Resolver is enabled by default and managed automatically by Amazon Web Services, so you don't need to create it.
 *
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
 *
 * The current account doesn't have the IAM permissions required to perform the specified Resolver operation.
 *
 * This error can also be thrown when a customer has reached the 5120 character limit for a resource policy for CloudWatch Logs.
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *
 * We encountered an unknown error. Try again in a few minutes.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource doesn't exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Fulfilling the request would cause one or more quotas to be exceeded.
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
export class CreateOutpostResolverCommand extends command<CreateOutpostResolverCommandInput, CreateOutpostResolverCommandOutput>(
  _ep0,
  _mw0,
  "CreateOutpostResolver",
  CreateOutpostResolver$
) {
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
