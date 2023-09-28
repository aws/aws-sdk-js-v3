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

import { DescribeFeatureGroupRequest, DescribeFeatureGroupResponse } from "../models/models_2";
import { de_DescribeFeatureGroupCommand, se_DescribeFeatureGroupCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeFeatureGroupCommand}.
 */
export interface DescribeFeatureGroupCommandInput extends DescribeFeatureGroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFeatureGroupCommand}.
 */
export interface DescribeFeatureGroupCommandOutput extends DescribeFeatureGroupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Use this operation to describe a <code>FeatureGroup</code>. The response includes
 *          information on the creation time, <code>FeatureGroup</code> name, the unique identifier for
 *          each <code>FeatureGroup</code>, and more.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeFeatureGroupCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeFeatureGroupCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeFeatureGroupRequest
 *   FeatureGroupName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeFeatureGroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFeatureGroupResponse
 * //   FeatureGroupArn: "STRING_VALUE", // required
 * //   FeatureGroupName: "STRING_VALUE", // required
 * //   RecordIdentifierFeatureName: "STRING_VALUE", // required
 * //   EventTimeFeatureName: "STRING_VALUE", // required
 * //   FeatureDefinitions: [ // FeatureDefinitions // required
 * //     { // FeatureDefinition
 * //       FeatureName: "STRING_VALUE",
 * //       FeatureType: "Integral" || "Fractional" || "String",
 * //       CollectionType: "List" || "Set" || "Vector",
 * //       CollectionConfig: { // CollectionConfig Union: only one key present
 * //         VectorConfig: { // VectorConfig
 * //           Dimension: Number("int"), // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   OnlineStoreConfig: { // OnlineStoreConfig
 * //     SecurityConfig: { // OnlineStoreSecurityConfig
 * //       KmsKeyId: "STRING_VALUE",
 * //     },
 * //     EnableOnlineStore: true || false,
 * //     TtlDuration: { // TtlDuration
 * //       Unit: "Seconds" || "Minutes" || "Hours" || "Days" || "Weeks",
 * //       Value: Number("int"),
 * //     },
 * //     StorageType: "Standard" || "InMemory",
 * //   },
 * //   OfflineStoreConfig: { // OfflineStoreConfig
 * //     S3StorageConfig: { // S3StorageConfig
 * //       S3Uri: "STRING_VALUE", // required
 * //       KmsKeyId: "STRING_VALUE",
 * //       ResolvedOutputS3Uri: "STRING_VALUE",
 * //     },
 * //     DisableGlueTableCreation: true || false,
 * //     DataCatalogConfig: { // DataCatalogConfig
 * //       TableName: "STRING_VALUE", // required
 * //       Catalog: "STRING_VALUE", // required
 * //       Database: "STRING_VALUE", // required
 * //     },
 * //     TableFormat: "Glue" || "Iceberg",
 * //   },
 * //   RoleArn: "STRING_VALUE",
 * //   FeatureGroupStatus: "Creating" || "Created" || "CreateFailed" || "Deleting" || "DeleteFailed",
 * //   OfflineStoreStatus: { // OfflineStoreStatus
 * //     Status: "Active" || "Blocked" || "Disabled", // required
 * //     BlockedReason: "STRING_VALUE",
 * //   },
 * //   LastUpdateStatus: { // LastUpdateStatus
 * //     Status: "Successful" || "Failed" || "InProgress", // required
 * //     FailureReason: "STRING_VALUE",
 * //   },
 * //   FailureReason: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   NextToken: "STRING_VALUE", // required
 * //   OnlineStoreTotalSizeBytes: Number("long"),
 * // };
 *
 * ```
 *
 * @param DescribeFeatureGroupCommandInput - {@link DescribeFeatureGroupCommandInput}
 * @returns {@link DescribeFeatureGroupCommandOutput}
 * @see {@link DescribeFeatureGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeFeatureGroupCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DescribeFeatureGroupCommand extends $Command<
  DescribeFeatureGroupCommandInput,
  DescribeFeatureGroupCommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: DescribeFeatureGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeFeatureGroupCommandInput, DescribeFeatureGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFeatureGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeFeatureGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "DescribeFeatureGroup",
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
  private serialize(input: DescribeFeatureGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeFeatureGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFeatureGroupCommandOutput> {
    return de_DescribeFeatureGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
