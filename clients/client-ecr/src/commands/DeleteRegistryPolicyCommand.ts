// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRegistryPolicyRequest, DeleteRegistryPolicyResponse } from "../models/models_0";
import { DeleteRegistryPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRegistryPolicyCommand}.
 */
export interface DeleteRegistryPolicyCommandInput extends DeleteRegistryPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRegistryPolicyCommand}.
 */
export interface DeleteRegistryPolicyCommandOutput extends DeleteRegistryPolicyResponse, __MetadataBearer {}

/**
 * Deletes the registry permissions policy.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DeleteRegistryPolicyCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DeleteRegistryPolicyCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = {};
 * const command = new DeleteRegistryPolicyCommand(input);
 * const response = await client.send(command);
 * // { // DeleteRegistryPolicyResponse
 * //   registryId: "STRING_VALUE",
 * //   policyText: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteRegistryPolicyCommandInput - {@link DeleteRegistryPolicyCommandInput}
 * @returns {@link DeleteRegistryPolicyCommandOutput}
 * @see {@link DeleteRegistryPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteRegistryPolicyCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The specified parameter is invalid. Review the available parameters for the API request.
 *
 * @throws {@link RegistryPolicyNotFoundException} (client fault)
 *
 * The registry doesn't have an associated registry policy.
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server-side issue.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * There was an exception validating this request.
 *
 * @throws {@link ECRServiceException}
 *
 * Base exception class for all service exceptions from ECR service.
 *
 * @public
 */
export class DeleteRegistryPolicyCommand extends command<DeleteRegistryPolicyCommandInput, DeleteRegistryPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRegistryPolicy",
  DeleteRegistryPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DeleteRegistryPolicyResponse;
    };
    sdk: {
      input: DeleteRegistryPolicyCommandInput;
      output: DeleteRegistryPolicyCommandOutput;
    };
  };
}
