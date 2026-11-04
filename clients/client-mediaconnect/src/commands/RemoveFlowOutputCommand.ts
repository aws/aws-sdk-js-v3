// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RemoveFlowOutputRequest, RemoveFlowOutputResponse } from "../models/models_1";
import { RemoveFlowOutput$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RemoveFlowOutputCommand}.
 */
export interface RemoveFlowOutputCommandInput extends RemoveFlowOutputRequest {}
/**
 * @public
 *
 * The output of {@link RemoveFlowOutputCommand}.
 */
export interface RemoveFlowOutputCommandOutput extends RemoveFlowOutputResponse, __MetadataBearer {}

/**
 * Removes an output from an existing flow. This request can be made only on an output that does not have an entitlement associated with it. If the output has an entitlement, you must revoke the entitlement instead. When an entitlement is revoked from a flow, the service automatically removes the associated output.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, RemoveFlowOutputCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, RemoveFlowOutputCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // RemoveFlowOutputRequest
 *   FlowArn: "STRING_VALUE", // required
 *   OutputArn: "STRING_VALUE", // required
 * };
 * const command = new RemoveFlowOutputCommand(input);
 * const response = await client.send(command);
 * // { // RemoveFlowOutputResponse
 * //   FlowArn: "STRING_VALUE",
 * //   OutputArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RemoveFlowOutputCommandInput - {@link RemoveFlowOutputCommandInput}
 * @returns {@link RemoveFlowOutputCommandOutput}
 * @see {@link RemoveFlowOutputCommandInput} for command's `input` shape.
 * @see {@link RemoveFlowOutputCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * The server encountered an internal error and is unable to complete the request.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * One or more of the resources in the request does not exist in the system.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable or busy.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link MediaConnectServiceException}
 *
 * Base exception class for all service exceptions from MediaConnect service.
 *
 * @public
 */
export class RemoveFlowOutputCommand extends command<RemoveFlowOutputCommandInput, RemoveFlowOutputCommandOutput>(
  _ep0,
  _mw0,
  "RemoveFlowOutput",
  RemoveFlowOutput$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveFlowOutputRequest;
      output: RemoveFlowOutputResponse;
    };
    sdk: {
      input: RemoveFlowOutputCommandInput;
      output: RemoveFlowOutputCommandOutput;
    };
  };
}
