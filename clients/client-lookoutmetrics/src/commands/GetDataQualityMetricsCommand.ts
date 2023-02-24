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

import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import {
  GetDataQualityMetricsRequest,
  GetDataQualityMetricsRequestFilterSensitiveLog,
  GetDataQualityMetricsResponse,
  GetDataQualityMetricsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetDataQualityMetricsCommand,
  serializeAws_restJson1GetDataQualityMetricsCommand,
} from "../protocols/Aws_restJson1";

export interface GetDataQualityMetricsCommandInput extends GetDataQualityMetricsRequest {}
export interface GetDataQualityMetricsCommandOutput extends GetDataQualityMetricsResponse, __MetadataBearer {}

/**
 * <p>Returns details about the requested data quality metrics.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, GetDataQualityMetricsCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, GetDataQualityMetricsCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new GetDataQualityMetricsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDataQualityMetricsCommandInput} for command's `input` shape.
 * @see {@link GetDataQualityMetricsCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for LookoutMetricsClient's `config` shape.
 *
 */
export class GetDataQualityMetricsCommand extends $Command<
  GetDataQualityMetricsCommandInput,
  GetDataQualityMetricsCommandOutput,
  LookoutMetricsClientResolvedConfig
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

  constructor(readonly input: GetDataQualityMetricsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutMetricsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDataQualityMetricsCommandInput, GetDataQualityMetricsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDataQualityMetricsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutMetricsClient";
    const commandName = "GetDataQualityMetricsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDataQualityMetricsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetDataQualityMetricsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDataQualityMetricsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDataQualityMetricsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDataQualityMetricsCommandOutput> {
    return deserializeAws_restJson1GetDataQualityMetricsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
