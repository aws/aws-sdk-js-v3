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

import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import {
  ListDataIngestionJobsRequest,
  ListDataIngestionJobsRequestFilterSensitiveLog,
  ListDataIngestionJobsResponse,
  ListDataIngestionJobsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0ListDataIngestionJobsCommand,
  serializeAws_json1_0ListDataIngestionJobsCommand,
} from "../protocols/Aws_json1_0";

export interface ListDataIngestionJobsCommandInput extends ListDataIngestionJobsRequest {}
export interface ListDataIngestionJobsCommandOutput extends ListDataIngestionJobsResponse, __MetadataBearer {}

/**
 * <p>Provides a list of all data ingestion jobs, including dataset name and ARN, S3 location
 *          of the input data, status, and so on. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, ListDataIngestionJobsCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, ListDataIngestionJobsCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new ListDataIngestionJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDataIngestionJobsCommandInput} for command's `input` shape.
 * @see {@link ListDataIngestionJobsCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for LookoutEquipmentClient's `config` shape.
 *
 */
export class ListDataIngestionJobsCommand extends $Command<
  ListDataIngestionJobsCommandInput,
  ListDataIngestionJobsCommandOutput,
  LookoutEquipmentClientResolvedConfig
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

  constructor(readonly input: ListDataIngestionJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutEquipmentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDataIngestionJobsCommandInput, ListDataIngestionJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDataIngestionJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutEquipmentClient";
    const commandName = "ListDataIngestionJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDataIngestionJobsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListDataIngestionJobsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDataIngestionJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListDataIngestionJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDataIngestionJobsCommandOutput> {
    return deserializeAws_json1_0ListDataIngestionJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
