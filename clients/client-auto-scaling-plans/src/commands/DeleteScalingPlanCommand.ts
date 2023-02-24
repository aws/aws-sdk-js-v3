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

import { AutoScalingPlansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingPlansClient";
import {
  DeleteScalingPlanRequest,
  DeleteScalingPlanRequestFilterSensitiveLog,
  DeleteScalingPlanResponse,
  DeleteScalingPlanResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteScalingPlanCommand,
  serializeAws_json1_1DeleteScalingPlanCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteScalingPlanCommandInput extends DeleteScalingPlanRequest {}
export interface DeleteScalingPlanCommandOutput extends DeleteScalingPlanResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified scaling plan.</p>
 *          <p>Deleting a scaling plan deletes the underlying <a>ScalingInstruction</a> for
 *          all of the scalable resources that are covered by the plan.</p>
 *          <p>If the plan has launched resources or has scaling activities in progress, you must
 *          delete those resources separately.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingPlansClient, DeleteScalingPlanCommand } from "@aws-sdk/client-auto-scaling-plans"; // ES Modules import
 * // const { AutoScalingPlansClient, DeleteScalingPlanCommand } = require("@aws-sdk/client-auto-scaling-plans"); // CommonJS import
 * const client = new AutoScalingPlansClient(config);
 * const command = new DeleteScalingPlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteScalingPlanCommandInput} for command's `input` shape.
 * @see {@link DeleteScalingPlanCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingPlansClientResolvedConfig | config} for AutoScalingPlansClient's `config` shape.
 *
 */
export class DeleteScalingPlanCommand extends $Command<
  DeleteScalingPlanCommandInput,
  DeleteScalingPlanCommandOutput,
  AutoScalingPlansClientResolvedConfig
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

  constructor(readonly input: DeleteScalingPlanCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingPlansClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteScalingPlanCommandInput, DeleteScalingPlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteScalingPlanCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingPlansClient";
    const commandName = "DeleteScalingPlanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteScalingPlanRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteScalingPlanResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteScalingPlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteScalingPlanCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteScalingPlanCommandOutput> {
    return deserializeAws_json1_1DeleteScalingPlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
