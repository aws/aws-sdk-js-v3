// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RemoveEndpointsRequest } from "../models/models_0";
import { RemoveEndpoints$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RemoveEndpointsCommand}.
 */
export interface RemoveEndpointsCommandInput extends RemoveEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link RemoveEndpointsCommand}.
 */
export interface RemoveEndpointsCommandOutput extends __MetadataBearer {}

/**
 * Remove endpoints from an endpoint group.
 *
 * The `RemoveEndpoints` API operation is the recommended option for removing endpoints. The alternative is to remove endpoints by updating an endpoint group by using the [UpdateEndpointGroup](https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateEndpointGroup.html) API operation. There are two advantages to using `AddEndpoints` to remove endpoints instead:
 *
 * - It's more convenient, because you only need to specify the endpoints that you want to remove. With the `UpdateEndpointGroup` API operation, you must specify all of the endpoints in the endpoint group except the ones that you want to remove from the group.
 * - It's faster, because Global Accelerator doesn't need to resolve any endpoints. With the `UpdateEndpointGroup` API operation, Global Accelerator must resolve all of the endpoints that remain in the group.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, RemoveEndpointsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, RemoveEndpointsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // RemoveEndpointsRequest
 *   EndpointIdentifiers: [ // EndpointIdentifiers // required
 *     { // EndpointIdentifier
 *       EndpointId: "STRING_VALUE", // required
 *       ClientIPPreservationEnabled: true || false,
 *     },
 *   ],
 *   EndpointGroupArn: "STRING_VALUE", // required
 * };
 * const command = new RemoveEndpointsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveEndpointsCommandInput - {@link RemoveEndpointsCommandInput}
 * @returns {@link RemoveEndpointsCommandOutput}
 * @see {@link RemoveEndpointsCommandInput} for command's `input` shape.
 * @see {@link RemoveEndpointsCommandOutput} for command's `response` shape.
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
export class RemoveEndpointsCommand extends command<RemoveEndpointsCommandInput, RemoveEndpointsCommandOutput>(
  _ep0,
  _mw0,
  "RemoveEndpoints",
  RemoveEndpoints$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveEndpointsRequest;
      output: {};
    };
    sdk: {
      input: RemoveEndpointsCommandInput;
      output: RemoveEndpointsCommandOutput;
    };
  };
}
