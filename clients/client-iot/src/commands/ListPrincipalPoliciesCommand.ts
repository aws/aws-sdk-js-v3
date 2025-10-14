// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListPrincipalPoliciesRequest, ListPrincipalPoliciesResponse } from "../models/models_2";
import { de_ListPrincipalPoliciesCommand, se_ListPrincipalPoliciesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPrincipalPoliciesCommand}.
 */
export interface ListPrincipalPoliciesCommandInput extends ListPrincipalPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListPrincipalPoliciesCommand}.
 */
export interface ListPrincipalPoliciesCommandOutput extends ListPrincipalPoliciesResponse, __MetadataBearer {}

/**
 * <p>Lists the policies attached to the specified principal. If you use an Cognito
 *          identity, the ID must be in <a href="https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetCredentialsForIdentity.html#API_GetCredentialsForIdentity_RequestSyntax">AmazonCognito Identity format</a>.</p>
 *          <p>
 *             <b>Note:</b> This action is deprecated and works as
 *          expected for backward compatibility, but we won't add enhancements. Use <a>ListAttachedPolicies</a> instead.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPrincipalPolicies</a> action.</p>
 *
 * @deprecated deprecated
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListPrincipalPoliciesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListPrincipalPoliciesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListPrincipalPoliciesRequest
 *   principal: "STRING_VALUE", // required
 *   marker: "STRING_VALUE",
 *   pageSize: Number("int"),
 *   ascendingOrder: true || false,
 * };
 * const command = new ListPrincipalPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListPrincipalPoliciesResponse
 * //   policies: [ // Policies
 * //     { // Policy
 * //       policyName: "STRING_VALUE",
 * //       policyArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPrincipalPoliciesCommandInput - {@link ListPrincipalPoliciesCommandInput}
 * @returns {@link ListPrincipalPoliciesCommandOutput}
 * @see {@link ListPrincipalPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListPrincipalPoliciesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class ListPrincipalPoliciesCommand extends $Command
  .classBuilder<
    ListPrincipalPoliciesCommandInput,
    ListPrincipalPoliciesCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "ListPrincipalPolicies", {})
  .n("IoTClient", "ListPrincipalPoliciesCommand")
  .f(void 0, void 0)
  .ser(se_ListPrincipalPoliciesCommand)
  .de(de_ListPrincipalPoliciesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPrincipalPoliciesRequest;
      output: ListPrincipalPoliciesResponse;
    };
    sdk: {
      input: ListPrincipalPoliciesCommandInput;
      output: ListPrincipalPoliciesCommandOutput;
    };
  };
}
