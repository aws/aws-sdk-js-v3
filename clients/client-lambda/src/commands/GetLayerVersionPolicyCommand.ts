// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetLayerVersionPolicyRequest, GetLayerVersionPolicyResponse } from "../models/models_0";
import { GetLayerVersionPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetLayerVersionPolicyCommand}.
 */
export interface GetLayerVersionPolicyCommandInput extends GetLayerVersionPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetLayerVersionPolicyCommand}.
 */
export interface GetLayerVersionPolicyCommandOutput extends GetLayerVersionPolicyResponse, __MetadataBearer {}

/**
 * Returns the permission policy for a version of an [Lambda layer](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html). For more information, see AddLayerVersionPermission.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetLayerVersionPolicyCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetLayerVersionPolicyCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // GetLayerVersionPolicyRequest
 *   LayerName: "STRING_VALUE", // required
 *   VersionNumber: Number("long"), // required
 * };
 * const command = new GetLayerVersionPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetLayerVersionPolicyResponse
 * //   Policy: "STRING_VALUE",
 * //   RevisionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetLayerVersionPolicyCommandInput - {@link GetLayerVersionPolicyCommandInput}
 * @returns {@link GetLayerVersionPolicyCommandOutput}
 * @see {@link GetLayerVersionPolicyCommandInput} for command's `input` shape.
 * @see {@link GetLayerVersionPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request throughput limit was exceeded. For more information, see [Lambda quotas](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests).
 *
 * @throws {@link LambdaServiceException}
 *
 * Base exception class for all service exceptions from Lambda service.
 *
 * @public
 */
export class GetLayerVersionPolicyCommand extends command<GetLayerVersionPolicyCommandInput, GetLayerVersionPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetLayerVersionPolicy",
  GetLayerVersionPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLayerVersionPolicyRequest;
      output: GetLayerVersionPolicyResponse;
    };
    sdk: {
      input: GetLayerVersionPolicyCommandInput;
      output: GetLayerVersionPolicyCommandOutput;
    };
  };
}
