// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import type { ListAcceleratorsRequest, ListAcceleratorsResponse } from "../models/models_0";
import { ListAccelerators$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAcceleratorsCommand}.
 */
export interface ListAcceleratorsCommandInput extends ListAcceleratorsRequest {}
/**
 * @public
 *
 * The output of {@link ListAcceleratorsCommand}.
 */
export interface ListAcceleratorsCommandOutput extends ListAcceleratorsResponse, __MetadataBearer {}

/**
 * <p>List the accelerators for an Amazon Web Services account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListAcceleratorsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListAcceleratorsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // ListAcceleratorsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAcceleratorsCommand(input);
 * const response = await client.send(command);
 * // { // ListAcceleratorsResponse
 * //   Accelerators: [ // Accelerators
 * //     { // Accelerator
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
 * //       DualStackDnsName: "STRING_VALUE",
 * //       Events: [ // AcceleratorEvents
 * //         { // AcceleratorEvent
 * //           Message: "STRING_VALUE",
 * //           Timestamp: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAcceleratorsCommandInput - {@link ListAcceleratorsCommandInput}
 * @returns {@link ListAcceleratorsCommandOutput}
 * @see {@link ListAcceleratorsCommandInput} for command's `input` shape.
 * @see {@link ListAcceleratorsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListAcceleratorsCommand extends $Command
  .classBuilder<
    ListAcceleratorsCommandInput,
    ListAcceleratorsCommandOutput,
    GlobalAcceleratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlobalAcceleratorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GlobalAccelerator_V20180706", "ListAccelerators", {})
  .n("GlobalAcceleratorClient", "ListAcceleratorsCommand")
  .sc(ListAccelerators$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAcceleratorsRequest;
      output: ListAcceleratorsResponse;
    };
    sdk: {
      input: ListAcceleratorsCommandInput;
      output: ListAcceleratorsCommandOutput;
    };
  };
}
