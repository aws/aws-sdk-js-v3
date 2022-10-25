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

import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import {
  DescribeClusterOperationRequest,
  DescribeClusterOperationRequestFilterSensitiveLog,
  DescribeClusterOperationResponse,
  DescribeClusterOperationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeClusterOperationCommand,
  serializeAws_restJson1DescribeClusterOperationCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeClusterOperationCommandInput extends DescribeClusterOperationRequest {}
export interface DescribeClusterOperationCommandOutput extends DescribeClusterOperationResponse, __MetadataBearer {}

/**
 * <p>Returns a description of the cluster operation specified by the ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, DescribeClusterOperationCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, DescribeClusterOperationCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new DescribeClusterOperationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClusterOperationCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterOperationCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for KafkaClient's `config` shape.
 *
 */
export class DescribeClusterOperationCommand extends $Command<
  DescribeClusterOperationCommandInput,
  DescribeClusterOperationCommandOutput,
  KafkaClientResolvedConfig
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

  constructor(readonly input: DescribeClusterOperationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KafkaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeClusterOperationCommandInput, DescribeClusterOperationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeClusterOperationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "DescribeClusterOperationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeClusterOperationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeClusterOperationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeClusterOperationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeClusterOperationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeClusterOperationCommandOutput> {
    return deserializeAws_restJson1DescribeClusterOperationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
