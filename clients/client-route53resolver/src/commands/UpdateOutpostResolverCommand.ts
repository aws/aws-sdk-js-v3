// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateOutpostResolverRequest, UpdateOutpostResolverResponse } from "../models/models_0";
import { UpdateOutpostResolver$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateOutpostResolverCommand}.
 */
export interface UpdateOutpostResolverCommandInput extends UpdateOutpostResolverRequest {}
/**
 * @public
 *
 * The output of {@link UpdateOutpostResolverCommand}.
 */
export interface UpdateOutpostResolverCommandOutput extends UpdateOutpostResolverResponse, __MetadataBearer {}

/**
 * You can use `UpdateOutpostResolver` to update the instance count, type, or name of a Resolver on an Outpost.
 *
 * > **Note:** This operation applies to first-generation Outposts only. On second-generation Outposts, Resolver is managed automatically by Amazon Web Services and can't be updated directly.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, UpdateOutpostResolverCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, UpdateOutpostResolverCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // UpdateOutpostResolverRequest
 *   Id: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   InstanceCount: Number("int"),
 *   PreferredInstanceType: "STRING_VALUE",
 * };
 * const command = new UpdateOutpostResolverCommand(input);
 * const response = await client.send(command);
 * // { // UpdateOutpostResolverResponse
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
 * @param UpdateOutpostResolverCommandInput - {@link UpdateOutpostResolverCommandInput}
 * @returns {@link UpdateOutpostResolverCommandOutput}
 * @see {@link UpdateOutpostResolverCommandInput} for command's `input` shape.
 * @see {@link UpdateOutpostResolverCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The current account doesn't have the IAM permissions required to perform the specified Resolver operation.
 *
 * This error can also be thrown when a customer has reached the 5120 character limit for a resource policy for CloudWatch Logs.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The requested state transition isn't valid. For example, you can't delete a firewall domain list if it is in the process of being deleted, or you can't import domains into a domain list that is in the process of being deleted.
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
export class UpdateOutpostResolverCommand extends command<UpdateOutpostResolverCommandInput, UpdateOutpostResolverCommandOutput>(
  _ep0,
  _mw0,
  "UpdateOutpostResolver",
  UpdateOutpostResolver$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateOutpostResolverRequest;
      output: UpdateOutpostResolverResponse;
    };
    sdk: {
      input: UpdateOutpostResolverCommandInput;
      output: UpdateOutpostResolverCommandOutput;
    };
  };
}
