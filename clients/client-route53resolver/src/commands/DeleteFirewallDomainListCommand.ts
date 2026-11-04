// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteFirewallDomainListRequest, DeleteFirewallDomainListResponse } from "../models/models_0";
import { DeleteFirewallDomainList$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteFirewallDomainListCommand}.
 */
export interface DeleteFirewallDomainListCommandInput extends DeleteFirewallDomainListRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFirewallDomainListCommand}.
 */
export interface DeleteFirewallDomainListCommandOutput extends DeleteFirewallDomainListResponse, __MetadataBearer {}

/**
 * Deletes the specified domain list.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, DeleteFirewallDomainListCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, DeleteFirewallDomainListCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // DeleteFirewallDomainListRequest
 *   FirewallDomainListId: "STRING_VALUE", // required
 * };
 * const command = new DeleteFirewallDomainListCommand(input);
 * const response = await client.send(command);
 * // { // DeleteFirewallDomainListResponse
 * //   FirewallDomainList: { // FirewallDomainList
 * //     Id: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     DomainCount: Number("int"),
 * //     Status: "COMPLETE" || "COMPLETE_IMPORT_FAILED" || "IMPORTING" || "DELETING" || "UPDATING",
 * //     StatusMessage: "STRING_VALUE",
 * //     ManagedOwnerName: "STRING_VALUE",
 * //     CreatorRequestId: "STRING_VALUE",
 * //     CreationTime: "STRING_VALUE",
 * //     ModificationTime: "STRING_VALUE",
 * //     Category: "STRING_VALUE",
 * //     ManagedListType: "THREAT" || "CONTENT",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteFirewallDomainListCommandInput - {@link DeleteFirewallDomainListCommandInput}
 * @returns {@link DeleteFirewallDomainListCommandOutput}
 * @see {@link DeleteFirewallDomainListCommandInput} for command's `input` shape.
 * @see {@link DeleteFirewallDomainListCommandOutput} for command's `response` shape.
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
export class DeleteFirewallDomainListCommand extends command<DeleteFirewallDomainListCommandInput, DeleteFirewallDomainListCommandOutput>(
  _ep0,
  _mw0,
  "DeleteFirewallDomainList",
  DeleteFirewallDomainList$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFirewallDomainListRequest;
      output: DeleteFirewallDomainListResponse;
    };
    sdk: {
      input: DeleteFirewallDomainListCommandInput;
      output: DeleteFirewallDomainListCommandOutput;
    };
  };
}
