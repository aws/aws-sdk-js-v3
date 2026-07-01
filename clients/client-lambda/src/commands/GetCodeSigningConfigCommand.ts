// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCodeSigningConfigRequest, GetCodeSigningConfigResponse } from "../models/models_0";
import { GetCodeSigningConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCodeSigningConfigCommand}.
 */
export interface GetCodeSigningConfigCommandInput extends GetCodeSigningConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetCodeSigningConfigCommand}.
 */
export interface GetCodeSigningConfigCommandOutput extends GetCodeSigningConfigResponse, __MetadataBearer {}

/**
 * <p>Returns information about the specified code signing configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetCodeSigningConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetCodeSigningConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // GetCodeSigningConfigRequest
 *   CodeSigningConfigArn: "STRING_VALUE", // required
 * };
 * const command = new GetCodeSigningConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetCodeSigningConfigResponse
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
 * @param GetCodeSigningConfigCommandInput - {@link GetCodeSigningConfigCommandInput}
 * @returns {@link GetCodeSigningConfigCommandOutput}
 * @see {@link GetCodeSigningConfigCommandInput} for command's `input` shape.
 * @see {@link GetCodeSigningConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The Lambda service encountered an internal error.</p>
 *
 * @throws {@link LambdaServiceException}
 * <p>Base exception class for all service exceptions from Lambda service.</p>
 *
 *
 * @public
 */
export class GetCodeSigningConfigCommand extends command<GetCodeSigningConfigCommandInput, GetCodeSigningConfigCommandOutput>(
  _ep0,
  _mw0,
  "GetCodeSigningConfig",
  GetCodeSigningConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCodeSigningConfigRequest;
      output: GetCodeSigningConfigResponse;
    };
    sdk: {
      input: GetCodeSigningConfigCommandInput;
      output: GetCodeSigningConfigCommandOutput;
    };
  };
}
