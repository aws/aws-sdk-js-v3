// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { ListCustomRoutingAcceleratorsRequest, ListCustomRoutingAcceleratorsResponse } from "../models/models_0";
import {
  de_ListCustomRoutingAcceleratorsCommand,
  se_ListCustomRoutingAcceleratorsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCustomRoutingAcceleratorsCommand}.
 */
export interface ListCustomRoutingAcceleratorsCommandInput extends ListCustomRoutingAcceleratorsRequest {}
/**
 * @public
 *
 * The output of {@link ListCustomRoutingAcceleratorsCommand}.
 */
export interface ListCustomRoutingAcceleratorsCommandOutput
  extends ListCustomRoutingAcceleratorsResponse,
    __MetadataBearer {}

/**
 * <p>List the custom routing accelerators for an Amazon Web Services account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListCustomRoutingAcceleratorsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListCustomRoutingAcceleratorsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // ListCustomRoutingAcceleratorsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCustomRoutingAcceleratorsCommand(input);
 * const response = await client.send(command);
 * // { // ListCustomRoutingAcceleratorsResponse
 * //   Accelerators: [ // CustomRoutingAccelerators
 * //     { // CustomRoutingAccelerator
 * //       AcceleratorArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       IpAddressType: "IPV4" || "DUAL_STACK",
 * //       Enabled: true || false,
 * //       IpSets: [ // IpSets
 * //         { // IpSet
 * //           IpFamily: "STRING_VALUE",
 * //           IpAddresses: [ // IpAddresses
 * //             "STRING_VALUE",
 * //           ],
 * //           IpAddressFamily: "IPv4" || "IPv6",
 * //         },
 * //       ],
 * //       DnsName: "STRING_VALUE",
 * //       Status: "DEPLOYED" || "IN_PROGRESS",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCustomRoutingAcceleratorsCommandInput - {@link ListCustomRoutingAcceleratorsCommandInput}
 * @returns {@link ListCustomRoutingAcceleratorsCommandOutput}
 * @see {@link ListCustomRoutingAcceleratorsCommandInput} for command's `input` shape.
 * @see {@link ListCustomRoutingAcceleratorsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>There was an internal error for Global Accelerator.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>An argument that you specified is invalid.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>There isn't another item to return.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 * @public
 */
export class ListCustomRoutingAcceleratorsCommand extends $Command
  .classBuilder<
    ListCustomRoutingAcceleratorsCommandInput,
    ListCustomRoutingAcceleratorsCommandOutput,
    GlobalAcceleratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlobalAcceleratorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GlobalAccelerator_V20180706", "ListCustomRoutingAccelerators", {})
  .n("GlobalAcceleratorClient", "ListCustomRoutingAcceleratorsCommand")
  .f(void 0, void 0)
  .ser(se_ListCustomRoutingAcceleratorsCommand)
  .de(de_ListCustomRoutingAcceleratorsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCustomRoutingAcceleratorsRequest;
      output: ListCustomRoutingAcceleratorsResponse;
    };
    sdk: {
      input: ListCustomRoutingAcceleratorsCommandInput;
      output: ListCustomRoutingAcceleratorsCommandOutput;
    };
  };
}
