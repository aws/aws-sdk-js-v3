// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ResumeBatchLoadTaskRequest, ResumeBatchLoadTaskResponse } from "../models/models_0";
import { ResumeBatchLoadTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, ResumeBatchLoadTaskCommand } from "@aws-sdk/client-timestream-write"; // ES Modules import
 * // const { TimestreamWriteClient, ResumeBatchLoadTaskCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * // import type { TimestreamWriteClientConfig } from "@aws-sdk/client-timestream-write";
 * const config = {}; // type is TimestreamWriteClientConfig
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
 *
 * You are not authorized to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Timestream was unable to fully process this request because of an internal server error.
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * The requested endpoint was not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation tried to access a nonexistent resource. The resource might not be specified correctly, or its status might not be ACTIVE.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Too many requests were made by a user and they exceeded the service quotas. The request was throttled.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An invalid or malformed request.
 *
 * @throws {@link TimestreamWriteServiceException}
 *
 * Base exception class for all service exceptions from TimestreamWrite service.
 *
 * @public
 */
export class ResumeBatchLoadTaskCommand extends command<ResumeBatchLoadTaskCommandInput, ResumeBatchLoadTaskCommandOutput>(
  _ep0,
  _mw0,
  "ResumeBatchLoadTask",
  ResumeBatchLoadTask$
) {
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
