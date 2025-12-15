// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { ListThingPrincipalsRequest } from "../models/models_1";
import type { ListThingPrincipalsResponse } from "../models/models_2";
import { ListThingPrincipals$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListThingPrincipalsCommand}.
 */
export interface ListThingPrincipalsCommandInput extends ListThingPrincipalsRequest {}
/**
 * @public
 *
 * The output of {@link ListThingPrincipalsCommand}.
 */
export interface ListThingPrincipalsCommandOutput extends ListThingPrincipalsResponse, __MetadataBearer {}

/**
 * <p>Lists the principals associated with the specified thing. A principal can be X.509
 * 			certificates, IAM users, groups, and roles, Amazon Cognito identities or federated
 * 			identities.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingPrincipals</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListThingPrincipalsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListThingPrincipalsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListThingPrincipalsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   thingName: "STRING_VALUE", // required
 * };
 * const command = new ListThingPrincipalsCommand(input);
 * const response = await client.send(command);
 * // { // ListThingPrincipalsResponse
 * //   principals: [ // Principals
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListThingPrincipalsCommandInput - {@link ListThingPrincipalsCommandInput}
 * @returns {@link ListThingPrincipalsCommandOutput}
 * @see {@link ListThingPrincipalsCommandInput} for command's `input` shape.
 * @see {@link ListThingPrincipalsCommandOutput} for command's `response` shape.
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
export class ListThingPrincipalsCommand extends $Command
  .classBuilder<
    ListThingPrincipalsCommandInput,
    ListThingPrincipalsCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "ListThingPrincipals", {})
  .n("IoTClient", "ListThingPrincipalsCommand")
  .sc(ListThingPrincipals$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListThingPrincipalsRequest;
      output: ListThingPrincipalsResponse;
    };
    sdk: {
      input: ListThingPrincipalsCommandInput;
      output: ListThingPrincipalsCommandOutput;
    };
  };
}
