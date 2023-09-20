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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  ListBucketInventoryConfigurationsOutput,
  ListBucketInventoryConfigurationsOutputFilterSensitiveLog,
  ListBucketInventoryConfigurationsRequest,
} from "../models/models_0";
import {
  de_ListBucketInventoryConfigurationsCommand,
  se_ListBucketInventoryConfigurationsCommand,
} from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListBucketInventoryConfigurationsCommand}.
 */
export interface ListBucketInventoryConfigurationsCommandInput extends ListBucketInventoryConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListBucketInventoryConfigurationsCommand}.
 */
export interface ListBucketInventoryConfigurationsCommandOutput
  extends ListBucketInventoryConfigurationsOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of inventory configurations for the bucket. You can have up to 1,000
 *          analytics configurations per bucket.</p>
 *          <p>This action supports list pagination and does not return more than 100 configurations at
 *          a time. Always check the <code>IsTruncated</code> element in the response. If there are no
 *          more configurations to list, <code>IsTruncated</code> is set to false. If there are more
 *          configurations to list, <code>IsTruncated</code> is set to true, and there is a value in
 *             <code>NextContinuationToken</code>. You use the <code>NextContinuationToken</code> value
 *          to continue the pagination of the list by passing the value in continuation-token in the
 *          request to <code>GET</code> the next page.</p>
 *          <p> To use this operation, you must have permissions to perform the
 *             <code>s3:GetInventoryConfiguration</code> action. The bucket owner has this permission
 *          by default. The bucket owner can grant this permission to others. For more information
 *          about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing
 *             Access Permissions to Your Amazon S3 Resources</a>.</p>
 *          <p>For information about the Amazon S3 inventory feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html">Amazon S3 Inventory</a>
 *          </p>
 *          <p>The following operations are related to
 *          <code>ListBucketInventoryConfigurations</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketInventoryConfiguration.html">GetBucketInventoryConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketInventoryConfiguration.html">DeleteBucketInventoryConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketInventoryConfiguration.html">PutBucketInventoryConfiguration</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, ListBucketInventoryConfigurationsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, ListBucketInventoryConfigurationsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // ListBucketInventoryConfigurationsRequest
 *   Bucket: "STRING_VALUE", // required
 *   ContinuationToken: "STRING_VALUE",
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new ListBucketInventoryConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListBucketInventoryConfigurationsOutput
 * //   ContinuationToken: "STRING_VALUE",
 * //   InventoryConfigurationList: [ // InventoryConfigurationList
 * //     { // InventoryConfiguration
 * //       Destination: { // InventoryDestination
 * //         S3BucketDestination: { // InventoryS3BucketDestination
 * //           AccountId: "STRING_VALUE",
 * //           Bucket: "STRING_VALUE", // required
 * //           Format: "CSV" || "ORC" || "Parquet", // required
 * //           Prefix: "STRING_VALUE",
 * //           Encryption: { // InventoryEncryption
 * //             SSES3: {},
 * //             SSEKMS: { // SSEKMS
 * //               KeyId: "STRING_VALUE", // required
 * //             },
 * //           },
 * //         },
 * //       },
 * //       IsEnabled: true || false, // required
 * //       Filter: { // InventoryFilter
 * //         Prefix: "STRING_VALUE", // required
 * //       },
 * //       Id: "STRING_VALUE", // required
 * //       IncludedObjectVersions: "All" || "Current", // required
 * //       OptionalFields: [ // InventoryOptionalFields
 * //         "Size" || "LastModifiedDate" || "StorageClass" || "ETag" || "IsMultipartUploaded" || "ReplicationStatus" || "EncryptionStatus" || "ObjectLockRetainUntilDate" || "ObjectLockMode" || "ObjectLockLegalHoldStatus" || "IntelligentTieringAccessTier" || "BucketKeyStatus" || "ChecksumAlgorithm" || "ObjectAccessControlList" || "ObjectOwner",
 * //       ],
 * //       Schedule: { // InventorySchedule
 * //         Frequency: "Daily" || "Weekly", // required
 * //       },
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   NextContinuationToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBucketInventoryConfigurationsCommandInput - {@link ListBucketInventoryConfigurationsCommandInput}
 * @returns {@link ListBucketInventoryConfigurationsCommandOutput}
 * @see {@link ListBucketInventoryConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListBucketInventoryConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 */
export class ListBucketInventoryConfigurationsCommand extends $Command<
  ListBucketInventoryConfigurationsCommandInput,
  ListBucketInventoryConfigurationsCommandOutput,
  S3ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      Bucket: { type: "contextParams", name: "Bucket" },
      ForcePathStyle: { type: "clientContextParams", name: "forcePathStyle" },
      UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
      DisableMultiRegionAccessPoints: { type: "clientContextParams", name: "disableMultiregionAccessPoints" },
      Accelerate: { type: "clientContextParams", name: "useAccelerateEndpoint" },
      UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ListBucketInventoryConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBucketInventoryConfigurationsCommandInput, ListBucketInventoryConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListBucketInventoryConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "ListBucketInventoryConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListBucketInventoryConfigurationsOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonS3",
        operation: "ListBucketInventoryConfigurations",
      },
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
  private serialize(
    input: ListBucketInventoryConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListBucketInventoryConfigurationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListBucketInventoryConfigurationsCommandOutput> {
    return de_ListBucketInventoryConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
