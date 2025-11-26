// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { ListPrincipalThingsRequest, ListPrincipalThingsResponse } from "../models/models_1";
import { ListPrincipalThings } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPrincipalThingsCommand}.
 */
export interface ListPrincipalThingsCommandInput extends ListPrincipalThingsRequest {}
/**
 * @public
 *
 * The output of {@link ListPrincipalThingsCommand}.
 */
export interface ListPrincipalThingsCommandOutput extends ListPrincipalThingsResponse, __MetadataBearer {}

/**
 * <p>Lists the things associated with the specified principal. A principal can be X.509
 * 			certificates, IAM users, groups, and roles, Amazon Cognito identities or federated
 * 			identities. </p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPrincipalThings</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListPrincipalThingsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListPrincipalThingsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListPrincipalThingsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   principal: "STRING_VALUE", // required
 * };
 * const command = new ListPrincipalThingsCommand(input);
 * const response = await client.send(command);
 * // { // ListPrincipalThingsResponse
 * //   things: [ // ThingNameList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPrincipalThingsCommandInput - {@link ListPrincipalThingsCommandInput}
 * @returns {@link ListPrincipalThingsCommandOutput}
 * @see {@link ListPrincipalThingsCommandInput} for command's `input` shape.
 * @see {@link ListPrincipalThingsCommandOutput} for command's `response` shape.
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
export class ListPrincipalThingsCommand extends $Command
  .classBuilder<
    ListPrincipalThingsCommandInput,
    ListPrincipalThingsCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "ListPrincipalThings", {})
  .n("IoTClient", "ListPrincipalThingsCommand")
  .sc(ListPrincipalThings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPrincipalThingsRequest;
      output: ListPrincipalThingsResponse;
    };
    sdk: {
      input: ListPrincipalThingsCommandInput;
      output: ListPrincipalThingsCommandOutput;
    };
  };
}
