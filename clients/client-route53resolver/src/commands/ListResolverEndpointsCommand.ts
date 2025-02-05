// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListResolverEndpointsRequest, ListResolverEndpointsResponse } from "../models/models_0";
import { de_ListResolverEndpointsCommand, se_ListResolverEndpointsCommand } from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResolverEndpointsCommand}.
 */
export interface ListResolverEndpointsCommandInput extends ListResolverEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link ListResolverEndpointsCommand}.
 */
export interface ListResolverEndpointsCommandOutput extends ListResolverEndpointsResponse, __MetadataBearer {}

/**
 * <p>Lists all the Resolver endpoints that were created using the current Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListResolverEndpointsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListResolverEndpointsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new Route53ResolverClient(config);
 * const input = { // ListResolverEndpointsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // Filters
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new ListResolverEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // ListResolverEndpointsResponse
 * //   NextToken: "STRING_VALUE",
 * //   MaxResults: Number("int"),
 * //   ResolverEndpoints: [ // ResolverEndpoints
 * //     { // ResolverEndpoint
 * //       Id: "STRING_VALUE",
 * //       CreatorRequestId: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       SecurityGroupIds: [ // SecurityGroupIds
 * //         "STRING_VALUE",
 * //       ],
 * //       Direction: "INBOUND" || "OUTBOUND",
 * //       IpAddressCount: Number("int"),
 * //       HostVPCId: "STRING_VALUE",
 * //       Status: "CREATING" || "OPERATIONAL" || "UPDATING" || "AUTO_RECOVERING" || "ACTION_NEEDED" || "DELETING",
 * //       StatusMessage: "STRING_VALUE",
 * //       CreationTime: "STRING_VALUE",
 * //       ModificationTime: "STRING_VALUE",
 * //       OutpostArn: "STRING_VALUE",
 * //       PreferredInstanceType: "STRING_VALUE",
 * //       ResolverEndpointType: "IPV6" || "IPV4" || "DUALSTACK",
 * //       Protocols: [ // ProtocolList
 * //         "DoH" || "Do53" || "DoH-FIPS",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListResolverEndpointsCommandInput - {@link ListResolverEndpointsCommandInput}
 * @returns {@link ListResolverEndpointsCommandOutput}
 * @see {@link ListResolverEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListResolverEndpointsCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *  <p>We encountered an unknown error. Try again in a few minutes.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The value that you specified for <code>NextToken</code> in a <code>List</code> request isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters in this request are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Try again in a few minutes.</p>
 *
 * @throws {@link Route53ResolverServiceException}
 * <p>Base exception class for all service exceptions from Route53Resolver service.</p>
 *
 * @public
 */
export class ListResolverEndpointsCommand extends $Command
  .classBuilder<
    ListResolverEndpointsCommandInput,
    ListResolverEndpointsCommandOutput,
    Route53ResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ResolverClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53Resolver", "ListResolverEndpoints", {})
  .n("Route53ResolverClient", "ListResolverEndpointsCommand")
  .f(void 0, void 0)
  .ser(se_ListResolverEndpointsCommand)
  .de(de_ListResolverEndpointsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResolverEndpointsRequest;
      output: ListResolverEndpointsResponse;
    };
    sdk: {
      input: ListResolverEndpointsCommandInput;
      output: ListResolverEndpointsCommandOutput;
    };
  };
}
