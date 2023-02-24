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
  GetReservationPurchaseRecommendationRequest,
  GetReservationPurchaseRecommendationRequestFilterSensitiveLog,
  GetReservationPurchaseRecommendationResponse,
  GetReservationPurchaseRecommendationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetReservationPurchaseRecommendationCommand,
  serializeAws_json1_1GetReservationPurchaseRecommendationCommand,
} from "../protocols/Aws_json1_1";

export interface GetReservationPurchaseRecommendationCommandInput extends GetReservationPurchaseRecommendationRequest {}
export interface GetReservationPurchaseRecommendationCommandOutput
  extends GetReservationPurchaseRecommendationResponse,
    __MetadataBearer {}

/**
 * <p>Gets recommendations for reservation purchases. These recommendations might help you to
 *       reduce your costs. Reservations provide a discounted hourly rate (up to 75%) compared to
 *       On-Demand pricing.</p>
 *          <p>Amazon Web Services generates your recommendations by identifying your On-Demand usage
 *       during a specific time period and collecting your usage into categories that are eligible for
 *       a reservation. After Amazon Web Services has these categories, it simulates every combination
 *       of reservations in each category of usage to identify the best number of each type of Reserved
 *       Instance (RI) to purchase to maximize your estimated savings. </p>
 *          <p>For example, Amazon Web Services automatically aggregates your Amazon EC2 Linux, shared
 *       tenancy, and c4 family usage in the US West (Oregon) Region and recommends that you buy
 *       size-flexible regional reservations to apply to the c4 family usage. Amazon Web Services
 *       recommends the smallest size instance in an instance family. This makes it easier to purchase
 *       a size-flexible Reserved Instance (RI). Amazon Web Services also shows the equal number of
 *       normalized units. This way, you can purchase any instance size that you want. For this
 *       example, your RI recommendation is for <code>c4.large</code> because that is the smallest size
 *       instance in the c4 instance family.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetReservationPurchaseRecommendationCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetReservationPurchaseRecommendationCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetReservationPurchaseRecommendationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetReservationPurchaseRecommendationCommandInput} for command's `input` shape.
 * @see {@link GetReservationPurchaseRecommendationCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 */
export class GetReservationPurchaseRecommendationCommand extends $Command<
  GetReservationPurchaseRecommendationCommandInput,
  GetReservationPurchaseRecommendationCommandOutput,
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

  constructor(readonly input: GetReservationPurchaseRecommendationCommandInput) {
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
  ): Handler<GetReservationPurchaseRecommendationCommandInput, GetReservationPurchaseRecommendationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetReservationPurchaseRecommendationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "GetReservationPurchaseRecommendationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetReservationPurchaseRecommendationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetReservationPurchaseRecommendationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetReservationPurchaseRecommendationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetReservationPurchaseRecommendationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetReservationPurchaseRecommendationCommandOutput> {
    return deserializeAws_json1_1GetReservationPurchaseRecommendationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
