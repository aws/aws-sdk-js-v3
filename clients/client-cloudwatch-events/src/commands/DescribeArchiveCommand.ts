// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeArchiveRequest, DescribeArchiveResponse } from "../models/models_0";
import { DescribeArchive } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeArchiveCommand}.
 */
export interface DescribeArchiveCommandInput extends DescribeArchiveRequest {}
/**
 * @public
 *
 * The output of {@link DescribeArchiveCommand}.
 */
export interface DescribeArchiveCommandOutput extends DescribeArchiveResponse, __MetadataBearer {}

/**
 * <p>Retrieves details about an archive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, DescribeArchiveCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, DescribeArchiveCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * // import type { CloudWatchEventsClientConfig } from "@aws-sdk/client-cloudwatch-events";
 * const config = {}; // type is CloudWatchEventsClientConfig
 * const client = new CloudWatchEventsClient(config);
 * const input = { // DescribeArchiveRequest
 *   ArchiveName: "STRING_VALUE", // required
 * };
 * const command = new DescribeArchiveCommand(input);
 * const response = await client.send(command);
 * // { // DescribeArchiveResponse
 * //   ArchiveArn: "STRING_VALUE",
 * //   ArchiveName: "STRING_VALUE",
 * //   EventSourceArn: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   EventPattern: "STRING_VALUE",
 * //   State: "ENABLED" || "DISABLED" || "CREATING" || "UPDATING" || "CREATE_FAILED" || "UPDATE_FAILED",
 * //   StateReason: "STRING_VALUE",
 * //   RetentionDays: Number("int"),
 * //   SizeBytes: Number("long"),
 * //   EventCount: Number("long"),
 * //   CreationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeArchiveCommandInput - {@link DescribeArchiveCommandInput}
 * @returns {@link DescribeArchiveCommandOutput}
 * @see {@link DescribeArchiveCommandInput} for command's `input` shape.
 * @see {@link DescribeArchiveCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource you are trying to create already exists.</p>
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
export class DescribeArchiveCommand extends $Command
  .classBuilder<
    DescribeArchiveCommandInput,
    DescribeArchiveCommandOutput,
    CloudWatchEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchEventsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSEvents", "DescribeArchive", {})
  .n("CloudWatchEventsClient", "DescribeArchiveCommand")
  .sc(DescribeArchive)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeArchiveRequest;
      output: DescribeArchiveResponse;
    };
    sdk: {
      input: DescribeArchiveCommandInput;
      output: DescribeArchiveCommandOutput;
    };
  };
}
