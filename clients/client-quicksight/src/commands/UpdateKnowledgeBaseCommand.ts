// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateKnowledgeBaseRequest, UpdateKnowledgeBaseResponse } from "../models/models_5";
import { UpdateKnowledgeBase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateKnowledgeBaseCommand}.
 */
export interface UpdateKnowledgeBaseCommandInput extends UpdateKnowledgeBaseRequest {}
/**
 * @public
 *
 * The output of {@link UpdateKnowledgeBaseCommand}.
 */
export interface UpdateKnowledgeBaseCommandOutput extends UpdateKnowledgeBaseResponse, __MetadataBearer {}

/**
 * Updates the properties of an existing knowledge base.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateKnowledgeBaseCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateKnowledgeBaseCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateKnowledgeBaseRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   KnowledgeBaseId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   KnowledgeBaseConfiguration: { // KnowledgeBaseConfiguration
 *     templateConfiguration: { // KbTemplateConfiguration
 *       template: "DOCUMENT_VALUE",
 *     },
 *   },
 *   MediaExtractionConfiguration: { // MediaExtractionConfiguration
 *     imageExtractionConfiguration: { // ImageExtractionConfiguration
 *       imageExtractionStatus: "ENABLED" || "DISABLED", // required
 *     },
 *     audioExtractionConfiguration: { // AudioExtractionConfiguration
 *       audioExtractionStatus: "ENABLED" || "DISABLED", // required
 *     },
 *     videoExtractionConfiguration: { // VideoExtractionConfiguration
 *       videoExtractionStatus: "ENABLED" || "DISABLED", // required
 *       videoExtractionType: "AUDIO_TRANSCRIPTION_ONLY" || "VISUAL_CONTENT_AND_AUDIO_TRANSCRIPTION",
 *     },
 *   },
 *   IsEmailNotificationOptedForIngestionFailures: true || false,
 *   AccessControlConfiguration: { // AccessControlConfiguration
 *     isACLEnabled: true || false,
 *   },
 * };
 * const command = new UpdateKnowledgeBaseCommand(input);
 * const response = await client.send(command);
 * // { // UpdateKnowledgeBaseResponse
 * //   KnowledgeBaseArn: "STRING_VALUE", // required
 * //   KnowledgeBaseId: "STRING_VALUE", // required
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateKnowledgeBaseCommandInput - {@link UpdateKnowledgeBaseCommandInput}
 * @returns {@link UpdateKnowledgeBaseCommandOutput}
 * @see {@link UpdateKnowledgeBaseCommandInput} for command's `input` shape.
 * @see {@link UpdateKnowledgeBaseCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
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
export class UpdateKnowledgeBaseCommand extends command<UpdateKnowledgeBaseCommandInput, UpdateKnowledgeBaseCommandOutput>(
  _ep0,
  _mw0,
  "UpdateKnowledgeBase",
  UpdateKnowledgeBase$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateKnowledgeBaseRequest;
      output: UpdateKnowledgeBaseResponse;
    };
    sdk: {
      input: UpdateKnowledgeBaseCommandInput;
      output: UpdateKnowledgeBaseCommandOutput;
    };
  };
}
