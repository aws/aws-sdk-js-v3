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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateMLTransformRequest, UpdateMLTransformResponse } from "../models/models_2";
import { de_UpdateMLTransformCommand, se_UpdateMLTransformCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateMLTransformCommand}.
 */
export interface UpdateMLTransformCommandInput extends UpdateMLTransformRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMLTransformCommand}.
 */
export interface UpdateMLTransformCommandOutput extends UpdateMLTransformResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates an existing machine learning transform. Call this operation to tune the algorithm parameters to achieve better results.</p>
 *          <p>After calling this operation, you can call the <code>StartMLEvaluationTaskRun</code>
 *       operation to assess how well your new parameters achieved your goals (such as improving the
 *       quality of your machine learning transform, or making it more cost-effective).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateMLTransformCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateMLTransformCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // UpdateMLTransformRequest
 *   TransformId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Parameters: { // TransformParameters
 *     TransformType: "FIND_MATCHES", // required
 *     FindMatchesParameters: { // FindMatchesParameters
 *       PrimaryKeyColumnName: "STRING_VALUE",
 *       PrecisionRecallTradeoff: Number("double"),
 *       AccuracyCostTradeoff: Number("double"),
 *       EnforceProvidedLabels: true || false,
 *     },
 *   },
 *   Role: "STRING_VALUE",
 *   GlueVersion: "STRING_VALUE",
 *   MaxCapacity: Number("double"),
 *   WorkerType: "Standard" || "G.1X" || "G.2X" || "G.025X" || "G.4X" || "G.8X" || "Z.2X",
 *   NumberOfWorkers: Number("int"),
 *   Timeout: Number("int"),
 *   MaxRetries: Number("int"),
 * };
 * const command = new UpdateMLTransformCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMLTransformResponse
 * //   TransformId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateMLTransformCommandInput - {@link UpdateMLTransformCommandInput}
 * @returns {@link UpdateMLTransformCommandOutput}
 * @see {@link UpdateMLTransformCommandInput} for command's `input` shape.
 * @see {@link UpdateMLTransformCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class UpdateMLTransformCommand extends $Command<
  UpdateMLTransformCommandInput,
  UpdateMLTransformCommandOutput,
  GlueClientResolvedConfig
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
  constructor(readonly input: UpdateMLTransformCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateMLTransformCommandInput, UpdateMLTransformCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateMLTransformCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "UpdateMLTransformCommand";
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
  private serialize(input: UpdateMLTransformCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateMLTransformCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateMLTransformCommandOutput> {
    return de_UpdateMLTransformCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
