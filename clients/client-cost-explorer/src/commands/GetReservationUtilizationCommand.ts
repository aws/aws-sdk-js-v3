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

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import {
  GetReservationUtilizationRequest,
  GetReservationUtilizationRequestFilterSensitiveLog,
  GetReservationUtilizationResponse,
  GetReservationUtilizationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetReservationUtilizationCommand,
  serializeAws_json1_1GetReservationUtilizationCommand,
} from "../protocols/Aws_json1_1";

export interface GetReservationUtilizationCommandInput extends GetReservationUtilizationRequest {}
export interface GetReservationUtilizationCommandOutput extends GetReservationUtilizationResponse, __MetadataBearer {}

/**
 * <p>Retrieves the reservation utilization for your account. Management account in an
 *       organization have access to member accounts. You can filter data by dimensions in a time
 *       period. You can use <code>GetDimensionValues</code> to determine the possible dimension
 *       values. Currently, you can group only by <code>SUBSCRIPTION_ID</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetReservationUtilizationCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetReservationUtilizationCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetReservationUtilizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetReservationUtilizationCommandInput} for command's `input` shape.
 * @see {@link GetReservationUtilizationCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 */
export class GetReservationUtilizationCommand extends $Command<
  GetReservationUtilizationCommandInput,
  GetReservationUtilizationCommandOutput,
  CostExplorerClientResolvedConfig
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

  constructor(readonly input: GetReservationUtilizationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostExplorerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetReservationUtilizationCommandInput, GetReservationUtilizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetReservationUtilizationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "GetReservationUtilizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetReservationUtilizationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetReservationUtilizationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetReservationUtilizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetReservationUtilizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetReservationUtilizationCommandOutput> {
    return deserializeAws_json1_1GetReservationUtilizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
