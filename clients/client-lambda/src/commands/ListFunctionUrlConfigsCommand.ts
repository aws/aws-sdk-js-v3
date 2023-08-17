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

import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { ListFunctionUrlConfigsRequest, ListFunctionUrlConfigsResponse } from "../models/models_0";
import { de_ListFunctionUrlConfigsCommand, se_ListFunctionUrlConfigsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListFunctionUrlConfigsCommand}.
 */
export interface ListFunctionUrlConfigsCommandInput extends ListFunctionUrlConfigsRequest {}
/**
 * @public
 *
 * The output of {@link ListFunctionUrlConfigsCommand}.
 */
export interface ListFunctionUrlConfigsCommandOutput extends ListFunctionUrlConfigsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of Lambda function URLs for the specified function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListFunctionUrlConfigsCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListFunctionUrlConfigsCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // ListFunctionUrlConfigsRequest
 *   FunctionName: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListFunctionUrlConfigsCommand(input);
 * const response = await client.send(command);
 * // { // ListFunctionUrlConfigsResponse
 * //   FunctionUrlConfigs: [ // FunctionUrlConfigList // required
 * //     { // FunctionUrlConfig
 * //       FunctionUrl: "STRING_VALUE", // required
 * //       FunctionArn: "STRING_VALUE", // required
 * //       CreationTime: "STRING_VALUE", // required
 * //       LastModifiedTime: "STRING_VALUE", // required
 * //       Cors: { // Cors
 * //         AllowCredentials: true || false,
 * //         AllowHeaders: [ // HeadersList
 * //           "STRING_VALUE",
 * //         ],
 * //         AllowMethods: [ // AllowMethodsList
 * //           "STRING_VALUE",
 * //         ],
 * //         AllowOrigins: [ // AllowOriginsList
 * //           "STRING_VALUE",
 * //         ],
 * //         ExposeHeaders: [
 * //           "STRING_VALUE",
 * //         ],
 * //         MaxAge: Number("int"),
 * //       },
 * //       AuthType: "NONE" || "AWS_IAM", // required
 * //       InvokeMode: "BUFFERED" || "RESPONSE_STREAM",
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFunctionUrlConfigsCommandInput - {@link ListFunctionUrlConfigsCommandInput}
 * @returns {@link ListFunctionUrlConfigsCommandOutput}
 * @see {@link ListFunctionUrlConfigsCommandInput} for command's `input` shape.
 * @see {@link ListFunctionUrlConfigsCommandOutput} for command's `response` shape.
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
export class ListFunctionUrlConfigsCommand extends $Command<
  ListFunctionUrlConfigsCommandInput,
  ListFunctionUrlConfigsCommandOutput,
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
  constructor(readonly input: ListFunctionUrlConfigsCommandInput) {
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
  ): Handler<ListFunctionUrlConfigsCommandInput, ListFunctionUrlConfigsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListFunctionUrlConfigsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "ListFunctionUrlConfigsCommand";
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
  private serialize(input: ListFunctionUrlConfigsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListFunctionUrlConfigsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFunctionUrlConfigsCommandOutput> {
    return de_ListFunctionUrlConfigsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
