// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetDedicatedIpsRequest, GetDedicatedIpsResponse } from "../models/models_0";
import type { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import { GetDedicatedIps } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDedicatedIpsCommand}.
 */
export interface GetDedicatedIpsCommandInput extends GetDedicatedIpsRequest {}
/**
 * @public
 *
 * The output of {@link GetDedicatedIpsCommand}.
 */
export interface GetDedicatedIpsCommandOutput extends GetDedicatedIpsResponse, __MetadataBearer {}

/**
 * <p>List the dedicated IP addresses that are associated with your Amazon Pinpoint
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, GetDedicatedIpsCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, GetDedicatedIpsCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * // import type { PinpointEmailClientConfig } from "@aws-sdk/client-pinpoint-email";
 * const config = {}; // type is PinpointEmailClientConfig
 * const client = new PinpointEmailClient(config);
 * const input = { // GetDedicatedIpsRequest
 *   PoolName: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new GetDedicatedIpsCommand(input);
 * const response = await client.send(command);
 * // { // GetDedicatedIpsResponse
 * //   DedicatedIps: [ // DedicatedIpList
 * //     { // DedicatedIp
 * //       Ip: "STRING_VALUE", // required
 * //       WarmupStatus: "IN_PROGRESS" || "DONE", // required
 * //       WarmupPercentage: Number("int"), // required
 * //       PoolName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDedicatedIpsCommandInput - {@link GetDedicatedIpsCommandInput}
 * @returns {@link GetDedicatedIpsCommandOutput}
 * @see {@link GetDedicatedIpsCommandInput} for command's `input` shape.
 * @see {@link GetDedicatedIpsCommandOutput} for command's `response` shape.
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
export class GetDedicatedIpsCommand extends $Command
  .classBuilder<
    GetDedicatedIpsCommandInput,
    GetDedicatedIpsCommandOutput,
    PinpointEmailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointEmailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPinpointEmailService", "GetDedicatedIps", {})
  .n("PinpointEmailClient", "GetDedicatedIpsCommand")
  .sc(GetDedicatedIps)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDedicatedIpsRequest;
      output: GetDedicatedIpsResponse;
    };
    sdk: {
      input: GetDedicatedIpsCommandInput;
      output: GetDedicatedIpsCommandOutput;
    };
  };
}
