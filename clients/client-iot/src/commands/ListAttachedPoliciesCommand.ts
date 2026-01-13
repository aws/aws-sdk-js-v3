// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { ListAttachedPoliciesRequest, ListAttachedPoliciesResponse } from "../models/models_1";
import { ListAttachedPolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAttachedPoliciesCommand}.
 */
export interface ListAttachedPoliciesCommandInput extends ListAttachedPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListAttachedPoliciesCommand}.
 */
export interface ListAttachedPoliciesCommandOutput extends ListAttachedPoliciesResponse, __MetadataBearer {}

/**
 * <p>Lists the policies attached to the specified thing group.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAttachedPolicies</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListAttachedPoliciesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListAttachedPoliciesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListAttachedPoliciesRequest
 *   target: "STRING_VALUE", // required
 *   recursive: true || false,
 *   marker: "STRING_VALUE",
 *   pageSize: Number("int"),
 * };
 * const command = new ListAttachedPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListAttachedPoliciesResponse
 * //   policies: [ // Policies
 * //     { // Policy
 * //       policyName: "STRING_VALUE",
 * //       policyArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAttachedPoliciesCommandInput - {@link ListAttachedPoliciesCommandInput}
 * @returns {@link ListAttachedPoliciesCommandOutput}
 * @see {@link ListAttachedPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListAttachedPoliciesCommandOutput} for command's `response` shape.
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
export class ListAttachedPoliciesCommand extends $Command
  .classBuilder<
    ListAttachedPoliciesCommandInput,
    ListAttachedPoliciesCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "ListAttachedPolicies", {})
  .n("IoTClient", "ListAttachedPoliciesCommand")
  .sc(ListAttachedPolicies$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAttachedPoliciesRequest;
      output: ListAttachedPoliciesResponse;
    };
    sdk: {
      input: ListAttachedPoliciesCommandInput;
      output: ListAttachedPoliciesCommandOutput;
    };
  };
}
