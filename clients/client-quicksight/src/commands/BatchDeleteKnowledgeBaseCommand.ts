// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchDeleteKnowledgeBaseRequest, BatchDeleteKnowledgeBaseResponse } from "../models/models_2";
import type { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { BatchDeleteKnowledgeBase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteKnowledgeBaseCommand}.
 */
export interface BatchDeleteKnowledgeBaseCommandInput extends BatchDeleteKnowledgeBaseRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteKnowledgeBaseCommand}.
 */
export interface BatchDeleteKnowledgeBaseCommandOutput extends BatchDeleteKnowledgeBaseResponse, __MetadataBearer {}

/**
 * <p>Deletes one or more knowledge bases.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, BatchDeleteKnowledgeBaseCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, BatchDeleteKnowledgeBaseCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // BatchDeleteKnowledgeBaseRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   KnowledgeBaseIds: [ // BatchDeleteKnowledgeBaseRequestKnowledgeBaseIdsList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDeleteKnowledgeBaseCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteKnowledgeBaseResponse
 * //   Deleted: [ // BatchDeleteKnowledgeBaseSuccessList // required
 * //     { // BatchDeleteKnowledgeBaseSuccess
 * //       KnowledgeBaseId: "STRING_VALUE", // required
 * //       KnowledgeBaseArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   Errors: [ // BatchDeleteKnowledgeBaseFailureList // required
 * //     { // BatchDeleteKnowledgeBaseFailure
 * //       KnowledgeBaseId: "STRING_VALUE", // required
 * //       ErrorCode: "STRING_VALUE", // required
 * //       ErrorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param BatchDeleteKnowledgeBaseCommandInput - {@link BatchDeleteKnowledgeBaseCommandInput}
 * @returns {@link BatchDeleteKnowledgeBaseCommandOutput}
 * @see {@link BatchDeleteKnowledgeBaseCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteKnowledgeBaseCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You don't have this feature activated for your account. To fix this issue, contact Amazon Web Services support.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
 *
 * @throws {@link PreconditionNotMetException} (client fault)
 *  <p>One or more preconditions aren't met.</p>
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
export class BatchDeleteKnowledgeBaseCommand extends $Command
  .classBuilder<
    BatchDeleteKnowledgeBaseCommandInput,
    BatchDeleteKnowledgeBaseCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "BatchDeleteKnowledgeBase", {})
  .n("QuickSightClient", "BatchDeleteKnowledgeBaseCommand")
  .sc(BatchDeleteKnowledgeBase$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteKnowledgeBaseRequest;
      output: BatchDeleteKnowledgeBaseResponse;
    };
    sdk: {
      input: BatchDeleteKnowledgeBaseCommandInput;
      output: BatchDeleteKnowledgeBaseCommandOutput;
    };
  };
}
