// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RegisterCapabilityRequest } from "../models/models_0";
import type { RegisterCapabilityResponse } from "../models/models_1";
import { RegisterCapability$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RegisterCapabilityCommand}.
 */
export interface RegisterCapabilityCommandInput extends RegisterCapabilityRequest {}
/**
 * @public
 *
 * The output of {@link RegisterCapabilityCommand}.
 */
export interface RegisterCapabilityCommandOutput extends RegisterCapabilityResponse, __MetadataBearer {}

/**
 * <p>Registers a capability for an OpenSearch UI application. Use this operation to enable specific capabilities, such as AI features, for a given application. The capability configuration defines the type and settings of the capability to register. For more information about the AI features, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/application-ai-assistant.html">Agentic AI for OpenSearch UI</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, RegisterCapabilityCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, RegisterCapabilityCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // RegisterCapabilityRequest
 *   applicationId: "STRING_VALUE", // required
 *   capabilityName: "STRING_VALUE", // required
 *   capabilityConfig: { // CapabilityBaseRequestConfig Union: only one key present
 *     aiConfig: {},
 *   },
 * };
 * const command = new RegisterCapabilityCommand(input);
 * const response = await client.send(command);
 * // { // RegisterCapabilityResponse
 * //   capabilityName: "STRING_VALUE",
 * //   applicationId: "STRING_VALUE",
 * //   status: "creating" || "create_failed" || "active" || "updating" || "update_failed" || "deleting" || "delete_failed",
 * //   capabilityConfig: { // CapabilityBaseResponseConfig Union: only one key present
 * //     aiConfig: {},
 * //   },
 * // };
 *
 * ```
 *
 * @param RegisterCapabilityCommandInput - {@link RegisterCapabilityCommandInput}
 * @returns {@link RegisterCapabilityCommandOutput}
 * @see {@link RegisterCapabilityCommandInput} for command's `input` shape.
 * @see {@link RegisterCapabilityCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>An exception for when a request would cause a service quota to be exceeded.</p>
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
export class RegisterCapabilityCommand extends command<RegisterCapabilityCommandInput, RegisterCapabilityCommandOutput>(
  _ep0,
  _mw0,
  "RegisterCapability",
  RegisterCapability$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterCapabilityRequest;
      output: RegisterCapabilityResponse;
    };
    sdk: {
      input: RegisterCapabilityCommandInput;
      output: RegisterCapabilityCommandOutput;
    };
  };
}
