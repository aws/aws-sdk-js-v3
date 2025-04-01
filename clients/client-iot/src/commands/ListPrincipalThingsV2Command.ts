// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListPrincipalThingsV2Request, ListPrincipalThingsV2Response } from "../models/models_2";
import { de_ListPrincipalThingsV2Command, se_ListPrincipalThingsV2Command } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPrincipalThingsV2Command}.
 */
export interface ListPrincipalThingsV2CommandInput extends ListPrincipalThingsV2Request {}
/**
 * @public
 *
 * The output of {@link ListPrincipalThingsV2Command}.
 */
export interface ListPrincipalThingsV2CommandOutput extends ListPrincipalThingsV2Response, __MetadataBearer {}

/**
 * <p>Lists the things associated with the specified principal. A principal can be an X.509
 * 			certificate or an Amazon Cognito ID.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPrincipalThings</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListPrincipalThingsV2Command } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListPrincipalThingsV2Command } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // ListPrincipalThingsV2Request
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   principal: "STRING_VALUE", // required
 *   thingPrincipalType: "EXCLUSIVE_THING" || "NON_EXCLUSIVE_THING",
 * };
 * const command = new ListPrincipalThingsV2Command(input);
 * const response = await client.send(command);
 * // { // ListPrincipalThingsV2Response
 * //   principalThingObjects: [ // PrincipalThingObjects
 * //     { // PrincipalThingObject
 * //       thingName: "STRING_VALUE", // required
 * //       thingPrincipalType: "EXCLUSIVE_THING" || "NON_EXCLUSIVE_THING",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPrincipalThingsV2CommandInput - {@link ListPrincipalThingsV2CommandInput}
 * @returns {@link ListPrincipalThingsV2CommandOutput}
 * @see {@link ListPrincipalThingsV2CommandInput} for command's `input` shape.
 * @see {@link ListPrincipalThingsV2CommandOutput} for command's `response` shape.
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
export class ListPrincipalThingsV2Command extends $Command
  .classBuilder<
    ListPrincipalThingsV2CommandInput,
    ListPrincipalThingsV2CommandOutput,
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
  .s("AWSIotService", "ListPrincipalThingsV2", {})
  .n("IoTClient", "ListPrincipalThingsV2Command")
  .f(void 0, void 0)
  .ser(se_ListPrincipalThingsV2Command)
  .de(de_ListPrincipalThingsV2Command)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPrincipalThingsV2Request;
      output: ListPrincipalThingsV2Response;
    };
    sdk: {
      input: ListPrincipalThingsV2CommandInput;
      output: ListPrincipalThingsV2CommandOutput;
    };
  };
}
