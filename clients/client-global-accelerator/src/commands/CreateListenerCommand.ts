// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateListenerRequest, CreateListenerResponse } from "../models/models_0";
import { CreateListener$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateListenerCommand}.
 */
export interface CreateListenerCommandInput extends CreateListenerRequest {}
/**
 * @public
 *
 * The output of {@link CreateListenerCommand}.
 */
export interface CreateListenerCommandOutput extends CreateListenerResponse, __MetadataBearer {}

/**
 * <p>Create a listener to process inbound connections from clients to an accelerator. Connections arrive to assigned static
 * 			IP addresses on a port, port range, or list of port ranges that you specify. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, CreateListenerCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, CreateListenerCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // CreateListenerRequest
 *   AcceleratorArn: "STRING_VALUE", // required
 *   PortRanges: [ // PortRanges // required
 *     { // PortRange
 *       FromPort: Number("int"),
 *       ToPort: Number("int"),
 *     },
 *   ],
 *   Protocol: "TCP" || "UDP", // required
 *   ClientAffinity: "NONE" || "SOURCE_IP",
 *   IdempotencyToken: "STRING_VALUE", // required
 * };
 * const command = new CreateListenerCommand(input);
 * const response = await client.send(command);
 * // { // CreateListenerResponse
 * //   Listener: { // Listener
 * //     ListenerArn: "STRING_VALUE",
 * //     PortRanges: [ // PortRanges
 * //       { // PortRange
 * //         FromPort: Number("int"),
 * //         ToPort: Number("int"),
 * //       },
 * //     ],
 * //     Protocol: "TCP" || "UDP",
 * //     ClientAffinity: "NONE" || "SOURCE_IP",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateListenerCommandInput - {@link CreateListenerCommandInput}
 * @returns {@link CreateListenerCommandOutput}
 * @see {@link CreateListenerCommandInput} for command's `input` shape.
 * @see {@link CreateListenerCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AcceleratorNotFoundException} (client fault)
 *  <p>The accelerator that you specified doesn't exist.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>There was an internal error for Global Accelerator.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>An argument that you specified is invalid.</p>
 *
 * @throws {@link InvalidPortRangeException} (client fault)
 *  <p>The port numbers that you specified are not valid numbers or are not unique for this accelerator.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Processing your request would cause you to exceed an Global Accelerator limit.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 *
 * @public
 */
export class CreateListenerCommand extends command<CreateListenerCommandInput, CreateListenerCommandOutput>(
  _ep0,
  _mw0,
  "CreateListener",
  CreateListener$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateListenerRequest;
      output: CreateListenerResponse;
    };
    sdk: {
      input: CreateListenerCommandInput;
      output: CreateListenerCommandOutput;
    };
  };
}
