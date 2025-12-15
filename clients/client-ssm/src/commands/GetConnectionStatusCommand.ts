// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetConnectionStatusRequest, GetConnectionStatusResponse } from "../models/models_0";
import { GetConnectionStatus$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetConnectionStatusCommand}.
 */
export interface GetConnectionStatusCommandInput extends GetConnectionStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetConnectionStatusCommand}.
 */
export interface GetConnectionStatusCommandOutput extends GetConnectionStatusResponse, __MetadataBearer {}

/**
 * <p>Retrieves the Session Manager connection status for a managed node to determine whether it is running
 *    and ready to receive Session Manager connections.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetConnectionStatusCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetConnectionStatusCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // GetConnectionStatusRequest
 *   Target: "STRING_VALUE", // required
 * };
 * const command = new GetConnectionStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetConnectionStatusResponse
 * //   Target: "STRING_VALUE",
 * //   Status: "connected" || "notconnected",
 * // };
 *
 * ```
 *
 * @param GetConnectionStatusCommandInput - {@link GetConnectionStatusCommandInput}
 * @returns {@link GetConnectionStatusCommandOutput}
 * @see {@link GetConnectionStatusCommandInput} for command's `input` shape.
 * @see {@link GetConnectionStatusCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class GetConnectionStatusCommand extends $Command
  .classBuilder<
    GetConnectionStatusCommandInput,
    GetConnectionStatusCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "GetConnectionStatus", {})
  .n("SSMClient", "GetConnectionStatusCommand")
  .sc(GetConnectionStatus$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConnectionStatusRequest;
      output: GetConnectionStatusResponse;
    };
    sdk: {
      input: GetConnectionStatusCommandInput;
      output: GetConnectionStatusCommandOutput;
    };
  };
}
