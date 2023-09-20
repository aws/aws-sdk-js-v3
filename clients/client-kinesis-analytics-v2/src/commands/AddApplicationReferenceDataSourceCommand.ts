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
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client";
import {
  AddApplicationReferenceDataSourceRequest,
  AddApplicationReferenceDataSourceResponse,
} from "../models/models_0";
import {
  de_AddApplicationReferenceDataSourceCommand,
  se_AddApplicationReferenceDataSourceCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AddApplicationReferenceDataSourceCommand}.
 */
export interface AddApplicationReferenceDataSourceCommandInput extends AddApplicationReferenceDataSourceRequest {}
/**
 * @public
 *
 * The output of {@link AddApplicationReferenceDataSourceCommand}.
 */
export interface AddApplicationReferenceDataSourceCommandOutput
  extends AddApplicationReferenceDataSourceResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Adds a reference data source to an existing SQL-based Kinesis Data Analytics application.</p>
 *          <p>Kinesis Data Analytics reads reference data (that is, an Amazon S3 object) and creates an
 *       in-application table within your application. In the request, you provide the source (S3
 *       bucket name and object key name), name of the in-application table to create, and the
 *       necessary mapping information that describes how data in an Amazon S3 object maps to columns
 *       in the resulting in-application table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, AddApplicationReferenceDataSourceCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, AddApplicationReferenceDataSourceCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // AddApplicationReferenceDataSourceRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   CurrentApplicationVersionId: Number("long"), // required
 *   ReferenceDataSource: { // ReferenceDataSource
 *     TableName: "STRING_VALUE", // required
 *     S3ReferenceDataSource: { // S3ReferenceDataSource
 *       BucketARN: "STRING_VALUE",
 *       FileKey: "STRING_VALUE",
 *     },
 *     ReferenceSchema: { // SourceSchema
 *       RecordFormat: { // RecordFormat
 *         RecordFormatType: "JSON" || "CSV", // required
 *         MappingParameters: { // MappingParameters
 *           JSONMappingParameters: { // JSONMappingParameters
 *             RecordRowPath: "STRING_VALUE", // required
 *           },
 *           CSVMappingParameters: { // CSVMappingParameters
 *             RecordRowDelimiter: "STRING_VALUE", // required
 *             RecordColumnDelimiter: "STRING_VALUE", // required
 *           },
 *         },
 *       },
 *       RecordEncoding: "STRING_VALUE",
 *       RecordColumns: [ // RecordColumns // required
 *         { // RecordColumn
 *           Name: "STRING_VALUE", // required
 *           Mapping: "STRING_VALUE",
 *           SqlType: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   },
 * };
 * const command = new AddApplicationReferenceDataSourceCommand(input);
 * const response = await client.send(command);
 * // { // AddApplicationReferenceDataSourceResponse
 * //   ApplicationARN: "STRING_VALUE",
 * //   ApplicationVersionId: Number("long"),
 * //   ReferenceDataSourceDescriptions: [ // ReferenceDataSourceDescriptions
 * //     { // ReferenceDataSourceDescription
 * //       ReferenceId: "STRING_VALUE", // required
 * //       TableName: "STRING_VALUE", // required
 * //       S3ReferenceDataSourceDescription: { // S3ReferenceDataSourceDescription
 * //         BucketARN: "STRING_VALUE", // required
 * //         FileKey: "STRING_VALUE", // required
 * //         ReferenceRoleARN: "STRING_VALUE",
 * //       },
 * //       ReferenceSchema: { // SourceSchema
 * //         RecordFormat: { // RecordFormat
 * //           RecordFormatType: "JSON" || "CSV", // required
 * //           MappingParameters: { // MappingParameters
 * //             JSONMappingParameters: { // JSONMappingParameters
 * //               RecordRowPath: "STRING_VALUE", // required
 * //             },
 * //             CSVMappingParameters: { // CSVMappingParameters
 * //               RecordRowDelimiter: "STRING_VALUE", // required
 * //               RecordColumnDelimiter: "STRING_VALUE", // required
 * //             },
 * //           },
 * //         },
 * //         RecordEncoding: "STRING_VALUE",
 * //         RecordColumns: [ // RecordColumns // required
 * //           { // RecordColumn
 * //             Name: "STRING_VALUE", // required
 * //             Mapping: "STRING_VALUE",
 * //             SqlType: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AddApplicationReferenceDataSourceCommandInput - {@link AddApplicationReferenceDataSourceCommandInput}
 * @returns {@link AddApplicationReferenceDataSourceCommandOutput}
 * @see {@link AddApplicationReferenceDataSourceCommandInput} for command's `input` shape.
 * @see {@link AddApplicationReferenceDataSourceCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Exception thrown as a result of concurrent modifications to an application. This error can
 *       be the result of attempting to modify an application without using the current application
 *       ID.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The specified input parameter value is not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request JSON is not valid for the operation.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The application is not available for this operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Specified application can't be found.</p>
 *
 * @throws {@link KinesisAnalyticsV2ServiceException}
 * <p>Base exception class for all service exceptions from KinesisAnalyticsV2 service.</p>
 *
 */
export class AddApplicationReferenceDataSourceCommand extends $Command<
  AddApplicationReferenceDataSourceCommandInput,
  AddApplicationReferenceDataSourceCommandOutput,
  KinesisAnalyticsV2ClientResolvedConfig
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
  constructor(readonly input: AddApplicationReferenceDataSourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisAnalyticsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddApplicationReferenceDataSourceCommandInput, AddApplicationReferenceDataSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddApplicationReferenceDataSourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsV2Client";
    const commandName = "AddApplicationReferenceDataSourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "KinesisAnalytics_20180523",
        operation: "AddApplicationReferenceDataSource",
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
    input: AddApplicationReferenceDataSourceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_AddApplicationReferenceDataSourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AddApplicationReferenceDataSourceCommandOutput> {
    return de_AddApplicationReferenceDataSourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
