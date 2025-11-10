// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeThingTypeRequest, DescribeThingTypeResponse } from "../models/models_1";
import { DescribeThingType } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeThingTypeCommand}.
 */
export interface DescribeThingTypeCommandInput extends DescribeThingTypeRequest {}
/**
 * @public
 *
 * The output of {@link DescribeThingTypeCommand}.
 */
export interface DescribeThingTypeCommandOutput extends DescribeThingTypeResponse, __MetadataBearer {}

/**
 * <p>Gets information about the specified thing type.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeThingType</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeThingTypeCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeThingTypeCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DescribeThingTypeRequest
 *   thingTypeName: "STRING_VALUE", // required
 * };
 * const command = new DescribeThingTypeCommand(input);
 * const response = await client.send(command);
 * // { // DescribeThingTypeResponse
 * //   thingTypeName: "STRING_VALUE",
 * //   thingTypeId: "STRING_VALUE",
 * //   thingTypeArn: "STRING_VALUE",
 * //   thingTypeProperties: { // ThingTypeProperties
 * //     thingTypeDescription: "STRING_VALUE",
 * //     searchableAttributes: [ // SearchableAttributes
 * //       "STRING_VALUE",
 * //     ],
 * //     mqtt5Configuration: { // Mqtt5Configuration
 * //       propagatingAttributes: [ // PropagatingAttributeList
 * //         { // PropagatingAttribute
 * //           userPropertyKey: "STRING_VALUE",
 * //           thingAttribute: "STRING_VALUE",
 * //           connectionAttribute: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   thingTypeMetadata: { // ThingTypeMetadata
 * //     deprecated: true || false,
 * //     deprecationDate: new Date("TIMESTAMP"),
 * //     creationDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeThingTypeCommandInput - {@link DescribeThingTypeCommandInput}
 * @returns {@link DescribeThingTypeCommandOutput}
 * @see {@link DescribeThingTypeCommandInput} for command's `input` shape.
 * @see {@link DescribeThingTypeCommandOutput} for command's `response` shape.
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
export class DescribeThingTypeCommand extends $Command
  .classBuilder<
    DescribeThingTypeCommandInput,
    DescribeThingTypeCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "DescribeThingType", {})
  .n("IoTClient", "DescribeThingTypeCommand")
  .sc(DescribeThingType)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeThingTypeRequest;
      output: DescribeThingTypeResponse;
    };
    sdk: {
      input: DescribeThingTypeCommandInput;
      output: DescribeThingTypeCommandOutput;
    };
  };
}
