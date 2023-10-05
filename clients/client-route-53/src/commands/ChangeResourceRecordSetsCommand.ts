// smithy-typescript generated code
import { getChangeResourceRecordSetsPlugin, getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ChangeResourceRecordSetsRequest, ChangeResourceRecordSetsResponse } from "../models/models_0";
import { de_ChangeResourceRecordSetsCommand, se_ChangeResourceRecordSetsCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ChangeResourceRecordSetsCommand}.
 */
export interface ChangeResourceRecordSetsCommandInput extends ChangeResourceRecordSetsRequest {}
/**
 * @public
 *
 * The output of {@link ChangeResourceRecordSetsCommand}.
 */
export interface ChangeResourceRecordSetsCommandOutput extends ChangeResourceRecordSetsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates, changes, or deletes a resource record set, which contains authoritative DNS
 * 			information for a specified domain name or subdomain name. For example, you can use
 * 				<code>ChangeResourceRecordSets</code> to create a resource record set that routes
 * 			traffic for test.example.com to a web server that has an IP address of
 * 			192.0.2.44.</p>
 *          <p>
 *             <b>Deleting Resource Record Sets</b>
 *          </p>
 *          <p>To delete a resource record set, you must specify all the same values that you
 * 			specified when you created it.</p>
 *          <p>
 *             <b>Change Batches and Transactional Changes</b>
 *          </p>
 *          <p>The request body must include a document with a
 * 				<code>ChangeResourceRecordSetsRequest</code> element. The request body contains a
 * 			list of change items, known as a change batch. Change batches are considered
 * 			transactional changes. Route 53 validates the changes in the request and then either
 * 			makes all or none of the changes in the change batch request. This ensures that DNS
 * 			routing isn't adversely affected by partial changes to the resource record sets in a
 * 			hosted zone. </p>
 *          <p>For example, suppose a change batch request contains two changes: it deletes the
 * 				<code>CNAME</code> resource record set for www.example.com and creates an alias
 * 			resource record set for www.example.com. If validation for both records succeeds, Route
 * 			53 deletes the first resource record set and creates the second resource record set in a
 * 			single operation. If validation for either the <code>DELETE</code> or the
 * 				<code>CREATE</code> action fails, then the request is canceled, and the original
 * 				<code>CNAME</code> record continues to exist.</p>
 *          <note>
 *             <p>If you try to delete the same resource record set more than once in a single
 * 				change batch, Route 53 returns an <code>InvalidChangeBatch</code> error.</p>
 *          </note>
 *          <p>
 *             <b>Traffic Flow</b>
 *          </p>
 *          <p>To create resource record sets for complex routing configurations, use either the
 * 			traffic flow visual editor in the Route 53 console or the API actions for traffic
 * 			policies and traffic policy instances. Save the configuration as a traffic policy, then
 * 			associate the traffic policy with one or more domain names (such as example.com) or
 * 			subdomain names (such as www.example.com), in the same hosted zone or in multiple hosted
 * 			zones. You can roll back the updates if the new configuration isn't performing as
 * 			expected. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/traffic-flow.html">Using Traffic Flow to Route
 * 				DNS Traffic</a> in the <i>Amazon Route 53 Developer
 * 			Guide</i>.</p>
 *          <p>
 *             <b>Create, Delete, and Upsert</b>
 *          </p>
 *          <p>Use <code>ChangeResourceRecordsSetsRequest</code> to perform the following
 * 			actions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CREATE</code>: Creates a resource record set that has the specified
 * 					values.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DELETE</code>: Deletes an existing resource record set that has the
 * 					specified values.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UPSERT</code>: If a resource set doesn't exist, Route 53 creates it. If a resource
 * 					set exists Route 53 updates it with the values in the request. </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Syntaxes for Creating, Updating, and Deleting Resource Record
 * 				Sets</b>
 *          </p>
 *          <p>The syntax for a request depends on the type of resource record set that you want to
 * 			create, delete, or update, such as weighted, alias, or failover. The XML elements in
 * 			your request must appear in the order listed in the syntax. </p>
 *          <p>For an example for each type of resource record set, see "Examples."</p>
 *          <p>Don't refer to the syntax in the "Parameter Syntax" section, which includes
 * 			all of the elements for every kind of resource record set that you can create, delete,
 * 			or update by using <code>ChangeResourceRecordSets</code>. </p>
 *          <p>
 *             <b>Change Propagation to Route 53 DNS Servers</b>
 *          </p>
 *          <p>When you submit a <code>ChangeResourceRecordSets</code> request, Route 53 propagates your
 * 			changes to all of the Route 53 authoritative DNS servers managing the hosted zone. While
 * 			your changes are propagating, <code>GetChange</code> returns a status of
 * 				<code>PENDING</code>. When propagation is complete, <code>GetChange</code> returns a
 * 			status of <code>INSYNC</code>. Changes generally propagate to all Route 53 name servers
 * 			managing the hosted zone within 60 seconds. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetChange.html">GetChange</a>.</p>
 *          <p>
 *             <b>Limits on ChangeResourceRecordSets Requests</b>
 *          </p>
 *          <p>For information about the limits on a <code>ChangeResourceRecordSets</code> request,
 * 			see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ChangeResourceRecordSetsCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ChangeResourceRecordSetsCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // ChangeResourceRecordSetsRequest
 *   HostedZoneId: "STRING_VALUE", // required
 *   ChangeBatch: { // ChangeBatch
 *     Comment: "STRING_VALUE",
 *     Changes: [ // Changes // required
 *       { // Change
 *         Action: "CREATE" || "DELETE" || "UPSERT", // required
 *         ResourceRecordSet: { // ResourceRecordSet
 *           Name: "STRING_VALUE", // required
 *           Type: "SOA" || "A" || "TXT" || "NS" || "CNAME" || "MX" || "NAPTR" || "PTR" || "SRV" || "SPF" || "AAAA" || "CAA" || "DS", // required
 *           SetIdentifier: "STRING_VALUE",
 *           Weight: Number("long"),
 *           Region: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "ca-central-1" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "eu-central-2" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "eu-north-1" || "sa-east-1" || "cn-north-1" || "cn-northwest-1" || "ap-east-1" || "me-south-1" || "me-central-1" || "ap-south-1" || "ap-south-2" || "af-south-1" || "eu-south-1" || "eu-south-2" || "ap-southeast-4" || "il-central-1",
 *           GeoLocation: { // GeoLocation
 *             ContinentCode: "STRING_VALUE",
 *             CountryCode: "STRING_VALUE",
 *             SubdivisionCode: "STRING_VALUE",
 *           },
 *           Failover: "PRIMARY" || "SECONDARY",
 *           MultiValueAnswer: true || false,
 *           TTL: Number("long"),
 *           ResourceRecords: [ // ResourceRecords
 *             { // ResourceRecord
 *               Value: "STRING_VALUE", // required
 *             },
 *           ],
 *           AliasTarget: { // AliasTarget
 *             HostedZoneId: "STRING_VALUE", // required
 *             DNSName: "STRING_VALUE", // required
 *             EvaluateTargetHealth: true || false, // required
 *           },
 *           HealthCheckId: "STRING_VALUE",
 *           TrafficPolicyInstanceId: "STRING_VALUE",
 *           CidrRoutingConfig: { // CidrRoutingConfig
 *             CollectionId: "STRING_VALUE", // required
 *             LocationName: "STRING_VALUE", // required
 *           },
 *         },
 *       },
 *     ],
 *   },
 * };
 * const command = new ChangeResourceRecordSetsCommand(input);
 * const response = await client.send(command);
 * // { // ChangeResourceRecordSetsResponse
 * //   ChangeInfo: { // ChangeInfo
 * //     Id: "STRING_VALUE", // required
 * //     Status: "PENDING" || "INSYNC", // required
 * //     SubmittedAt: new Date("TIMESTAMP"), // required
 * //     Comment: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ChangeResourceRecordSetsCommandInput - {@link ChangeResourceRecordSetsCommandInput}
 * @returns {@link ChangeResourceRecordSetsCommandOutput}
 * @see {@link ChangeResourceRecordSetsCommandInput} for command's `input` shape.
 * @see {@link ChangeResourceRecordSetsCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidChangeBatch} (client fault)
 *  <p>This exception contains a list of messages that might contain one or more error
 * 			messages. Each error message indicates one error in the change batch.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchHealthCheck} (client fault)
 *  <p>No health check exists with the specified ID.</p>
 *
 * @throws {@link NoSuchHostedZone} (client fault)
 *  <p>No hosted zone exists with the ID that you specified.</p>
 *
 * @throws {@link PriorRequestNotComplete} (client fault)
 *  <p>If Amazon Route 53 can't process a request before the next request arrives, it will
 * 			reject subsequent requests for the same hosted zone and return an <code>HTTP 400
 * 				error</code> (<code>Bad request</code>). If Route 53 returns this error repeatedly
 * 			for the same request, we recommend that you wait, in intervals of increasing duration,
 * 			before you try the request again.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 * @example To create a basic resource record set
 * ```javascript
 * // The following example creates a resource record set that routes Internet traffic to a resource with an IP address of 192.0.2.44.
 * const input = {
 *   "ChangeBatch": {
 *     "Changes": [
 *       {
 *         "Action": "CREATE",
 *         "ResourceRecordSet": {
 *           "Name": "example.com",
 *           "ResourceRecords": [
 *             {
 *               "Value": "192.0.2.44"
 *             }
 *           ],
 *           "TTL": 60,
 *           "Type": "A"
 *         }
 *       }
 *     ],
 *     "Comment": "Web server for example.com"
 *   },
 *   "HostedZoneId": "Z3M3LMPEXAMPLE"
 * };
 * const command = new ChangeResourceRecordSetsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ChangeInfo": {
 *     "Comment": "Web server for example.com",
 *     "Id": "/change/C2682N5HXP0BZ4",
 *     "Status": "PENDING",
 *     "SubmittedAt": "2017-02-10T01:36:41.958Z"
 *   }
 * }
 * *\/
 * // example id: to-create-update-or-delete-resource-record-sets-1484344703668
 * ```
 *
 * @example To create weighted resource record sets
 * ```javascript
 * // The following example creates two weighted resource record sets. The resource with a Weight of 100 will get 1/3rd of traffic (100/100+200), and the other resource will get the rest of the traffic for example.com.
 * const input = {
 *   "ChangeBatch": {
 *     "Changes": [
 *       {
 *         "Action": "CREATE",
 *         "ResourceRecordSet": {
 *           "HealthCheckId": "abcdef11-2222-3333-4444-555555fedcba",
 *           "Name": "example.com",
 *           "ResourceRecords": [
 *             {
 *               "Value": "192.0.2.44"
 *             }
 *           ],
 *           "SetIdentifier": "Seattle data center",
 *           "TTL": 60,
 *           "Type": "A",
 *           "Weight": 100
 *         }
 *       },
 *       {
 *         "Action": "CREATE",
 *         "ResourceRecordSet": {
 *           "HealthCheckId": "abcdef66-7777-8888-9999-000000fedcba",
 *           "Name": "example.com",
 *           "ResourceRecords": [
 *             {
 *               "Value": "192.0.2.45"
 *             }
 *           ],
 *           "SetIdentifier": "Portland data center",
 *           "TTL": 60,
 *           "Type": "A",
 *           "Weight": 200
 *         }
 *       }
 *     ],
 *     "Comment": "Web servers for example.com"
 *   },
 *   "HostedZoneId": "Z3M3LMPEXAMPLE"
 * };
 * const command = new ChangeResourceRecordSetsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ChangeInfo": {
 *     "Comment": "Web servers for example.com",
 *     "Id": "/change/C2682N5HXP0BZ4",
 *     "Status": "PENDING",
 *     "SubmittedAt": "2017-02-10T01:36:41.958Z"
 *   }
 * }
 * *\/
 * // example id: to-create-weighted-resource-record-sets-1484348208522
 * ```
 *
 * @example To create an alias resource record set
 * ```javascript
 * // The following example creates an alias resource record set that routes traffic to a CloudFront distribution.
 * const input = {
 *   "ChangeBatch": {
 *     "Changes": [
 *       {
 *         "Action": "CREATE",
 *         "ResourceRecordSet": {
 *           "AliasTarget": {
 *             "DNSName": "d123rk29d0stfj.cloudfront.net",
 *             "EvaluateTargetHealth": false,
 *             "HostedZoneId": "Z2FDTNDATAQYW2"
 *           },
 *           "Name": "example.com",
 *           "Type": "A"
 *         }
 *       }
 *     ],
 *     "Comment": "CloudFront distribution for example.com"
 *   },
 *   "HostedZoneId": "Z3M3LMPEXAMPLE"
 * };
 * const command = new ChangeResourceRecordSetsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ChangeInfo": {
 *     "Comment": "CloudFront distribution for example.com",
 *     "Id": "/change/C2682N5HXP0BZ4",
 *     "Status": "PENDING",
 *     "SubmittedAt": "2017-02-10T01:36:41.958Z"
 *   }
 * }
 * *\/
 * // example id: to-create-an-alias-resource-record-set-1484348404062
 * ```
 *
 * @example To create weighted alias resource record sets
 * ```javascript
 * // The following example creates two weighted alias resource record sets that route traffic to ELB load balancers. The resource with a Weight of 100 will get 1/3rd of traffic (100/100+200), and the other resource will get the rest of the traffic for example.com.
 * const input = {
 *   "ChangeBatch": {
 *     "Changes": [
 *       {
 *         "Action": "CREATE",
 *         "ResourceRecordSet": {
 *           "AliasTarget": {
 *             "DNSName": "example-com-123456789.us-east-2.elb.amazonaws.com ",
 *             "EvaluateTargetHealth": true,
 *             "HostedZoneId": "Z3AADJGX6KTTL2"
 *           },
 *           "Name": "example.com",
 *           "SetIdentifier": "Ohio region",
 *           "Type": "A",
 *           "Weight": 100
 *         }
 *       },
 *       {
 *         "Action": "CREATE",
 *         "ResourceRecordSet": {
 *           "AliasTarget": {
 *             "DNSName": "example-com-987654321.us-west-2.elb.amazonaws.com ",
 *             "EvaluateTargetHealth": true,
 *             "HostedZoneId": "Z1H1FL5HABSF5"
 *           },
 *           "Name": "example.com",
 *           "SetIdentifier": "Oregon region",
 *           "Type": "A",
 *           "Weight": 200
 *         }
 *       }
 *     ],
 *     "Comment": "ELB load balancers for example.com"
 *   },
 *   "HostedZoneId": "Z3M3LMPEXAMPLE"
 * };
 * const command = new ChangeResourceRecordSetsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ChangeInfo": {
 *     "Comment": "ELB load balancers for example.com",
 *     "Id": "/change/C2682N5HXP0BZ4",
 *     "Status": "PENDING",
 *     "SubmittedAt": "2017-02-10T01:36:41.958Z"
 *   }
 * }
 * *\/
 * // example id: to-create-weighted-alias-resource-record-sets-1484349467416
 * ```
 *
 * @example To create latency resource record sets
 * ```javascript
 * // The following example creates two latency resource record sets that route traffic to EC2 instances. Traffic for example.com is routed either to the Ohio region or the Oregon region, depending on the latency between the user and those regions.
 * const input = {
 *   "ChangeBatch": {
 *     "Changes": [
 *       {
 *         "Action": "CREATE",
 *         "ResourceRecordSet": {
 *           "HealthCheckId": "abcdef11-2222-3333-4444-555555fedcba",
 *           "Name": "example.com",
 *           "Region": "us-east-2",
 *           "ResourceRecords": [
 *             {
 *               "Value": "192.0.2.44"
 *             }
 *           ],
 *           "SetIdentifier": "Ohio region",
 *           "TTL": 60,
 *           "Type": "A"
 *         }
 *       },
 *       {
 *         "Action": "CREATE",
 *         "ResourceRecordSet": {
 *           "HealthCheckId": "abcdef66-7777-8888-9999-000000fedcba",
 *           "Name": "example.com",
 *           "Region": "us-west-2",
 *           "ResourceRecords": [
 *             {
 *               "Value": "192.0.2.45"
 *             }
 *           ],
 *           "SetIdentifier": "Oregon region",
 *           "TTL": 60,
 *           "Type": "A"
 *         }
 *       }
 *     ],
 *     "Comment": "EC2 instances for example.com"
 *   },
 *   "HostedZoneId": "Z3M3LMPEXAMPLE"
 * };
 * const command = new ChangeResourceRecordSetsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ChangeInfo": {
 *     "Comment": "EC2 instances for example.com",
 *     "Id": "/change/C2682N5HXP0BZ4",
 *     "Status": "PENDING",
 *     "SubmittedAt": "2017-02-10T01:36:41.958Z"
 *   }
 * }
 * *\/
 * // example id: to-create-latency-resource-record-sets-1484350219917
 * ```
 *
 * @example To create latency alias resource record sets
 * ```javascript
 * // The following example creates two latency alias resource record sets that route traffic for example.com to ELB load balancers. Requests are routed either to the Ohio region or the Oregon region, depending on the latency between the user and those regions.
 * const input = {
 *   "ChangeBatch": {
 *     "Changes": [
 *       {
 *         "Action": "CREATE",
 *         "ResourceRecordSet": {
 *           "AliasTarget": {
 *             "DNSName": "example-com-123456789.us-east-2.elb.amazonaws.com ",
 *             "EvaluateTargetHealth": true,
 *             "HostedZoneId": "Z3AADJGX6KTTL2"
 *           },
 *           "Name": "example.com",
 *           "Region": "us-east-2",
 *           "SetIdentifier": "Ohio region",
 *           "Type": "A"
 *         }
 *       },
 *       {
 *         "Action": "CREATE",
 *         "ResourceRecordSet": {
 *           "AliasTarget": {
 *             "DNSName": "example-com-987654321.us-west-2.elb.amazonaws.com ",
 *             "EvaluateTargetHealth": true,
 *             "HostedZoneId": "Z1H1FL5HABSF5"
 *           },
 *           "Name": "example.com",
 *           "Region": "us-west-2",
 *           "SetIdentifier": "Oregon region",
 *           "Type": "A"
 *         }
 *       }
 *     ],
 *     "Comment": "ELB load balancers for example.com"
 *   },
 *   "HostedZoneId": "Z3M3LMPEXAMPLE"
 * };
 * const command = new ChangeResourceRecordSetsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ChangeInfo": {
 *     "Comment": "ELB load balancers for example.com",
 *     "Id": "/change/C2682N5HXP0BZ4",
 *     "Status": "PENDING",
 *     "SubmittedAt": "2017-02-10T01:36:41.958Z"
 *   }
 * }
 * *\/
 * // example id: to-create-latency-alias-resource-record-sets-1484601774179
 * ```
 *
 * @example To create failover resource record sets
 * ```javascript
 * // The following example creates primary and secondary failover resource record sets that route traffic to EC2 instances. Traffic is generally routed to the primary resource, in the Ohio region. If that resource is unavailable, traffic is routed to the secondary resource, in the Oregon region.
 * const input = {
 *   "ChangeBatch": {
 *     "Changes": [
 *       {
 *         "Action": "CREATE",
 *         "ResourceRecordSet": {
 *           "Failover": "PRIMARY",
 *           "HealthCheckId": "abcdef11-2222-3333-4444-555555fedcba",
 *           "Name": "example.com",
 *           "ResourceRecords": [
 *             {
 *               "Value": "192.0.2.44"
 *             }
 *           ],
 *           "SetIdentifier": "Ohio region",
 *           "TTL": 60,
 *           "Type": "A"
 *         }
 *       },
 *       {
 *         "Action": "CREATE",
 *         "ResourceRecordSet": {
 *           "Failover": "SECONDARY",
 *           "HealthCheckId": "abcdef66-7777-8888-9999-000000fedcba",
 *           "Name": "example.com",
 *           "ResourceRecords": [
 *             {
 *               "Value": "192.0.2.45"
 *             }
 *           ],
 *           "SetIdentifier": "Oregon region",
 *           "TTL": 60,
 *           "Type": "A"
 *         }
 *       }
 *     ],
 *     "Comment": "Failover configuration for example.com"
 *   },
 *   "HostedZoneId": "Z3M3LMPEXAMPLE"
 * };
 * const command = new ChangeResourceRecordSetsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ChangeInfo": {
 *     "Comment": "Failover configuration for example.com",
 *     "Id": "/change/C2682N5HXP0BZ4",
 *     "Status": "PENDING",
 *     "SubmittedAt": "2017-02-10T01:36:41.958Z"
 *   }
 * }
 * *\/
 * // example id: to-create-failover-resource-record-sets-1484604541740
 * ```
 *
 * @example To create failover alias resource record sets
 * ```javascript
 * // The following example creates primary and secondary failover alias resource record sets that route traffic to ELB load balancers. Traffic is generally routed to the primary resource, in the Ohio region. If that resource is unavailable, traffic is routed to the secondary resource, in the Oregon region.
 * const input = {
 *   "ChangeBatch": {
 *     "Changes": [
 *       {
 *         "Action": "CREATE",
 *         "ResourceRecordSet": {
 *           "AliasTarget": {
 *             "DNSName": "example-com-123456789.us-east-2.elb.amazonaws.com ",
 *             "EvaluateTargetHealth": true,
 *             "HostedZoneId": "Z3AADJGX6KTTL2"
 *           },
 *           "Failover": "PRIMARY",
 *           "Name": "example.com",
 *           "SetIdentifier": "Ohio region",
 *           "Type": "A"
 *         }
 *       },
 *       {
 *         "Action": "CREATE",
 *         "ResourceRecordSet": {
 *           "AliasTarget": {
 *             "DNSName": "example-com-987654321.us-west-2.elb.amazonaws.com ",
 *             "EvaluateTargetHealth": true,
 *             "HostedZoneId": "Z1H1FL5HABSF5"
 *           },
 *           "Failover": "SECONDARY",
 *           "Name": "example.com",
 *           "SetIdentifier": "Oregon region",
 *           "Type": "A"
 *         }
 *       }
 *     ],
 *     "Comment": "Failover alias configuration for example.com"
 *   },
 *   "HostedZoneId": "Z3M3LMPEXAMPLE"
 * };
 * const command = new ChangeResourceRecordSetsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ChangeInfo": {
 *     "Comment": "Failover alias configuration for example.com",
 *     "Id": "/change/C2682N5HXP0BZ4",
 *     "Status": "PENDING",
 *     "SubmittedAt": "2017-02-10T01:36:41.958Z"
 *   }
 * }
 * *\/
 * // example id: to-create-failover-alias-resource-record-sets-1484607497724
 * ```
 *
 * @example To create geolocation resource record sets
 * ```javascript
 * // The following example creates four geolocation resource record sets that use IPv4 addresses to route traffic to resources such as web servers running on EC2 instances. Traffic is routed to one of four IP addresses, for North America (NA), for South America (SA), for Europe (EU), and for all other locations (*).
 * const input = {
 *   "ChangeBatch": {
 *     "Changes": [
 *       {
 *         "Action": "CREATE",
 *         "ResourceRecordSet": {
 *           "GeoLocation": {
 *             "ContinentCode": "NA"
 *           },
 *           "Name": "example.com",
 *           "ResourceRecords": [
 *             {
 *               "Value": "192.0.2.44"
 *             }
 *           ],
 *           "SetIdentifier": "North America",
 *           "TTL": 60,
 *           "Type": "A"
 *         }
 *       },
 *       {
 *         "Action": "CREATE",
 *         "ResourceRecordSet": {
 *           "GeoLocation": {
 *             "ContinentCode": "SA"
 *           },
 *           "Name": "example.com",
 *           "ResourceRecords": [
 *             {
 *               "Value": "192.0.2.45"
 *             }
 *           ],
 *           "SetIdentifier": "South America",
 *           "TTL": 60,
 *           "Type": "A"
 *         }
 *       },
 *       {
 *         "Action": "CREATE",
 *         "ResourceRecordSet": {
 *           "GeoLocation": {
 *             "ContinentCode": "EU"
 *           },
 *           "Name": "example.com",
 *           "ResourceRecords": [
 *             {
 *               "Value": "192.0.2.46"
 *             }
 *           ],
 *           "SetIdentifier": "Europe",
 *           "TTL": 60,
 *           "Type": "A"
 *         }
 *       },
 *       {
 *         "Action": "CREATE",
 *         "ResourceRecordSet": {
 *           "GeoLocation": {
 *             "CountryCode": "*"
 *           },
 *           "Name": "example.com",
 *           "ResourceRecords": [
 *             {
 *               "Value": "192.0.2.47"
 *             }
 *           ],
 *           "SetIdentifier": "Other locations",
 *           "TTL": 60,
 *           "Type": "A"
 *         }
 *       }
 *     ],
 *     "Comment": "Geolocation configuration for example.com"
 *   },
 *   "HostedZoneId": "Z3M3LMPEXAMPLE"
 * };
 * const command = new ChangeResourceRecordSetsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ChangeInfo": {
 *     "Comment": "Geolocation configuration for example.com",
 *     "Id": "/change/C2682N5HXP0BZ4",
 *     "Status": "PENDING",
 *     "SubmittedAt": "2017-02-10T01:36:41.958Z"
 *   }
 * }
 * *\/
 * // example id: to-create-geolocation-resource-record-sets-1484612462466
 * ```
 *
 * @example To create geolocation alias resource record sets
 * ```javascript
 * // The following example creates four geolocation alias resource record sets that route traffic to ELB load balancers. Traffic is routed to one of four IP addresses, for North America (NA), for South America (SA), for Europe (EU), and for all other locations (*).
 * const input = {
 *   "ChangeBatch": {
 *     "Changes": [
 *       {
 *         "Action": "CREATE",
 *         "ResourceRecordSet": {
 *           "AliasTarget": {
 *             "DNSName": "example-com-123456789.us-east-2.elb.amazonaws.com ",
 *             "EvaluateTargetHealth": true,
 *             "HostedZoneId": "Z3AADJGX6KTTL2"
 *           },
 *           "GeoLocation": {
 *             "ContinentCode": "NA"
 *           },
 *           "Name": "example.com",
 *           "SetIdentifier": "North America",
 *           "Type": "A"
 *         }
 *       },
 *       {
 *         "Action": "CREATE",
 *         "ResourceRecordSet": {
 *           "AliasTarget": {
 *             "DNSName": "example-com-234567890.sa-east-1.elb.amazonaws.com ",
 *             "EvaluateTargetHealth": true,
 *             "HostedZoneId": "Z2P70J7HTTTPLU"
 *           },
 *           "GeoLocation": {
 *             "ContinentCode": "SA"
 *           },
 *           "Name": "example.com",
 *           "SetIdentifier": "South America",
 *           "Type": "A"
 *         }
 *       },
 *       {
 *         "Action": "CREATE",
 *         "ResourceRecordSet": {
 *           "AliasTarget": {
 *             "DNSName": "example-com-234567890.eu-central-1.elb.amazonaws.com ",
 *             "EvaluateTargetHealth": true,
 *             "HostedZoneId": "Z215JYRZR1TBD5"
 *           },
 *           "GeoLocation": {
 *             "ContinentCode": "EU"
 *           },
 *           "Name": "example.com",
 *           "SetIdentifier": "Europe",
 *           "Type": "A"
 *         }
 *       },
 *       {
 *         "Action": "CREATE",
 *         "ResourceRecordSet": {
 *           "AliasTarget": {
 *             "DNSName": "example-com-234567890.ap-southeast-1.elb.amazonaws.com ",
 *             "EvaluateTargetHealth": true,
 *             "HostedZoneId": "Z1LMS91P8CMLE5"
 *           },
 *           "GeoLocation": {
 *             "CountryCode": "*"
 *           },
 *           "Name": "example.com",
 *           "SetIdentifier": "Other locations",
 *           "Type": "A"
 *         }
 *       }
 *     ],
 *     "Comment": "Geolocation alias configuration for example.com"
 *   },
 *   "HostedZoneId": "Z3M3LMPEXAMPLE"
 * };
 * const command = new ChangeResourceRecordSetsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ChangeInfo": {
 *     "Comment": "Geolocation alias configuration for example.com",
 *     "Id": "/change/C2682N5HXP0BZ4",
 *     "Status": "PENDING",
 *     "SubmittedAt": "2017-02-10T01:36:41.958Z"
 *   }
 * }
 * *\/
 * // example id: to-create-geolocation-alias-resource-record-sets-1484612871203
 * ```
 *
 */
export class ChangeResourceRecordSetsCommand extends $Command<
  ChangeResourceRecordSetsCommandInput,
  ChangeResourceRecordSetsCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ChangeResourceRecordSetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ChangeResourceRecordSetsCommandInput, ChangeResourceRecordSetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ChangeResourceRecordSetsCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getChangeResourceRecordSetsPlugin(configuration));
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "ChangeResourceRecordSetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSDnsV20130401",
        operation: "ChangeResourceRecordSets",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ChangeResourceRecordSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ChangeResourceRecordSetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ChangeResourceRecordSetsCommandOutput> {
    return de_ChangeResourceRecordSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
