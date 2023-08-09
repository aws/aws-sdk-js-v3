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
import { SearchResourcesRequest, SearchResourcesResponse } from "../models/models_1";
import { de_SearchResourcesCommand, se_SearchResourcesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchResourcesCommand}.
 */
export interface SearchResourcesCommandInput extends SearchResourcesRequest {}
/**
 * @public
 *
 * The output of {@link SearchResourcesCommand}.
 */
export interface SearchResourcesCommandOutput extends SearchResourcesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves (queries) statistical data and other information about Amazon Web Services resources that Amazon Macie monitors and analyzes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, SearchResourcesCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, SearchResourcesCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const input = { // SearchResourcesRequest
 *   bucketCriteria: { // SearchResourcesBucketCriteria
 *     excludes: { // SearchResourcesCriteriaBlock
 *       and: [ // __listOfSearchResourcesCriteria
 *         { // SearchResourcesCriteria
 *           simpleCriterion: { // SearchResourcesSimpleCriterion
 *             comparator: "EQ" || "NE",
 *             key: "ACCOUNT_ID" || "S3_BUCKET_NAME" || "S3_BUCKET_EFFECTIVE_PERMISSION" || "S3_BUCKET_SHARED_ACCESS",
 *             values: [ // __listOf__string
 *               "STRING_VALUE",
 *             ],
 *           },
 *           tagCriterion: { // SearchResourcesTagCriterion
 *             comparator: "EQ" || "NE",
 *             tagValues: [ // __listOfSearchResourcesTagCriterionPair
 *               { // SearchResourcesTagCriterionPair
 *                 key: "STRING_VALUE",
 *                 value: "STRING_VALUE",
 *               },
 *             ],
 *           },
 *         },
 *       ],
 *     },
 *     includes: {
 *       and: [
 *         {
 *           simpleCriterion: {
 *             comparator: "EQ" || "NE",
 *             key: "ACCOUNT_ID" || "S3_BUCKET_NAME" || "S3_BUCKET_EFFECTIVE_PERMISSION" || "S3_BUCKET_SHARED_ACCESS",
 *             values: [
 *               "STRING_VALUE",
 *             ],
 *           },
 *           tagCriterion: {
 *             comparator: "EQ" || "NE",
 *             tagValues: [
 *               {
 *                 key: "STRING_VALUE",
 *                 value: "STRING_VALUE",
 *               },
 *             ],
 *           },
 *         },
 *       ],
 *     },
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   sortCriteria: { // SearchResourcesSortCriteria
 *     attributeName: "ACCOUNT_ID" || "RESOURCE_NAME" || "S3_CLASSIFIABLE_OBJECT_COUNT" || "S3_CLASSIFIABLE_SIZE_IN_BYTES",
 *     orderBy: "ASC" || "DESC",
 *   },
 * };
 * const command = new SearchResourcesCommand(input);
 * const response = await client.send(command);
 * // { // SearchResourcesResponse
 * //   matchingResources: [ // __listOfMatchingResource
 * //     { // MatchingResource
 * //       matchingBucket: { // MatchingBucket
 * //         accountId: "STRING_VALUE",
 * //         bucketName: "STRING_VALUE",
 * //         classifiableObjectCount: Number("long"),
 * //         classifiableSizeInBytes: Number("long"),
 * //         errorCode: "ACCESS_DENIED",
 * //         errorMessage: "STRING_VALUE",
 * //         jobDetails: { // JobDetails
 * //           isDefinedInJob: "TRUE" || "FALSE" || "UNKNOWN",
 * //           isMonitoredByJob: "TRUE" || "FALSE" || "UNKNOWN",
 * //           lastJobId: "STRING_VALUE",
 * //           lastJobRunTime: new Date("TIMESTAMP"),
 * //         },
 * //         lastAutomatedDiscoveryTime: new Date("TIMESTAMP"),
 * //         objectCount: Number("long"),
 * //         objectCountByEncryptionType: { // ObjectCountByEncryptionType
 * //           customerManaged: Number("long"),
 * //           kmsManaged: Number("long"),
 * //           s3Managed: Number("long"),
 * //           unencrypted: Number("long"),
 * //           unknown: Number("long"),
 * //         },
 * //         sensitivityScore: Number("int"),
 * //         sizeInBytes: Number("long"),
 * //         sizeInBytesCompressed: Number("long"),
 * //         unclassifiableObjectCount: { // ObjectLevelStatistics
 * //           fileType: Number("long"),
 * //           storageClass: Number("long"),
 * //           total: Number("long"),
 * //         },
 * //         unclassifiableObjectSizeInBytes: {
 * //           fileType: Number("long"),
 * //           storageClass: Number("long"),
 * //           total: Number("long"),
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchResourcesCommandInput - {@link SearchResourcesCommandInput}
 * @returns {@link SearchResourcesCommandOutput}
 * @see {@link SearchResourcesCommandInput} for command's `input` shape.
 * @see {@link SearchResourcesCommandOutput} for command's `response` shape.
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
export class SearchResourcesCommand extends $Command<
  SearchResourcesCommandInput,
  SearchResourcesCommandOutput,
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
  constructor(readonly input: SearchResourcesCommandInput) {
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
  ): Handler<SearchResourcesCommandInput, SearchResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchResourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "SearchResourcesCommand";
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
  private serialize(input: SearchResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchResourcesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchResourcesCommandOutput> {
    return de_SearchResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
