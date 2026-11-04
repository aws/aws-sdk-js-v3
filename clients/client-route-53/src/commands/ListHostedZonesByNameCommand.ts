// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListHostedZonesByNameRequest, ListHostedZonesByNameResponse } from "../models/models_0";
import { ListHostedZonesByName$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListHostedZonesByNameCommand}.
 */
export interface ListHostedZonesByNameCommandInput extends ListHostedZonesByNameRequest {}
/**
 * @public
 *
 * The output of {@link ListHostedZonesByNameCommand}.
 */
export interface ListHostedZonesByNameCommandOutput extends ListHostedZonesByNameResponse, __MetadataBearer {}

/**
 * Retrieves a list of your hosted zones in lexicographic order. The response includes a `HostedZones` child element for each hosted zone created by the current Amazon Web Services account.
 *
 * `ListHostedZonesByName` sorts hosted zones by name with the labels reversed. For example:
 *
 * `com.example.www.`
 *
 * Note the trailing dot, which can change the sort order in some circumstances.
 *
 * If the domain name includes escape characters or Punycode, `ListHostedZonesByName` alphabetizes the domain name using the escaped or Punycoded value, which is the format that Amazon Route 53 saves in its database. For example, to create a hosted zone for exämple.com, you specify ex\344mple.com for the domain name. `ListHostedZonesByName` alphabetizes it as:
 *
 * `com.ex\344mple.`
 *
 * The labels are reversed and alphabetized using the escaped value. For more information about valid domain name formats, including internationalized domain names, see [DNS Domain Name Format](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DomainNameFormat.html) in the *Amazon Route 53 Developer Guide*.
 *
 * Route 53 returns up to 100 items in each response. If you have a lot of hosted zones, use the `MaxItems` parameter to list them in groups of up to 100. The response includes values that help navigate from one group of `MaxItems` hosted zones to the next:
 *
 * - The `DNSName` and `HostedZoneId` elements in the response contain the values, if any, specified for the `dnsname` and `hostedzoneid` parameters in the request that produced the current response.
 * - The `MaxItems` element in the response contains the value, if any, that you specified for the `maxitems` parameter in the request that produced the current response.
 * - If the value of `IsTruncated` in the response is true, there are more hosted zones associated with the current Amazon Web Services account.
 *
 *   If `IsTruncated` is false, this response includes the last hosted zone that is associated with the current account. The `NextDNSName` element and `NextHostedZoneId` elements are omitted from the response.
 * - The `NextDNSName` and `NextHostedZoneId` elements in the response contain the domain name and the hosted zone ID of the next hosted zone that is associated with the current Amazon Web Services account. If you want to list more hosted zones, make another call to `ListHostedZonesByName`, and specify the value of `NextDNSName` and `NextHostedZoneId` in the `dnsname` and `hostedzoneid` parameters, respectively.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListHostedZonesByNameCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListHostedZonesByNameCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // ListHostedZonesByNameRequest
 *   DNSName: "STRING_VALUE",
 *   HostedZoneId: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListHostedZonesByNameCommand(input);
 * const response = await client.send(command);
 * // { // ListHostedZonesByNameResponse
 * //   HostedZones: [ // HostedZones // required
 * //     { // HostedZone
 * //       Id: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       CallerReference: "STRING_VALUE", // required
 * //       Config: { // HostedZoneConfig
 * //         Comment: "STRING_VALUE",
 * //         PrivateZone: true || false,
 * //       },
 * //       ResourceRecordSetCount: Number("long"),
 * //       LinkedService: { // LinkedService
 * //         ServicePrincipal: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //       },
 * //       Features: { // HostedZoneFeatures
 * //         AcceleratedRecoveryStatus: "ENABLING" || "ENABLE_FAILED" || "ENABLING_HOSTED_ZONE_LOCKED" || "ENABLED" || "DISABLING" || "DISABLE_FAILED" || "DISABLED" || "DISABLING_HOSTED_ZONE_LOCKED",
 * //         FailureReasons: { // HostedZoneFailureReasons
 * //           AcceleratedRecovery: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   DNSName: "STRING_VALUE",
 * //   HostedZoneId: "STRING_VALUE",
 * //   IsTruncated: true || false, // required
 * //   NextDNSName: "STRING_VALUE",
 * //   NextHostedZoneId: "STRING_VALUE",
 * //   MaxItems: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param ListHostedZonesByNameCommandInput - {@link ListHostedZonesByNameCommandInput}
 * @returns {@link ListHostedZonesByNameCommandOutput}
 * @see {@link ListHostedZonesByNameCommandInput} for command's `input` shape.
 * @see {@link ListHostedZonesByNameCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidDomainName} (client fault)
 *
 * The specified domain name is not valid.
 *
 * @throws {@link InvalidInput} (client fault)
 *
 * The input is not valid.
 *
 * @throws {@link Route53ServiceException}
 *
 * Base exception class for all service exceptions from Route53 service.
 *
 * @public
 */
export class ListHostedZonesByNameCommand extends command<ListHostedZonesByNameCommandInput, ListHostedZonesByNameCommandOutput>(
  _ep0,
  _mw0,
  "ListHostedZonesByName",
  ListHostedZonesByName$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListHostedZonesByNameRequest;
      output: ListHostedZonesByNameResponse;
    };
    sdk: {
      input: ListHostedZonesByNameCommandInput;
      output: ListHostedZonesByNameCommandOutput;
    };
  };
}
