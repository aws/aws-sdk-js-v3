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
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import {
  ModifyTargetGroupAttributesInput,
  ModifyTargetGroupAttributesInputFilterSensitiveLog,
  ModifyTargetGroupAttributesOutput,
  ModifyTargetGroupAttributesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryModifyTargetGroupAttributesCommand,
  serializeAws_queryModifyTargetGroupAttributesCommand,
} from "../protocols/Aws_query";

export interface ModifyTargetGroupAttributesCommandInput extends ModifyTargetGroupAttributesInput {}
export interface ModifyTargetGroupAttributesCommandOutput extends ModifyTargetGroupAttributesOutput, __MetadataBearer {}

/**
 * <p>Modifies the specified attributes of the specified target group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, ModifyTargetGroupAttributesCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, ModifyTargetGroupAttributesCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new ModifyTargetGroupAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyTargetGroupAttributesCommandInput} for command's `input` shape.
 * @see {@link ModifyTargetGroupAttributesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 */
export class ModifyTargetGroupAttributesCommand extends $Command<
  ModifyTargetGroupAttributesCommandInput,
  ModifyTargetGroupAttributesCommandOutput,
  ElasticLoadBalancingV2ClientResolvedConfig
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

  constructor(readonly input: ModifyTargetGroupAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyTargetGroupAttributesCommandInput, ModifyTargetGroupAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyTargetGroupAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "ModifyTargetGroupAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyTargetGroupAttributesInputFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyTargetGroupAttributesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyTargetGroupAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyTargetGroupAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyTargetGroupAttributesCommandOutput> {
    return deserializeAws_queryModifyTargetGroupAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
