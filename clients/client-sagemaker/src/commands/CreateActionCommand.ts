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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CreateActionRequest, CreateActionResponse } from "../models/models_0";
import { de_CreateActionCommand, se_CreateActionCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateActionCommand}.
 */
export interface CreateActionCommandInput extends CreateActionRequest {}
/**
 * @public
 *
 * The output of {@link CreateActionCommand}.
 */
export interface CreateActionCommandOutput extends CreateActionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an <i>action</i>. An action is a lineage tracking entity that
 *         represents an action or activity. For example, a model deployment or an HPO job.
 *         Generally, an action involves at least one input or output artifact. For more information, see
 *         <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker
 *           ML Lineage Tracking</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateActionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateActionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreateActionRequest
 *   ActionName: "STRING_VALUE", // required
 *   Source: { // ActionSource
 *     SourceUri: "STRING_VALUE", // required
 *     SourceType: "STRING_VALUE",
 *     SourceId: "STRING_VALUE",
 *   },
 *   ActionType: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Status: "Unknown" || "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped",
 *   Properties: { // LineageEntityParameters
 *     "<keys>": "STRING_VALUE",
 *   },
 *   MetadataProperties: { // MetadataProperties
 *     CommitId: "STRING_VALUE",
 *     Repository: "STRING_VALUE",
 *     GeneratedBy: "STRING_VALUE",
 *     ProjectId: "STRING_VALUE",
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateActionCommand(input);
 * const response = await client.send(command);
 * // { // CreateActionResponse
 * //   ActionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateActionCommandInput - {@link CreateActionCommandInput}
 * @returns {@link CreateActionCommandOutput}
 * @see {@link CreateActionCommandInput} for command's `input` shape.
 * @see {@link CreateActionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class CreateActionCommand extends $Command<
  CreateActionCommandInput,
  CreateActionCommandOutput,
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
  constructor(readonly input: CreateActionCommandInput) {
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
  ): Handler<CreateActionCommandInput, CreateActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateActionCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "CreateAction",
      },
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
  private serialize(input: CreateActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateActionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateActionCommandOutput> {
    return de_CreateActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
