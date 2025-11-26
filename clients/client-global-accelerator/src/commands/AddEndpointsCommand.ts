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
import type { AddEndpointsRequest, AddEndpointsResponse } from "../models/models_0";
import { AddEndpoints } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddEndpointsCommand}.
 */
export interface AddEndpointsCommandInput extends AddEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link AddEndpointsCommand}.
 */
export interface AddEndpointsCommandOutput extends AddEndpointsResponse, __MetadataBearer {}

/**
 * <p>Add endpoints to an endpoint group. The <code>AddEndpoints</code> API operation is the recommended option for adding endpoints. The
 * 			alternative options are to add endpoints when you create an endpoint group (with the
 * 			<a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateEndpointGroup.html">CreateEndpointGroup</a> API)
 * 			or when you update an endpoint group (with the
 * 			<a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateEndpointGroup.html">UpdateEndpointGroup</a> API). </p>
 *          <p>There are two advantages to using <code>AddEndpoints</code> to add endpoints in Global Accelerator:</p>
 *          <ul>
 *             <li>
 *                <p>It's faster, because Global Accelerator only has to resolve the new endpoints that
 * 					you're adding, rather than resolving new and existing endpoints.</p>
 *             </li>
 *             <li>
 *                <p>It's more convenient, because you don't need to specify the current
 * 					endpoints that are already in the endpoint group, in addition to the new endpoints that
 * 					you want to add.</p>
 *             </li>
 *          </ul>
 *          <p>For information about endpoint types and requirements for endpoints that you can add
 * 			to Global Accelerator, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoints.html">
 * 				Endpoints for standard accelerators</a> in the <i>Global Accelerator Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, AddEndpointsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, AddEndpointsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // AddEndpointsRequest
 *   EndpointConfigurations: [ // EndpointConfigurations // required
 *     { // EndpointConfiguration
 *       EndpointId: "STRING_VALUE",
 *       Weight: Number("int"),
 *       ClientIPPreservationEnabled: true || false,
 *       AttachmentArn: "STRING_VALUE",
 *     },
 *   ],
 *   EndpointGroupArn: "STRING_VALUE", // required
 * };
 * const command = new AddEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // AddEndpointsResponse
 * //   EndpointDescriptions: [ // EndpointDescriptions
 * //     { // EndpointDescription
 * //       EndpointId: "STRING_VALUE",
 * //       Weight: Number("int"),
 * //       HealthState: "INITIAL" || "HEALTHY" || "UNHEALTHY",
 * //       HealthReason: "STRING_VALUE",
 * //       ClientIPPreservationEnabled: true || false,
 * //     },
 * //   ],
 * //   EndpointGroupArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AddEndpointsCommandInput - {@link AddEndpointsCommandInput}
 * @returns {@link AddEndpointsCommandOutput}
 * @see {@link AddEndpointsCommandInput} for command's `input` shape.
 * @see {@link AddEndpointsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access permission.</p>
 *
 * @throws {@link EndpointGroupNotFoundException} (client fault)
 *  <p>The endpoint group that you specified doesn't exist.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>There was an internal error for Global Accelerator.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>An argument that you specified is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Processing your request would cause you to exceed an Global Accelerator limit.</p>
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
export class AddEndpointsCommand extends $Command
  .classBuilder<
    AddEndpointsCommandInput,
    AddEndpointsCommandOutput,
    GlobalAcceleratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlobalAcceleratorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GlobalAccelerator_V20180706", "AddEndpoints", {})
  .n("GlobalAcceleratorClient", "AddEndpointsCommand")
  .sc(AddEndpoints)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddEndpointsRequest;
      output: AddEndpointsResponse;
    };
    sdk: {
      input: AddEndpointsCommandInput;
      output: AddEndpointsCommandOutput;
    };
  };
}
