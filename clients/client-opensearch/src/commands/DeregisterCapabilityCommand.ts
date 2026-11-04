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
 * Deregisters a capability from an OpenSearch UI application. This operation removes the capability and its associated configuration.
 *
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
 *
 * An error occurred because you don't have permissions to access the resource.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * An error occurred because the client attempts to remove a resource that is currently in use.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *
 * An error occured because the client wanted to access an unsupported operation.
 *
 * @throws {@link InternalException} (server fault)
 *
 * Request processing failed because of an unknown error, exception, or internal failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * An exception for accessing or deleting a resource that doesn't exist.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An exception for accessing or deleting a resource that doesn't exist.
 *
 * @throws {@link OpenSearchServiceException}
 *
 * Base exception class for all service exceptions from OpenSearch service.
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
