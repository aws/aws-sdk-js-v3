// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAnycastIpListsRequest, ListAnycastIpListsResult } from "../models/models_1";
import { ListAnycastIpLists$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAnycastIpListsCommand}.
 */
export interface ListAnycastIpListsCommandInput extends ListAnycastIpListsRequest {}
/**
 * @public
 *
 * The output of {@link ListAnycastIpListsCommand}.
 */
export interface ListAnycastIpListsCommandOutput extends ListAnycastIpListsResult, __MetadataBearer {}

/**
 * Lists your Anycast static IP lists.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListAnycastIpListsCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListAnycastIpListsCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // ListAnycastIpListsRequest
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListAnycastIpListsCommand(input);
 * const response = await client.send(command);
 * // { // ListAnycastIpListsResult
 * //   AnycastIpLists: { // AnycastIpListCollection
 * //     Items: [ // AnycastIpListSummaries
 * //       { // AnycastIpListSummary
 * //         Id: "STRING_VALUE", // required
 * //         Name: "STRING_VALUE", // required
 * //         Status: "STRING_VALUE", // required
 * //         Arn: "STRING_VALUE", // required
 * //         IpCount: Number("int"), // required
 * //         LastModifiedTime: new Date("TIMESTAMP"), // required
 * //         IpAddressType: "ipv4" || "ipv6" || "dualstack",
 * //         ETag: "STRING_VALUE",
 * //         IpamConfig: { // IpamConfig
 * //           Quantity: Number("int"), // required
 * //           IpamCidrConfigs: [ // IpamCidrConfigList // required
 * //             { // IpamCidrConfig
 * //               Cidr: "STRING_VALUE", // required
 * //               IpamPoolArn: "STRING_VALUE", // required
 * //               AnycastIp: "STRING_VALUE",
 * //               Status: "provisioned" || "failed-provision" || "provisioning" || "deprovisioned" || "failed-deprovision" || "deprovisioning" || "advertised" || "failed-advertise" || "advertising" || "withdrawn" || "failed-withdraw" || "withdrawing",
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     ],
 * //     Marker: "STRING_VALUE", // required
 * //     NextMarker: "STRING_VALUE",
 * //     MaxItems: Number("int"), // required
 * //     IsTruncated: true || false, // required
 * //     Quantity: Number("int"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param ListAnycastIpListsCommandInput - {@link ListAnycastIpListsCommandInput}
 * @returns {@link ListAnycastIpListsCommandOutput}
 * @see {@link ListAnycastIpListsCommandInput} for command's `input` shape.
 * @see {@link ListAnycastIpListsCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *
 * Access denied.
 *
 * @throws {@link EntityNotFound} (client fault)
 *
 * The entity was not found.
 *
 * @throws {@link InvalidArgument} (client fault)
 *
 * An argument is invalid.
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *
 * This operation is not supported in this Amazon Web Services Region.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class ListAnycastIpListsCommand extends command<ListAnycastIpListsCommandInput, ListAnycastIpListsCommandOutput>(
  _ep0,
  _mw0,
  "ListAnycastIpLists",
  ListAnycastIpLists$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAnycastIpListsRequest;
      output: ListAnycastIpListsResult;
    };
    sdk: {
      input: ListAnycastIpListsCommandInput;
      output: ListAnycastIpListsCommandOutput;
    };
  };
}
