// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { AttachThingPrincipalRequest, AttachThingPrincipalResponse } from "../models/models_0";
import { de_AttachThingPrincipalCommand, se_AttachThingPrincipalCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AttachThingPrincipalCommand}.
 */
export interface AttachThingPrincipalCommandInput extends AttachThingPrincipalRequest {}
/**
 * @public
 *
 * The output of {@link AttachThingPrincipalCommand}.
 */
export interface AttachThingPrincipalCommandOutput extends AttachThingPrincipalResponse, __MetadataBearer {}

/**
 * <p>Attaches the specified principal to the specified thing. A principal can be X.509
 * 			certificates, Amazon Cognito identities or federated identities.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AttachThingPrincipal</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, AttachThingPrincipalCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, AttachThingPrincipalCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // AttachThingPrincipalRequest
 *   thingName: "STRING_VALUE", // required
 *   principal: "STRING_VALUE", // required
 * };
 * const command = new AttachThingPrincipalCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AttachThingPrincipalCommandInput - {@link AttachThingPrincipalCommandInput}
 * @returns {@link AttachThingPrincipalCommandOutput}
 * @see {@link AttachThingPrincipalCommandInput} for command's `input` shape.
 * @see {@link AttachThingPrincipalCommandOutput} for command's `response` shape.
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
 * @public
 */
export class AttachThingPrincipalCommand extends $Command
  .classBuilder<
    AttachThingPrincipalCommandInput,
    AttachThingPrincipalCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "AttachThingPrincipal", {})
  .n("IoTClient", "AttachThingPrincipalCommand")
  .f(void 0, void 0)
  .ser(se_AttachThingPrincipalCommand)
  .de(de_AttachThingPrincipalCommand)
  .build() {}
