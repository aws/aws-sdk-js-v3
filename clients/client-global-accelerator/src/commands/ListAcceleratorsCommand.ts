// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAcceleratorsRequest, ListAcceleratorsResponse } from "../models/models_0";
import { ListAccelerators$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * List the accelerators for an Amazon Web Services account.
 *
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
 * //           IpAddressDetails: [ // IpAddressDetails
 * //             { // IpAddressDetail
 * //               IpAddress: "STRING_VALUE",
 * //               NetworkZone: "STRING_VALUE",
 * //             },
 * //           ],
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
 *
 * There was an internal error for Global Accelerator.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * An argument that you specified is invalid.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * There isn't another item to return.
 *
 * @throws {@link GlobalAcceleratorServiceException}
 *
 * Base exception class for all service exceptions from GlobalAccelerator service.
 *
 * @public
 */
export class ListAcceleratorsCommand extends command<ListAcceleratorsCommandInput, ListAcceleratorsCommandOutput>(
  _ep0,
  _mw0,
  "ListAccelerators",
  ListAccelerators$
) {
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
