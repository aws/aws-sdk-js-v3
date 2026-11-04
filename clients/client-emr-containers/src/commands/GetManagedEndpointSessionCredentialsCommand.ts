// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetManagedEndpointSessionCredentialsRequest,
  GetManagedEndpointSessionCredentialsResponse,
} from "../models/models_0";
import { GetManagedEndpointSessionCredentials$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetManagedEndpointSessionCredentialsCommand}.
 */
export interface GetManagedEndpointSessionCredentialsCommandInput extends GetManagedEndpointSessionCredentialsRequest {}
/**
 * @public
 *
 * The output of {@link GetManagedEndpointSessionCredentialsCommand}.
 */
export interface GetManagedEndpointSessionCredentialsCommandOutput extends GetManagedEndpointSessionCredentialsResponse, __MetadataBearer {}

/**
 * Generate a session token to connect to a managed endpoint.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, GetManagedEndpointSessionCredentialsCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, GetManagedEndpointSessionCredentialsCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * // import type { EMRContainersClientConfig } from "@aws-sdk/client-emr-containers";
 * const config = {}; // type is EMRContainersClientConfig
 * const client = new EMRContainersClient(config);
 * const input = { // GetManagedEndpointSessionCredentialsRequest
 *   endpointIdentifier: "STRING_VALUE", // required
 *   virtualClusterIdentifier: "STRING_VALUE", // required
 *   executionRoleArn: "STRING_VALUE", // required
 *   credentialType: "STRING_VALUE", // required
 *   durationInSeconds: Number("int"),
 *   logContext: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new GetManagedEndpointSessionCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // GetManagedEndpointSessionCredentialsResponse
 * //   id: "STRING_VALUE",
 * //   credentials: { // Credentials Union: only one key present
 * //     token: "STRING_VALUE",
 * //   },
 * //   endpointCredentials: {//  Union: only one key present
 * //     token: "STRING_VALUE",
 * //   },
 * //   expiresAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetManagedEndpointSessionCredentialsCommandInput - {@link GetManagedEndpointSessionCredentialsCommandInput}
 * @returns {@link GetManagedEndpointSessionCredentialsCommandOutput}
 * @see {@link GetManagedEndpointSessionCredentialsCommandInput} for command's `input` shape.
 * @see {@link GetManagedEndpointSessionCredentialsCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for EMRContainersClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This is an internal server exception.
 *
 * @throws {@link RequestThrottledException} (client fault)
 *
 * The request throttled.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * There are invalid parameters in the client request.
 *
 * @throws {@link EMRContainersServiceException}
 *
 * Base exception class for all service exceptions from EMRContainers service.
 *
 * @public
 */
export class GetManagedEndpointSessionCredentialsCommand extends command<GetManagedEndpointSessionCredentialsCommandInput, GetManagedEndpointSessionCredentialsCommandOutput>(
  _ep0,
  _mw0,
  "GetManagedEndpointSessionCredentials",
  GetManagedEndpointSessionCredentials$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetManagedEndpointSessionCredentialsRequest;
      output: GetManagedEndpointSessionCredentialsResponse;
    };
    sdk: {
      input: GetManagedEndpointSessionCredentialsCommandInput;
      output: GetManagedEndpointSessionCredentialsCommandOutput;
    };
  };
}
