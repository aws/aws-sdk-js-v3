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
  DescribeClusterV2Request,
  DescribeClusterV2RequestFilterSensitiveLog,
  DescribeClusterV2Response,
  DescribeClusterV2ResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeClusterV2Command,
  serializeAws_restJson1DescribeClusterV2Command,
} from "../protocols/Aws_restJson1";

export interface DescribeClusterV2CommandInput extends DescribeClusterV2Request {}
export interface DescribeClusterV2CommandOutput extends DescribeClusterV2Response, __MetadataBearer {}

/**
 * <p>Returns a description of the MSK cluster whose Amazon Resource Name (ARN) is specified in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, DescribeClusterV2Command } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, DescribeClusterV2Command } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new DescribeClusterV2Command(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClusterV2CommandInput} for command's `input` shape.
 * @see {@link DescribeClusterV2CommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for KafkaClient's `config` shape.
 *
 */
export class DescribeClusterV2Command extends $Command<
  DescribeClusterV2CommandInput,
  DescribeClusterV2CommandOutput,
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

  constructor(readonly input: DescribeClusterV2CommandInput) {
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
  ): Handler<DescribeClusterV2CommandInput, DescribeClusterV2CommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeClusterV2Command.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "DescribeClusterV2Command";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeClusterV2RequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeClusterV2ResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeClusterV2CommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeClusterV2Command(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeClusterV2CommandOutput> {
    return deserializeAws_restJson1DescribeClusterV2Command(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
