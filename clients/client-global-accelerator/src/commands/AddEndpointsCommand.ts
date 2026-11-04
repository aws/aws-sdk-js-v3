// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AddEndpointsRequest, AddEndpointsResponse } from "../models/models_0";
import { AddEndpoints$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Add endpoints to an endpoint group. The `AddEndpoints` API operation is the recommended option for adding endpoints. The alternative options are to add endpoints when you create an endpoint group (with the [CreateEndpointGroup](https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateEndpointGroup.html) API) or when you update an endpoint group (with the [UpdateEndpointGroup](https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateEndpointGroup.html) API).
 *
 * There are two advantages to using `AddEndpoints` to add endpoints in Global Accelerator:
 *
 * - It's faster, because Global Accelerator only has to resolve the new endpoints that you're adding, rather than resolving new and existing endpoints.
 * - It's more convenient, because you don't need to specify the current endpoints that are already in the endpoint group, in addition to the new endpoints that you want to add.
 *
 * For information about endpoint types and requirements for endpoints that you can add to Global Accelerator, see [Endpoints for standard accelerators](https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoints.html) in the *Global Accelerator Developer Guide*.
 *
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
 *
 * You don't have access permission.
 *
 * @throws {@link EndpointGroupNotFoundException} (client fault)
 *
 * The endpoint group that you specified doesn't exist.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *
 * There was an internal error for Global Accelerator.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * An argument that you specified is invalid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * Processing your request would cause you to exceed an Global Accelerator limit.
 *
 * @throws {@link TransactionInProgressException} (client fault)
 *
 * There's already a transaction in progress. Another transaction can't be processed.
 *
 * @throws {@link GlobalAcceleratorServiceException}
 *
 * Base exception class for all service exceptions from GlobalAccelerator service.
 *
 * @public
 */
export class AddEndpointsCommand extends command<AddEndpointsCommandInput, AddEndpointsCommandOutput>(
  _ep0,
  _mw0,
  "AddEndpoints",
  AddEndpoints$
) {
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
