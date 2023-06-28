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
import { GetBucketStatisticsRequest, GetBucketStatisticsResponse } from "../models/models_0";
import { de_GetBucketStatisticsCommand, se_GetBucketStatisticsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBucketStatisticsCommand}.
 */
export interface GetBucketStatisticsCommandInput extends GetBucketStatisticsRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketStatisticsCommand}.
 */
export interface GetBucketStatisticsCommandOutput extends GetBucketStatisticsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves (queries) aggregated statistical data about all the S3 buckets that Amazon Macie monitors and analyzes for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetBucketStatisticsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetBucketStatisticsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const input = { // GetBucketStatisticsRequest
 *   accountId: "STRING_VALUE",
 * };
 * const command = new GetBucketStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketStatisticsResponse
 * //   bucketCount: Number("long"),
 * //   bucketCountByEffectivePermission: { // BucketCountByEffectivePermission
 * //     publiclyAccessible: Number("long"),
 * //     publiclyReadable: Number("long"),
 * //     publiclyWritable: Number("long"),
 * //     unknown: Number("long"),
 * //   },
 * //   bucketCountByEncryptionType: { // BucketCountByEncryptionType
 * //     kmsManaged: Number("long"),
 * //     s3Managed: Number("long"),
 * //     unencrypted: Number("long"),
 * //     unknown: Number("long"),
 * //   },
 * //   bucketCountByObjectEncryptionRequirement: { // BucketCountPolicyAllowsUnencryptedObjectUploads
 * //     allowsUnencryptedObjectUploads: Number("long"),
 * //     deniesUnencryptedObjectUploads: Number("long"),
 * //     unknown: Number("long"),
 * //   },
 * //   bucketCountBySharedAccessType: { // BucketCountBySharedAccessType
 * //     external: Number("long"),
 * //     internal: Number("long"),
 * //     notShared: Number("long"),
 * //     unknown: Number("long"),
 * //   },
 * //   bucketStatisticsBySensitivity: { // BucketStatisticsBySensitivity
 * //     classificationError: { // SensitivityAggregations
 * //       classifiableSizeInBytes: Number("long"),
 * //       publiclyAccessibleCount: Number("long"),
 * //       totalCount: Number("long"),
 * //       totalSizeInBytes: Number("long"),
 * //     },
 * //     notClassified: {
 * //       classifiableSizeInBytes: Number("long"),
 * //       publiclyAccessibleCount: Number("long"),
 * //       totalCount: Number("long"),
 * //       totalSizeInBytes: Number("long"),
 * //     },
 * //     notSensitive: {
 * //       classifiableSizeInBytes: Number("long"),
 * //       publiclyAccessibleCount: Number("long"),
 * //       totalCount: Number("long"),
 * //       totalSizeInBytes: Number("long"),
 * //     },
 * //     sensitive: {
 * //       classifiableSizeInBytes: Number("long"),
 * //       publiclyAccessibleCount: Number("long"),
 * //       totalCount: Number("long"),
 * //       totalSizeInBytes: Number("long"),
 * //     },
 * //   },
 * //   classifiableObjectCount: Number("long"),
 * //   classifiableSizeInBytes: Number("long"),
 * //   lastUpdated: new Date("TIMESTAMP"),
 * //   objectCount: Number("long"),
 * //   sizeInBytes: Number("long"),
 * //   sizeInBytesCompressed: Number("long"),
 * //   unclassifiableObjectCount: { // ObjectLevelStatistics
 * //     fileType: Number("long"),
 * //     storageClass: Number("long"),
 * //     total: Number("long"),
 * //   },
 * //   unclassifiableObjectSizeInBytes: {
 * //     fileType: Number("long"),
 * //     storageClass: Number("long"),
 * //     total: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBucketStatisticsCommandInput - {@link GetBucketStatisticsCommandInput}
 * @returns {@link GetBucketStatisticsCommandOutput}
 * @see {@link GetBucketStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetBucketStatisticsCommandOutput} for command's `response` shape.
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
export class GetBucketStatisticsCommand extends $Command<
  GetBucketStatisticsCommandInput,
  GetBucketStatisticsCommandOutput,
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
  constructor(readonly input: GetBucketStatisticsCommandInput) {
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
  ): Handler<GetBucketStatisticsCommandInput, GetBucketStatisticsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBucketStatisticsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "GetBucketStatisticsCommand";
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
  private serialize(input: GetBucketStatisticsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetBucketStatisticsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBucketStatisticsCommandOutput> {
    return de_GetBucketStatisticsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
