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
  UpdateAnomalySubscriptionRequest,
  UpdateAnomalySubscriptionRequestFilterSensitiveLog,
  UpdateAnomalySubscriptionResponse,
  UpdateAnomalySubscriptionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateAnomalySubscriptionCommand,
  serializeAws_json1_1UpdateAnomalySubscriptionCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateAnomalySubscriptionCommandInput extends UpdateAnomalySubscriptionRequest {}
export interface UpdateAnomalySubscriptionCommandOutput extends UpdateAnomalySubscriptionResponse, __MetadataBearer {}

/**
 * <p>Updates an existing cost anomaly monitor subscription. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, UpdateAnomalySubscriptionCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, UpdateAnomalySubscriptionCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new UpdateAnomalySubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAnomalySubscriptionCommandInput} for command's `input` shape.
 * @see {@link UpdateAnomalySubscriptionCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 */
export class UpdateAnomalySubscriptionCommand extends $Command<
  UpdateAnomalySubscriptionCommandInput,
  UpdateAnomalySubscriptionCommandOutput,
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

  constructor(readonly input: UpdateAnomalySubscriptionCommandInput) {
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
  ): Handler<UpdateAnomalySubscriptionCommandInput, UpdateAnomalySubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateAnomalySubscriptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "UpdateAnomalySubscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAnomalySubscriptionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateAnomalySubscriptionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateAnomalySubscriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateAnomalySubscriptionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateAnomalySubscriptionCommandOutput> {
    return deserializeAws_json1_1UpdateAnomalySubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
