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

import {
  ApplicationCostProfilerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationCostProfilerClient";
import {
  ImportApplicationUsageRequest,
  ImportApplicationUsageRequestFilterSensitiveLog,
  ImportApplicationUsageResult,
  ImportApplicationUsageResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ImportApplicationUsageCommand,
  serializeAws_restJson1ImportApplicationUsageCommand,
} from "../protocols/Aws_restJson1";

export interface ImportApplicationUsageCommandInput extends ImportApplicationUsageRequest {}
export interface ImportApplicationUsageCommandOutput extends ImportApplicationUsageResult, __MetadataBearer {}

/**
 * <p>Ingests application usage data from Amazon Simple Storage Service (Amazon S3).</p>
 *          <p>The data must already exist in the S3 location. As part of the action, AWS Application Cost Profiler
 *       copies the object from your S3 bucket to an S3 bucket owned by Amazon for processing
 *       asynchronously.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationCostProfilerClient, ImportApplicationUsageCommand } from "@aws-sdk/client-applicationcostprofiler"; // ES Modules import
 * // const { ApplicationCostProfilerClient, ImportApplicationUsageCommand } = require("@aws-sdk/client-applicationcostprofiler"); // CommonJS import
 * const client = new ApplicationCostProfilerClient(config);
 * const command = new ImportApplicationUsageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportApplicationUsageCommandInput} for command's `input` shape.
 * @see {@link ImportApplicationUsageCommandOutput} for command's `response` shape.
 * @see {@link ApplicationCostProfilerClientResolvedConfig | config} for ApplicationCostProfilerClient's `config` shape.
 *
 */
export class ImportApplicationUsageCommand extends $Command<
  ImportApplicationUsageCommandInput,
  ImportApplicationUsageCommandOutput,
  ApplicationCostProfilerClientResolvedConfig
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

  constructor(readonly input: ImportApplicationUsageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationCostProfilerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportApplicationUsageCommandInput, ImportApplicationUsageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ImportApplicationUsageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationCostProfilerClient";
    const commandName = "ImportApplicationUsageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportApplicationUsageRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ImportApplicationUsageResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportApplicationUsageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ImportApplicationUsageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportApplicationUsageCommandOutput> {
    return deserializeAws_restJson1ImportApplicationUsageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
