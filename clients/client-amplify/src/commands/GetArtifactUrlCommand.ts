// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetArtifactUrlRequest, GetArtifactUrlResult } from "../models/models_0";
import { GetArtifactUrl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns the artifact info that corresponds to an artifact id.
 *
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
 *
 * A request contains unexpected data.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * The service failed to perform an operation due to an internal issue.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A resource could not be created because service quotas were exceeded.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * An entity was not found during an operation.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * An operation failed due to a lack of access.
 *
 * @throws {@link AmplifyServiceException}
 *
 * Base exception class for all service exceptions from Amplify service.
 *
 * @public
 */
export class GetArtifactUrlCommand extends command<GetArtifactUrlCommandInput, GetArtifactUrlCommandOutput>(
  _ep0,
  _mw0,
  "GetArtifactUrl",
  GetArtifactUrl$
) {
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
