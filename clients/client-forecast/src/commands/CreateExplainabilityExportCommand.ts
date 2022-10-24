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
  CreateExplainabilityExportRequest,
  CreateExplainabilityExportRequestFilterSensitiveLog,
  CreateExplainabilityExportResponse,
  CreateExplainabilityExportResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateExplainabilityExportCommand,
  serializeAws_json1_1CreateExplainabilityExportCommand,
} from "../protocols/Aws_json1_1";

export interface CreateExplainabilityExportCommandInput extends CreateExplainabilityExportRequest {}
export interface CreateExplainabilityExportCommandOutput extends CreateExplainabilityExportResponse, __MetadataBearer {}

/**
 * <p>Exports an Explainability resource created by the <a>CreateExplainability</a> operation. Exported files are exported to an Amazon Simple Storage Service (Amazon
 *             S3) bucket.</p>
 *         <p>You must specify a <a>DataDestination</a> object that includes an Amazon S3
 *             bucket and an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3
 *             bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p>
 *         <note>
 *             <p>The <code>Status</code> of the export job must be <code>ACTIVE</code> before you
 *                 can access the export in your Amazon S3 bucket. To get the status, use the <a>DescribeExplainabilityExport</a> operation.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, CreateExplainabilityExportCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, CreateExplainabilityExportCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new CreateExplainabilityExportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateExplainabilityExportCommandInput} for command's `input` shape.
 * @see {@link CreateExplainabilityExportCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 */
export class CreateExplainabilityExportCommand extends $Command<
  CreateExplainabilityExportCommandInput,
  CreateExplainabilityExportCommandOutput,
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

  constructor(readonly input: CreateExplainabilityExportCommandInput) {
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
  ): Handler<CreateExplainabilityExportCommandInput, CreateExplainabilityExportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateExplainabilityExportCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "CreateExplainabilityExportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateExplainabilityExportRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateExplainabilityExportResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateExplainabilityExportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateExplainabilityExportCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateExplainabilityExportCommandOutput> {
    return deserializeAws_json1_1CreateExplainabilityExportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
