// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCapabilityRequest, GetCapabilityResponse } from "../models/models_0";
import { GetCapability$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCapabilityCommand}.
 */
export interface GetCapabilityCommandInput extends GetCapabilityRequest {}
/**
 * @public
 *
 * The output of {@link GetCapabilityCommand}.
 */
export interface GetCapabilityCommandOutput extends GetCapabilityResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a registered capability for an OpenSearch UI application, including its configuration and current status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, GetCapabilityCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, GetCapabilityCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // GetCapabilityRequest
 *   applicationId: "STRING_VALUE", // required
 *   capabilityName: "STRING_VALUE", // required
 * };
 * const command = new GetCapabilityCommand(input);
 * const response = await client.send(command);
 * // { // GetCapabilityResponse
 * //   capabilityName: "STRING_VALUE",
 * //   applicationId: "STRING_VALUE",
 * //   status: "creating" || "create_failed" || "active" || "updating" || "update_failed" || "deleting" || "delete_failed",
 * //   capabilityConfig: { // CapabilityExtendedResponseConfig Union: only one key present
 * //     aiConfig: {},
 * //   },
 * //   failures: [ // CapabilityFailures
 * //     { // CapabilityFailure
 * //       reason: "KMS_KEY_INSUFFICIENT_PERMISSION",
 * //       details: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetCapabilityCommandInput - {@link GetCapabilityCommandInput}
 * @returns {@link GetCapabilityCommandOutput}
 * @see {@link GetCapabilityCommandInput} for command's `input` shape.
 * @see {@link GetCapabilityCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An error occurred because you don't have permissions to access the resource.</p>
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
export class GetCapabilityCommand extends command<GetCapabilityCommandInput, GetCapabilityCommandOutput>(
  _ep0,
  _mw0,
  "GetCapability",
  GetCapability$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCapabilityRequest;
      output: GetCapabilityResponse;
    };
    sdk: {
      input: GetCapabilityCommandInput;
      output: GetCapabilityCommandOutput;
    };
  };
}
