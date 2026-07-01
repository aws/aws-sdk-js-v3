// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRealtimeLogConfigRequest } from "../models/models_0";
import { DeleteRealtimeLogConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export class DeleteRealtimeLogConfigCommand extends command<DeleteRealtimeLogConfigCommandInput, DeleteRealtimeLogConfigCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRealtimeLogConfig",
  DeleteRealtimeLogConfig$
) {
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
