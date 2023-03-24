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

import { CreateContextRequest, CreateContextResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateContextCommand,
  serializeAws_json1_1CreateContextCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 *
 * The input for {@link CreateContextCommand}.
 */
export interface CreateContextCommandInput extends CreateContextRequest {}
/**
 * @public
 *
 * The output of {@link CreateContextCommand}.
 */
export interface CreateContextCommandOutput extends CreateContextResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a <i>context</i>. A context is a lineage tracking entity that
 *         represents a logical grouping of other tracking or experiment entities. Some examples are
 *         an endpoint and a model package. For more information, see
 *         <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker
 *           ML Lineage Tracking</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateContextCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateContextCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = {
 *   ContextName: "STRING_VALUE", // required
 *   Source: {
 *     SourceUri: "STRING_VALUE", // required
 *     SourceType: "STRING_VALUE",
 *     SourceId: "STRING_VALUE",
 *   },
 *   ContextType: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Properties: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Tags: [
 *     {
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateContextCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateContextCommandInput - {@link CreateContextCommandInput}
 * @returns {@link CreateContextCommandOutput}
 * @see {@link CreateContextCommandInput} for command's `input` shape.
 * @see {@link CreateContextCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 *
 */
export class CreateContextCommand extends $Command<
  CreateContextCommandInput,
  CreateContextCommandOutput,
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
  constructor(readonly input: CreateContextCommandInput) {
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
  ): Handler<CreateContextCommandInput, CreateContextCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateContextCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateContextCommand";
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
  private serialize(input: CreateContextCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateContextCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateContextCommandOutput> {
    return deserializeAws_json1_1CreateContextCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
