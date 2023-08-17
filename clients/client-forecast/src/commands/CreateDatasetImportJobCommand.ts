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

import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import {
  CreateDatasetImportJobRequest,
  CreateDatasetImportJobRequestFilterSensitiveLog,
  CreateDatasetImportJobResponse,
} from "../models/models_0";
import { de_CreateDatasetImportJobCommand, se_CreateDatasetImportJobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateDatasetImportJobCommand}.
 */
export interface CreateDatasetImportJobCommandInput extends CreateDatasetImportJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateDatasetImportJobCommand}.
 */
export interface CreateDatasetImportJobCommandOutput extends CreateDatasetImportJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Imports your training data to an Amazon Forecast dataset. You provide the location of your
 *       training data in an Amazon Simple Storage Service (Amazon S3) bucket and the Amazon Resource Name (ARN) of the dataset
 *       that you want to import the data to.</p>
 *          <p>You must specify a <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DataSource.html">DataSource</a> object that includes an
 *       Identity and Access Management (IAM) role that Amazon Forecast can assume to access the data, as Amazon Forecast makes a copy
 *       of your data and processes it in an internal Amazon Web Services system. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/aws-forecast-iam-roles.html">Set up
 *         permissions</a>.</p>
 *          <p>The training data must be in CSV or Parquet format. The delimiter must be a comma (,).</p>
 *          <p>You can specify the path to a specific file, the S3 bucket, or to a folder in the S3
 *       bucket. For the latter two cases, Amazon Forecast imports all files up to the limit of 10,000
 *       files.</p>
 *          <p>Because dataset imports are not aggregated, your most recent dataset import is the one
 *       that is used when training a predictor or generating a forecast. Make sure that your most
 *       recent dataset import contains all of the data you want to model off of, and not just the new
 *       data collected since the previous import.</p>
 *          <p>To get a list of all your dataset import jobs, filtered by specified criteria, use the
 *         <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetImportJobs.html">ListDatasetImportJobs</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, CreateDatasetImportJobCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, CreateDatasetImportJobCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const input = { // CreateDatasetImportJobRequest
 *   DatasetImportJobName: "STRING_VALUE", // required
 *   DatasetArn: "STRING_VALUE", // required
 *   DataSource: { // DataSource
 *     S3Config: { // S3Config
 *       Path: "STRING_VALUE", // required
 *       RoleArn: "STRING_VALUE", // required
 *       KMSKeyArn: "STRING_VALUE",
 *     },
 *   },
 *   TimestampFormat: "STRING_VALUE",
 *   TimeZone: "STRING_VALUE",
 *   UseGeolocationForTimeZone: true || false,
 *   GeolocationFormat: "STRING_VALUE",
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   Format: "STRING_VALUE",
 *   ImportMode: "FULL" || "INCREMENTAL",
 * };
 * const command = new CreateDatasetImportJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateDatasetImportJobResponse
 * //   DatasetImportJobArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDatasetImportJobCommandInput - {@link CreateDatasetImportJobCommandInput}
 * @returns {@link CreateDatasetImportJobCommandOutput}
 * @see {@link CreateDatasetImportJobCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetImportJobCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The limit on the number of resources per account has been exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>There is already a resource with this name. Try again with a different name.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try
 *       again.</p>
 *
 * @throws {@link ForecastServiceException}
 * <p>Base exception class for all service exceptions from Forecast service.</p>
 *
 */
export class CreateDatasetImportJobCommand extends $Command<
  CreateDatasetImportJobCommandInput,
  CreateDatasetImportJobCommandOutput,
  ForecastClientResolvedConfig
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
  constructor(readonly input: CreateDatasetImportJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ForecastClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDatasetImportJobCommandInput, CreateDatasetImportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDatasetImportJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "CreateDatasetImportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDatasetImportJobRequestFilterSensitiveLog,
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
  private serialize(input: CreateDatasetImportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDatasetImportJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDatasetImportJobCommandOutput> {
    return de_CreateDatasetImportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
