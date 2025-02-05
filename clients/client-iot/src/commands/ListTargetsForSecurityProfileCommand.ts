// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListTargetsForSecurityProfileRequest, ListTargetsForSecurityProfileResponse } from "../models/models_2";
import {
  de_ListTargetsForSecurityProfileCommand,
  se_ListTargetsForSecurityProfileCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTargetsForSecurityProfileCommand}.
 */
export interface ListTargetsForSecurityProfileCommandInput extends ListTargetsForSecurityProfileRequest {}
/**
 * @public
 *
 * The output of {@link ListTargetsForSecurityProfileCommand}.
 */
export interface ListTargetsForSecurityProfileCommandOutput
  extends ListTargetsForSecurityProfileResponse,
    __MetadataBearer {}

/**
 * <p>Lists the targets (thing groups) associated with a given Device Defender security profile.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTargetsForSecurityProfile</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListTargetsForSecurityProfileCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListTargetsForSecurityProfileCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTClient(config);
 * const input = { // ListTargetsForSecurityProfileRequest
 *   securityProfileName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListTargetsForSecurityProfileCommand(input);
 * const response = await client.send(command);
 * // { // ListTargetsForSecurityProfileResponse
 * //   securityProfileTargets: [ // SecurityProfileTargets
 * //     { // SecurityProfileTarget
 * //       arn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTargetsForSecurityProfileCommandInput - {@link ListTargetsForSecurityProfileCommandInput}
 * @returns {@link ListTargetsForSecurityProfileCommandOutput}
 * @see {@link ListTargetsForSecurityProfileCommandInput} for command's `input` shape.
 * @see {@link ListTargetsForSecurityProfileCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListTargetsForSecurityProfileCommand extends $Command
  .classBuilder<
    ListTargetsForSecurityProfileCommandInput,
    ListTargetsForSecurityProfileCommandOutput,
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
  .s("AWSIotService", "ListTargetsForSecurityProfile", {})
  .n("IoTClient", "ListTargetsForSecurityProfileCommand")
  .f(void 0, void 0)
  .ser(se_ListTargetsForSecurityProfileCommand)
  .de(de_ListTargetsForSecurityProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTargetsForSecurityProfileRequest;
      output: ListTargetsForSecurityProfileResponse;
    };
    sdk: {
      input: ListTargetsForSecurityProfileCommandInput;
      output: ListTargetsForSecurityProfileCommandOutput;
    };
  };
}
