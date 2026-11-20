// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateProjectRequest, UpdateProjectResponse } from "../models/models_0";
import { UpdateProject$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateProjectCommand}.
 */
export interface UpdateProjectCommandInput extends UpdateProjectRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProjectCommand}.
 */
export interface UpdateProjectCommandOutput extends UpdateProjectResponse, __MetadataBearer {}

/**
 * <p>Updates the configuration of an existing project. If you omit a configuration, UpdateProject leaves it unchanged.
 *          A configuration that you supply replaces the stored one, so include every setting that you want to keep.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, UpdateProjectCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, UpdateProjectCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * // import type { TextractClientConfig } from "@aws-sdk/client-textract";
 * const config = {}; // type is TextractClientConfig
 * const client = new TextractClient(config);
 * const input = { // UpdateProjectRequest
 *   ProjectArn: "STRING_VALUE", // required
 *   ProjectDescription: "STRING_VALUE",
 *   ExtractionConfiguration: { // ExtractionConfiguration
 *     BoundingBox: { // BoundingBoxConfiguration
 *       State: "ENABLED" || "DISABLED", // required
 *     },
 *     Granularity: { // ExtractionGranularity
 *       Types: [ // ExtractionGranularityTypes
 *         "DOCUMENT" || "PAGE" || "ELEMENT" || "WORD" || "LINE",
 *       ],
 *     },
 *     OutputFormat: { // OutputFormat
 *       AdditionalFileFormat: { // OutputAdditionalFileFormat
 *         State: "ENABLED" || "DISABLED", // required
 *       },
 *       TextFormat: { // OutputTextFormat
 *         Types: [ // OutputTextFormatTypes
 *           "PLAIN_TEXT" || "MARKDOWN" || "HTML" || "CSV",
 *         ],
 *       },
 *     },
 *   },
 *   GenerativeConfiguration: { // GenerativeConfiguration
 *     Summarization: { // SummarizationConfiguration
 *       State: "ENABLED" || "DISABLED", // required
 *     },
 *     FigureCaption: { // FigureCaptionConfiguration
 *       State: "ENABLED" || "DISABLED", // required
 *     },
 *   },
 *   CustomConfiguration: { // CustomConfiguration
 *     Blueprints: [ // BlueprintItems // required
 *       { // BlueprintItem
 *         BlueprintArn: "STRING_VALUE", // required
 *         BlueprintVersion: "STRING_VALUE",
 *       },
 *     ],
 *     FallbackBlueprints: [ // FallbackBlueprintItems
 *       {
 *         BlueprintArn: "STRING_VALUE", // required
 *         BlueprintVersion: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   SplitterConfiguration: { // SplitterConfiguration
 *     State: "ENABLED" || "DISABLED", // required
 *   },
 *   SensitiveDataConfiguration: { // SensitiveDataConfiguration
 *     DetectionMode: "DETECTION" || "DETECTION_AND_REDACTION" || "DISABLED", // required
 *     PiiEntitiesConfiguration: { // PIIEntitiesConfiguration
 *       PiiEntityTypes: [ // PIIEntityTypes // required
 *         "ALL" || "ADDRESS" || "AGE" || "NAME" || "EMAIL" || "PHONE" || "USERNAME" || "PASSWORD" || "DRIVER_ID" || "LICENSE_PLATE" || "VEHICLE_IDENTIFICATION_NUMBER" || "CREDIT_DEBIT_CARD_CVV" || "CREDIT_DEBIT_CARD_EXPIRY" || "CREDIT_DEBIT_CARD_NUMBER" || "PIN" || "INTERNATIONAL_BANK_ACCOUNT_NUMBER" || "SWIFT_CODE" || "IP_ADDRESS" || "MAC_ADDRESS" || "URL" || "AWS_ACCESS_KEY" || "AWS_SECRET_KEY" || "US_BANK_ACCOUNT_NUMBER" || "US_BANK_ROUTING_NUMBER" || "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER" || "US_PASSPORT_NUMBER" || "US_SOCIAL_SECURITY_NUMBER" || "CA_HEALTH_NUMBER" || "CA_SOCIAL_INSURANCE_NUMBER" || "UK_NATIONAL_HEALTH_SERVICE_NUMBER" || "UK_NATIONAL_INSURANCE_NUMBER" || "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER",
 *       ],
 *       RedactionMaskMode: "PII" || "ENTITY_TYPE", // required
 *     },
 *   },
 *   EncryptionConfiguration: { // EncryptionConfiguration
 *     KmsKeyId: "STRING_VALUE", // required
 *     KmsEncryptionContext: { // KmsEncryptionContext
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new UpdateProjectCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProjectResponse
 * //   ProjectArn: "STRING_VALUE", // required
 * //   Status: "COMPLETED" || "FAILED",
 * // };
 *
 * ```
 *
 * @param UpdateProjectCommandInput - {@link UpdateProjectCommandInput}
 * @returns {@link UpdateProjectCommandOutput}
 * @see {@link UpdateProjectCommandInput} for command's `input` shape.
 * @see {@link UpdateProjectCommandOutput} for command's `response` shape.
 * @see {@link TextractClientResolvedConfig | config} for TextractClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You aren't authorized to perform the action. Use the Amazon Resource Name (ARN)
 *             of an authorized user or IAM role to perform the operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Textract experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An input parameter violated a constraint. For example, in synchronous operations,
 *        an <code>InvalidParameterException</code> exception occurs
 *       when neither of the <code>S3Object</code> or <code>Bytes</code> values are supplied in the <code>Document</code>
 *       request parameter.
 *        Validate your parameter before calling the API operation again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An Amazon Textract service limit was exceeded. For example, if you start too many
 *          asynchronous jobs concurrently, calls to start operations
 *             (<code>StartDocumentTextDetection</code>, for example) raise a LimitExceededException
 *          exception (HTTP status code: 400) until the number of concurrently running jobs is below
 *          the Amazon Textract service limit. </p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this limit,
 *          contact Amazon Textract.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> Returned when an operation tried to access a nonexistent resource. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>  Indicates that a request was not valid. Check request for proper formatting. </p>
 *
 * @throws {@link TextractServiceException}
 * <p>Base exception class for all service exceptions from Textract service.</p>
 *
 *
 * @public
 */
export class UpdateProjectCommand extends command<UpdateProjectCommandInput, UpdateProjectCommandOutput>(
  _ep0,
  _mw0,
  "UpdateProject",
  UpdateProject$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateProjectRequest;
      output: UpdateProjectResponse;
    };
    sdk: {
      input: UpdateProjectCommandInput;
      output: UpdateProjectCommandOutput;
    };
  };
}
