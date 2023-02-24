// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import {
  ListDatasetImportJobsRequest,
  ListDatasetImportJobsRequestFilterSensitiveLog,
  ListDatasetImportJobsResponse,
  ListDatasetImportJobsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListDatasetImportJobsCommand,
  serializeAws_json1_1ListDatasetImportJobsCommand,
} from "../protocols/Aws_json1_1";

export interface ListDatasetImportJobsCommandInput extends ListDatasetImportJobsRequest {}
export interface ListDatasetImportJobsCommandOutput extends ListDatasetImportJobsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of dataset import jobs created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a>
 *       operation. For each import job, this operation returns a summary of its properties, including
 *       its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the
 *       ARN with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a>
 *       operation. You can filter the list by providing an array of <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_Filter.html">Filter</a> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListDatasetImportJobsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListDatasetImportJobsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new ListDatasetImportJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDatasetImportJobsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetImportJobsCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 */
export class ListDatasetImportJobsCommand extends $Command<
  ListDatasetImportJobsCommandInput,
  ListDatasetImportJobsCommandOutput,
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

  constructor(readonly input: ListDatasetImportJobsCommandInput) {
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
  ): Handler<ListDatasetImportJobsCommandInput, ListDatasetImportJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDatasetImportJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "ListDatasetImportJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDatasetImportJobsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListDatasetImportJobsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDatasetImportJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListDatasetImportJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDatasetImportJobsCommandOutput> {
    return deserializeAws_json1_1ListDatasetImportJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
