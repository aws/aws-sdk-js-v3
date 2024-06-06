// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer, StreamingBlobPayloadOutputTypes } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetRawMessageContentRequest,
  GetRawMessageContentResponse,
  GetRawMessageContentResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetRawMessageContentCommand, se_GetRawMessageContentCommand } from "../protocols/Aws_restJson1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  WorkMailMessageFlowClientResolvedConfig,
} from "../WorkMailMessageFlowClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface GetRawMessageContentCommandOutput
  extends Omit<GetRawMessageContentResponse, "messageContent">,
    __MetadataBearer {
  messageContent: StreamingBlobPayloadOutputTypes;
}

/**
 * <p>Retrieves the raw content of an in-transit email message, in MIME format.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailMessageFlowClient, GetRawMessageContentCommand } from "@aws-sdk/client-workmailmessageflow"; // ES Modules import
 * // const { WorkMailMessageFlowClient, GetRawMessageContentCommand } = require("@aws-sdk/client-workmailmessageflow"); // CommonJS import
 * const client = new WorkMailMessageFlowClient(config);
 * const input = { // GetRawMessageContentRequest
 *   messageId: "STRING_VALUE", // required
 * };
 * const command = new GetRawMessageContentCommand(input);
 * const response = await client.send(command);
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
 * @public
 */
export class GetRawMessageContentCommand extends $Command
  .classBuilder<
    GetRawMessageContentCommandInput,
    GetRawMessageContentCommandOutput,
    WorkMailMessageFlowClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WorkMailMessageFlowClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GiraffeMessageInTransitService", "GetRawMessageContent", {})
  .n("WorkMailMessageFlowClient", "GetRawMessageContentCommand")
  .f(void 0, GetRawMessageContentResponseFilterSensitiveLog)
  .ser(se_GetRawMessageContentCommand)
  .de(de_GetRawMessageContentCommand)
  .build() {}
