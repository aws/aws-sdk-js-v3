// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { ListPolicyPrincipalsRequest, ListPolicyPrincipalsResponse } from "../models/models_1";
import { ListPolicyPrincipals } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPolicyPrincipalsCommand}.
 */
export interface ListPolicyPrincipalsCommandInput extends ListPolicyPrincipalsRequest {}
/**
 * @public
 *
 * The output of {@link ListPolicyPrincipalsCommand}.
 */
export interface ListPolicyPrincipalsCommandOutput extends ListPolicyPrincipalsResponse, __MetadataBearer {}

/**
 * <p>Lists the principals associated with the specified policy.</p>
 *          <p>
 *             <b>Note:</b> This action is deprecated and works as
 *          expected for backward compatibility, but we won't add enhancements. Use <a>ListTargetsForPolicy</a> instead.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPolicyPrincipals</a> action.</p>
 *
 * @deprecated deprecated
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListPolicyPrincipalsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListPolicyPrincipalsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListPolicyPrincipalsRequest
 *   policyName: "STRING_VALUE", // required
 *   marker: "STRING_VALUE",
 *   pageSize: Number("int"),
 *   ascendingOrder: true || false,
 * };
 * const command = new ListPolicyPrincipalsCommand(input);
 * const response = await client.send(command);
 * // { // ListPolicyPrincipalsResponse
 * //   principals: [ // Principals
 * //     "STRING_VALUE",
 * //   ],
 * //   nextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPolicyPrincipalsCommandInput - {@link ListPolicyPrincipalsCommandInput}
 * @returns {@link ListPolicyPrincipalsCommandOutput}
 * @see {@link ListPolicyPrincipalsCommandInput} for command's `input` shape.
 * @see {@link ListPolicyPrincipalsCommandOutput} for command's `response` shape.
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
export class ListPolicyPrincipalsCommand extends $Command
  .classBuilder<
    ListPolicyPrincipalsCommandInput,
    ListPolicyPrincipalsCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "ListPolicyPrincipals", {})
  .n("IoTClient", "ListPolicyPrincipalsCommand")
  .sc(ListPolicyPrincipals)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPolicyPrincipalsRequest;
      output: ListPolicyPrincipalsResponse;
    };
    sdk: {
      input: ListPolicyPrincipalsCommandInput;
      output: ListPolicyPrincipalsCommandOutput;
    };
  };
}
