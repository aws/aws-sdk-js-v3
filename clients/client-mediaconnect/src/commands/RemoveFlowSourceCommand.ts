// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RemoveFlowSourceRequest, RemoveFlowSourceResponse } from "../models/models_1";
import { RemoveFlowSource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RemoveFlowSourceCommand}.
 */
export interface RemoveFlowSourceCommandInput extends RemoveFlowSourceRequest {}
/**
 * @public
 *
 * The output of {@link RemoveFlowSourceCommand}.
 */
export interface RemoveFlowSourceCommandOutput extends RemoveFlowSourceResponse, __MetadataBearer {}

/**
 * Removes a source from an existing flow. This request can be made only if there is more than one source on the flow.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, RemoveFlowSourceCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, RemoveFlowSourceCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // RemoveFlowSourceRequest
 *   FlowArn: "STRING_VALUE", // required
 *   SourceArn: "STRING_VALUE", // required
 * };
 * const command = new RemoveFlowSourceCommand(input);
 * const response = await client.send(command);
 * // { // RemoveFlowSourceResponse
 * //   FlowArn: "STRING_VALUE",
 * //   SourceArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RemoveFlowSourceCommandInput - {@link RemoveFlowSourceCommandInput}
 * @returns {@link RemoveFlowSourceCommandOutput}
 * @see {@link RemoveFlowSourceCommandInput} for command's `input` shape.
 * @see {@link RemoveFlowSourceCommandOutput} for command's `response` shape.
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
export class RemoveFlowSourceCommand extends command<RemoveFlowSourceCommandInput, RemoveFlowSourceCommandOutput>(
  _ep0,
  _mw0,
  "RemoveFlowSource",
  RemoveFlowSource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveFlowSourceRequest;
      output: RemoveFlowSourceResponse;
    };
    sdk: {
      input: RemoveFlowSourceCommandInput;
      output: RemoveFlowSourceCommandOutput;
    };
  };
}
