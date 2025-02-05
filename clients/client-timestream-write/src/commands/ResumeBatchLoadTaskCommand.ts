// smithy-typescript generated code
import { getEndpointDiscoveryPlugin } from "@aws-sdk/middleware-endpoint-discovery";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ResumeBatchLoadTaskRequest, ResumeBatchLoadTaskResponse } from "../models/models_0";
import { de_ResumeBatchLoadTaskCommand, se_ResumeBatchLoadTaskCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, TimestreamWriteClientResolvedConfig } from "../TimestreamWriteClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResumeBatchLoadTaskCommand}.
 */
export interface ResumeBatchLoadTaskCommandInput extends ResumeBatchLoadTaskRequest {}
/**
 * @public
 *
 * The output of {@link ResumeBatchLoadTaskCommand}.
 */
export interface ResumeBatchLoadTaskCommandOutput extends ResumeBatchLoadTaskResponse, __MetadataBearer {}

/**
 * <p>
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, ResumeBatchLoadTaskCommand } from "@aws-sdk/client-timestream-write"; // ES Modules import
 * // const { TimestreamWriteClient, ResumeBatchLoadTaskCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new TimestreamWriteClient(config);
 * const input = { // ResumeBatchLoadTaskRequest
 *   TaskId: "STRING_VALUE", // required
 * };
 * const command = new ResumeBatchLoadTaskCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ResumeBatchLoadTaskCommandInput - {@link ResumeBatchLoadTaskCommandInput}
 * @returns {@link ResumeBatchLoadTaskCommandOutput}
 * @see {@link ResumeBatchLoadTaskCommandInput} for command's `input` shape.
 * @see {@link ResumeBatchLoadTaskCommandOutput} for command's `response` shape.
 * @see {@link TimestreamWriteClientResolvedConfig | config} for TimestreamWriteClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *          Timestream was unable to fully process this request because of an internal server
 *          error.</p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *  <p>The requested endpoint was not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a nonexistent resource. The resource might not be
 *          specified correctly, or its status might not be ACTIVE.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> Too many requests were made by a user and they exceeded the service quotas. The request
 *          was throttled.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> An invalid or malformed request.</p>
 *
 * @throws {@link TimestreamWriteServiceException}
 * <p>Base exception class for all service exceptions from TimestreamWrite service.</p>
 *
 * @public
 */
export class ResumeBatchLoadTaskCommand extends $Command
  .classBuilder<
    ResumeBatchLoadTaskCommandInput,
    ResumeBatchLoadTaskCommandOutput,
    TimestreamWriteClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TimestreamWriteClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getEndpointDiscoveryPlugin(config, {
        clientStack: cs,
        isDiscoveredEndpointRequired: true,
        options: o,
      }),
    ];
  })
  .s("Timestream_20181101", "ResumeBatchLoadTask", {})
  .n("TimestreamWriteClient", "ResumeBatchLoadTaskCommand")
  .f(void 0, void 0)
  .ser(se_ResumeBatchLoadTaskCommand)
  .de(de_ResumeBatchLoadTaskCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResumeBatchLoadTaskRequest;
      output: {};
    };
    sdk: {
      input: ResumeBatchLoadTaskCommandInput;
      output: ResumeBatchLoadTaskCommandOutput;
    };
  };
}
