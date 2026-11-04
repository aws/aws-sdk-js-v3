// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RegisterCapabilityRequest, RegisterCapabilityResponse } from "../models/models_1";
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
 * Registers a capability for an OpenSearch UI application. Use this operation to enable specific capabilities, such as AI features, for a given application. The capability configuration defines the type and settings of the capability to register. For more information about the AI features, see [Agentic AI for OpenSearch UI](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/application-ai-assistant.html).
 *
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * An exception for when a request would cause a service quota to be exceeded.
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
