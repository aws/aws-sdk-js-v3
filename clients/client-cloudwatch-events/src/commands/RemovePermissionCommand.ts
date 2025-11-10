// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RemovePermissionRequest } from "../models/models_0";
import { RemovePermission } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemovePermissionCommand}.
 */
export interface RemovePermissionCommandInput extends RemovePermissionRequest {}
/**
 * @public
 *
 * The output of {@link RemovePermissionCommand}.
 */
export interface RemovePermissionCommandOutput extends __MetadataBearer {}

/**
 * <p>Revokes the permission of another Amazon Web Services account to be able to put events to the specified
 *       event bus. Specify the account to revoke by the <code>StatementId</code> value that you
 *       associated with the account when you granted it permission with <code>PutPermission</code>.
 *       You can find the <code>StatementId</code> by using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEventBus.html">DescribeEventBus</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, RemovePermissionCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, RemovePermissionCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * // import type { CloudWatchEventsClientConfig } from "@aws-sdk/client-cloudwatch-events";
 * const config = {}; // type is CloudWatchEventsClientConfig
 * const client = new CloudWatchEventsClient(config);
 * const input = { // RemovePermissionRequest
 *   StatementId: "STRING_VALUE",
 *   RemoveAllPermissions: true || false,
 *   EventBusName: "STRING_VALUE",
 * };
 * const command = new RemovePermissionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemovePermissionCommandInput - {@link RemovePermissionCommandInput}
 * @returns {@link RemovePermissionCommandOutput}
 * @see {@link RemovePermissionCommandInput} for command's `input` shape.
 * @see {@link RemovePermissionCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is concurrent modification on a rule, target, archive, or replay.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link OperationDisabledException} (client fault)
 *  <p>The operation you are attempting is not available in this region.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link CloudWatchEventsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchEvents service.</p>
 *
 *
 * @public
 */
export class RemovePermissionCommand extends $Command
  .classBuilder<
    RemovePermissionCommandInput,
    RemovePermissionCommandOutput,
    CloudWatchEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchEventsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSEvents", "RemovePermission", {})
  .n("CloudWatchEventsClient", "RemovePermissionCommand")
  .sc(RemovePermission)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemovePermissionRequest;
      output: {};
    };
    sdk: {
      input: RemovePermissionCommandInput;
      output: RemovePermissionCommandOutput;
    };
  };
}
