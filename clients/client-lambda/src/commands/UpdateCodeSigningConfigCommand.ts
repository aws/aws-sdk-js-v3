// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateCodeSigningConfigRequest, UpdateCodeSigningConfigResponse } from "../models/models_0";
import { UpdateCodeSigningConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateCodeSigningConfigCommand}.
 */
export interface UpdateCodeSigningConfigCommandInput extends UpdateCodeSigningConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCodeSigningConfigCommand}.
 */
export interface UpdateCodeSigningConfigCommandOutput extends UpdateCodeSigningConfigResponse, __MetadataBearer {}

/**
 * Update the code signing configuration. Changes to the code signing configuration take effect the next time a user tries to deploy a code package to the function.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, UpdateCodeSigningConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, UpdateCodeSigningConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // UpdateCodeSigningConfigRequest
 *   CodeSigningConfigArn: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   AllowedPublishers: { // AllowedPublishers
 *     SigningProfileVersionArns: [ // SigningProfileVersionArns // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   CodeSigningPolicies: { // CodeSigningPolicies
 *     UntrustedArtifactOnDeployment: "Warn" || "Enforce",
 *   },
 * };
 * const command = new UpdateCodeSigningConfigCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCodeSigningConfigResponse
 * //   CodeSigningConfig: { // CodeSigningConfig
 * //     CodeSigningConfigId: "STRING_VALUE", // required
 * //     CodeSigningConfigArn: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     AllowedPublishers: { // AllowedPublishers
 * //       SigningProfileVersionArns: [ // SigningProfileVersionArns // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     CodeSigningPolicies: { // CodeSigningPolicies
 * //       UntrustedArtifactOnDeployment: "Warn" || "Enforce",
 * //     },
 * //     LastModified: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateCodeSigningConfigCommandInput - {@link UpdateCodeSigningConfigCommandInput}
 * @returns {@link UpdateCodeSigningConfigCommandOutput}
 * @see {@link UpdateCodeSigningConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateCodeSigningConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One of the parameters in the request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request does not exist.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * The Lambda service encountered an internal error.
 *
 * @throws {@link LambdaServiceException}
 *
 * Base exception class for all service exceptions from Lambda service.
 *
 * @public
 */
export class UpdateCodeSigningConfigCommand extends command<UpdateCodeSigningConfigCommandInput, UpdateCodeSigningConfigCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCodeSigningConfig",
  UpdateCodeSigningConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCodeSigningConfigRequest;
      output: UpdateCodeSigningConfigResponse;
    };
    sdk: {
      input: UpdateCodeSigningConfigCommandInput;
      output: UpdateCodeSigningConfigCommandOutput;
    };
  };
}
