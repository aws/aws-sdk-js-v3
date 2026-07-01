// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer, StreamingBlobPayloadOutputTypes } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRawMessageContentRequest, GetRawMessageContentResponse } from "../models/models_0";
import { GetRawMessageContent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRawMessageContentCommand}.
 */
export interface GetRawMessageContentCommandInput extends GetRawMessageContentRequest {}
/**
 * @public
 *
 * The output of {@link GetRawMessageContentCommand}.
 */
export interface GetRawMessageContentCommandOutput extends Omit<GetRawMessageContentResponse, "messageContent">, __MetadataBearer {
  messageContent: StreamingBlobPayloadOutputTypes;
}

/**
 * <p>Retrieves the raw content of an in-transit email message, in MIME format.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailMessageFlowClient, GetRawMessageContentCommand } from "@aws-sdk/client-workmailmessageflow"; // ES Modules import
 * // const { WorkMailMessageFlowClient, GetRawMessageContentCommand } = require("@aws-sdk/client-workmailmessageflow"); // CommonJS import
 * // import type { WorkMailMessageFlowClientConfig } from "@aws-sdk/client-workmailmessageflow";
 * const config = {}; // type is WorkMailMessageFlowClientConfig
 * const client = new WorkMailMessageFlowClient(config);
 * const input = { // GetRawMessageContentRequest
 *   messageId: "STRING_VALUE", // required
 * };
 * const command = new GetRawMessageContentCommand(input);
 * const response = await client.send(command);
 * // consume or destroy the stream to free the socket.
 * const bytes = await response.messageContent.transformToByteArray();
 * // const str = await response.messageContent.transformToString();
 * // response.messageContent.destroy(); // only applicable to Node.js Readable streams.
 *
 * // { // GetRawMessageContentResponse
 * //   messageContent: "<SdkStream>", // see \@smithy/types -> StreamingBlobPayloadOutputTypes // required
 * // };
 *
 * ```
 *
 * @param GetRawMessageContentCommandInput - {@link GetRawMessageContentCommandInput}
 * @returns {@link GetRawMessageContentCommandOutput}
 * @see {@link GetRawMessageContentCommandInput} for command's `input` shape.
 * @see {@link GetRawMessageContentCommandOutput} for command's `response` shape.
 * @see {@link WorkMailMessageFlowClientResolvedConfig | config} for WorkMailMessageFlowClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested email message is not found.</p>
 *
 * @throws {@link WorkMailMessageFlowServiceException}
 * <p>Base exception class for all service exceptions from WorkMailMessageFlow service.</p>
 *
 *
 * @public
 */
export class GetRawMessageContentCommand extends command<GetRawMessageContentCommandInput, GetRawMessageContentCommandOutput>(
  _ep0,
  _mw0,
  "GetRawMessageContent",
  GetRawMessageContent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRawMessageContentRequest;
      output: GetRawMessageContentResponse;
    };
    sdk: {
      input: GetRawMessageContentCommandInput;
      output: GetRawMessageContentCommandOutput;
    };
  };
}
