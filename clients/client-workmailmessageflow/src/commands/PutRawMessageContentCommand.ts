// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutRawMessageContentRequest, PutRawMessageContentResponse } from "../models/models_0";
import { PutRawMessageContent } from "../schemas/schemas_1_MessageContent";
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
 * The input for {@link PutRawMessageContentCommand}.
 */
export interface PutRawMessageContentCommandInput extends PutRawMessageContentRequest {}
/**
 * @public
 *
 * The output of {@link PutRawMessageContentCommand}.
 */
export interface PutRawMessageContentCommandOutput extends PutRawMessageContentResponse, __MetadataBearer {}

/**
 * <p>Updates the raw content of an in-transit email message, in MIME format.</p>
 *          <p>This example describes how to update in-transit email message. For more information and examples for using this API, see
 *       <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/update-with-lambda.html">
 *         Updating message content with AWS Lambda</a>.</p>
 *          <note>
 *             <p>Updates to an in-transit message only appear when you call <code>PutRawMessageContent</code> from an AWS Lambda function
 *       configured with a  synchronous <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/lambda.html#synchronous-rules">
 *         Run Lambda</a> rule. If you call <code>PutRawMessageContent</code> on a delivered or sent message, the message remains unchanged,
 *       even though <a href="https://docs.aws.amazon.com/workmail/latest/APIReference/API_messageflow_GetRawMessageContent.html">GetRawMessageContent</a> returns an updated
 *         message.
 *     </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailMessageFlowClient, PutRawMessageContentCommand } from "@aws-sdk/client-workmailmessageflow"; // ES Modules import
 * // const { WorkMailMessageFlowClient, PutRawMessageContentCommand } = require("@aws-sdk/client-workmailmessageflow"); // CommonJS import
 * // import type { WorkMailMessageFlowClientConfig } from "@aws-sdk/client-workmailmessageflow";
 * const config = {}; // type is WorkMailMessageFlowClientConfig
 * const client = new WorkMailMessageFlowClient(config);
 * const input = { // PutRawMessageContentRequest
 *   messageId: "STRING_VALUE", // required
 *   content: { // RawMessageContent
 *     s3Reference: { // S3Reference
 *       bucket: "STRING_VALUE", // required
 *       key: "STRING_VALUE", // required
 *       objectVersion: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new PutRawMessageContentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutRawMessageContentCommandInput - {@link PutRawMessageContentCommandInput}
 * @returns {@link PutRawMessageContentCommandOutput}
 * @see {@link PutRawMessageContentCommandInput} for command's `input` shape.
 * @see {@link PutRawMessageContentCommandOutput} for command's `response` shape.
 * @see {@link WorkMailMessageFlowClientResolvedConfig | config} for WorkMailMessageFlowClient's `config` shape.
 *
 * @throws {@link InvalidContentLocation} (client fault)
 *  <p>WorkMail could not access the updated email content. Possible reasons:</p>
 *          <ul>
 *             <li>
 *                <p>You made the request in a region other than your S3 bucket region.</p>
 *             </li>
 *             <li>
 *                <p>The <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-owner-condition.html">S3 bucket owner</a> is not the
 *         same as the calling AWS account.</p>
 *             </li>
 *             <li>
 *                <p>You have an incomplete or missing S3 bucket policy. For more information about policies, see
 *         <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/update-with-lambda.html">
 *           Updating message content with AWS Lambda
 *         </a> in the <i>WorkMail Administrator
 *           Guide</i>.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link MessageFrozen} (client fault)
 *  <p>The requested email is not eligible for update. This is usually the case for a redirected email.</p>
 *
 * @throws {@link MessageRejected} (client fault)
 *  <p>The requested email could not be updated due to an error in the MIME content. Check the error message for more information about
 *       what caused the error.</p>
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
export class PutRawMessageContentCommand extends $Command
  .classBuilder<
    PutRawMessageContentCommandInput,
    PutRawMessageContentCommandOutput,
    WorkMailMessageFlowClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailMessageFlowClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GiraffeMessageInTransitService", "PutRawMessageContent", {})
  .n("WorkMailMessageFlowClient", "PutRawMessageContentCommand")
  .sc(PutRawMessageContent)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutRawMessageContentRequest;
      output: {};
    };
    sdk: {
      input: PutRawMessageContentCommandInput;
      output: PutRawMessageContentCommandOutput;
    };
  };
}
