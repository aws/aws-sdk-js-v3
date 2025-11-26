// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateReusableDelegationSetRequest, CreateReusableDelegationSetResponse } from "../models/models_0";
import type { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { CreateReusableDelegationSet } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface CreateReusableDelegationSetCommandOutput
  extends CreateReusableDelegationSetResponse,
    __MetadataBearer {}

/**
 * <p>Creates a delegation set (a group of four name servers) that can be reused by multiple
 * 			hosted zones that were created by the same Amazon Web Services account. </p>
 *          <p>You can also create a reusable delegation set that uses the four name servers that are
 * 			associated with an existing hosted zone. Specify the hosted zone ID in the
 * 				<code>CreateReusableDelegationSet</code> request.</p>
 *          <note>
 *             <p>You can't associate a reusable delegation set with a private hosted zone.</p>
 *          </note>
 *          <p>For information about using a reusable delegation set to configure white label name
 * 			servers, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/white-label-name-servers.html">Configuring White
 * 				Label Name Servers</a>.</p>
 *          <p>The process for migrating existing hosted zones to use a reusable delegation set is
 * 			comparable to the process for configuring white label name servers. You need to perform
 * 			the following steps:</p>
 *          <ol>
 *             <li>
 *                <p>Create a reusable delegation set.</p>
 *             </li>
 *             <li>
 *                <p>Recreate hosted zones, and reduce the TTL to 60 seconds or less.</p>
 *             </li>
 *             <li>
 *                <p>Recreate resource record sets in the new hosted zones.</p>
 *             </li>
 *             <li>
 *                <p>Change the registrar's name servers to use the name servers for the new hosted
 * 					zones.</p>
 *             </li>
 *             <li>
 *                <p>Monitor traffic for the website or application.</p>
 *             </li>
 *             <li>
 *                <p>Change TTLs back to their original values.</p>
 *             </li>
 *          </ol>
 *          <p>If you want to migrate existing hosted zones to use a reusable delegation set, the
 * 			existing hosted zones can't use any of the name servers that are assigned to the
 * 			reusable delegation set. If one or more hosted zones do use one or more name servers
 * 			that are assigned to the reusable delegation set, you can do one of the
 * 			following:</p>
 *          <ul>
 *             <li>
 *                <p>For small numbers of hosted zones—up to a few hundred—it's
 * 					relatively easy to create reusable delegation sets until you get one that has
 * 					four name servers that don't overlap with any of the name servers in your hosted
 * 					zones.</p>
 *             </li>
 *             <li>
 *                <p>For larger numbers of hosted zones, the easiest solution is to use more than
 * 					one reusable delegation set.</p>
 *             </li>
 *             <li>
 *                <p>For larger numbers of hosted zones, you can also migrate hosted zones that
 * 					have overlapping name servers to hosted zones that don't have overlapping name
 * 					servers, then migrate the hosted zones again to use the reusable delegation
 * 					set.</p>
 *             </li>
 *          </ul>
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
 *  <p>A delegation set with the same owner and caller reference combination has already been
 * 			created.</p>
 *
 * @throws {@link DelegationSetAlreadyReusable} (client fault)
 *  <p>The specified delegation set has already been marked as reusable.</p>
 *
 * @throws {@link DelegationSetNotAvailable} (client fault)
 *  <p>You can create a hosted zone that has the same name as an existing hosted zone
 * 			(example.com is common), but there is a limit to the number of hosted zones that have
 * 			the same name. If you get this error, Amazon Route 53 has reached that limit. If you own
 * 			the domain name and Route 53 generates this error, contact Customer Support.</p>
 *
 * @throws {@link HostedZoneNotFound} (client fault)
 *  <p>The specified HostedZone can't be found.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>Parameter name is not valid.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link LimitsExceeded} (client fault)
 *  <p>This operation can't be completed because the current account has reached the
 * 			limit on the resource you are trying to create. To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the Amazon Web Services Support
 * 			Center.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class CreateReusableDelegationSetCommand extends $Command
  .classBuilder<
    CreateReusableDelegationSetCommandInput,
    CreateReusableDelegationSetCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getIdNormalizerPlugin(config)];
  })
  .s("AWSDnsV20130401", "CreateReusableDelegationSet", {})
  .n("Route53Client", "CreateReusableDelegationSetCommand")
  .sc(CreateReusableDelegationSet)
  .build() {
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
