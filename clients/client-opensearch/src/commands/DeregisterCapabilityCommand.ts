// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeregisterCapabilityRequest, DeregisterCapabilityResponse } from "../models/models_0";
import { DeregisterCapability$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeregisterCapabilityCommand}.
 */
export interface DeregisterCapabilityCommandInput extends DeregisterCapabilityRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterCapabilityCommand}.
 */
export interface DeregisterCapabilityCommandOutput extends DeregisterCapabilityResponse, __MetadataBearer {}

/**
 * <p>Deregisters a capability from an OpenSearch UI application. This operation removes the capability and its associated configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, DeregisterCapabilityCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, DeregisterCapabilityCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // DeregisterCapabilityRequest
 *   applicationId: "STRING_VALUE", // required
 *   capabilityName: "STRING_VALUE", // required
 * };
 * const command = new DeregisterCapabilityCommand(input);
 * const response = await client.send(command);
 * // { // DeregisterCapabilityResponse
 * //   status: "creating" || "create_failed" || "active" || "updating" || "update_failed" || "deleting" || "delete_failed",
 * // };
 *
 * ```
 *
 * @param DeregisterCapabilityCommandInput - {@link DeregisterCapabilityCommandInput}
 * @returns {@link DeregisterCapabilityCommandOutput}
 * @see {@link DeregisterCapabilityCommandInput} for command's `input` shape.
 * @see {@link DeregisterCapabilityCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An error occurred because you don't have permissions to access the resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>An error occurred because the client attempts to remove a resource that is currently in use.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 *
 * @public
 */
export class DeregisterCapabilityCommand extends command<DeregisterCapabilityCommandInput, DeregisterCapabilityCommandOutput>(
  _ep0,
  _mw0,
  "DeregisterCapability",
  DeregisterCapability$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterCapabilityRequest;
      output: DeregisterCapabilityResponse;
    };
    sdk: {
      input: DeregisterCapabilityCommandInput;
      output: DeregisterCapabilityCommandOutput;
    };
  };
}
