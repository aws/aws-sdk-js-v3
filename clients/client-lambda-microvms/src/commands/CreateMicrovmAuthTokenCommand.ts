// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  LambdaMicrovmsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LambdaMicrovmsClient";
import type { CreateMicrovmAuthTokenRequest, CreateMicrovmAuthTokenResponse } from "../models/models_0";
import { CreateMicrovmAuthToken$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMicrovmAuthTokenCommand}.
 */
export interface CreateMicrovmAuthTokenCommandInput extends CreateMicrovmAuthTokenRequest {}
/**
 * @public
 *
 * The output of {@link CreateMicrovmAuthTokenCommand}.
 */
export interface CreateMicrovmAuthTokenCommandOutput extends CreateMicrovmAuthTokenResponse, __MetadataBearer {}

/**
 * <p>Creates an authentication token for accessing a running MicroVM. The token grants access to the specified ports on the MicroVM endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaMicrovmsClient, CreateMicrovmAuthTokenCommand } from "@aws-sdk/client-lambda-microvms"; // ES Modules import
 * // const { LambdaMicrovmsClient, CreateMicrovmAuthTokenCommand } = require("@aws-sdk/client-lambda-microvms"); // CommonJS import
 * // import type { LambdaMicrovmsClientConfig } from "@aws-sdk/client-lambda-microvms";
 * const config = {}; // type is LambdaMicrovmsClientConfig
 * const client = new LambdaMicrovmsClient(config);
 * const input = { // CreateMicrovmAuthTokenRequest
 *   microvmIdentifier: "STRING_VALUE", // required
 *   expirationInMinutes: Number("int"), // required
 *   allowedPorts: [ // ListOfPortSpecification // required
 *     { // PortSpecification Union: only one key present
 *       port: Number("int"),
 *       range: { // PortRange
 *         startPort: Number("int"), // required
 *         endPort: Number("int"), // required
 *       },
 *       allPorts: {},
 *     },
 *   ],
 * };
 * const command = new CreateMicrovmAuthTokenCommand(input);
 * const response = await client.send(command);
 * // { // CreateMicrovmAuthTokenResponse
 * //   authToken: { // TokenParts // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateMicrovmAuthTokenCommandInput - {@link CreateMicrovmAuthTokenCommandInput}
 * @returns {@link CreateMicrovmAuthTokenCommandOutput}
 * @see {@link CreateMicrovmAuthTokenCommandInput} for command's `input` shape.
 * @see {@link CreateMicrovmAuthTokenCommandOutput} for command's `response` shape.
 * @see {@link LambdaMicrovmsClientResolvedConfig | config} for LambdaMicrovmsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry the request later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Retry the request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by the service.</p>
 *
 * @throws {@link LambdaMicrovmsServiceException}
 * <p>Base exception class for all service exceptions from LambdaMicrovms service.</p>
 *
 *
 * @public
 */
export class CreateMicrovmAuthTokenCommand extends $Command
  .classBuilder<
    CreateMicrovmAuthTokenCommandInput,
    CreateMicrovmAuthTokenCommandOutput,
    LambdaMicrovmsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaMicrovmsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LambdaMicrovms", "CreateMicrovmAuthToken", {})
  .n("LambdaMicrovmsClient", "CreateMicrovmAuthTokenCommand")
  .sc(CreateMicrovmAuthToken$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMicrovmAuthTokenRequest;
      output: CreateMicrovmAuthTokenResponse;
    };
    sdk: {
      input: CreateMicrovmAuthTokenCommandInput;
      output: CreateMicrovmAuthTokenCommandOutput;
    };
  };
}
