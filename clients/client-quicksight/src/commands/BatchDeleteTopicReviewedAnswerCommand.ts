// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BatchDeleteTopicReviewedAnswerRequest, BatchDeleteTopicReviewedAnswerResponse } from "../models/models_2";
import {
  de_BatchDeleteTopicReviewedAnswerCommand,
  se_BatchDeleteTopicReviewedAnswerCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteTopicReviewedAnswerCommand}.
 */
export interface BatchDeleteTopicReviewedAnswerCommandInput extends BatchDeleteTopicReviewedAnswerRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteTopicReviewedAnswerCommand}.
 */
export interface BatchDeleteTopicReviewedAnswerCommandOutput
  extends BatchDeleteTopicReviewedAnswerResponse,
    __MetadataBearer {}

/**
 * <p>Deletes reviewed answers for Q Topic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, BatchDeleteTopicReviewedAnswerCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, BatchDeleteTopicReviewedAnswerCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // BatchDeleteTopicReviewedAnswerRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   TopicId: "STRING_VALUE", // required
 *   AnswerIds: [ // AnswerIds
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDeleteTopicReviewedAnswerCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteTopicReviewedAnswerResponse
 * //   TopicId: "STRING_VALUE",
 * //   TopicArn: "STRING_VALUE",
 * //   SucceededAnswers: [ // SucceededTopicReviewedAnswers
 * //     { // SucceededTopicReviewedAnswer
 * //       AnswerId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   InvalidAnswers: [ // InvalidTopicReviewedAnswers
 * //     { // InvalidTopicReviewedAnswer
 * //       AnswerId: "STRING_VALUE",
 * //       Error: "INTERNAL_ERROR" || "MISSING_ANSWER" || "DATASET_DOES_NOT_EXIST" || "INVALID_DATASET_ARN" || "DUPLICATED_ANSWER" || "INVALID_DATA" || "MISSING_REQUIRED_FIELDS",
 * //     },
 * //   ],
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param BatchDeleteTopicReviewedAnswerCommandInput - {@link BatchDeleteTopicReviewedAnswerCommandInput}
 * @returns {@link BatchDeleteTopicReviewedAnswerCommandOutput}
 * @see {@link BatchDeleteTopicReviewedAnswerCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteTopicReviewedAnswerCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class BatchDeleteTopicReviewedAnswerCommand extends $Command
  .classBuilder<
    BatchDeleteTopicReviewedAnswerCommandInput,
    BatchDeleteTopicReviewedAnswerCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "BatchDeleteTopicReviewedAnswer", {})
  .n("QuickSightClient", "BatchDeleteTopicReviewedAnswerCommand")
  .f(void 0, void 0)
  .ser(se_BatchDeleteTopicReviewedAnswerCommand)
  .de(de_BatchDeleteTopicReviewedAnswerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteTopicReviewedAnswerRequest;
      output: BatchDeleteTopicReviewedAnswerResponse;
    };
    sdk: {
      input: BatchDeleteTopicReviewedAnswerCommandInput;
      output: BatchDeleteTopicReviewedAnswerCommandOutput;
    };
  };
}
