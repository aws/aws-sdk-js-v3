// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSigningConfigurationRequest, DeleteSigningConfigurationResponse } from "../models/models_0";
import { DeleteSigningConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSigningConfigurationCommand}.
 */
export interface DeleteSigningConfigurationCommandInput extends DeleteSigningConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSigningConfigurationCommand}.
 */
export interface DeleteSigningConfigurationCommandOutput extends DeleteSigningConfigurationResponse, __MetadataBearer {}

/**
 * Deletes the registry's signing configuration. Images pushed after deletion of the signing configuration will no longer be automatically signed.
 *
 * For more information, see [Managed signing](https://docs.aws.amazon.com/AmazonECR/latest/userguide/managed-signing.html) in the *Amazon Elastic Container Registry User Guide*.
 *
 * > **Note:** Deleting the signing configuration does not affect existing image signatures.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DeleteSigningConfigurationCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DeleteSigningConfigurationCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = {};
 * const command = new DeleteSigningConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSigningConfigurationResponse
 * //   registryId: "STRING_VALUE",
 * //   signingConfiguration: { // SigningConfiguration
 * //     rules: [ // SigningRuleList // required
 * //       { // SigningRule
 * //         signingProfileArn: "STRING_VALUE", // required
 * //         repositoryFilters: [ // SigningRepositoryFilterList
 * //           { // SigningRepositoryFilter
 * //             filter: "STRING_VALUE", // required
 * //             filterType: "WILDCARD_MATCH", // required
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteSigningConfigurationCommandInput - {@link DeleteSigningConfigurationCommandInput}
 * @returns {@link DeleteSigningConfigurationCommandOutput}
 * @see {@link DeleteSigningConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteSigningConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server-side issue.
 *
 * @throws {@link SigningConfigurationNotFoundException} (client fault)
 *
 * The specified signing configuration was not found. This occurs when attempting to retrieve or delete a signing configuration that does not exist.
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
export class DeleteSigningConfigurationCommand extends command<DeleteSigningConfigurationCommandInput, DeleteSigningConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSigningConfiguration",
  DeleteSigningConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DeleteSigningConfigurationResponse;
    };
    sdk: {
      input: DeleteSigningConfigurationCommandInput;
      output: DeleteSigningConfigurationCommandOutput;
    };
  };
}
