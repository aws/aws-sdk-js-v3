// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRealtimeLogConfigRequest } from "../models/models_1";
import { DeleteRealtimeLogConfig } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRealtimeLogConfigCommand}.
 */
export interface DeleteRealtimeLogConfigCommandInput extends DeleteRealtimeLogConfigRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRealtimeLogConfigCommand}.
 */
export interface DeleteRealtimeLogConfigCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a real-time log configuration.</p> <p>You cannot delete a real-time log configuration if it's attached to a cache behavior. First update your distributions to remove the real-time log configuration from all cache behaviors, then delete the real-time log configuration.</p> <p>To delete a real-time log configuration, you can provide the configuration's name or its Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to identify the real-time log configuration to delete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteRealtimeLogConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteRealtimeLogConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // DeleteRealtimeLogConfigRequest
 *   Name: "STRING_VALUE",
 *   ARN: "STRING_VALUE",
 * };
 * const command = new DeleteRealtimeLogConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRealtimeLogConfigCommandInput - {@link DeleteRealtimeLogConfigCommandInput}
 * @returns {@link DeleteRealtimeLogConfigCommandOutput}
 * @see {@link DeleteRealtimeLogConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteRealtimeLogConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link NoSuchRealtimeLogConfig} (client fault)
 *  <p>The real-time log configuration does not exist.</p>
 *
 * @throws {@link RealtimeLogConfigInUse} (client fault)
 *  <p>Cannot delete the real-time log configuration because it is attached to one or more cache behaviors.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class DeleteRealtimeLogConfigCommand extends $Command
  .classBuilder<
    DeleteRealtimeLogConfigCommandInput,
    DeleteRealtimeLogConfigCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "DeleteRealtimeLogConfig", {})
  .n("CloudFrontClient", "DeleteRealtimeLogConfigCommand")
  .sc(DeleteRealtimeLogConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRealtimeLogConfigRequest;
      output: {};
    };
    sdk: {
      input: DeleteRealtimeLogConfigCommandInput;
      output: DeleteRealtimeLogConfigCommandOutput;
    };
  };
}
