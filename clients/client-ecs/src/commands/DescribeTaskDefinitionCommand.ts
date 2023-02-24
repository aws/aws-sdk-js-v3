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
  DescribeTaskDefinitionRequest,
  DescribeTaskDefinitionRequestFilterSensitiveLog,
  DescribeTaskDefinitionResponse,
  DescribeTaskDefinitionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeTaskDefinitionCommand,
  serializeAws_json1_1DescribeTaskDefinitionCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeTaskDefinitionCommandInput extends DescribeTaskDefinitionRequest {}
export interface DescribeTaskDefinitionCommandOutput extends DescribeTaskDefinitionResponse, __MetadataBearer {}

/**
 * <p>Describes a task definition. You can specify a <code>family</code> and
 * 				<code>revision</code> to find information about a specific task definition, or you
 * 			can simply specify the family to find the latest <code>ACTIVE</code> revision in that
 * 			family.</p>
 *          <note>
 *             <p>You can only describe <code>INACTIVE</code> task definitions while an active task
 * 				or service references them.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeTaskDefinitionCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeTaskDefinitionCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DescribeTaskDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTaskDefinitionCommandInput} for command's `input` shape.
 * @see {@link DescribeTaskDefinitionCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 */
export class DescribeTaskDefinitionCommand extends $Command<
  DescribeTaskDefinitionCommandInput,
  DescribeTaskDefinitionCommandOutput,
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

  constructor(readonly input: DescribeTaskDefinitionCommandInput) {
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
  ): Handler<DescribeTaskDefinitionCommandInput, DescribeTaskDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTaskDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "DescribeTaskDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTaskDefinitionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeTaskDefinitionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTaskDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeTaskDefinitionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTaskDefinitionCommandOutput> {
    return deserializeAws_json1_1DescribeTaskDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
