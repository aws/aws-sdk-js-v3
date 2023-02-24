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
  DescribeResiliencyPolicyRequest,
  DescribeResiliencyPolicyRequestFilterSensitiveLog,
  DescribeResiliencyPolicyResponse,
  DescribeResiliencyPolicyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeResiliencyPolicyCommand,
  serializeAws_restJson1DescribeResiliencyPolicyCommand,
} from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

export interface DescribeResiliencyPolicyCommandInput extends DescribeResiliencyPolicyRequest {}
export interface DescribeResiliencyPolicyCommandOutput extends DescribeResiliencyPolicyResponse, __MetadataBearer {}

/**
 * <p>Describes a specified resiliency policy for an AWS Resilience Hub application. The returned
 *       policy object includes creation time, data location constraints, the Amazon Resource Name
 *       (ARN) for the policy, tags, tier, and more.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, DescribeResiliencyPolicyCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, DescribeResiliencyPolicyCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const command = new DescribeResiliencyPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeResiliencyPolicyCommandInput} for command's `input` shape.
 * @see {@link DescribeResiliencyPolicyCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 */
export class DescribeResiliencyPolicyCommand extends $Command<
  DescribeResiliencyPolicyCommandInput,
  DescribeResiliencyPolicyCommandOutput,
  ResiliencehubClientResolvedConfig
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

  constructor(readonly input: DescribeResiliencyPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResiliencehubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeResiliencyPolicyCommandInput, DescribeResiliencyPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeResiliencyPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResiliencehubClient";
    const commandName = "DescribeResiliencyPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeResiliencyPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeResiliencyPolicyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeResiliencyPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeResiliencyPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeResiliencyPolicyCommandOutput> {
    return deserializeAws_restJson1DescribeResiliencyPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
