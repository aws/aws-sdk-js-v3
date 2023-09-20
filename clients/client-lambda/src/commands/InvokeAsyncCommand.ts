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
  StreamingBlobPayloadInputTypes,
} from "@smithy/types";

import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { InvokeAsyncRequest, InvokeAsyncRequestFilterSensitiveLog, InvokeAsyncResponse } from "../models/models_0";
import { de_InvokeAsyncCommand, se_InvokeAsyncCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link InvokeAsyncCommand}.
 */
export interface InvokeAsyncCommandInput extends Omit<InvokeAsyncRequest, "InvokeArgs"> {
  InvokeArgs: StreamingBlobPayloadInputTypes;
}

/**
 * @public
 *
 * The output of {@link InvokeAsyncCommand}.
 */
export interface InvokeAsyncCommandOutput extends InvokeAsyncResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <important>
 *             <p>For asynchronous function invocation, use <a>Invoke</a>.</p>
 *          </important>
 *          <p>Invokes a function asynchronously.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, InvokeAsyncCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, InvokeAsyncCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // InvokeAsyncRequest
 *   FunctionName: "STRING_VALUE", // required
 *   InvokeArgs: "STREAMING_BLOB_VALUE", // required
 * };
 * const command = new InvokeAsyncCommand(input);
 * const response = await client.send(command);
 * // { // InvokeAsyncResponse
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param InvokeAsyncCommandInput - {@link InvokeAsyncCommandInput}
 * @returns {@link InvokeAsyncCommandOutput}
 * @see {@link InvokeAsyncCommandInput} for command's `input` shape.
 * @see {@link InvokeAsyncCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidRequestContentException} (client fault)
 *  <p>The request body could not be parsed as JSON.</p>
 *
 * @throws {@link InvalidRuntimeException} (server fault)
 *  <p>The runtime or runtime version specified is not supported.</p>
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
 * @throws {@link LambdaServiceException}
 * <p>Base exception class for all service exceptions from Lambda service.</p>
 *
 */
export class InvokeAsyncCommand extends $Command<
  InvokeAsyncCommandInput,
  InvokeAsyncCommandOutput,
  LambdaClientResolvedConfig
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
  constructor(readonly input: InvokeAsyncCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<InvokeAsyncCommandInput, InvokeAsyncCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, InvokeAsyncCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "InvokeAsyncCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InvokeAsyncRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGirApiService",
        operation: "InvokeAsync",
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
  private serialize(input: InvokeAsyncCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_InvokeAsyncCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InvokeAsyncCommandOutput> {
    return de_InvokeAsyncCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
