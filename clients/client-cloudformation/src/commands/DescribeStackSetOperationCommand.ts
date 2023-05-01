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

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DescribeStackSetOperationInput, DescribeStackSetOperationOutput } from "../models/models_0";
import { de_DescribeStackSetOperationCommand, se_DescribeStackSetOperationCommand } from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link DescribeStackSetOperationCommand}.
 */
export interface DescribeStackSetOperationCommandInput extends DescribeStackSetOperationInput {}
/**
 * @public
 *
 * The output of {@link DescribeStackSetOperationCommand}.
 */
export interface DescribeStackSetOperationCommandOutput extends DescribeStackSetOperationOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the description of the specified stack set operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStackSetOperationCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStackSetOperationCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // DescribeStackSetOperationInput
 *   StackSetName: "STRING_VALUE", // required
 *   OperationId: "STRING_VALUE", // required
 *   CallAs: "SELF" || "DELEGATED_ADMIN",
 * };
 * const command = new DescribeStackSetOperationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeStackSetOperationCommandInput - {@link DescribeStackSetOperationCommandInput}
 * @returns {@link DescribeStackSetOperationCommandOutput}
 * @see {@link DescribeStackSetOperationCommandInput} for command's `input` shape.
 * @see {@link DescribeStackSetOperationCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link OperationNotFoundException} (client fault)
 *  <p>The specified ID refers to an operation that doesn't exist.</p>
 *
 * @throws {@link StackSetNotFoundException} (client fault)
 *  <p>The specified stack set doesn't exist.</p>
 *
 *
 */
export class DescribeStackSetOperationCommand extends $Command<
  DescribeStackSetOperationCommandInput,
  DescribeStackSetOperationCommandOutput,
  CloudFormationClientResolvedConfig
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
  constructor(readonly input: DescribeStackSetOperationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeStackSetOperationCommandInput, DescribeStackSetOperationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeStackSetOperationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DescribeStackSetOperationCommand";
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
  private serialize(input: DescribeStackSetOperationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeStackSetOperationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeStackSetOperationCommandOutput> {
    return de_DescribeStackSetOperationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
