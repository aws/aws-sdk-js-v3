// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateReusableDelegationSetRequest, CreateReusableDelegationSetResponse } from "../models/models_0";
import { CreateReusableDelegationSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateReusableDelegationSetCommand}.
 */
export interface CreateReusableDelegationSetCommandInput extends CreateReusableDelegationSetRequest {}
/**
 * @public
 *
 * The output of {@link CreateReusableDelegationSetCommand}.
 */
export interface CreateReusableDelegationSetCommandOutput extends CreateReusableDelegationSetResponse, __MetadataBearer {}

/**
 * Creates a delegation set (a group of four name servers) that can be reused by multiple hosted zones that were created by the same Amazon Web Services account.
 *
 * You can also create a reusable delegation set that uses the four name servers that are associated with an existing hosted zone. Specify the hosted zone ID in the `CreateReusableDelegationSet` request.
 *
 * > **Note:** You can't associate a reusable delegation set with a private hosted zone.
 *
 * For information about using a reusable delegation set to configure white label name servers, see [Configuring White Label Name Servers](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/white-label-name-servers.html).
 *
 * The process for migrating existing hosted zones to use a reusable delegation set is comparable to the process for configuring white label name servers. You need to perform the following steps:
 *
 * 1. Create a reusable delegation set.
 * 2. Recreate hosted zones, and reduce the TTL to 60 seconds or less.
 * 3. Recreate resource record sets in the new hosted zones.
 * 4. Change the registrar's name servers to use the name servers for the new hosted zones.
 * 5. Monitor traffic for the website or application.
 * 6. Change TTLs back to their original values.
 *
 * If you want to migrate existing hosted zones to use a reusable delegation set, the existing hosted zones can't use any of the name servers that are assigned to the reusable delegation set. If one or more hosted zones do use one or more name servers that are assigned to the reusable delegation set, you can do one of the following:
 *
 * - For small numbers of hosted zones—up to a few hundred—it's relatively easy to create reusable delegation sets until you get one that has four name servers that don't overlap with any of the name servers in your hosted zones.
 * - For larger numbers of hosted zones, the easiest solution is to use more than one reusable delegation set.
 * - For larger numbers of hosted zones, you can also migrate hosted zones that have overlapping name servers to hosted zones that don't have overlapping name servers, then migrate the hosted zones again to use the reusable delegation set.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, CreateReusableDelegationSetCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, CreateReusableDelegationSetCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // CreateReusableDelegationSetRequest
 *   CallerReference: "STRING_VALUE", // required
 *   HostedZoneId: "STRING_VALUE",
 * };
 * const command = new CreateReusableDelegationSetCommand(input);
 * const response = await client.send(command);
 * // { // CreateReusableDelegationSetResponse
 * //   DelegationSet: { // DelegationSet
 * //     Id: "STRING_VALUE",
 * //     CallerReference: "STRING_VALUE",
 * //     NameServers: [ // DelegationSetNameServers // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   Location: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateReusableDelegationSetCommandInput - {@link CreateReusableDelegationSetCommandInput}
 * @returns {@link CreateReusableDelegationSetCommandOutput}
 * @see {@link CreateReusableDelegationSetCommandInput} for command's `input` shape.
 * @see {@link CreateReusableDelegationSetCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link DelegationSetAlreadyCreated} (client fault)
 *
 * A delegation set with the same owner and caller reference combination has already been created.
 *
 * @throws {@link DelegationSetAlreadyReusable} (client fault)
 *
 * The specified delegation set has already been marked as reusable.
 *
 * @throws {@link DelegationSetNotAvailable} (client fault)
 *
 * You can create a hosted zone that has the same name as an existing hosted zone (example.com is common), but there is a limit to the number of hosted zones that have the same name. If you get this error, Amazon Route 53 has reached that limit. If you own the domain name and Route 53 generates this error, contact Customer Support.
 *
 * @throws {@link HostedZoneNotFound} (client fault)
 *
 * The specified HostedZone can't be found.
 *
 * @throws {@link InvalidArgument} (client fault)
 *
 * Parameter name is not valid.
 *
 * @throws {@link InvalidInput} (client fault)
 *
 * The input is not valid.
 *
 * @throws {@link LimitsExceeded} (client fault)
 *
 * This operation can't be completed because the current account has reached the limit on the resource you are trying to create. To request a higher limit, [create a case](http://aws.amazon.com/route53-request) with the Amazon Web Services Support Center.
 *
 * @throws {@link Route53ServiceException}
 *
 * Base exception class for all service exceptions from Route53 service.
 *
 * @public
 */
export class CreateReusableDelegationSetCommand extends command<CreateReusableDelegationSetCommandInput, CreateReusableDelegationSetCommandOutput>(
  _ep0,
  _mw0,
  "CreateReusableDelegationSet",
  CreateReusableDelegationSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateReusableDelegationSetRequest;
      output: CreateReusableDelegationSetResponse;
    };
    sdk: {
      input: CreateReusableDelegationSetCommandInput;
      output: CreateReusableDelegationSetCommandOutput;
    };
  };
}
