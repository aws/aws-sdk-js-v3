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

import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { TagResourceRequest } from "../models/models_0";
import { de_TagResourceCommand, se_TagResourceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link TagResourceCommand}.
 */
export interface TagResourceCommandInput extends TagResourceRequest {}
/**
 * @public
 *
 * The output of {@link TagResourceCommand}.
 */
export interface TagResourceCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Adds <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> to a function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, TagResourceCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, TagResourceCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // TagResourceRequest
 *   Resource: "STRING_VALUE", // required
 *   Tags: { // Tags // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new TagResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TagResourceCommandInput - {@link TagResourceCommandInput}
 * @returns {@link TagResourceCommandOutput}
 * @see {@link TagResourceCommandInput} for command's `input` shape.
 * @see {@link TagResourceCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource already exists, or another operation is in progress.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The Lambda service encountered an internal error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request throughput limit was exceeded. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests">Lambda quotas</a>.</p>
 *
 * @throws {@link LambdaServiceException}
 * <p>Base exception class for all service exceptions from Lambda service.</p>
 *
 */
export class TagResourceCommand extends $Command<
  TagResourceCommandInput,
  TagResourceCommandOutput,
  LambdaClientResolvedConfig
> {
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
  constructor(readonly input: TagResourceCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TagResourceCommandInput, TagResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, TagResourceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "TagResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGirApiService",
        operation: "TagResource",
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
  private serialize(input: TagResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_TagResourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TagResourceCommandOutput> {
    return de_TagResourceCommand(output, context);
  }
}
