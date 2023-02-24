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
  CreateBulkImportJobRequest,
  CreateBulkImportJobRequestFilterSensitiveLog,
  CreateBulkImportJobResponse,
  CreateBulkImportJobResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateBulkImportJobCommand,
  serializeAws_restJson1CreateBulkImportJobCommand,
} from "../protocols/Aws_restJson1";

export interface CreateBulkImportJobCommandInput extends CreateBulkImportJobRequest {}
export interface CreateBulkImportJobCommandOutput extends CreateBulkImportJobResponse, __MetadataBearer {}

/**
 * <p>Defines a job to ingest data to IoT SiteWise from Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/CreateBulkImportJob.html">Create a
 *         bulk import job (CLI)</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p>
 *          <important>
 *             <p>You must enable IoT SiteWise to export data to Amazon S3 before you create a bulk import job. For
 *         more information about how to configure storage settings, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_PutStorageConfiguration.html">PutStorageConfiguration</a>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, CreateBulkImportJobCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, CreateBulkImportJobCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new CreateBulkImportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBulkImportJobCommandInput} for command's `input` shape.
 * @see {@link CreateBulkImportJobCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 */
export class CreateBulkImportJobCommand extends $Command<
  CreateBulkImportJobCommandInput,
  CreateBulkImportJobCommandOutput,
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

  constructor(readonly input: CreateBulkImportJobCommandInput) {
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
  ): Handler<CreateBulkImportJobCommandInput, CreateBulkImportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateBulkImportJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "CreateBulkImportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateBulkImportJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateBulkImportJobResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateBulkImportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateBulkImportJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateBulkImportJobCommandOutput> {
    return deserializeAws_restJson1CreateBulkImportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
