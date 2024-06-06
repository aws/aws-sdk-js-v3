// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeIndexRequest, DescribeIndexResponse } from "../models/models_1";
import { de_DescribeIndexCommand, se_DescribeIndexCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeIndexCommand}.
 */
export interface DescribeIndexCommandInput extends DescribeIndexRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIndexCommand}.
 */
export interface DescribeIndexCommandOutput extends DescribeIndexResponse, __MetadataBearer {}

/**
 * <p>Describes a search index.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeIndex</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeIndexCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeIndexCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // DescribeIndexRequest
 *   indexName: "STRING_VALUE", // required
 * };
 * const command = new DescribeIndexCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIndexResponse
 * //   indexName: "STRING_VALUE",
 * //   indexStatus: "ACTIVE" || "BUILDING" || "REBUILDING",
 * //   schema: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeIndexCommandInput - {@link DescribeIndexCommandInput}
 * @returns {@link DescribeIndexCommandOutput}
 * @see {@link DescribeIndexCommandInput} for command's `input` shape.
 * @see {@link DescribeIndexCommandOutput} for command's `response` shape.
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
export class DescribeIndexCommand extends $Command
  .classBuilder<
    DescribeIndexCommandInput,
    DescribeIndexCommandOutput,
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
  .s("AWSIotService", "DescribeIndex", {})
  .n("IoTClient", "DescribeIndexCommand")
  .f(void 0, void 0)
  .ser(se_DescribeIndexCommand)
  .de(de_DescribeIndexCommand)
  .build() {}
