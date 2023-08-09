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
import { CreateDatasetRequest, CreateDatasetResponse } from "../models/models_0";
import { de_CreateDatasetCommand, se_CreateDatasetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateDatasetCommand}.
 */
export interface CreateDatasetCommandInput extends CreateDatasetRequest {}
/**
 * @public
 *
 * The output of {@link CreateDatasetCommand}.
 */
export interface CreateDatasetCommandOutput extends CreateDatasetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new DataBrew dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, CreateDatasetCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, CreateDatasetCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const input = { // CreateDatasetRequest
 *   Name: "STRING_VALUE", // required
 *   Format: "CSV" || "JSON" || "PARQUET" || "EXCEL" || "ORC",
 *   FormatOptions: { // FormatOptions
 *     Json: { // JsonOptions
 *       MultiLine: true || false,
 *     },
 *     Excel: { // ExcelOptions
 *       SheetNames: [ // SheetNameList
 *         "STRING_VALUE",
 *       ],
 *       SheetIndexes: [ // SheetIndexList
 *         Number("int"),
 *       ],
 *       HeaderRow: true || false,
 *     },
 *     Csv: { // CsvOptions
 *       Delimiter: "STRING_VALUE",
 *       HeaderRow: true || false,
 *     },
 *   },
 *   Input: { // Input
 *     S3InputDefinition: { // S3Location
 *       Bucket: "STRING_VALUE", // required
 *       Key: "STRING_VALUE",
 *       BucketOwner: "STRING_VALUE",
 *     },
 *     DataCatalogInputDefinition: { // DataCatalogInputDefinition
 *       CatalogId: "STRING_VALUE",
 *       DatabaseName: "STRING_VALUE", // required
 *       TableName: "STRING_VALUE", // required
 *       TempDirectory: {
 *         Bucket: "STRING_VALUE", // required
 *         Key: "STRING_VALUE",
 *         BucketOwner: "STRING_VALUE",
 *       },
 *     },
 *     DatabaseInputDefinition: { // DatabaseInputDefinition
 *       GlueConnectionName: "STRING_VALUE", // required
 *       DatabaseTableName: "STRING_VALUE",
 *       TempDirectory: {
 *         Bucket: "STRING_VALUE", // required
 *         Key: "STRING_VALUE",
 *         BucketOwner: "STRING_VALUE",
 *       },
 *       QueryString: "STRING_VALUE",
 *     },
 *     Metadata: { // Metadata
 *       SourceArn: "STRING_VALUE",
 *     },
 *   },
 *   PathOptions: { // PathOptions
 *     LastModifiedDateCondition: { // FilterExpression
 *       Expression: "STRING_VALUE", // required
 *       ValuesMap: { // ValuesMap // required
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *     FilesLimit: { // FilesLimit
 *       MaxFiles: Number("int"), // required
 *       OrderedBy: "LAST_MODIFIED_DATE",
 *       Order: "DESCENDING" || "ASCENDING",
 *     },
 *     Parameters: { // PathParametersMap
 *       "<keys>": { // DatasetParameter
 *         Name: "STRING_VALUE", // required
 *         Type: "Datetime" || "Number" || "String", // required
 *         DatetimeOptions: { // DatetimeOptions
 *           Format: "STRING_VALUE", // required
 *           TimezoneOffset: "STRING_VALUE",
 *           LocaleCode: "STRING_VALUE",
 *         },
 *         CreateColumn: true || false,
 *         Filter: {
 *           Expression: "STRING_VALUE", // required
 *           ValuesMap: { // required
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *       },
 *     },
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateDatasetCommand(input);
 * const response = await client.send(command);
 * // { // CreateDatasetResponse
 * //   Name: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateDatasetCommandInput - {@link CreateDatasetCommandInput}
 * @returns {@link CreateDatasetCommandOutput}
 * @see {@link CreateDatasetCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to the specified resource was denied.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service quota is exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters for this request failed validation.</p>
 *
 * @throws {@link DataBrewServiceException}
 * <p>Base exception class for all service exceptions from DataBrew service.</p>
 *
 */
export class CreateDatasetCommand extends $Command<
  CreateDatasetCommandInput,
  CreateDatasetCommandOutput,
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
  constructor(readonly input: CreateDatasetCommandInput) {
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
  ): Handler<CreateDatasetCommandInput, CreateDatasetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateDatasetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "CreateDatasetCommand";
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
  private serialize(input: CreateDatasetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDatasetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDatasetCommandOutput> {
    return de_CreateDatasetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
