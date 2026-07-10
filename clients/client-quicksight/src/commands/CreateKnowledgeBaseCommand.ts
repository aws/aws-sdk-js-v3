// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateKnowledgeBaseRequest, CreateKnowledgeBaseResponse } from "../models/models_3";
import { CreateKnowledgeBase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateKnowledgeBaseCommand}.
 */
export interface CreateKnowledgeBaseCommandInput extends CreateKnowledgeBaseRequest {}
/**
 * @public
 *
 * The output of {@link CreateKnowledgeBaseCommand}.
 */
export interface CreateKnowledgeBaseCommandOutput extends CreateKnowledgeBaseResponse, __MetadataBearer {}

/**
 * <p>Creates a knowledge base from a specified data source. Supported data source connector types include:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>S3_KNOWLEDGE_BASE</code> – Uses an Amazon S3 bucket as the data source.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>WEB_CRAWLER</code> – Uses web pages indexed by the built-in web crawler as the data source.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>GOOGLE_DRIVE</code> – Uses Google Drive as the data source. Supports service account authentication only.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>SHAREPOINT</code> – Uses SharePoint as the data source. Supports two-legged OAuth only.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ONE_DRIVE</code> – Uses OneDrive as the data source. Supports two-legged OAuth only.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateKnowledgeBaseCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateKnowledgeBaseCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // CreateKnowledgeBaseRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   KnowledgeBaseId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   DataSourceArn: "STRING_VALUE", // required
 *   KnowledgeBaseConfiguration: { // KnowledgeBaseConfiguration
 *     templateConfiguration: { // KbTemplateConfiguration
 *       template: "DOCUMENT_VALUE",
 *     },
 *   },
 *   Description: "STRING_VALUE",
 *   Permissions: [ // ResourcePermissionList
 *     { // ResourcePermission
 *       Principal: "STRING_VALUE", // required
 *       Actions: [ // ActionList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
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
 *   AccessControlConfiguration: { // AccessControlConfiguration
 *     isACLEnabled: true || false,
 *   },
 *   PrimaryOwnerArn: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateKnowledgeBaseCommand(input);
 * const response = await client.send(command);
 * // { // CreateKnowledgeBaseResponse
 * //   KnowledgeBaseArn: "STRING_VALUE", // required
 * //   KnowledgeBaseId: "STRING_VALUE", // required
 * //   CreationStatus: "CREATING" || "UPDATING" || "ACTIVE" || "FAILED" || "DELETING", // required
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param CreateKnowledgeBaseCommandInput - {@link CreateKnowledgeBaseCommandInput}
 * @returns {@link CreateKnowledgeBaseCommandOutput}
 * @see {@link CreateKnowledgeBaseCommandInput} for command's `input` shape.
 * @see {@link CreateKnowledgeBaseCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource specified already exists. </p>
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
export class CreateKnowledgeBaseCommand extends command<CreateKnowledgeBaseCommandInput, CreateKnowledgeBaseCommandOutput>(
  _ep0,
  _mw0,
  "CreateKnowledgeBase",
  CreateKnowledgeBase$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateKnowledgeBaseRequest;
      output: CreateKnowledgeBaseResponse;
    };
    sdk: {
      input: CreateKnowledgeBaseCommandInput;
      output: CreateKnowledgeBaseCommandOutput;
    };
  };
}
