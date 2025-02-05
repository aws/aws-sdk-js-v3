// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetManagedEndpointSessionCredentialsRequest,
  GetManagedEndpointSessionCredentialsResponse,
  GetManagedEndpointSessionCredentialsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_GetManagedEndpointSessionCredentialsCommand,
  se_GetManagedEndpointSessionCredentialsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface GetManagedEndpointSessionCredentialsCommandOutput
  extends GetManagedEndpointSessionCredentialsResponse,
    __MetadataBearer {}

/**
 * <p>Generate a session token to connect to a managed endpoint. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, GetManagedEndpointSessionCredentialsCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, GetManagedEndpointSessionCredentialsCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *  <p>This is an internal server exception.</p>
 *
 * @throws {@link RequestThrottledException} (client fault)
 *  <p>The request throttled.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There are invalid parameters in the client request.</p>
 *
 * @throws {@link EMRContainersServiceException}
 * <p>Base exception class for all service exceptions from EMRContainers service.</p>
 *
 * @public
 */
export class GetManagedEndpointSessionCredentialsCommand extends $Command
  .classBuilder<
    GetManagedEndpointSessionCredentialsCommandInput,
    GetManagedEndpointSessionCredentialsCommandOutput,
    EMRContainersClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRContainersClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsChicagoWebService", "GetManagedEndpointSessionCredentials", {})
  .n("EMRContainersClient", "GetManagedEndpointSessionCredentialsCommand")
  .f(void 0, GetManagedEndpointSessionCredentialsResponseFilterSensitiveLog)
  .ser(se_GetManagedEndpointSessionCredentialsCommand)
  .de(de_GetManagedEndpointSessionCredentialsCommand)
  .build() {
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
