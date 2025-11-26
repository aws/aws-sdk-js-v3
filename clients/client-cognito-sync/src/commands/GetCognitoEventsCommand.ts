// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CognitoSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetCognitoEventsRequest, GetCognitoEventsResponse } from "../models/models_0";
import { GetCognitoEvents } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCognitoEventsCommand}.
 */
export interface GetCognitoEventsCommandInput extends GetCognitoEventsRequest {}
/**
 * @public
 *
 * The output of {@link GetCognitoEventsCommand}.
 */
export interface GetCognitoEventsCommandOutput extends GetCognitoEventsResponse, __MetadataBearer {}

/**
 * <p>Gets the events and the corresponding Lambda functions associated with an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, GetCognitoEventsCommand } from "@aws-sdk/client-cognito-sync"; // ES Modules import
 * // const { CognitoSyncClient, GetCognitoEventsCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * // import type { CognitoSyncClientConfig } from "@aws-sdk/client-cognito-sync";
 * const config = {}; // type is CognitoSyncClientConfig
 * const client = new CognitoSyncClient(config);
 * const input = { // GetCognitoEventsRequest
 *   IdentityPoolId: "STRING_VALUE", // required
 * };
 * const command = new GetCognitoEventsCommand(input);
 * const response = await client.send(command);
 * // { // GetCognitoEventsResponse
 * //   Events: { // Events
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCognitoEventsCommandInput - {@link GetCognitoEventsCommandInput}
 * @returns {@link GetCognitoEventsCommandOutput}
 * @see {@link GetCognitoEventsCommandInput} for command's `input` shape.
 * @see {@link GetCognitoEventsCommandOutput} for command's `response` shape.
 * @see {@link CognitoSyncClientResolvedConfig | config} for CognitoSyncClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  Indicates an internal service
 *       error.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  Thrown when a request parameter does not comply
 *       with the associated constraints.
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  Thrown when a user is not authorized to access the
 *       requested resource.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  Thrown if the resource doesn't
 *       exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Thrown if the request is
 *       throttled.
 *
 * @throws {@link CognitoSyncServiceException}
 * <p>Base exception class for all service exceptions from CognitoSync service.</p>
 *
 *
 * @public
 */
export class GetCognitoEventsCommand extends $Command
  .classBuilder<
    GetCognitoEventsCommandInput,
    GetCognitoEventsCommandOutput,
    CognitoSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSCognitoSyncService", "GetCognitoEvents", {})
  .n("CognitoSyncClient", "GetCognitoEventsCommand")
  .sc(GetCognitoEvents)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCognitoEventsRequest;
      output: GetCognitoEventsResponse;
    };
    sdk: {
      input: GetCognitoEventsCommandInput;
      output: GetCognitoEventsCommandOutput;
    };
  };
}
