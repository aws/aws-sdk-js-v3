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
  ListPipelineExecutionStepsRequest,
  ListPipelineExecutionStepsRequestFilterSensitiveLog,
  ListPipelineExecutionStepsResponse,
  ListPipelineExecutionStepsResponseFilterSensitiveLog,
} from "../models/models_3";
import {
  deserializeAws_json1_1ListPipelineExecutionStepsCommand,
  serializeAws_json1_1ListPipelineExecutionStepsCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

export interface ListPipelineExecutionStepsCommandInput extends ListPipelineExecutionStepsRequest {}
export interface ListPipelineExecutionStepsCommandOutput extends ListPipelineExecutionStepsResponse, __MetadataBearer {}

/**
 * <p>Gets a list of <code>PipeLineExecutionStep</code> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListPipelineExecutionStepsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListPipelineExecutionStepsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListPipelineExecutionStepsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPipelineExecutionStepsCommandInput} for command's `input` shape.
 * @see {@link ListPipelineExecutionStepsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 */
export class ListPipelineExecutionStepsCommand extends $Command<
  ListPipelineExecutionStepsCommandInput,
  ListPipelineExecutionStepsCommandOutput,
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

  constructor(readonly input: ListPipelineExecutionStepsCommandInput) {
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
  ): Handler<ListPipelineExecutionStepsCommandInput, ListPipelineExecutionStepsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPipelineExecutionStepsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListPipelineExecutionStepsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPipelineExecutionStepsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListPipelineExecutionStepsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPipelineExecutionStepsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListPipelineExecutionStepsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPipelineExecutionStepsCommandOutput> {
    return deserializeAws_json1_1ListPipelineExecutionStepsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
