// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSecurityConfigRequest, DeleteSecurityConfigResponse } from "../models/models_0";
import { DeleteSecurityConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSecurityConfigCommand}.
 */
export interface DeleteSecurityConfigCommandInput extends DeleteSecurityConfigRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSecurityConfigCommand}.
 */
export interface DeleteSecurityConfigCommandOutput extends DeleteSecurityConfigResponse, __MetadataBearer {}

/**
 * Deletes a security configuration for OpenSearch Serverless. For more information, see [SAML authentication for Amazon OpenSearch Serverless](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, DeleteSecurityConfigCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, DeleteSecurityConfigCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * // import type { OpenSearchServerlessClientConfig } from "@aws-sdk/client-opensearchserverless";
 * const config = {}; // type is OpenSearchServerlessClientConfig
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // DeleteSecurityConfigRequest
 *   id: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteSecurityConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSecurityConfigCommandInput - {@link DeleteSecurityConfigCommandInput}
 * @returns {@link DeleteSecurityConfigCommandOutput}
 * @see {@link DeleteSecurityConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteSecurityConfigCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchServerlessClientResolvedConfig | config} for OpenSearchServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * When creating a resource, thrown when a resource with the same name already exists or is being created. When deleting a resource, thrown when the resource is not in the ACTIVE, FAILED, or UPDATE_FAILED state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Thrown when an error internal to the service occurs while processing a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Thrown when accessing or deleting a resource that does not exist.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Thrown when the HTTP request contains invalid input or is missing required input.
 *
 * @throws {@link OpenSearchServerlessServiceException}
 *
 * Base exception class for all service exceptions from OpenSearchServerless service.
 *
 * @public
 */
export class DeleteSecurityConfigCommand extends command<DeleteSecurityConfigCommandInput, DeleteSecurityConfigCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSecurityConfig",
  DeleteSecurityConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSecurityConfigRequest;
      output: {};
    };
    sdk: {
      input: DeleteSecurityConfigCommandInput;
      output: DeleteSecurityConfigCommandOutput;
    };
  };
}
