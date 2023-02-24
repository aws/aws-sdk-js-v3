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

import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import {
  GetUsageStatisticsRequest,
  GetUsageStatisticsRequestFilterSensitiveLog,
  GetUsageStatisticsResponse,
  GetUsageStatisticsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetUsageStatisticsCommand,
  serializeAws_restJson1GetUsageStatisticsCommand,
} from "../protocols/Aws_restJson1";

export interface GetUsageStatisticsCommandInput extends GetUsageStatisticsRequest {}
export interface GetUsageStatisticsCommandOutput extends GetUsageStatisticsResponse, __MetadataBearer {}

/**
 * <p>Retrieves (queries) quotas and aggregated usage data for one or more accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetUsageStatisticsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetUsageStatisticsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new GetUsageStatisticsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUsageStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetUsageStatisticsCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 */
export class GetUsageStatisticsCommand extends $Command<
  GetUsageStatisticsCommandInput,
  GetUsageStatisticsCommandOutput,
  Macie2ClientResolvedConfig
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

  constructor(readonly input: GetUsageStatisticsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetUsageStatisticsCommandInput, GetUsageStatisticsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetUsageStatisticsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "GetUsageStatisticsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetUsageStatisticsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetUsageStatisticsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetUsageStatisticsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetUsageStatisticsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetUsageStatisticsCommandOutput> {
    return deserializeAws_restJson1GetUsageStatisticsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
