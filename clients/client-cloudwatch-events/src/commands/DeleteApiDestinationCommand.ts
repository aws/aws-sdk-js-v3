// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteApiDestinationRequest, DeleteApiDestinationResponse } from "../models/models_0";
import { de_DeleteApiDestinationCommand, se_DeleteApiDestinationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteApiDestinationCommand}.
 */
export interface DeleteApiDestinationCommandInput extends DeleteApiDestinationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteApiDestinationCommand}.
 */
export interface DeleteApiDestinationCommandOutput extends DeleteApiDestinationResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified API destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, DeleteApiDestinationCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, DeleteApiDestinationCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * // import type { CloudWatchEventsClientConfig } from "@aws-sdk/client-cloudwatch-events";
 * const config = {}; // type is CloudWatchEventsClientConfig
 * const client = new CloudWatchEventsClient(config);
 * const input = { // DeleteApiDestinationRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteApiDestinationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteApiDestinationCommandInput - {@link DeleteApiDestinationCommandInput}
 * @returns {@link DeleteApiDestinationCommandOutput}
 * @see {@link DeleteApiDestinationCommandInput} for command's `input` shape.
 * @see {@link DeleteApiDestinationCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is concurrent modification on a rule, target, archive, or replay.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
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
export class DeleteApiDestinationCommand extends $Command
  .classBuilder<
    DeleteApiDestinationCommandInput,
    DeleteApiDestinationCommandOutput,
    CloudWatchEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchEventsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSEvents", "DeleteApiDestination", {})
  .n("CloudWatchEventsClient", "DeleteApiDestinationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteApiDestinationCommand)
  .de(de_DeleteApiDestinationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteApiDestinationRequest;
      output: {};
    };
    sdk: {
      input: DeleteApiDestinationCommandInput;
      output: DeleteApiDestinationCommandOutput;
    };
  };
}
