// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  ListPipelineParametersForExecutionRequest,
  ListPipelineParametersForExecutionResponse,
} from "../models/models_3";
import {
  de_ListPipelineParametersForExecutionCommand,
  se_ListPipelineParametersForExecutionCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListPipelineParametersForExecutionCommand}.
 */
export interface ListPipelineParametersForExecutionCommandInput extends ListPipelineParametersForExecutionRequest {}
/**
 * @public
 *
 * The output of {@link ListPipelineParametersForExecutionCommand}.
 */
export interface ListPipelineParametersForExecutionCommandOutput
  extends ListPipelineParametersForExecutionResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of parameters for a pipeline execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListPipelineParametersForExecutionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListPipelineParametersForExecutionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListPipelineParametersForExecutionRequest
 *   PipelineExecutionArn: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListPipelineParametersForExecutionCommand(input);
 * const response = await client.send(command);
 * // { // ListPipelineParametersForExecutionResponse
 * //   PipelineParameters: [ // ParameterList
 * //     { // Parameter
 * //       Name: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPipelineParametersForExecutionCommandInput - {@link ListPipelineParametersForExecutionCommandInput}
 * @returns {@link ListPipelineParametersForExecutionCommandOutput}
 * @see {@link ListPipelineParametersForExecutionCommandInput} for command's `input` shape.
 * @see {@link ListPipelineParametersForExecutionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class ListPipelineParametersForExecutionCommand extends $Command<
  ListPipelineParametersForExecutionCommandInput,
  ListPipelineParametersForExecutionCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: ListPipelineParametersForExecutionCommandInput) {
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
  ): Handler<ListPipelineParametersForExecutionCommandInput, ListPipelineParametersForExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPipelineParametersForExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListPipelineParametersForExecutionCommand";
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
  private serialize(
    input: ListPipelineParametersForExecutionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListPipelineParametersForExecutionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPipelineParametersForExecutionCommandOutput> {
    return de_ListPipelineParametersForExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
