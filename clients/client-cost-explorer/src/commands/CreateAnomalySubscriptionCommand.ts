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
  CreateAnomalySubscriptionRequest,
  CreateAnomalySubscriptionRequestFilterSensitiveLog,
  CreateAnomalySubscriptionResponse,
  CreateAnomalySubscriptionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateAnomalySubscriptionCommand,
  serializeAws_json1_1CreateAnomalySubscriptionCommand,
} from "../protocols/Aws_json1_1";

export interface CreateAnomalySubscriptionCommandInput extends CreateAnomalySubscriptionRequest {}
export interface CreateAnomalySubscriptionCommandOutput extends CreateAnomalySubscriptionResponse, __MetadataBearer {}

/**
 * <p>Adds an alert subscription to a cost anomaly detection monitor. You can use each
 *       subscription to define subscribers with email or SNS notifications. Email subscribers can set
 *       an absolute or percentage threshold and a time frequency for receiving notifications. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, CreateAnomalySubscriptionCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, CreateAnomalySubscriptionCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new CreateAnomalySubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAnomalySubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateAnomalySubscriptionCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 */
export class CreateAnomalySubscriptionCommand extends $Command<
  CreateAnomalySubscriptionCommandInput,
  CreateAnomalySubscriptionCommandOutput,
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

  constructor(readonly input: CreateAnomalySubscriptionCommandInput) {
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
  ): Handler<CreateAnomalySubscriptionCommandInput, CreateAnomalySubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAnomalySubscriptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "CreateAnomalySubscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAnomalySubscriptionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateAnomalySubscriptionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAnomalySubscriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateAnomalySubscriptionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateAnomalySubscriptionCommandOutput> {
    return deserializeAws_json1_1CreateAnomalySubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
