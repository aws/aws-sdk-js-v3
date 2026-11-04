// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutRegistryPolicyRequest, PutRegistryPolicyResponse } from "../models/models_0";
import { PutRegistryPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutRegistryPolicyCommand}.
 */
export interface PutRegistryPolicyCommandInput extends PutRegistryPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutRegistryPolicyCommand}.
 */
export interface PutRegistryPolicyCommandOutput extends PutRegistryPolicyResponse, __MetadataBearer {}

/**
 * Creates or updates the permissions policy for your registry.
 *
 * A registry policy is used to specify permissions for another Amazon Web Services account and is used when configuring cross-account replication. For more information, see [Registry permissions](https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry-permissions.html) in the *Amazon Elastic Container Registry User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, PutRegistryPolicyCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, PutRegistryPolicyCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = { // PutRegistryPolicyRequest
 *   policyText: "STRING_VALUE", // required
 * };
 * const command = new PutRegistryPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutRegistryPolicyResponse
 * //   registryId: "STRING_VALUE",
 * //   policyText: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutRegistryPolicyCommandInput - {@link PutRegistryPolicyCommandInput}
 * @returns {@link PutRegistryPolicyCommandOutput}
 * @see {@link PutRegistryPolicyCommandInput} for command's `input` shape.
 * @see {@link PutRegistryPolicyCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The specified parameter is invalid. Review the available parameters for the API request.
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
export class PutRegistryPolicyCommand extends command<PutRegistryPolicyCommandInput, PutRegistryPolicyCommandOutput>(
  _ep0,
  _mw0,
  "PutRegistryPolicy",
  PutRegistryPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutRegistryPolicyRequest;
      output: PutRegistryPolicyResponse;
    };
    sdk: {
      input: PutRegistryPolicyCommandInput;
      output: PutRegistryPolicyCommandOutput;
    };
  };
}
