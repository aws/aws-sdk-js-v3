// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { ListDimensionsRequest, ListDimensionsResponse } from "../models/models_1";
import { ListDimensions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDimensionsCommand}.
 */
export interface ListDimensionsCommandInput extends ListDimensionsRequest {}
/**
 * @public
 *
 * The output of {@link ListDimensionsCommand}.
 */
export interface ListDimensionsCommandOutput extends ListDimensionsResponse, __MetadataBearer {}

/**
 * <p>List the set of dimensions that are defined for your Amazon Web Services accounts.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListDimensions</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListDimensionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListDimensionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListDimensionsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDimensionsCommand(input);
 * const response = await client.send(command);
 * // { // ListDimensionsResponse
 * //   dimensionNames: [ // DimensionNames
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDimensionsCommandInput - {@link ListDimensionsCommandInput}
 * @returns {@link ListDimensionsCommandOutput}
 * @see {@link ListDimensionsCommandInput} for command's `input` shape.
 * @see {@link ListDimensionsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class ListDimensionsCommand extends $Command
  .classBuilder<
    ListDimensionsCommandInput,
    ListDimensionsCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "ListDimensions", {})
  .n("IoTClient", "ListDimensionsCommand")
  .sc(ListDimensions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDimensionsRequest;
      output: ListDimensionsResponse;
    };
    sdk: {
      input: ListDimensionsCommandInput;
      output: ListDimensionsCommandOutput;
    };
  };
}
