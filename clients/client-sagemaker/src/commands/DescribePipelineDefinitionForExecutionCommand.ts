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
  DescribePipelineDefinitionForExecutionRequest,
  DescribePipelineDefinitionForExecutionRequestFilterSensitiveLog,
  DescribePipelineDefinitionForExecutionResponse,
  DescribePipelineDefinitionForExecutionResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_json1_1DescribePipelineDefinitionForExecutionCommand,
  serializeAws_json1_1DescribePipelineDefinitionForExecutionCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

export interface DescribePipelineDefinitionForExecutionCommandInput
  extends DescribePipelineDefinitionForExecutionRequest {}
export interface DescribePipelineDefinitionForExecutionCommandOutput
  extends DescribePipelineDefinitionForExecutionResponse,
    __MetadataBearer {}

/**
 * <p>Describes the details of an execution's pipeline definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribePipelineDefinitionForExecutionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribePipelineDefinitionForExecutionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribePipelineDefinitionForExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePipelineDefinitionForExecutionCommandInput} for command's `input` shape.
 * @see {@link DescribePipelineDefinitionForExecutionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 */
export class DescribePipelineDefinitionForExecutionCommand extends $Command<
  DescribePipelineDefinitionForExecutionCommandInput,
  DescribePipelineDefinitionForExecutionCommandOutput,
  SageMakerClientResolvedConfig
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

  constructor(readonly input: DescribePipelineDefinitionForExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribePipelineDefinitionForExecutionCommandInput, DescribePipelineDefinitionForExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePipelineDefinitionForExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribePipelineDefinitionForExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePipelineDefinitionForExecutionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribePipelineDefinitionForExecutionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribePipelineDefinitionForExecutionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribePipelineDefinitionForExecutionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribePipelineDefinitionForExecutionCommandOutput> {
    return deserializeAws_json1_1DescribePipelineDefinitionForExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
