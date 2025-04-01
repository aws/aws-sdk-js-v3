// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListTargetsForPolicyRequest, ListTargetsForPolicyResponse } from "../models/models_2";
import { de_ListTargetsForPolicyCommand, se_ListTargetsForPolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTargetsForPolicyCommand}.
 */
export interface ListTargetsForPolicyCommandInput extends ListTargetsForPolicyRequest {}
/**
 * @public
 *
 * The output of {@link ListTargetsForPolicyCommand}.
 */
export interface ListTargetsForPolicyCommandOutput extends ListTargetsForPolicyResponse, __MetadataBearer {}

/**
 * <p>List targets for the specified policy.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTargetsForPolicy</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListTargetsForPolicyCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListTargetsForPolicyCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // ListTargetsForPolicyRequest
 *   policyName: "STRING_VALUE", // required
 *   marker: "STRING_VALUE",
 *   pageSize: Number("int"),
 * };
 * const command = new ListTargetsForPolicyCommand(input);
 * const response = await client.send(command);
 * // { // ListTargetsForPolicyResponse
 * //   targets: [ // PolicyTargets
 * //     "STRING_VALUE",
 * //   ],
 * //   nextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTargetsForPolicyCommandInput - {@link ListTargetsForPolicyCommandInput}
 * @returns {@link ListTargetsForPolicyCommandOutput}
 * @see {@link ListTargetsForPolicyCommandInput} for command's `input` shape.
 * @see {@link ListTargetsForPolicyCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit has been exceeded.</p>
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
export class ListTargetsForPolicyCommand extends $Command
  .classBuilder<
    ListTargetsForPolicyCommandInput,
    ListTargetsForPolicyCommandOutput,
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
  .s("AWSIotService", "ListTargetsForPolicy", {})
  .n("IoTClient", "ListTargetsForPolicyCommand")
  .f(void 0, void 0)
  .ser(se_ListTargetsForPolicyCommand)
  .de(de_ListTargetsForPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTargetsForPolicyRequest;
      output: ListTargetsForPolicyResponse;
    };
    sdk: {
      input: ListTargetsForPolicyCommandInput;
      output: ListTargetsForPolicyCommandOutput;
    };
  };
}
