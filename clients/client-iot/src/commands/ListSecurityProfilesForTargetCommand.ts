// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListSecurityProfilesForTargetRequest, ListSecurityProfilesForTargetResponse } from "../models/models_1";
import { ListSecurityProfilesForTarget } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSecurityProfilesForTargetCommand}.
 */
export interface ListSecurityProfilesForTargetCommandInput extends ListSecurityProfilesForTargetRequest {}
/**
 * @public
 *
 * The output of {@link ListSecurityProfilesForTargetCommand}.
 */
export interface ListSecurityProfilesForTargetCommandOutput
  extends ListSecurityProfilesForTargetResponse,
    __MetadataBearer {}

/**
 * <p>Lists the Device Defender security profiles attached to a target (thing group).</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSecurityProfilesForTarget</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListSecurityProfilesForTargetCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListSecurityProfilesForTargetCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListSecurityProfilesForTargetRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   recursive: true || false,
 *   securityProfileTargetArn: "STRING_VALUE", // required
 * };
 * const command = new ListSecurityProfilesForTargetCommand(input);
 * const response = await client.send(command);
 * // { // ListSecurityProfilesForTargetResponse
 * //   securityProfileTargetMappings: [ // SecurityProfileTargetMappings
 * //     { // SecurityProfileTargetMapping
 * //       securityProfileIdentifier: { // SecurityProfileIdentifier
 * //         name: "STRING_VALUE", // required
 * //         arn: "STRING_VALUE", // required
 * //       },
 * //       target: { // SecurityProfileTarget
 * //         arn: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSecurityProfilesForTargetCommandInput - {@link ListSecurityProfilesForTargetCommandInput}
 * @returns {@link ListSecurityProfilesForTargetCommandOutput}
 * @see {@link ListSecurityProfilesForTargetCommandInput} for command's `input` shape.
 * @see {@link ListSecurityProfilesForTargetCommandOutput} for command's `response` shape.
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
export class ListSecurityProfilesForTargetCommand extends $Command
  .classBuilder<
    ListSecurityProfilesForTargetCommandInput,
    ListSecurityProfilesForTargetCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "ListSecurityProfilesForTarget", {})
  .n("IoTClient", "ListSecurityProfilesForTargetCommand")
  .sc(ListSecurityProfilesForTarget)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSecurityProfilesForTargetRequest;
      output: ListSecurityProfilesForTargetResponse;
    };
    sdk: {
      input: ListSecurityProfilesForTargetCommandInput;
      output: ListSecurityProfilesForTargetCommandOutput;
    };
  };
}
