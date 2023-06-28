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
import { DescribeBucketsRequest, DescribeBucketsResponse } from "../models/models_0";
import { de_DescribeBucketsCommand, se_DescribeBucketsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeBucketsCommand}.
 */
export interface DescribeBucketsCommandInput extends DescribeBucketsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBucketsCommand}.
 */
export interface DescribeBucketsCommandOutput extends DescribeBucketsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves (queries) statistical data and other information about one or more S3 buckets that Amazon Macie monitors and analyzes for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, DescribeBucketsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, DescribeBucketsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const input = { // DescribeBucketsRequest
 *   criteria: { // BucketCriteria
 *     "<keys>": { // BucketCriteriaAdditionalProperties
 *       eq: [ // __listOf__string
 *         "STRING_VALUE",
 *       ],
 *       gt: Number("long"),
 *       gte: Number("long"),
 *       lt: Number("long"),
 *       lte: Number("long"),
 *       neq: [
 *         "STRING_VALUE",
 *       ],
 *       prefix: "STRING_VALUE",
 *     },
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   sortCriteria: { // BucketSortCriteria
 *     attributeName: "STRING_VALUE",
 *     orderBy: "ASC" || "DESC",
 *   },
 * };
 * const command = new DescribeBucketsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBucketsResponse
 * //   buckets: [ // __listOfBucketMetadata
 * //     { // BucketMetadata
 * //       accountId: "STRING_VALUE",
 * //       allowsUnencryptedObjectUploads: "TRUE" || "FALSE" || "UNKNOWN",
 * //       bucketArn: "STRING_VALUE",
 * //       bucketCreatedAt: new Date("TIMESTAMP"),
 * //       bucketName: "STRING_VALUE",
 * //       classifiableObjectCount: Number("long"),
 * //       classifiableSizeInBytes: Number("long"),
 * //       errorCode: "ACCESS_DENIED",
 * //       errorMessage: "STRING_VALUE",
 * //       jobDetails: { // JobDetails
 * //         isDefinedInJob: "TRUE" || "FALSE" || "UNKNOWN",
 * //         isMonitoredByJob: "TRUE" || "FALSE" || "UNKNOWN",
 * //         lastJobId: "STRING_VALUE",
 * //         lastJobRunTime: new Date("TIMESTAMP"),
 * //       },
 * //       lastAutomatedDiscoveryTime: new Date("TIMESTAMP"),
 * //       lastUpdated: new Date("TIMESTAMP"),
 * //       objectCount: Number("long"),
 * //       objectCountByEncryptionType: { // ObjectCountByEncryptionType
 * //         customerManaged: Number("long"),
 * //         kmsManaged: Number("long"),
 * //         s3Managed: Number("long"),
 * //         unencrypted: Number("long"),
 * //         unknown: Number("long"),
 * //       },
 * //       publicAccess: { // BucketPublicAccess
 * //         effectivePermission: "PUBLIC" || "NOT_PUBLIC" || "UNKNOWN",
 * //         permissionConfiguration: { // BucketPermissionConfiguration
 * //           accountLevelPermissions: { // AccountLevelPermissions
 * //             blockPublicAccess: { // BlockPublicAccess
 * //               blockPublicAcls: true || false,
 * //               blockPublicPolicy: true || false,
 * //               ignorePublicAcls: true || false,
 * //               restrictPublicBuckets: true || false,
 * //             },
 * //           },
 * //           bucketLevelPermissions: { // BucketLevelPermissions
 * //             accessControlList: { // AccessControlList
 * //               allowsPublicReadAccess: true || false,
 * //               allowsPublicWriteAccess: true || false,
 * //             },
 * //             blockPublicAccess: {
 * //               blockPublicAcls: true || false,
 * //               blockPublicPolicy: true || false,
 * //               ignorePublicAcls: true || false,
 * //               restrictPublicBuckets: true || false,
 * //             },
 * //             bucketPolicy: { // BucketPolicy
 * //               allowsPublicReadAccess: true || false,
 * //               allowsPublicWriteAccess: true || false,
 * //             },
 * //           },
 * //         },
 * //       },
 * //       region: "STRING_VALUE",
 * //       replicationDetails: { // ReplicationDetails
 * //         replicated: true || false,
 * //         replicatedExternally: true || false,
 * //         replicationAccounts: [ // __listOf__string
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       sensitivityScore: Number("int"),
 * //       serverSideEncryption: { // BucketServerSideEncryption
 * //         kmsMasterKeyId: "STRING_VALUE",
 * //         type: "NONE" || "AES256" || "aws:kms",
 * //       },
 * //       sharedAccess: "EXTERNAL" || "INTERNAL" || "NOT_SHARED" || "UNKNOWN",
 * //       sizeInBytes: Number("long"),
 * //       sizeInBytesCompressed: Number("long"),
 * //       tags: [ // __listOfKeyValuePair
 * //         { // KeyValuePair
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       unclassifiableObjectCount: { // ObjectLevelStatistics
 * //         fileType: Number("long"),
 * //         storageClass: Number("long"),
 * //         total: Number("long"),
 * //       },
 * //       unclassifiableObjectSizeInBytes: {
 * //         fileType: Number("long"),
 * //         storageClass: Number("long"),
 * //         total: Number("long"),
 * //       },
 * //       versioning: true || false,
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeBucketsCommandInput - {@link DescribeBucketsCommandInput}
 * @returns {@link DescribeBucketsCommandOutput}
 * @see {@link DescribeBucketsCommandInput} for command's `input` shape.
 * @see {@link DescribeBucketsCommandOutput} for command's `response` shape.
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
export class DescribeBucketsCommand extends $Command<
  DescribeBucketsCommandInput,
  DescribeBucketsCommandOutput,
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
  constructor(readonly input: DescribeBucketsCommandInput) {
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
  ): Handler<DescribeBucketsCommandInput, DescribeBucketsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeBucketsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "DescribeBucketsCommand";
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
  private serialize(input: DescribeBucketsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeBucketsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeBucketsCommandOutput> {
    return de_DescribeBucketsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
