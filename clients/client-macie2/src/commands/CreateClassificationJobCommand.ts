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

import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { CreateClassificationJobRequest, CreateClassificationJobResponse } from "../models/models_0";
import { de_CreateClassificationJobCommand, se_CreateClassificationJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateClassificationJobCommand}.
 */
export interface CreateClassificationJobCommandInput extends CreateClassificationJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateClassificationJobCommand}.
 */
export interface CreateClassificationJobCommandOutput extends CreateClassificationJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates and defines the settings for a classification job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, CreateClassificationJobCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, CreateClassificationJobCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const input = { // CreateClassificationJobRequest
 *   allowListIds: [ // __listOf__string
 *     "STRING_VALUE",
 *   ],
 *   clientToken: "STRING_VALUE", // required
 *   customDataIdentifierIds: [
 *     "STRING_VALUE",
 *   ],
 *   description: "STRING_VALUE",
 *   initialRun: true || false,
 *   jobType: "ONE_TIME" || "SCHEDULED", // required
 *   managedDataIdentifierIds: [
 *     "STRING_VALUE",
 *   ],
 *   managedDataIdentifierSelector: "ALL" || "EXCLUDE" || "INCLUDE" || "NONE" || "RECOMMENDED",
 *   name: "STRING_VALUE", // required
 *   s3JobDefinition: { // S3JobDefinition
 *     bucketCriteria: { // S3BucketCriteriaForJob
 *       excludes: { // CriteriaBlockForJob
 *         and: [ // __listOfCriteriaForJob
 *           { // CriteriaForJob
 *             simpleCriterion: { // SimpleCriterionForJob
 *               comparator: "EQ" || "GT" || "GTE" || "LT" || "LTE" || "NE" || "CONTAINS" || "STARTS_WITH",
 *               key: "ACCOUNT_ID" || "S3_BUCKET_NAME" || "S3_BUCKET_EFFECTIVE_PERMISSION" || "S3_BUCKET_SHARED_ACCESS",
 *               values: [
 *                 "STRING_VALUE",
 *               ],
 *             },
 *             tagCriterion: { // TagCriterionForJob
 *               comparator: "EQ" || "GT" || "GTE" || "LT" || "LTE" || "NE" || "CONTAINS" || "STARTS_WITH",
 *               tagValues: [ // __listOfTagCriterionPairForJob
 *                 { // TagCriterionPairForJob
 *                   key: "STRING_VALUE",
 *                   value: "STRING_VALUE",
 *                 },
 *               ],
 *             },
 *           },
 *         ],
 *       },
 *       includes: {
 *         and: [
 *           {
 *             simpleCriterion: {
 *               comparator: "EQ" || "GT" || "GTE" || "LT" || "LTE" || "NE" || "CONTAINS" || "STARTS_WITH",
 *               key: "ACCOUNT_ID" || "S3_BUCKET_NAME" || "S3_BUCKET_EFFECTIVE_PERMISSION" || "S3_BUCKET_SHARED_ACCESS",
 *               values: [
 *                 "STRING_VALUE",
 *               ],
 *             },
 *             tagCriterion: {
 *               comparator: "EQ" || "GT" || "GTE" || "LT" || "LTE" || "NE" || "CONTAINS" || "STARTS_WITH",
 *               tagValues: [
 *                 {
 *                   key: "STRING_VALUE",
 *                   value: "STRING_VALUE",
 *                 },
 *               ],
 *             },
 *           },
 *         ],
 *       },
 *     },
 *     bucketDefinitions: [ // __listOfS3BucketDefinitionForJob
 *       { // S3BucketDefinitionForJob
 *         accountId: "STRING_VALUE", // required
 *         buckets: "<__listOf__string>", // required
 *       },
 *     ],
 *     scoping: { // Scoping
 *       excludes: { // JobScopingBlock
 *         and: [ // __listOfJobScopeTerm
 *           { // JobScopeTerm
 *             simpleScopeTerm: { // SimpleScopeTerm
 *               comparator: "EQ" || "GT" || "GTE" || "LT" || "LTE" || "NE" || "CONTAINS" || "STARTS_WITH",
 *               key: "OBJECT_EXTENSION" || "OBJECT_LAST_MODIFIED_DATE" || "OBJECT_SIZE" || "OBJECT_KEY",
 *               values: "<__listOf__string>",
 *             },
 *             tagScopeTerm: { // TagScopeTerm
 *               comparator: "EQ" || "GT" || "GTE" || "LT" || "LTE" || "NE" || "CONTAINS" || "STARTS_WITH",
 *               key: "STRING_VALUE",
 *               tagValues: [ // __listOfTagValuePair
 *                 { // TagValuePair
 *                   key: "STRING_VALUE",
 *                   value: "STRING_VALUE",
 *                 },
 *               ],
 *               target: "S3_OBJECT",
 *             },
 *           },
 *         ],
 *       },
 *       includes: {
 *         and: [
 *           {
 *             simpleScopeTerm: {
 *               comparator: "EQ" || "GT" || "GTE" || "LT" || "LTE" || "NE" || "CONTAINS" || "STARTS_WITH",
 *               key: "OBJECT_EXTENSION" || "OBJECT_LAST_MODIFIED_DATE" || "OBJECT_SIZE" || "OBJECT_KEY",
 *               values: "<__listOf__string>",
 *             },
 *             tagScopeTerm: {
 *               comparator: "EQ" || "GT" || "GTE" || "LT" || "LTE" || "NE" || "CONTAINS" || "STARTS_WITH",
 *               key: "STRING_VALUE",
 *               tagValues: [
 *                 {
 *                   key: "STRING_VALUE",
 *                   value: "STRING_VALUE",
 *                 },
 *               ],
 *               target: "S3_OBJECT",
 *             },
 *           },
 *         ],
 *       },
 *     },
 *   },
 *   samplingPercentage: Number("int"),
 *   scheduleFrequency: { // JobScheduleFrequency
 *     dailySchedule: {},
 *     monthlySchedule: { // MonthlySchedule
 *       dayOfMonth: Number("int"),
 *     },
 *     weeklySchedule: { // WeeklySchedule
 *       dayOfWeek: "SUNDAY" || "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY",
 *     },
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateClassificationJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateClassificationJobResponse
 * //   jobArn: "STRING_VALUE",
 * //   jobId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateClassificationJobCommandInput - {@link CreateClassificationJobCommandInput}
 * @returns {@link CreateClassificationJobCommandOutput}
 * @see {@link CreateClassificationJobCommandInput} for command's `input` shape.
 * @see {@link CreateClassificationJobCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Provides information about an error that occurred due to a versioning conflict for a specified resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Provides information about an error that occurred due to an unknown internal server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Provides information about an error that occurred because a specified resource wasn't found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Provides information about an error that occurred due to one or more service quotas for an account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Provides information about an error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Provides information about an error that occurred due to a syntax error in a request.</p>
 *
 * @throws {@link Macie2ServiceException}
 * <p>Base exception class for all service exceptions from Macie2 service.</p>
 *
 */
export class CreateClassificationJobCommand extends $Command<
  CreateClassificationJobCommandInput,
  CreateClassificationJobCommandOutput,
  Macie2ClientResolvedConfig
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
  constructor(readonly input: CreateClassificationJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateClassificationJobCommandInput, CreateClassificationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateClassificationJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "CreateClassificationJobCommand";
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
  private serialize(input: CreateClassificationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateClassificationJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateClassificationJobCommandOutput> {
    return de_CreateClassificationJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
