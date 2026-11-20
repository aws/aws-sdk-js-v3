// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopDiscoveryRequest } from "../models/models_0";
import { StopDiscovery$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopDiscoveryCommand}.
 */
export interface StopDiscoveryCommandInput extends StopDiscoveryRequest {}
/**
 * @public
 *
 * The output of {@link StopDiscoveryCommand}.
 */
export interface StopDiscoveryCommandOutput extends __MetadataBearer {}

/**
 * Stops the running API discovery process.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIPortalClient, StopDiscoveryCommand } from "@aws-sdk/client-apiportal"; // ES Modules import
 * // const { APIPortalClient, StopDiscoveryCommand } = require("@aws-sdk/client-apiportal"); // CommonJS import
 * // import type { APIPortalClientConfig } from "@aws-sdk/client-apiportal";
 * const config = {}; // type is APIPortalClientConfig
 * const client = new APIPortalClient(config);
 * const input = { // StopDiscoveryRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new StopDiscoveryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopDiscoveryCommandInput - {@link StopDiscoveryCommandInput}
 * @returns {@link StopDiscoveryCommandOutput}
 * @see {@link StopDiscoveryCommandInput} for command's `input` shape.
 * @see {@link StopDiscoveryCommandOutput} for command's `response` shape.
 * @see {@link APIPortalClientResolvedConfig | config} for APIPortalClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have permission to perform this operation.
 *
 * @throws {@link BadRequestException} (client fault)
 *  The request is not valid. The message identifies the field or value that failed validation.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request conflicts with the current state of the resource, for example because another operation on it is still in progress.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The service encountered an internal error. Try the request again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource does not exist, or you do not have access to it.
 *
 * @throws {@link APIPortalServiceException}
 * <p>Base exception class for all service exceptions from APIPortal service.</p>
 *
 *
 * @public
 */
export class StopDiscoveryCommand extends command<StopDiscoveryCommandInput, StopDiscoveryCommandOutput>(
  _ep0,
  _mw0,
  "StopDiscovery",
  StopDiscovery$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopDiscoveryRequest;
      output: {};
    };
    sdk: {
      input: StopDiscoveryCommandInput;
      output: StopDiscoveryCommandOutput;
    };
  };
}
