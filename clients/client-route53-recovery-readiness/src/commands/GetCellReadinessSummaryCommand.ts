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
  GetCellReadinessSummaryRequest,
  GetCellReadinessSummaryRequestFilterSensitiveLog,
  GetCellReadinessSummaryResponse,
  GetCellReadinessSummaryResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetCellReadinessSummaryCommand,
  serializeAws_restJson1GetCellReadinessSummaryCommand,
} from "../protocols/Aws_restJson1";
import {
  Route53RecoveryReadinessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryReadinessClient";

export interface GetCellReadinessSummaryCommandInput extends GetCellReadinessSummaryRequest {}
export interface GetCellReadinessSummaryCommandOutput extends GetCellReadinessSummaryResponse, __MetadataBearer {}

/**
 * <p>Gets readiness for a cell. Aggregates the readiness of all the resources that are associated with the cell into a single value.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, GetCellReadinessSummaryCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, GetCellReadinessSummaryCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * const client = new Route53RecoveryReadinessClient(config);
 * const command = new GetCellReadinessSummaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCellReadinessSummaryCommandInput} for command's `input` shape.
 * @see {@link GetCellReadinessSummaryCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryReadinessClientResolvedConfig | config} for Route53RecoveryReadinessClient's `config` shape.
 *
 */
export class GetCellReadinessSummaryCommand extends $Command<
  GetCellReadinessSummaryCommandInput,
  GetCellReadinessSummaryCommandOutput,
  Route53RecoveryReadinessClientResolvedConfig
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

  constructor(readonly input: GetCellReadinessSummaryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53RecoveryReadinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCellReadinessSummaryCommandInput, GetCellReadinessSummaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCellReadinessSummaryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53RecoveryReadinessClient";
    const commandName = "GetCellReadinessSummaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCellReadinessSummaryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetCellReadinessSummaryResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCellReadinessSummaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetCellReadinessSummaryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCellReadinessSummaryCommandOutput> {
    return deserializeAws_restJson1GetCellReadinessSummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
