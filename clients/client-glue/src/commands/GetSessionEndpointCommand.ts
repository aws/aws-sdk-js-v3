// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSessionEndpointRequest, GetSessionEndpointResponse } from "../models/models_2";
import { GetSessionEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns the Spark Connect endpoint URL and authentication token for an interactive session.
 *
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
 *
 * Access to a resource was denied.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
 *
 * @throws {@link IllegalSessionStateException} (client fault)
 *
 * The session is in an invalid state to perform a requested operation.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *
 * The operation is not available in the region.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class GetSessionEndpointCommand extends command<GetSessionEndpointCommandInput, GetSessionEndpointCommandOutput>(
  _ep0,
  _mw0,
  "GetSessionEndpoint",
  GetSessionEndpoint$
) {
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
