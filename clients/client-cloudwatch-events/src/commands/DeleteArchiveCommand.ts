// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteArchiveRequest, DeleteArchiveResponse } from "../models/models_0";
import { DeleteArchive } from "../schemas/schemas_9_Archive";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteArchiveCommand}.
 */
export interface DeleteArchiveCommandInput extends DeleteArchiveRequest {}
/**
 * @public
 *
 * The output of {@link DeleteArchiveCommand}.
 */
export interface DeleteArchiveCommandOutput extends DeleteArchiveResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified archive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, DeleteArchiveCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, DeleteArchiveCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * // import type { CloudWatchEventsClientConfig } from "@aws-sdk/client-cloudwatch-events";
 * const config = {}; // type is CloudWatchEventsClientConfig
 * const client = new CloudWatchEventsClient(config);
 * const input = { // DeleteArchiveRequest
 *   ArchiveName: "STRING_VALUE", // required
 * };
 * const command = new DeleteArchiveCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteArchiveCommandInput - {@link DeleteArchiveCommandInput}
 * @returns {@link DeleteArchiveCommandOutput}
 * @see {@link DeleteArchiveCommandInput} for command's `input` shape.
 * @see {@link DeleteArchiveCommandOutput} for command's `response` shape.
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
export class DeleteArchiveCommand extends $Command
  .classBuilder<
    DeleteArchiveCommandInput,
    DeleteArchiveCommandOutput,
    CloudWatchEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchEventsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSEvents", "DeleteArchive", {})
  .n("CloudWatchEventsClient", "DeleteArchiveCommand")
  .sc(DeleteArchive)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteArchiveRequest;
      output: {};
    };
    sdk: {
      input: DeleteArchiveCommandInput;
      output: DeleteArchiveCommandOutput;
    };
  };
}
