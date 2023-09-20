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
  GetBucketInventoryConfigurationOutput,
  GetBucketInventoryConfigurationOutputFilterSensitiveLog,
  GetBucketInventoryConfigurationRequest,
} from "../models/models_0";
import {
  de_GetBucketInventoryConfigurationCommand,
  se_GetBucketInventoryConfigurationCommand,
} from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBucketInventoryConfigurationCommand}.
 */
export interface GetBucketInventoryConfigurationCommandInput extends GetBucketInventoryConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketInventoryConfigurationCommand}.
 */
export interface GetBucketInventoryConfigurationCommandOutput
  extends GetBucketInventoryConfigurationOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns an inventory configuration (identified by the inventory configuration ID) from
 *          the bucket.</p>
 *          <p>To use this operation, you must have permissions to perform the
 *             <code>s3:GetInventoryConfiguration</code> action. The bucket owner has this permission
 *          by default and can grant this permission to others. For more information about permissions,
 *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing
 *             Access Permissions to Your Amazon S3 Resources</a>.</p>
 *          <p>For information about the Amazon S3 inventory feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html">Amazon S3 Inventory</a>.</p>
 *          <p>The following operations are related to
 *          <code>GetBucketInventoryConfiguration</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketInventoryConfiguration.html">DeleteBucketInventoryConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketInventoryConfigurations.html">ListBucketInventoryConfigurations</a>
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
 * import { S3Client, GetBucketInventoryConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketInventoryConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // GetBucketInventoryConfigurationRequest
 *   Bucket: "STRING_VALUE", // required
 *   Id: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketInventoryConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketInventoryConfigurationOutput
 * //   InventoryConfiguration: { // InventoryConfiguration
 * //     Destination: { // InventoryDestination
 * //       S3BucketDestination: { // InventoryS3BucketDestination
 * //         AccountId: "STRING_VALUE",
 * //         Bucket: "STRING_VALUE", // required
 * //         Format: "CSV" || "ORC" || "Parquet", // required
 * //         Prefix: "STRING_VALUE",
 * //         Encryption: { // InventoryEncryption
 * //           SSES3: {},
 * //           SSEKMS: { // SSEKMS
 * //             KeyId: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       },
 * //     },
 * //     IsEnabled: true || false, // required
 * //     Filter: { // InventoryFilter
 * //       Prefix: "STRING_VALUE", // required
 * //     },
 * //     Id: "STRING_VALUE", // required
 * //     IncludedObjectVersions: "All" || "Current", // required
 * //     OptionalFields: [ // InventoryOptionalFields
 * //       "Size" || "LastModifiedDate" || "StorageClass" || "ETag" || "IsMultipartUploaded" || "ReplicationStatus" || "EncryptionStatus" || "ObjectLockRetainUntilDate" || "ObjectLockMode" || "ObjectLockLegalHoldStatus" || "IntelligentTieringAccessTier" || "BucketKeyStatus" || "ChecksumAlgorithm" || "ObjectAccessControlList" || "ObjectOwner",
 * //     ],
 * //     Schedule: { // InventorySchedule
 * //       Frequency: "Daily" || "Weekly", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBucketInventoryConfigurationCommandInput - {@link GetBucketInventoryConfigurationCommandInput}
 * @returns {@link GetBucketInventoryConfigurationCommandOutput}
 * @see {@link GetBucketInventoryConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetBucketInventoryConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 */
export class GetBucketInventoryConfigurationCommand extends $Command<
  GetBucketInventoryConfigurationCommandInput,
  GetBucketInventoryConfigurationCommandOutput,
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
  constructor(readonly input: GetBucketInventoryConfigurationCommandInput) {
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
  ): Handler<GetBucketInventoryConfigurationCommandInput, GetBucketInventoryConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBucketInventoryConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "GetBucketInventoryConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetBucketInventoryConfigurationOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonS3",
        operation: "GetBucketInventoryConfiguration",
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
    input: GetBucketInventoryConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetBucketInventoryConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetBucketInventoryConfigurationCommandOutput> {
    return de_GetBucketInventoryConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
