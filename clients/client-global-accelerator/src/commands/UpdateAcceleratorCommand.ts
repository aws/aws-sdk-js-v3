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
import type { UpdateAcceleratorRequest, UpdateAcceleratorResponse } from "../models/models_0";
import { UpdateAccelerator } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAcceleratorCommand}.
 */
export interface UpdateAcceleratorCommandInput extends UpdateAcceleratorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAcceleratorCommand}.
 */
export interface UpdateAcceleratorCommandOutput extends UpdateAcceleratorResponse, __MetadataBearer {}

/**
 * <p>Update an accelerator to make changes, such as the following: </p>
 *          <ul>
 *             <li>
 *                <p>Change the name of the accelerator.</p>
 *             </li>
 *             <li>
 *                <p>Disable the accelerator so that it no longer accepts or routes traffic, or so that you can delete it.</p>
 *             </li>
 *             <li>
 *                <p>Enable the accelerator, if it is disabled.</p>
 *             </li>
 *             <li>
 *                <p>Change the IP address type to dual-stack if it is IPv4, or change the IP address type to IPv4 if it's dual-stack.</p>
 *             </li>
 *          </ul>
 *          <p>Be aware that static IP addresses remain assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no
 * 			longer accepts or routes traffic. However, when you delete the accelerator, you lose the static IP addresses that are assigned to it, so you
 * 			can no longer route traffic by using them.</p>
 *          <important>
 *             <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the
 * 				US West (Oregon) Region to create, update, or otherwise work with accelerators.  That is, for example, specify <code>--region us-west-2</code>
 * 				on Amazon Web Services CLI commands.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, UpdateAcceleratorCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, UpdateAcceleratorCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // UpdateAcceleratorRequest
 *   AcceleratorArn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   IpAddressType: "IPV4" || "DUAL_STACK",
 *   IpAddresses: [ // IpAddresses
 *     "STRING_VALUE",
 *   ],
 *   Enabled: true || false,
 * };
 * const command = new UpdateAcceleratorCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAcceleratorResponse
 * //   Accelerator: { // Accelerator
 * //     AcceleratorArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     IpAddressType: "IPV4" || "DUAL_STACK",
 * //     Enabled: true || false,
 * //     IpSets: [ // IpSets
 * //       { // IpSet
 * //         IpFamily: "STRING_VALUE",
 * //         IpAddresses: [ // IpAddresses
 * //           "STRING_VALUE",
 * //         ],
 * //         IpAddressFamily: "IPv4" || "IPv6",
 * //       },
 * //     ],
 * //     DnsName: "STRING_VALUE",
 * //     Status: "DEPLOYED" || "IN_PROGRESS",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     DualStackDnsName: "STRING_VALUE",
 * //     Events: [ // AcceleratorEvents
 * //       { // AcceleratorEvent
 * //         Message: "STRING_VALUE",
 * //         Timestamp: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAcceleratorCommandInput - {@link UpdateAcceleratorCommandInput}
 * @returns {@link UpdateAcceleratorCommandOutput}
 * @see {@link UpdateAcceleratorCommandInput} for command's `input` shape.
 * @see {@link UpdateAcceleratorCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AcceleratorNotFoundException} (client fault)
 *  <p>The accelerator that you specified doesn't exist.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access permission.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You can't use both of those options.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>There was an internal error for Global Accelerator.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>An argument that you specified is invalid.</p>
 *
 * @throws {@link TransactionInProgressException} (client fault)
 *  <p>There's already a transaction in progress. Another transaction can't be processed.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 *
 * @public
 */
export class UpdateAcceleratorCommand extends $Command
  .classBuilder<
    UpdateAcceleratorCommandInput,
    UpdateAcceleratorCommandOutput,
    GlobalAcceleratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlobalAcceleratorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GlobalAccelerator_V20180706", "UpdateAccelerator", {})
  .n("GlobalAcceleratorClient", "UpdateAcceleratorCommand")
  .sc(UpdateAccelerator)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAcceleratorRequest;
      output: UpdateAcceleratorResponse;
    };
    sdk: {
      input: UpdateAcceleratorCommandInput;
      output: UpdateAcceleratorCommandOutput;
    };
  };
}
