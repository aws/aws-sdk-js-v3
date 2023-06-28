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
import { ListJobRunsRequest, ListJobRunsResponse } from "../models/models_0";
import { de_ListJobRunsCommand, se_ListJobRunsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListJobRunsCommand}.
 */
export interface ListJobRunsCommandInput extends ListJobRunsRequest {}
/**
 * @public
 *
 * The output of {@link ListJobRunsCommand}.
 */
export interface ListJobRunsCommandOutput extends ListJobRunsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all of the previous runs of a particular DataBrew job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, ListJobRunsCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, ListJobRunsCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const input = { // ListJobRunsRequest
 *   Name: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListJobRunsCommand(input);
 * const response = await client.send(command);
 * // { // ListJobRunsResponse
 * //   JobRuns: [ // JobRunList // required
 * //     { // JobRun
 * //       Attempt: Number("int"),
 * //       CompletedOn: new Date("TIMESTAMP"),
 * //       DatasetName: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //       ExecutionTime: Number("int"),
 * //       JobName: "STRING_VALUE",
 * //       RunId: "STRING_VALUE",
 * //       State: "STARTING" || "RUNNING" || "STOPPING" || "STOPPED" || "SUCCEEDED" || "FAILED" || "TIMEOUT",
 * //       LogSubscription: "ENABLE" || "DISABLE",
 * //       LogGroupName: "STRING_VALUE",
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
 * //       RecipeReference: { // RecipeReference
 * //         Name: "STRING_VALUE", // required
 * //         RecipeVersion: "STRING_VALUE",
 * //       },
 * //       StartedBy: "STRING_VALUE",
 * //       StartedOn: new Date("TIMESTAMP"),
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
 * @param ListJobRunsCommandInput - {@link ListJobRunsCommandInput}
 * @returns {@link ListJobRunsCommandOutput}
 * @see {@link ListJobRunsCommandInput} for command's `input` shape.
 * @see {@link ListJobRunsCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters for this request failed validation.</p>
 *
 * @throws {@link DataBrewServiceException}
 * <p>Base exception class for all service exceptions from DataBrew service.</p>
 *
 */
export class ListJobRunsCommand extends $Command<
  ListJobRunsCommandInput,
  ListJobRunsCommandOutput,
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
  constructor(readonly input: ListJobRunsCommandInput) {
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
  ): Handler<ListJobRunsCommandInput, ListJobRunsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListJobRunsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "ListJobRunsCommand";
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
  private serialize(input: ListJobRunsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListJobRunsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListJobRunsCommandOutput> {
    return de_ListJobRunsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
