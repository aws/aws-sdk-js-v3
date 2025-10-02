// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListThingsRequest, ListThingsResponse } from "../models/models_2";
import { de_ListThingsCommand, se_ListThingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListThingsCommand}.
 */
export interface ListThingsCommandInput extends ListThingsRequest {}
/**
 * @public
 *
 * The output of {@link ListThingsCommand}.
 */
export interface ListThingsCommandOutput extends ListThingsResponse, __MetadataBearer {}

/**
 * <p>Lists your things. Use the <b>attributeName</b> and <b>attributeValue</b> parameters to filter your things. For example,
 * 			calling <code>ListThings</code> with attributeName=Color and attributeValue=Red
 * 			retrieves all things in the registry that contain an attribute <b>Color</b> with the value <b>Red</b>. For more
 * 			information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/thing-registry.html#list-things">List Things</a> from the <i>Amazon Web Services IoT Core Developer
 * 				Guide</i>.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThings</a> action.</p>
 *          <note>
 *             <p>You will not be charged for calling this API if an <code>Access denied</code> error is returned. You will also not be charged if no attributes or pagination token was provided in request and no pagination token and no results were returned.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListThingsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListThingsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListThingsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   attributeName: "STRING_VALUE",
 *   attributeValue: "STRING_VALUE",
 *   thingTypeName: "STRING_VALUE",
 *   usePrefixAttributeValue: true || false,
 * };
 * const command = new ListThingsCommand(input);
 * const response = await client.send(command);
 * // { // ListThingsResponse
 * //   things: [ // ThingAttributeList
 * //     { // ThingAttribute
 * //       thingName: "STRING_VALUE",
 * //       thingTypeName: "STRING_VALUE",
 * //       thingArn: "STRING_VALUE",
 * //       attributes: { // Attributes
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       version: Number("long"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListThingsCommandInput - {@link ListThingsCommandInput}
 * @returns {@link ListThingsCommandOutput}
 * @see {@link ListThingsCommandInput} for command's `input` shape.
 * @see {@link ListThingsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
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
export class ListThingsCommand extends $Command
  .classBuilder<
    ListThingsCommandInput,
    ListThingsCommandOutput,
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
  .s("AWSIotService", "ListThings", {})
  .n("IoTClient", "ListThingsCommand")
  .f(void 0, void 0)
  .ser(se_ListThingsCommand)
  .de(de_ListThingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListThingsRequest;
      output: ListThingsResponse;
    };
    sdk: {
      input: ListThingsCommandInput;
      output: ListThingsCommandOutput;
    };
  };
}
