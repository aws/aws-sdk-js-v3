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

import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import {
  ListBulkImportJobsRequest,
  ListBulkImportJobsRequestFilterSensitiveLog,
  ListBulkImportJobsResponse,
  ListBulkImportJobsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListBulkImportJobsCommand,
  serializeAws_restJson1ListBulkImportJobsCommand,
} from "../protocols/Aws_restJson1";

export interface ListBulkImportJobsCommandInput extends ListBulkImportJobsRequest {}
export interface ListBulkImportJobsCommandOutput extends ListBulkImportJobsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of bulk import job requests. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/ListBulkImportJobs.html">List bulk
 *         import jobs (CLI)</a> in the <i>IoT SiteWise User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListBulkImportJobsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListBulkImportJobsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new ListBulkImportJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBulkImportJobsCommandInput} for command's `input` shape.
 * @see {@link ListBulkImportJobsCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 */
export class ListBulkImportJobsCommand extends $Command<
  ListBulkImportJobsCommandInput,
  ListBulkImportJobsCommandOutput,
  IoTSiteWiseClientResolvedConfig
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

  constructor(readonly input: ListBulkImportJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTSiteWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBulkImportJobsCommandInput, ListBulkImportJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListBulkImportJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "ListBulkImportJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBulkImportJobsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListBulkImportJobsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListBulkImportJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListBulkImportJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBulkImportJobsCommandOutput> {
    return deserializeAws_restJson1ListBulkImportJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
