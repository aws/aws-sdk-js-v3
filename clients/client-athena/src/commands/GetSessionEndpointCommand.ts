// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetSessionEndpointRequest, GetSessionEndpointResponse } from "../models/models_0";
import { GetSessionEndpoint } from "../schemas/schemas_0";

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
 * <p>Gets a connection endpoint and authentication token for a given session Id.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetSessionEndpointCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetSessionEndpointCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // GetSessionEndpointRequest
 *   SessionId: "STRING_VALUE", // required
 * };
 * const command = new GetSessionEndpointCommand(input);
 * const response = await client.send(command);
 * // { // GetSessionEndpointResponse
 * //   EndpointUrl: "STRING_VALUE", // required
 * //   AuthToken: "STRING_VALUE", // required
 * //   AuthTokenExpirationTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetSessionEndpointCommandInput - {@link GetSessionEndpointCommandInput}
 * @returns {@link GetSessionEndpointCommandOutput}
 * @see {@link GetSessionEndpointCommandInput} for command's `input` shape.
 * @see {@link GetSessionEndpointCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource, such as a workgroup, was not found.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class GetSessionEndpointCommand extends $Command
  .classBuilder<
    GetSessionEndpointCommandInput,
    GetSessionEndpointCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAthena", "GetSessionEndpoint", {})
  .n("AthenaClient", "GetSessionEndpointCommand")
  .sc(GetSessionEndpoint)
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
