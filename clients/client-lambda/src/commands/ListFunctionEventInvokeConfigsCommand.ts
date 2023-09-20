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
import { ListFunctionEventInvokeConfigsRequest, ListFunctionEventInvokeConfigsResponse } from "../models/models_0";
import {
  de_ListFunctionEventInvokeConfigsCommand,
  se_ListFunctionEventInvokeConfigsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListFunctionEventInvokeConfigsCommand}.
 */
export interface ListFunctionEventInvokeConfigsCommandInput extends ListFunctionEventInvokeConfigsRequest {}
/**
 * @public
 *
 * The output of {@link ListFunctionEventInvokeConfigsCommand}.
 */
export interface ListFunctionEventInvokeConfigsCommandOutput
  extends ListFunctionEventInvokeConfigsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list of configurations for asynchronous invocation for a function.</p>
 *          <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListFunctionEventInvokeConfigsCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListFunctionEventInvokeConfigsCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // ListFunctionEventInvokeConfigsRequest
 *   FunctionName: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListFunctionEventInvokeConfigsCommand(input);
 * const response = await client.send(command);
 * // { // ListFunctionEventInvokeConfigsResponse
 * //   FunctionEventInvokeConfigs: [ // FunctionEventInvokeConfigList
 * //     { // FunctionEventInvokeConfig
 * //       LastModified: new Date("TIMESTAMP"),
 * //       FunctionArn: "STRING_VALUE",
 * //       MaximumRetryAttempts: Number("int"),
 * //       MaximumEventAgeInSeconds: Number("int"),
 * //       DestinationConfig: { // DestinationConfig
 * //         OnSuccess: { // OnSuccess
 * //           Destination: "STRING_VALUE",
 * //         },
 * //         OnFailure: { // OnFailure
 * //           Destination: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFunctionEventInvokeConfigsCommandInput - {@link ListFunctionEventInvokeConfigsCommandInput}
 * @returns {@link ListFunctionEventInvokeConfigsCommandOutput}
 * @see {@link ListFunctionEventInvokeConfigsCommandInput} for command's `input` shape.
 * @see {@link ListFunctionEventInvokeConfigsCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
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
export class ListFunctionEventInvokeConfigsCommand extends $Command<
  ListFunctionEventInvokeConfigsCommandInput,
  ListFunctionEventInvokeConfigsCommandOutput,
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
  constructor(readonly input: ListFunctionEventInvokeConfigsCommandInput) {
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
  ): Handler<ListFunctionEventInvokeConfigsCommandInput, ListFunctionEventInvokeConfigsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListFunctionEventInvokeConfigsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "ListFunctionEventInvokeConfigsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGirApiService",
        operation: "ListFunctionEventInvokeConfigs",
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
  private serialize(
    input: ListFunctionEventInvokeConfigsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListFunctionEventInvokeConfigsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListFunctionEventInvokeConfigsCommandOutput> {
    return de_ListFunctionEventInvokeConfigsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
