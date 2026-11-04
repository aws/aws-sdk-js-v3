// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSigningConfigurationRequest, GetSigningConfigurationResponse } from "../models/models_0";
import { GetSigningConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSigningConfigurationCommand}.
 */
export interface GetSigningConfigurationCommandInput extends GetSigningConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetSigningConfigurationCommand}.
 */
export interface GetSigningConfigurationCommandOutput extends GetSigningConfigurationResponse, __MetadataBearer {}

/**
 * Retrieves the registry's signing configuration, which defines rules for automatically signing images using Amazon Web Services Signer.
 *
 * For more information, see [Managed signing](https://docs.aws.amazon.com/AmazonECR/latest/userguide/managed-signing.html) in the *Amazon Elastic Container Registry User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, GetSigningConfigurationCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, GetSigningConfigurationCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = {};
 * const command = new GetSigningConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetSigningConfigurationResponse
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
 * @param GetSigningConfigurationCommandInput - {@link GetSigningConfigurationCommandInput}
 * @returns {@link GetSigningConfigurationCommandOutput}
 * @see {@link GetSigningConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetSigningConfigurationCommandOutput} for command's `response` shape.
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
export class GetSigningConfigurationCommand extends command<GetSigningConfigurationCommandInput, GetSigningConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetSigningConfiguration",
  GetSigningConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetSigningConfigurationResponse;
    };
    sdk: {
      input: GetSigningConfigurationCommandInput;
      output: GetSigningConfigurationCommandOutput;
    };
  };
}
