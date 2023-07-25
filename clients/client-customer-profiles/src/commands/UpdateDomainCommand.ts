// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { UpdateDomainRequest, UpdateDomainResponse } from "../models/models_0";
import { de_UpdateDomainCommand, se_UpdateDomainCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateDomainCommand}.
 */
export interface UpdateDomainCommandInput extends UpdateDomainRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDomainCommand}.
 */
export interface UpdateDomainCommandOutput extends UpdateDomainResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the properties of a domain, including creating or selecting a dead letter queue
 *          or an encryption key.</p>
 *          <p>After a domain is created, the name can’t be changed.</p>
 *          <p>Use this API or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomain.html">CreateDomain</a> to
 *          enable <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">identity
 *             resolution</a>: set <code>Matching</code> to true.</p>
 *          <p>To prevent cross-service impersonation when you call this API, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html">Cross-service confused deputy prevention</a> for sample policies that you should
 *          apply. </p>
 *          <p>To add or remove tags on an existing Domain, see <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html">TagResource</a>/<a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, UpdateDomainCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, UpdateDomainCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const input = { // UpdateDomainRequest
 *   DomainName: "STRING_VALUE", // required
 *   DefaultExpirationDays: Number("int"),
 *   DefaultEncryptionKey: "STRING_VALUE",
 *   DeadLetterQueueUrl: "STRING_VALUE",
 *   Matching: { // MatchingRequest
 *     Enabled: true || false, // required
 *     JobSchedule: { // JobSchedule
 *       DayOfTheWeek: "SUNDAY" || "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY", // required
 *       Time: "STRING_VALUE", // required
 *     },
 *     AutoMerging: { // AutoMerging
 *       Enabled: true || false, // required
 *       Consolidation: { // Consolidation
 *         MatchingAttributesList: [ // MatchingAttributesList // required
 *           [ // MatchingAttributes
 *             "STRING_VALUE",
 *           ],
 *         ],
 *       },
 *       ConflictResolution: { // ConflictResolution
 *         ConflictResolvingModel: "RECENCY" || "SOURCE", // required
 *         SourceName: "STRING_VALUE",
 *       },
 *       MinAllowedConfidenceScoreForMerging: Number("double"),
 *     },
 *     ExportingConfig: { // ExportingConfig
 *       S3Exporting: { // S3ExportingConfig
 *         S3BucketName: "STRING_VALUE", // required
 *         S3KeyName: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   RuleBasedMatching: { // RuleBasedMatchingRequest
 *     Enabled: true || false, // required
 *     MatchingRules: [ // MatchingRules
 *       { // MatchingRule
 *         Rule: [ // MatchingRuleAttributeList // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *     MaxAllowedRuleLevelForMerging: Number("int"),
 *     MaxAllowedRuleLevelForMatching: Number("int"),
 *     AttributeTypesSelector: { // AttributeTypesSelector
 *       AttributeMatchingModel: "ONE_TO_ONE" || "MANY_TO_MANY", // required
 *       Address: [ // AddressList
 *         "STRING_VALUE",
 *       ],
 *       PhoneNumber: [ // PhoneNumberList
 *         "STRING_VALUE",
 *       ],
 *       EmailAddress: [ // EmailList
 *         "STRING_VALUE",
 *       ],
 *     },
 *     ConflictResolution: {
 *       ConflictResolvingModel: "RECENCY" || "SOURCE", // required
 *       SourceName: "STRING_VALUE",
 *     },
 *     ExportingConfig: {
 *       S3Exporting: {
 *         S3BucketName: "STRING_VALUE", // required
 *         S3KeyName: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateDomainCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDomainResponse
 * //   DomainName: "STRING_VALUE", // required
 * //   DefaultExpirationDays: Number("int"),
 * //   DefaultEncryptionKey: "STRING_VALUE",
 * //   DeadLetterQueueUrl: "STRING_VALUE",
 * //   Matching: { // MatchingResponse
 * //     Enabled: true || false,
 * //     JobSchedule: { // JobSchedule
 * //       DayOfTheWeek: "SUNDAY" || "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY", // required
 * //       Time: "STRING_VALUE", // required
 * //     },
 * //     AutoMerging: { // AutoMerging
 * //       Enabled: true || false, // required
 * //       Consolidation: { // Consolidation
 * //         MatchingAttributesList: [ // MatchingAttributesList // required
 * //           [ // MatchingAttributes
 * //             "STRING_VALUE",
 * //           ],
 * //         ],
 * //       },
 * //       ConflictResolution: { // ConflictResolution
 * //         ConflictResolvingModel: "RECENCY" || "SOURCE", // required
 * //         SourceName: "STRING_VALUE",
 * //       },
 * //       MinAllowedConfidenceScoreForMerging: Number("double"),
 * //     },
 * //     ExportingConfig: { // ExportingConfig
 * //       S3Exporting: { // S3ExportingConfig
 * //         S3BucketName: "STRING_VALUE", // required
 * //         S3KeyName: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   RuleBasedMatching: { // RuleBasedMatchingResponse
 * //     Enabled: true || false,
 * //     MatchingRules: [ // MatchingRules
 * //       { // MatchingRule
 * //         Rule: [ // MatchingRuleAttributeList // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     Status: "PENDING" || "IN_PROGRESS" || "ACTIVE",
 * //     MaxAllowedRuleLevelForMerging: Number("int"),
 * //     MaxAllowedRuleLevelForMatching: Number("int"),
 * //     AttributeTypesSelector: { // AttributeTypesSelector
 * //       AttributeMatchingModel: "ONE_TO_ONE" || "MANY_TO_MANY", // required
 * //       Address: [ // AddressList
 * //         "STRING_VALUE",
 * //       ],
 * //       PhoneNumber: [ // PhoneNumberList
 * //         "STRING_VALUE",
 * //       ],
 * //       EmailAddress: [ // EmailList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     ConflictResolution: {
 * //       ConflictResolvingModel: "RECENCY" || "SOURCE", // required
 * //       SourceName: "STRING_VALUE",
 * //     },
 * //     ExportingConfig: {
 * //       S3Exporting: {
 * //         S3BucketName: "STRING_VALUE", // required
 * //         S3KeyName: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * //   LastUpdatedAt: new Date("TIMESTAMP"), // required
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateDomainCommandInput - {@link UpdateDomainCommandInput}
 * @returns {@link UpdateDomainCommandOutput}
 * @see {@link UpdateDomainCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 */
export class UpdateDomainCommand extends $Command<
  UpdateDomainCommandInput,
  UpdateDomainCommandOutput,
  CustomerProfilesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: UpdateDomainCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CustomerProfilesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDomainCommandInput, UpdateDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateDomainCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "UpdateDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: UpdateDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateDomainCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDomainCommandOutput> {
    return de_UpdateDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
