// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
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

import { GetStorageLensConfigurationRequest, GetStorageLensConfigurationResult } from "../models/models_0";
import { de_GetStorageLensConfigurationCommand, se_GetStorageLensConfigurationCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetStorageLensConfigurationCommand}.
 */
export interface GetStorageLensConfigurationCommandInput extends GetStorageLensConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetStorageLensConfigurationCommand}.
 */
export interface GetStorageLensConfigurationCommandOutput extends GetStorageLensConfigurationResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets the Amazon S3 Storage Lens configuration. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your storage
 *             activity and usage with Amazon S3 Storage Lens </a> in the
 *             <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <note>
 *             <p>To use this action, you must have permission to perform the
 *                <code>s3:GetStorageLensConfiguration</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the
 *                <i>Amazon S3 User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetStorageLensConfigurationCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetStorageLensConfigurationCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // GetStorageLensConfigurationRequest
 *   ConfigId: "STRING_VALUE", // required
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new GetStorageLensConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetStorageLensConfigurationResult
 * //   StorageLensConfiguration: { // StorageLensConfiguration
 * //     Id: "STRING_VALUE", // required
 * //     AccountLevel: { // AccountLevel
 * //       ActivityMetrics: { // ActivityMetrics
 * //         IsEnabled: true || false,
 * //       },
 * //       BucketLevel: { // BucketLevel
 * //         ActivityMetrics: {
 * //           IsEnabled: true || false,
 * //         },
 * //         PrefixLevel: { // PrefixLevel
 * //           StorageMetrics: { // PrefixLevelStorageMetrics
 * //             IsEnabled: true || false,
 * //             SelectionCriteria: { // SelectionCriteria
 * //               Delimiter: "STRING_VALUE",
 * //               MaxDepth: Number("int"),
 * //               MinStorageBytesPercentage: Number("double"),
 * //             },
 * //           },
 * //         },
 * //         AdvancedCostOptimizationMetrics: { // AdvancedCostOptimizationMetrics
 * //           IsEnabled: true || false,
 * //         },
 * //         AdvancedDataProtectionMetrics: { // AdvancedDataProtectionMetrics
 * //           IsEnabled: true || false,
 * //         },
 * //         DetailedStatusCodesMetrics: { // DetailedStatusCodesMetrics
 * //           IsEnabled: true || false,
 * //         },
 * //       },
 * //       AdvancedCostOptimizationMetrics: {
 * //         IsEnabled: true || false,
 * //       },
 * //       AdvancedDataProtectionMetrics: {
 * //         IsEnabled: true || false,
 * //       },
 * //       DetailedStatusCodesMetrics: {
 * //         IsEnabled: true || false,
 * //       },
 * //     },
 * //     Include: { // Include
 * //       Buckets: [ // Buckets
 * //         "STRING_VALUE",
 * //       ],
 * //       Regions: [ // Regions
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     Exclude: { // Exclude
 * //       Buckets: [
 * //         "STRING_VALUE",
 * //       ],
 * //       Regions: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     DataExport: { // StorageLensDataExport
 * //       S3BucketDestination: { // S3BucketDestination
 * //         Format: "CSV" || "Parquet", // required
 * //         OutputSchemaVersion: "V_1", // required
 * //         AccountId: "STRING_VALUE",
 * //         Arn: "STRING_VALUE", // required
 * //         Prefix: "STRING_VALUE",
 * //         Encryption: { // StorageLensDataExportEncryption
 * //           SSES3: {},
 * //           SSEKMS: { // SSEKMS
 * //             KeyId: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       },
 * //       CloudWatchMetrics: { // CloudWatchMetrics
 * //         IsEnabled: true || false, // required
 * //       },
 * //     },
 * //     IsEnabled: true || false, // required
 * //     AwsOrg: { // StorageLensAwsOrg
 * //       Arn: "STRING_VALUE", // required
 * //     },
 * //     StorageLensArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetStorageLensConfigurationCommandInput - {@link GetStorageLensConfigurationCommandInput}
 * @returns {@link GetStorageLensConfigurationCommandOutput}
 * @see {@link GetStorageLensConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetStorageLensConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 */
export class GetStorageLensConfigurationCommand extends $Command<
  GetStorageLensConfigurationCommandInput,
  GetStorageLensConfigurationCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      RequiresAccountId: { type: "staticContextParams", value: true },
      AccountId: { type: "contextParams", name: "AccountId" },
      UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetStorageLensConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetStorageLensConfigurationCommandInput, GetStorageLensConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetStorageLensConfigurationCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "GetStorageLensConfigurationCommand";
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
  private serialize(input: GetStorageLensConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetStorageLensConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetStorageLensConfigurationCommandOutput> {
    return de_GetStorageLensConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
