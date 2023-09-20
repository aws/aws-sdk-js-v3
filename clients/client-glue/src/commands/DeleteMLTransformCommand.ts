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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteMLTransformRequest, DeleteMLTransformResponse } from "../models/models_1";
import { de_DeleteMLTransformCommand, se_DeleteMLTransformCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteMLTransformCommand}.
 */
export interface DeleteMLTransformCommandInput extends DeleteMLTransformRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMLTransformCommand}.
 */
export interface DeleteMLTransformCommandOutput extends DeleteMLTransformResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes an Glue machine learning transform. Machine learning transforms are a special
 *       type of transform that use machine learning to learn the details of the transformation to be
 *       performed by learning from examples provided by humans. These transformations are then saved
 *       by Glue. If you no longer need a transform, you can delete it by calling
 *         <code>DeleteMLTransforms</code>. However, any Glue jobs that still reference the deleted
 *       transform will no longer succeed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteMLTransformCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteMLTransformCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // DeleteMLTransformRequest
 *   TransformId: "STRING_VALUE", // required
 * };
 * const command = new DeleteMLTransformCommand(input);
 * const response = await client.send(command);
 * // { // DeleteMLTransformResponse
 * //   TransformId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteMLTransformCommandInput - {@link DeleteMLTransformCommandInput}
 * @returns {@link DeleteMLTransformCommandOutput}
 * @see {@link DeleteMLTransformCommandInput} for command's `input` shape.
 * @see {@link DeleteMLTransformCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
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
export class DeleteMLTransformCommand extends $Command<
  DeleteMLTransformCommandInput,
  DeleteMLTransformCommandOutput,
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
  constructor(readonly input: DeleteMLTransformCommandInput) {
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
  ): Handler<DeleteMLTransformCommandInput, DeleteMLTransformCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteMLTransformCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "DeleteMLTransformCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "DeleteMLTransform",
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
  private serialize(input: DeleteMLTransformCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteMLTransformCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteMLTransformCommandOutput> {
    return de_DeleteMLTransformCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
