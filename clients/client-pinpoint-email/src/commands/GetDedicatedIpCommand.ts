// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetDedicatedIpRequest, GetDedicatedIpResponse } from "../models/models_0";
import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import { GetDedicatedIp } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDedicatedIpCommand}.
 */
export interface GetDedicatedIpCommandInput extends GetDedicatedIpRequest {}
/**
 * @public
 *
 * The output of {@link GetDedicatedIpCommand}.
 */
export interface GetDedicatedIpCommandOutput extends GetDedicatedIpResponse, __MetadataBearer {}

/**
 * <p>Get information about a dedicated IP address, including the name of the dedicated IP
 *             pool that it's associated with, as well information about the automatic warm-up process
 *             for the address.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, GetDedicatedIpCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, GetDedicatedIpCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * // import type { PinpointEmailClientConfig } from "@aws-sdk/client-pinpoint-email";
 * const config = {}; // type is PinpointEmailClientConfig
 * const client = new PinpointEmailClient(config);
 * const input = { // GetDedicatedIpRequest
 *   Ip: "STRING_VALUE", // required
 * };
 * const command = new GetDedicatedIpCommand(input);
 * const response = await client.send(command);
 * // { // GetDedicatedIpResponse
 * //   DedicatedIp: { // DedicatedIp
 * //     Ip: "STRING_VALUE", // required
 * //     WarmupStatus: "IN_PROGRESS" || "DONE", // required
 * //     WarmupPercentage: Number("int"), // required
 * //     PoolName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDedicatedIpCommandInput - {@link GetDedicatedIpCommandInput}
 * @returns {@link GetDedicatedIpCommandOutput}
 * @see {@link GetDedicatedIpCommandInput} for command's `input` shape.
 * @see {@link GetDedicatedIpCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for PinpointEmailClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link PinpointEmailServiceException}
 * <p>Base exception class for all service exceptions from PinpointEmail service.</p>
 *
 *
 * @public
 */
export class GetDedicatedIpCommand extends $Command
  .classBuilder<
    GetDedicatedIpCommandInput,
    GetDedicatedIpCommandOutput,
    PinpointEmailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointEmailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPinpointEmailService", "GetDedicatedIp", {})
  .n("PinpointEmailClient", "GetDedicatedIpCommand")
  .sc(GetDedicatedIp)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDedicatedIpRequest;
      output: GetDedicatedIpResponse;
    };
    sdk: {
      input: GetDedicatedIpCommandInput;
      output: GetDedicatedIpCommandOutput;
    };
  };
}
