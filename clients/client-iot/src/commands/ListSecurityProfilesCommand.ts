// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { ListSecurityProfilesRequest, ListSecurityProfilesResponse } from "../models/models_1";
import { ListSecurityProfiles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSecurityProfilesCommand}.
 */
export interface ListSecurityProfilesCommandInput extends ListSecurityProfilesRequest {}
/**
 * @public
 *
 * The output of {@link ListSecurityProfilesCommand}.
 */
export interface ListSecurityProfilesCommandOutput extends ListSecurityProfilesResponse, __MetadataBearer {}

/**
 * <p>Lists the Device Defender security profiles
 *       you've
 *       created. You can filter security profiles by dimension or custom metric.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSecurityProfiles</a> action.</p>
 *          <note>
 *             <p>
 *                <code>dimensionName</code> and <code>metricName</code> cannot be used in the same request.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListSecurityProfilesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListSecurityProfilesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListSecurityProfilesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   dimensionName: "STRING_VALUE",
 *   metricName: "STRING_VALUE",
 * };
 * const command = new ListSecurityProfilesCommand(input);
 * const response = await client.send(command);
 * // { // ListSecurityProfilesResponse
 * //   securityProfileIdentifiers: [ // SecurityProfileIdentifiers
 * //     { // SecurityProfileIdentifier
 * //       name: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSecurityProfilesCommandInput - {@link ListSecurityProfilesCommandInput}
 * @returns {@link ListSecurityProfilesCommandOutput}
 * @see {@link ListSecurityProfilesCommandInput} for command's `input` shape.
 * @see {@link ListSecurityProfilesCommandOutput} for command's `response` shape.
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
export class ListSecurityProfilesCommand extends $Command
  .classBuilder<
    ListSecurityProfilesCommandInput,
    ListSecurityProfilesCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "ListSecurityProfiles", {})
  .n("IoTClient", "ListSecurityProfilesCommand")
  .sc(ListSecurityProfiles$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSecurityProfilesRequest;
      output: ListSecurityProfilesResponse;
    };
    sdk: {
      input: ListSecurityProfilesCommandInput;
      output: ListSecurityProfilesCommandOutput;
    };
  };
}
