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

import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import { DescribeFlowRequest, DescribeFlowResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeFlowCommand,
  serializeAws_restJson1DescribeFlowCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DescribeFlowCommand}.
 */
export interface DescribeFlowCommandInput extends DescribeFlowRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFlowCommand}.
 */
export interface DescribeFlowCommandOutput extends DescribeFlowResponse, __MetadataBearer {}

/**
 * @public
 * <p> Provides a description of the specified flow. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, DescribeFlowCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, DescribeFlowCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const command = new DescribeFlowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeFlowCommandInput - {@link DescribeFlowCommandInput}
 * @returns {@link DescribeFlowCommandOutput}
 * @see {@link DescribeFlowCommandInput} for command's `input` shape.
 * @see {@link DescribeFlowCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for AppflowClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *       later. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource specified in the request (such as the source or destination connector
 *       profile) is not found. </p>
 *
 *
 */
export class DescribeFlowCommand extends $Command<
  DescribeFlowCommandInput,
  DescribeFlowCommandOutput,
  AppflowClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: DescribeFlowCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppflowClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeFlowCommandInput, DescribeFlowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeFlowCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppflowClient";
    const commandName = "DescribeFlowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeFlowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeFlowCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFlowCommandOutput> {
    return deserializeAws_restJson1DescribeFlowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
