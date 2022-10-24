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

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import {
  DescribeComputeEnvironmentsRequest,
  DescribeComputeEnvironmentsRequestFilterSensitiveLog,
  DescribeComputeEnvironmentsResponse,
  DescribeComputeEnvironmentsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeComputeEnvironmentsCommand,
  serializeAws_restJson1DescribeComputeEnvironmentsCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeComputeEnvironmentsCommandInput extends DescribeComputeEnvironmentsRequest {}
export interface DescribeComputeEnvironmentsCommandOutput
  extends DescribeComputeEnvironmentsResponse,
    __MetadataBearer {}

/**
 * <p>Describes one or more of your compute environments.</p>
 *          <p>If you're using an unmanaged compute environment, you can use the <code>DescribeComputeEnvironment</code>
 *    operation to determine the <code>ecsClusterArn</code> that you launch your Amazon ECS container instances
 *    into.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, DescribeComputeEnvironmentsCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, DescribeComputeEnvironmentsCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const command = new DescribeComputeEnvironmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeComputeEnvironmentsCommandInput} for command's `input` shape.
 * @see {@link DescribeComputeEnvironmentsCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 */
export class DescribeComputeEnvironmentsCommand extends $Command<
  DescribeComputeEnvironmentsCommandInput,
  DescribeComputeEnvironmentsCommandOutput,
  BatchClientResolvedConfig
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

  constructor(readonly input: DescribeComputeEnvironmentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeComputeEnvironmentsCommandInput, DescribeComputeEnvironmentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeComputeEnvironmentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BatchClient";
    const commandName = "DescribeComputeEnvironmentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeComputeEnvironmentsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeComputeEnvironmentsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeComputeEnvironmentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeComputeEnvironmentsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeComputeEnvironmentsCommandOutput> {
    return deserializeAws_restJson1DescribeComputeEnvironmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
