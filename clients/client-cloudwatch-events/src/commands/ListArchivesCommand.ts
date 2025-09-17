// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListArchivesRequest, ListArchivesResponse } from "../models/models_0";
import { de_ListArchivesCommand, se_ListArchivesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListArchivesCommand}.
 */
export interface ListArchivesCommandInput extends ListArchivesRequest {}
/**
 * @public
 *
 * The output of {@link ListArchivesCommand}.
 */
export interface ListArchivesCommandOutput extends ListArchivesResponse, __MetadataBearer {}

/**
 * <p>Lists your archives. You can either list all the archives or you can provide a prefix to
 *       match to the archive names. Filter parameters are exclusive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, ListArchivesCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, ListArchivesCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * // import type { CloudWatchEventsClientConfig } from "@aws-sdk/client-cloudwatch-events";
 * const config = {}; // type is CloudWatchEventsClientConfig
 * const client = new CloudWatchEventsClient(config);
 * const input = { // ListArchivesRequest
 *   NamePrefix: "STRING_VALUE",
 *   EventSourceArn: "STRING_VALUE",
 *   State: "ENABLED" || "DISABLED" || "CREATING" || "UPDATING" || "CREATE_FAILED" || "UPDATE_FAILED",
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListArchivesCommand(input);
 * const response = await client.send(command);
 * // { // ListArchivesResponse
 * //   Archives: [ // ArchiveResponseList
 * //     { // Archive
 * //       ArchiveName: "STRING_VALUE",
 * //       EventSourceArn: "STRING_VALUE",
 * //       State: "ENABLED" || "DISABLED" || "CREATING" || "UPDATING" || "CREATE_FAILED" || "UPDATE_FAILED",
 * //       StateReason: "STRING_VALUE",
 * //       RetentionDays: Number("int"),
 * //       SizeBytes: Number("long"),
 * //       EventCount: Number("long"),
 * //       CreationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListArchivesCommandInput - {@link ListArchivesCommandInput}
 * @returns {@link ListArchivesCommandOutput}
 * @see {@link ListArchivesCommandInput} for command's `input` shape.
 * @see {@link ListArchivesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
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
export class ListArchivesCommand extends $Command
  .classBuilder<
    ListArchivesCommandInput,
    ListArchivesCommandOutput,
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
  .s("AWSEvents", "ListArchives", {})
  .n("CloudWatchEventsClient", "ListArchivesCommand")
  .f(void 0, void 0)
  .ser(se_ListArchivesCommand)
  .de(de_ListArchivesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListArchivesRequest;
      output: ListArchivesResponse;
    };
    sdk: {
      input: ListArchivesCommandInput;
      output: ListArchivesCommandOutput;
    };
  };
}
