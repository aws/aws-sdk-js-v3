// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { GetSessionEndpointRequest, GetSessionEndpointResponse } from "../models/models_2";
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
 * <p>Returns the Spark Connect endpoint URL and authentication token for an interactive session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetSessionEndpointCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetSessionEndpointCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetSessionEndpointRequest
 *   SessionId: "STRING_VALUE", // required
 * };
 * const command = new GetSessionEndpointCommand(input);
 * const response = await client.send(command);
 * // { // GetSessionEndpointResponse
 * //   SparkConnect: { // SessionEndpoint
 * //     Url: "STRING_VALUE", // required
 * //     AuthToken: "STRING_VALUE", // required
 * //     AuthTokenExpirationTime: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSessionEndpointCommandInput - {@link GetSessionEndpointCommandInput}
 * @returns {@link GetSessionEndpointCommandOutput}
 * @see {@link GetSessionEndpointCommandInput} for command's `input` shape.
 * @see {@link GetSessionEndpointCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link IllegalSessionStateException} (client fault)
 *  <p>The session is in an invalid state to perform a requested operation.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>The operation is not available in the region.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class GetSessionEndpointCommand extends $Command
  .classBuilder<
    GetSessionEndpointCommandInput,
    GetSessionEndpointCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "GetSessionEndpoint", {})
  .n("GlueClient", "GetSessionEndpointCommand")
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
