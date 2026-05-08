// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EMRServerlessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRServerlessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetSessionEndpointRequest, GetSessionEndpointResponse } from "../models/models_0";
import { GetSessionEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSessionEndpointCommand}.
 */
export interface GetSessionEndpointCommandInput extends GetSessionEndpointRequest {}
/**
 * @public
 *
 * The output of {@link GetSessionEndpointCommand}.
 */
export interface GetSessionEndpointCommandOutput extends GetSessionEndpointResponse, __MetadataBearer {}

/**
 * <p>Returns the session endpoint URL and a time-limited authentication token for the specified session. Use the endpoint and token to connect a client to the session. Call this operation again when the authentication token expires to obtain a new token.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRServerlessClient, GetSessionEndpointCommand } from "@aws-sdk/client-emr-serverless"; // ES Modules import
 * // const { EMRServerlessClient, GetSessionEndpointCommand } = require("@aws-sdk/client-emr-serverless"); // CommonJS import
 * // import type { EMRServerlessClientConfig } from "@aws-sdk/client-emr-serverless";
 * const config = {}; // type is EMRServerlessClientConfig
 * const client = new EMRServerlessClient(config);
 * const input = { // GetSessionEndpointRequest
 *   applicationId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 * };
 * const command = new GetSessionEndpointCommand(input);
 * const response = await client.send(command);
 * // { // GetSessionEndpointResponse
 * //   applicationId: "STRING_VALUE", // required
 * //   sessionId: "STRING_VALUE", // required
 * //   endpoint: "STRING_VALUE", // required
 * //   authToken: "STRING_VALUE", // required
 * //   authTokenExpiresAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetSessionEndpointCommandInput - {@link GetSessionEndpointCommandInput}
 * @returns {@link GetSessionEndpointCommandOutput}
 * @see {@link GetSessionEndpointCommandInput} for command's `input` shape.
 * @see {@link GetSessionEndpointCommandOutput} for command's `response` shape.
 * @see {@link EMRServerlessClientResolvedConfig | config} for EMRServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link EMRServerlessServiceException}
 * <p>Base exception class for all service exceptions from EMRServerless service.</p>
 *
 *
 * @public
 */
export class GetSessionEndpointCommand extends $Command
  .classBuilder<
    GetSessionEndpointCommandInput,
    GetSessionEndpointCommandOutput,
    EMRServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsToledoWebService", "GetSessionEndpoint", {})
  .n("EMRServerlessClient", "GetSessionEndpointCommand")
  .sc(GetSessionEndpoint$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSessionEndpointRequest;
      output: GetSessionEndpointResponse;
    };
    sdk: {
      input: GetSessionEndpointCommandInput;
      output: GetSessionEndpointCommandOutput;
    };
  };
}
