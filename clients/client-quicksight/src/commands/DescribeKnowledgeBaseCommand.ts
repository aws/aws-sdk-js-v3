// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeKnowledgeBaseRequest, DescribeKnowledgeBaseResponse } from "../models/models_4";
import { DescribeKnowledgeBase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeKnowledgeBaseCommand}.
 */
export interface DescribeKnowledgeBaseCommandInput extends DescribeKnowledgeBaseRequest {}
/**
 * @public
 *
 * The output of {@link DescribeKnowledgeBaseCommand}.
 */
export interface DescribeKnowledgeBaseCommandOutput extends DescribeKnowledgeBaseResponse, __MetadataBearer {}

/**
 * <p>Describes a knowledge base.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeKnowledgeBaseCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeKnowledgeBaseCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeKnowledgeBaseRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   KnowledgeBaseId: "STRING_VALUE", // required
 * };
 * const command = new DescribeKnowledgeBaseCommand(input);
 * const response = await client.send(command);
 * // { // DescribeKnowledgeBaseResponse
 * //   KnowledgeBase: { // KnowledgeBase
 * //     KnowledgeBaseArn: "STRING_VALUE", // required
 * //     KnowledgeBaseId: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     Status: "CREATING" || "UPDATING" || "ACTIVE" || "FAILED" || "DELETING", // required
 * //     DataSourceArn: "STRING_VALUE", // required
 * //     KnowledgeBaseConfiguration: { // KnowledgeBaseConfiguration
 * //       templateConfiguration: { // KbTemplateConfiguration
 * //         template: "DOCUMENT_VALUE",
 * //       },
 * //     },
 * //     MediaExtractionConfiguration: { // MediaExtractionConfiguration
 * //       imageExtractionConfiguration: { // ImageExtractionConfiguration
 * //         imageExtractionStatus: "ENABLED" || "DISABLED", // required
 * //       },
 * //       audioExtractionConfiguration: { // AudioExtractionConfiguration
 * //         audioExtractionStatus: "ENABLED" || "DISABLED", // required
 * //       },
 * //       videoExtractionConfiguration: { // VideoExtractionConfiguration
 * //         videoExtractionStatus: "ENABLED" || "DISABLED", // required
 * //         videoExtractionType: "AUDIO_TRANSCRIPTION_ONLY" || "VISUAL_CONTENT_AND_AUDIO_TRANSCRIPTION",
 * //       },
 * //     },
 * //     AccessControlConfiguration: { // AccessControlConfiguration
 * //       isACLEnabled: true || false,
 * //     },
 * //     Type: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //     Description: "STRING_VALUE",
 * //     IsEmailNotificationOptedForIngestionFailures: true || false,
 * //     FirstCompletedIngestionSummary: { // KnowledgeBaseIngestionSummary
 * //       IngestionId: "STRING_VALUE", // required
 * //       IngestionStatus: "QUEUED" || "RUNNING" || "FAILED" || "COMPLETED" || "INCOMPLETE" || "CANCELLED" || "CANCELLING" || "TIMEOUT", // required
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //     },
 * //     FirstIncompleteIngestionSummary: {
 * //       IngestionId: "STRING_VALUE", // required
 * //       IngestionStatus: "QUEUED" || "RUNNING" || "FAILED" || "COMPLETED" || "INCOMPLETE" || "CANCELLED" || "CANCELLING" || "TIMEOUT", // required
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //     },
 * //     LatestIngestionSummary: {
 * //       IngestionId: "STRING_VALUE", // required
 * //       IngestionStatus: "QUEUED" || "RUNNING" || "FAILED" || "COMPLETED" || "INCOMPLETE" || "CANCELLED" || "CANCELLING" || "TIMEOUT", // required
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //     },
 * //     KnowledgeBaseSizeBytes: Number("long"),
 * //     DocumentCount: Number("long"),
 * //     PrimaryOwnerArn: "STRING_VALUE",
 * //     PrimaryOwnerUsername: "STRING_VALUE",
 * //   },
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeKnowledgeBaseCommandInput - {@link DescribeKnowledgeBaseCommandInput}
 * @returns {@link DescribeKnowledgeBaseCommandOutput}
 * @see {@link DescribeKnowledgeBaseCommandInput} for command's `input` shape.
 * @see {@link DescribeKnowledgeBaseCommandOutput} for command's `response` shape.
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
export class DescribeKnowledgeBaseCommand extends command<DescribeKnowledgeBaseCommandInput, DescribeKnowledgeBaseCommandOutput>(
  _ep0,
  _mw0,
  "DescribeKnowledgeBase",
  DescribeKnowledgeBase$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeKnowledgeBaseRequest;
      output: DescribeKnowledgeBaseResponse;
    };
    sdk: {
      input: DescribeKnowledgeBaseCommandInput;
      output: DescribeKnowledgeBaseCommandOutput;
    };
  };
}
