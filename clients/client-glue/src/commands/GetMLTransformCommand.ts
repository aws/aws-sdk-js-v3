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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetMLTransformRequest, GetMLTransformResponse } from "../models/models_1";
import {
  deserializeAws_json1_1GetMLTransformCommand,
  serializeAws_json1_1GetMLTransformCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link GetMLTransformCommand}.
 */
export interface GetMLTransformCommandInput extends GetMLTransformRequest {}
/**
 * @public
 *
 * The output of {@link GetMLTransformCommand}.
 */
export interface GetMLTransformCommandOutput extends GetMLTransformResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets an Glue machine learning transform artifact and all its corresponding metadata.
 *       Machine learning transforms are a special type of transform that use machine learning to learn
 *       the details of the transformation to be performed by learning from examples provided by
 *       humans. These transformations are then saved by Glue. You can retrieve their metadata by
 *       calling <code>GetMLTransform</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetMLTransformCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetMLTransformCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetMLTransformRequest
 *   TransformId: "STRING_VALUE", // required
 * };
 * const command = new GetMLTransformCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetMLTransformCommandInput - {@link GetMLTransformCommandInput}
 * @returns {@link GetMLTransformCommandOutput}
 * @see {@link GetMLTransformCommandInput} for command's `input` shape.
 * @see {@link GetMLTransformCommandOutput} for command's `response` shape.
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
 *
 */
export class GetMLTransformCommand extends $Command<
  GetMLTransformCommandInput,
  GetMLTransformCommandOutput,
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
  constructor(readonly input: GetMLTransformCommandInput) {
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
  ): Handler<GetMLTransformCommandInput, GetMLTransformCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMLTransformCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetMLTransformCommand";
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
  private serialize(input: GetMLTransformCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetMLTransformCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMLTransformCommandOutput> {
    return deserializeAws_json1_1GetMLTransformCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
