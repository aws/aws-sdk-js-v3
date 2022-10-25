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
  GetAnomalyGroupRequest,
  GetAnomalyGroupRequestFilterSensitiveLog,
  GetAnomalyGroupResponse,
  GetAnomalyGroupResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetAnomalyGroupCommand,
  serializeAws_restJson1GetAnomalyGroupCommand,
} from "../protocols/Aws_restJson1";

export interface GetAnomalyGroupCommandInput extends GetAnomalyGroupRequest {}
export interface GetAnomalyGroupCommandOutput extends GetAnomalyGroupResponse, __MetadataBearer {}

/**
 * <p>Returns details about a group of anomalous metrics.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, GetAnomalyGroupCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, GetAnomalyGroupCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new GetAnomalyGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAnomalyGroupCommandInput} for command's `input` shape.
 * @see {@link GetAnomalyGroupCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for LookoutMetricsClient's `config` shape.
 *
 */
export class GetAnomalyGroupCommand extends $Command<
  GetAnomalyGroupCommandInput,
  GetAnomalyGroupCommandOutput,
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

  constructor(readonly input: GetAnomalyGroupCommandInput) {
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
  ): Handler<GetAnomalyGroupCommandInput, GetAnomalyGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAnomalyGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutMetricsClient";
    const commandName = "GetAnomalyGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAnomalyGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetAnomalyGroupResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAnomalyGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetAnomalyGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAnomalyGroupCommandOutput> {
    return deserializeAws_restJson1GetAnomalyGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
