// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListThingPrincipalsV2Request, ListThingPrincipalsV2Response } from "../models/models_2";
import { ListThingPrincipalsV2 } from "../schemas/schemas_17_Principal";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListThingPrincipalsV2Command}.
 */
export interface ListThingPrincipalsV2CommandInput extends ListThingPrincipalsV2Request {}
/**
 * @public
 *
 * The output of {@link ListThingPrincipalsV2Command}.
 */
export interface ListThingPrincipalsV2CommandOutput extends ListThingPrincipalsV2Response, __MetadataBearer {}

/**
 * <p>Lists the principals associated with the specified thing. A principal can be an X.509
 * 			certificate or an Amazon Cognito ID.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingPrincipals</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListThingPrincipalsV2Command } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListThingPrincipalsV2Command } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListThingPrincipalsV2Request
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   thingName: "STRING_VALUE", // required
 *   thingPrincipalType: "EXCLUSIVE_THING" || "NON_EXCLUSIVE_THING",
 * };
 * const command = new ListThingPrincipalsV2Command(input);
 * const response = await client.send(command);
 * // { // ListThingPrincipalsV2Response
 * //   thingPrincipalObjects: [ // ThingPrincipalObjects
 * //     { // ThingPrincipalObject
 * //       principal: "STRING_VALUE", // required
 * //       thingPrincipalType: "EXCLUSIVE_THING" || "NON_EXCLUSIVE_THING",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListThingPrincipalsV2CommandInput - {@link ListThingPrincipalsV2CommandInput}
 * @returns {@link ListThingPrincipalsV2CommandOutput}
 * @see {@link ListThingPrincipalsV2CommandInput} for command's `input` shape.
 * @see {@link ListThingPrincipalsV2CommandOutput} for command's `response` shape.
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
export class ListThingPrincipalsV2Command extends $Command
  .classBuilder<
    ListThingPrincipalsV2CommandInput,
    ListThingPrincipalsV2CommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "ListThingPrincipalsV2", {})
  .n("IoTClient", "ListThingPrincipalsV2Command")
  .sc(ListThingPrincipalsV2)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListThingPrincipalsV2Request;
      output: ListThingPrincipalsV2Response;
    };
    sdk: {
      input: ListThingPrincipalsV2CommandInput;
      output: ListThingPrincipalsV2CommandOutput;
    };
  };
}
