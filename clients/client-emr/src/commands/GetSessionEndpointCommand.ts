// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSessionEndpointInput, GetSessionEndpointOutput } from "../models/models_0";
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
export interface GetSessionEndpointCommandInput extends GetSessionEndpointInput {}
/**
 * @public
 *
 * The output of {@link GetSessionEndpointCommand}.
 */
export interface GetSessionEndpointCommandOutput extends GetSessionEndpointOutput, __MetadataBearer {}

/**
 * <p>Returns the Spark Connect endpoint URL and a time-limited authentication token for the specified session. Use the endpoint and token to connect a PySpark client to the session. Call this operation again when the token expires to obtain a new one.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, GetSessionEndpointCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, GetSessionEndpointCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // GetSessionEndpointInput
 *   ClusterId: "STRING_VALUE", // required
 *   SessionId: "STRING_VALUE", // required
 * };
 * const command = new GetSessionEndpointCommand(input);
 * const response = await client.send(command);
 * // { // GetSessionEndpointOutput
 * //   Endpoint: "STRING_VALUE", // required
 * //   AuthToken: "STRING_VALUE",
 * //   AuthTokenExpirationTime: new Date("TIMESTAMP"),
 * //   Credentials: { // Credentials Union: only one key present
 * //     UsernamePassword: { // UsernamePassword
 * //       Username: "STRING_VALUE",
 * //       Password: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSessionEndpointCommandInput - {@link GetSessionEndpointCommandInput}
 * @returns {@link GetSessionEndpointCommandOutput}
 * @see {@link GetSessionEndpointCommandInput} for command's `input` shape.
 * @see {@link GetSessionEndpointCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon EMR
 *          service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
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
      input: GetSessionEndpointInput;
      output: GetSessionEndpointOutput;
    };
    sdk: {
      input: GetSessionEndpointCommandInput;
      output: GetSessionEndpointCommandOutput;
    };
  };
}
