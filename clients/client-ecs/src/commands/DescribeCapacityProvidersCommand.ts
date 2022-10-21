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

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import {
  DescribeCapacityProvidersRequest,
  DescribeCapacityProvidersRequestFilterSensitiveLog,
  DescribeCapacityProvidersResponse,
  DescribeCapacityProvidersResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeCapacityProvidersCommand,
  serializeAws_json1_1DescribeCapacityProvidersCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeCapacityProvidersCommandInput extends DescribeCapacityProvidersRequest {}
export interface DescribeCapacityProvidersCommandOutput extends DescribeCapacityProvidersResponse, __MetadataBearer {}

/**
 * <p>Describes one or more of your capacity providers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeCapacityProvidersCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeCapacityProvidersCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DescribeCapacityProvidersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCapacityProvidersCommandInput} for command's `input` shape.
 * @see {@link DescribeCapacityProvidersCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 */
export class DescribeCapacityProvidersCommand extends $Command<
  DescribeCapacityProvidersCommandInput,
  DescribeCapacityProvidersCommandOutput,
  ECSClientResolvedConfig
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

  constructor(readonly input: DescribeCapacityProvidersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeCapacityProvidersCommandInput, DescribeCapacityProvidersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCapacityProvidersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "DescribeCapacityProvidersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCapacityProvidersRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeCapacityProvidersResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeCapacityProvidersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeCapacityProvidersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCapacityProvidersCommandOutput> {
    return deserializeAws_json1_1DescribeCapacityProvidersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
