// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSecurityPolicyRequest, DeleteSecurityPolicyResponse } from "../models/models_0";
import { DeleteSecurityPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSecurityPolicyCommand}.
 */
export interface DeleteSecurityPolicyCommandInput extends DeleteSecurityPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSecurityPolicyCommand}.
 */
export interface DeleteSecurityPolicyCommandOutput extends DeleteSecurityPolicyResponse, __MetadataBearer {}

/**
 * Deletes an OpenSearch Serverless security policy.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, DeleteSecurityPolicyCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, DeleteSecurityPolicyCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * // import type { OpenSearchServerlessClientConfig } from "@aws-sdk/client-opensearchserverless";
 * const config = {}; // type is OpenSearchServerlessClientConfig
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // DeleteSecurityPolicyRequest
 *   type: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteSecurityPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSecurityPolicyCommandInput - {@link DeleteSecurityPolicyCommandInput}
 * @returns {@link DeleteSecurityPolicyCommandOutput}
 * @see {@link DeleteSecurityPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteSecurityPolicyCommandOutput} for command's `response` shape.
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
export class DeleteSecurityPolicyCommand extends command<DeleteSecurityPolicyCommandInput, DeleteSecurityPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSecurityPolicy",
  DeleteSecurityPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSecurityPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteSecurityPolicyCommandInput;
      output: DeleteSecurityPolicyCommandOutput;
    };
  };
}
