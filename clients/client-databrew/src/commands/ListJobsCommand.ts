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

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { ListJobsRequest, ListJobsResponse } from "../models/models_0";
import { de_ListJobsCommand, se_ListJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListJobsCommand}.
 */
export interface ListJobsCommandInput extends ListJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListJobsCommand}.
 */
export interface ListJobsCommandOutput extends ListJobsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all of the DataBrew jobs that are defined.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, ListJobsCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, ListJobsCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const input = { // ListJobsRequest
 *   DatasetName: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ProjectName: "STRING_VALUE",
 * };
 * const command = new ListJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListJobsResponse
 * //   Jobs: [ // JobList // required
 * //     { // Job
 * //       AccountId: "STRING_VALUE",
 * //       CreatedBy: "STRING_VALUE",
 * //       CreateDate: new Date("TIMESTAMP"),
 * //       DatasetName: "STRING_VALUE",
 * //       EncryptionKeyArn: "STRING_VALUE",
 * //       EncryptionMode: "SSE-KMS" || "SSE-S3",
 * //       Name: "STRING_VALUE", // required
 * //       Type: "PROFILE" || "RECIPE",
 * //       LastModifiedBy: "STRING_VALUE",
 * //       LastModifiedDate: new Date("TIMESTAMP"),
 * //       LogSubscription: "ENABLE" || "DISABLE",
 * //       MaxCapacity: Number("int"),
 * //       MaxRetries: Number("int"),
 * //       Outputs: [ // OutputList
 * //         { // Output
 * //           CompressionFormat: "GZIP" || "LZ4" || "SNAPPY" || "BZIP2" || "DEFLATE" || "LZO" || "BROTLI" || "ZSTD" || "ZLIB",
 * //           Format: "CSV" || "JSON" || "PARQUET" || "GLUEPARQUET" || "AVRO" || "ORC" || "XML" || "TABLEAUHYPER",
 * //           PartitionColumns: [ // ColumnNameList
 * //             "STRING_VALUE",
 * //           ],
 * //           Location: { // S3Location
 * //             Bucket: "STRING_VALUE", // required
 * //             Key: "STRING_VALUE",
 * //             BucketOwner: "STRING_VALUE",
 * //           },
 * //           Overwrite: true || false,
 * //           FormatOptions: { // OutputFormatOptions
 * //             Csv: { // CsvOutputOptions
 * //               Delimiter: "STRING_VALUE",
 * //             },
 * //           },
 * //           MaxOutputFiles: Number("int"),
 * //         },
 * //       ],
 * //       DataCatalogOutputs: [ // DataCatalogOutputList
 * //         { // DataCatalogOutput
 * //           CatalogId: "STRING_VALUE",
 * //           DatabaseName: "STRING_VALUE", // required
 * //           TableName: "STRING_VALUE", // required
 * //           S3Options: { // S3TableOutputOptions
 * //             Location: {
 * //               Bucket: "STRING_VALUE", // required
 * //               Key: "STRING_VALUE",
 * //               BucketOwner: "STRING_VALUE",
 * //             },
 * //           },
 * //           DatabaseOptions: { // DatabaseTableOutputOptions
 * //             TempDirectory: {
 * //               Bucket: "STRING_VALUE", // required
 * //               Key: "STRING_VALUE",
 * //               BucketOwner: "STRING_VALUE",
 * //             },
 * //             TableName: "STRING_VALUE", // required
 * //           },
 * //           Overwrite: true || false,
 * //         },
 * //       ],
 * //       DatabaseOutputs: [ // DatabaseOutputList
 * //         { // DatabaseOutput
 * //           GlueConnectionName: "STRING_VALUE", // required
 * //           DatabaseOptions: {
 * //             TempDirectory: {
 * //               Bucket: "STRING_VALUE", // required
 * //               Key: "STRING_VALUE",
 * //               BucketOwner: "STRING_VALUE",
 * //             },
 * //             TableName: "STRING_VALUE", // required
 * //           },
 * //           DatabaseOutputMode: "NEW_TABLE",
 * //         },
 * //       ],
 * //       ProjectName: "STRING_VALUE",
 * //       RecipeReference: { // RecipeReference
 * //         Name: "STRING_VALUE", // required
 * //         RecipeVersion: "STRING_VALUE",
 * //       },
 * //       ResourceArn: "STRING_VALUE",
 * //       RoleArn: "STRING_VALUE",
 * //       Timeout: Number("int"),
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       JobSample: { // JobSample
 * //         Mode: "FULL_DATASET" || "CUSTOM_ROWS",
 * //         Size: Number("long"),
 * //       },
 * //       ValidationConfigurations: [ // ValidationConfigurationList
 * //         { // ValidationConfiguration
 * //           RulesetArn: "STRING_VALUE", // required
 * //           ValidationMode: "CHECK_ALL",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListJobsCommandInput - {@link ListJobsCommandInput}
 * @returns {@link ListJobsCommandOutput}
 * @see {@link ListJobsCommandInput} for command's `input` shape.
 * @see {@link ListJobsCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters for this request failed validation.</p>
 *
 * @throws {@link DataBrewServiceException}
 * <p>Base exception class for all service exceptions from DataBrew service.</p>
 *
 */
export class ListJobsCommand extends $Command<
  ListJobsCommandInput,
  ListJobsCommandOutput,
  DataBrewClientResolvedConfig
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
  constructor(readonly input: ListJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataBrewClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListJobsCommandInput, ListJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListJobsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "ListJobsCommand";
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
  private serialize(input: ListJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListJobsCommandOutput> {
    return de_ListJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
