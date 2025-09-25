// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateDimensionRequest, UpdateDimensionResponse } from "../models/models_2";
import { UpdateDimension } from "../schemas/schemas_64_Dimension";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDimensionCommand}.
 */
export interface UpdateDimensionCommandInput extends UpdateDimensionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDimensionCommand}.
 */
export interface UpdateDimensionCommandOutput extends UpdateDimensionResponse, __MetadataBearer {}

/**
 * <p>Updates the definition for a dimension. You
 *       cannot
 *       change the type of a dimension after
 *       it is created (you can delete it and
 *       recreate
 *       it).</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateDimension</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateDimensionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateDimensionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // UpdateDimensionRequest
 *   name: "STRING_VALUE", // required
 *   stringValues: [ // DimensionStringValues // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateDimensionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDimensionResponse
 * //   name: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   type: "TOPIC_FILTER",
 * //   stringValues: [ // DimensionStringValues
 * //     "STRING_VALUE",
 * //   ],
 * //   creationDate: new Date("TIMESTAMP"),
 * //   lastModifiedDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateDimensionCommandInput - {@link UpdateDimensionCommandInput}
 * @returns {@link UpdateDimensionCommandOutput}
 * @see {@link UpdateDimensionCommandInput} for command's `input` shape.
 * @see {@link UpdateDimensionCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class UpdateDimensionCommand extends $Command
  .classBuilder<
    UpdateDimensionCommandInput,
    UpdateDimensionCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "UpdateDimension", {})
  .n("IoTClient", "UpdateDimensionCommand")
  .sc(UpdateDimension)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDimensionRequest;
      output: UpdateDimensionResponse;
    };
    sdk: {
      input: UpdateDimensionCommandInput;
      output: UpdateDimensionCommandOutput;
    };
  };
}
