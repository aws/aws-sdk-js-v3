// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CognitoSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SetCognitoEventsRequest } from "../models/models_0";
import { de_SetCognitoEventsCommand, se_SetCognitoEventsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetCognitoEventsCommand}.
 */
export interface SetCognitoEventsCommandInput extends SetCognitoEventsRequest {}
/**
 * @public
 *
 * The output of {@link SetCognitoEventsCommand}.
 */
export interface SetCognitoEventsCommandOutput extends __MetadataBearer {}

/**
 * <p>Sets the AWS Lambda function for a given event type for an identity pool. This request only updates the key/value pair specified. Other key/values pairs are not updated. To remove a key value pair, pass a empty value for the particular key.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, SetCognitoEventsCommand } from "@aws-sdk/client-cognito-sync"; // ES Modules import
 * // const { CognitoSyncClient, SetCognitoEventsCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * const client = new CognitoSyncClient(config);
 * const input = { // SetCognitoEventsRequest
 *   IdentityPoolId: "STRING_VALUE", // required
 *   Events: { // Events // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new SetCognitoEventsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetCognitoEventsCommandInput - {@link SetCognitoEventsCommandInput}
 * @returns {@link SetCognitoEventsCommandOutput}
 * @see {@link SetCognitoEventsCommandInput} for command's `input` shape.
 * @see {@link SetCognitoEventsCommandOutput} for command's `response` shape.
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
export class SetCognitoEventsCommand extends $Command
  .classBuilder<
    SetCognitoEventsCommandInput,
    SetCognitoEventsCommandOutput,
    CognitoSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSCognitoSyncService", "SetCognitoEvents", {})
  .n("CognitoSyncClient", "SetCognitoEventsCommand")
  .f(void 0, void 0)
  .ser(se_SetCognitoEventsCommand)
  .de(de_SetCognitoEventsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetCognitoEventsRequest;
      output: {};
    };
    sdk: {
      input: SetCognitoEventsCommandInput;
      output: SetCognitoEventsCommandOutput;
    };
  };
}
