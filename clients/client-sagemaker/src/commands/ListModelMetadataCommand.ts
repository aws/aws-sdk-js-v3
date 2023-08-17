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

import { ListModelMetadataRequest, ListModelMetadataResponse } from "../models/models_3";
import { de_ListModelMetadataCommand, se_ListModelMetadataCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListModelMetadataCommand}.
 */
export interface ListModelMetadataCommandInput extends ListModelMetadataRequest {}
/**
 * @public
 *
 * The output of {@link ListModelMetadataCommand}.
 */
export interface ListModelMetadataCommandOutput extends ListModelMetadataResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the domain, framework, task, and model name of standard
 *           machine learning models found in common model zoos.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListModelMetadataCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListModelMetadataCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListModelMetadataRequest
 *   SearchExpression: { // ModelMetadataSearchExpression
 *     Filters: [ // ModelMetadataFilters
 *       { // ModelMetadataFilter
 *         Name: "Domain" || "Framework" || "Task" || "FrameworkVersion", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListModelMetadataCommand(input);
 * const response = await client.send(command);
 * // { // ListModelMetadataResponse
 * //   ModelMetadataSummaries: [ // ModelMetadataSummaries // required
 * //     { // ModelMetadataSummary
 * //       Domain: "STRING_VALUE", // required
 * //       Framework: "STRING_VALUE", // required
 * //       Task: "STRING_VALUE", // required
 * //       Model: "STRING_VALUE", // required
 * //       FrameworkVersion: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListModelMetadataCommandInput - {@link ListModelMetadataCommandInput}
 * @returns {@link ListModelMetadataCommandOutput}
 * @see {@link ListModelMetadataCommandInput} for command's `input` shape.
 * @see {@link ListModelMetadataCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class ListModelMetadataCommand extends $Command<
  ListModelMetadataCommandInput,
  ListModelMetadataCommandOutput,
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
  constructor(readonly input: ListModelMetadataCommandInput) {
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
  ): Handler<ListModelMetadataCommandInput, ListModelMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListModelMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListModelMetadataCommand";
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
  private serialize(input: ListModelMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListModelMetadataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListModelMetadataCommandOutput> {
    return de_ListModelMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
