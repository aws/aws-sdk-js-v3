// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetArtifactUrlRequest, GetArtifactUrlResult } from "../models/models_0";
import { de_GetArtifactUrlCommand, se_GetArtifactUrlCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetArtifactUrlCommand}.
 */
export interface GetArtifactUrlCommandInput extends GetArtifactUrlRequest {}
/**
 * @public
 *
 * The output of {@link GetArtifactUrlCommand}.
 */
export interface GetArtifactUrlCommandOutput extends GetArtifactUrlResult, __MetadataBearer {}

/**
 * <p>Returns the artifact info that corresponds to an artifact id. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, GetArtifactUrlCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, GetArtifactUrlCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * // import type { AmplifyClientConfig } from "@aws-sdk/client-amplify";
 * const config = {}; // type is AmplifyClientConfig
 * const client = new AmplifyClient(config);
 * const input = { // GetArtifactUrlRequest
 *   artifactId: "STRING_VALUE", // required
 * };
 * const command = new GetArtifactUrlCommand(input);
 * const response = await client.send(command);
 * // { // GetArtifactUrlResult
 * //   artifactId: "STRING_VALUE", // required
 * //   artifactUrl: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetArtifactUrlCommandInput - {@link GetArtifactUrlCommandInput}
 * @returns {@link GetArtifactUrlCommandOutput}
 * @see {@link GetArtifactUrlCommandInput} for command's `input` shape.
 * @see {@link GetArtifactUrlCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for AmplifyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A request contains unexpected data. </p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>The service failed to perform an operation due to an internal issue. </p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A resource could not be created because service quotas were exceeded. </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>An entity was not found during an operation. </p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>An operation failed due to a lack of access. </p>
 *
 * @throws {@link AmplifyServiceException}
 * <p>Base exception class for all service exceptions from Amplify service.</p>
 *
 *
 * @public
 */
export class GetArtifactUrlCommand extends $Command
  .classBuilder<
    GetArtifactUrlCommandInput,
    GetArtifactUrlCommandOutput,
    AmplifyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Amplify", "GetArtifactUrl", {})
  .n("AmplifyClient", "GetArtifactUrlCommand")
  .f(void 0, void 0)
  .ser(se_GetArtifactUrlCommand)
  .de(de_GetArtifactUrlCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetArtifactUrlRequest;
      output: GetArtifactUrlResult;
    };
    sdk: {
      input: GetArtifactUrlCommandInput;
      output: GetArtifactUrlCommandOutput;
    };
  };
}
