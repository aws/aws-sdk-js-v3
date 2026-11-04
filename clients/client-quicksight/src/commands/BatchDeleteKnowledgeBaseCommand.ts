// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchDeleteKnowledgeBaseRequest, BatchDeleteKnowledgeBaseResponse } from "../models/models_2";
import { BatchDeleteKnowledgeBase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes one or more knowledge bases.
 *
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
 *
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal failure occurred.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameters has a value that isn't valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * You don't have this feature activated for your account. To fix this issue, contact Amazon Web Services support.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit is exceeded.
 *
 * @throws {@link PreconditionNotMetException} (client fault)
 *
 * One or more preconditions aren't met.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Access is throttled.
 *
 * @throws {@link QuickSightServiceException}
 *
 * Base exception class for all service exceptions from QuickSight service.
 *
 * @public
 */
export class BatchDeleteKnowledgeBaseCommand extends command<BatchDeleteKnowledgeBaseCommandInput, BatchDeleteKnowledgeBaseCommandOutput>(
  _ep0,
  _mw0,
  "BatchDeleteKnowledgeBase",
  BatchDeleteKnowledgeBase$
) {
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
