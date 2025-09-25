// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client";
import { DeleteApplicationSnapshotRequest, DeleteApplicationSnapshotResponse } from "../models/models_0";
import { DeleteApplicationSnapshot } from "../schemas/schemas_3_Application";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteApplicationSnapshotCommand}.
 */
export interface DeleteApplicationSnapshotCommandInput extends DeleteApplicationSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link DeleteApplicationSnapshotCommand}.
 */
export interface DeleteApplicationSnapshotCommandOutput extends DeleteApplicationSnapshotResponse, __MetadataBearer {}

/**
 * <p>Deletes a snapshot of application state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, DeleteApplicationSnapshotCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, DeleteApplicationSnapshotCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * // import type { KinesisAnalyticsV2ClientConfig } from "@aws-sdk/client-kinesis-analytics-v2";
 * const config = {}; // type is KinesisAnalyticsV2ClientConfig
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // DeleteApplicationSnapshotRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   SnapshotName: "STRING_VALUE", // required
 *   SnapshotCreationTimestamp: new Date("TIMESTAMP"), // required
 * };
 * const command = new DeleteApplicationSnapshotCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteApplicationSnapshotCommandInput - {@link DeleteApplicationSnapshotCommandInput}
 * @returns {@link DeleteApplicationSnapshotCommandOutput}
 * @see {@link DeleteApplicationSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationSnapshotCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Exception thrown as a result of concurrent modifications to an application. This error can
 *       be the result of attempting to modify an application without using the current application
 *       ID.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The specified input parameter value is not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request JSON is not valid for the operation.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The application is not available for this operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Specified application can't be found.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this
 *       operation. </p>
 *
 * @throws {@link KinesisAnalyticsV2ServiceException}
 * <p>Base exception class for all service exceptions from KinesisAnalyticsV2 service.</p>
 *
 *
 * @public
 */
export class DeleteApplicationSnapshotCommand extends $Command
  .classBuilder<
    DeleteApplicationSnapshotCommandInput,
    DeleteApplicationSnapshotCommandOutput,
    KinesisAnalyticsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisAnalyticsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KinesisAnalytics_20180523", "DeleteApplicationSnapshot", {})
  .n("KinesisAnalyticsV2Client", "DeleteApplicationSnapshotCommand")
  .sc(DeleteApplicationSnapshot)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteApplicationSnapshotRequest;
      output: {};
    };
    sdk: {
      input: DeleteApplicationSnapshotCommandInput;
      output: DeleteApplicationSnapshotCommandOutput;
    };
  };
}
