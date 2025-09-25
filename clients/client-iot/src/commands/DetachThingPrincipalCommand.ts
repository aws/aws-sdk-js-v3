// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DetachThingPrincipalRequest, DetachThingPrincipalResponse } from "../models/models_1";
import { DetachThingPrincipal } from "../schemas/schemas_17_Principal";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DetachThingPrincipalCommand}.
 */
export interface DetachThingPrincipalCommandInput extends DetachThingPrincipalRequest {}
/**
 * @public
 *
 * The output of {@link DetachThingPrincipalCommand}.
 */
export interface DetachThingPrincipalCommandOutput extends DetachThingPrincipalResponse, __MetadataBearer {}

/**
 * <p>Detaches the specified principal from the specified thing. A principal can be X.509
 * 			certificates, IAM users, groups, and roles, Amazon Cognito identities or federated
 * 			identities.</p>
 *          <note>
 *             <p>This call is asynchronous. It might take several seconds for the detachment to
 * 				propagate.</p>
 *          </note>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DetachThingPrincipal</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DetachThingPrincipalCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DetachThingPrincipalCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DetachThingPrincipalRequest
 *   thingName: "STRING_VALUE", // required
 *   principal: "STRING_VALUE", // required
 * };
 * const command = new DetachThingPrincipalCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DetachThingPrincipalCommandInput - {@link DetachThingPrincipalCommandInput}
 * @returns {@link DetachThingPrincipalCommandOutput}
 * @see {@link DetachThingPrincipalCommandInput} for command's `input` shape.
 * @see {@link DetachThingPrincipalCommandOutput} for command's `response` shape.
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
export class DetachThingPrincipalCommand extends $Command
  .classBuilder<
    DetachThingPrincipalCommandInput,
    DetachThingPrincipalCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "DetachThingPrincipal", {})
  .n("IoTClient", "DetachThingPrincipalCommand")
  .sc(DetachThingPrincipal)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetachThingPrincipalRequest;
      output: {};
    };
    sdk: {
      input: DetachThingPrincipalCommandInput;
      output: DetachThingPrincipalCommandOutput;
    };
  };
}
