// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeThingTypeRequest, DescribeThingTypeResponse } from "../models/models_1";
import { DescribeThingType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets information about the specified thing type.
 *
 * Requires permission to access the [DescribeThingType](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
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
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class DescribeThingTypeCommand extends command<DescribeThingTypeCommandInput, DescribeThingTypeCommandOutput>(
  _ep0,
  _mw0,
  "DescribeThingType",
  DescribeThingType$
) {
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
