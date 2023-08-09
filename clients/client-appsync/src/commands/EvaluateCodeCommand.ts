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

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { EvaluateCodeRequest, EvaluateCodeResponse } from "../models/models_0";
import { de_EvaluateCodeCommand, se_EvaluateCodeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link EvaluateCodeCommand}.
 */
export interface EvaluateCodeCommandInput extends EvaluateCodeRequest {}
/**
 * @public
 *
 * The output of {@link EvaluateCodeCommand}.
 */
export interface EvaluateCodeCommandOutput extends EvaluateCodeResponse, __MetadataBearer {}

/**
 * @public
 * <p>Evaluates the given code and returns the response. The code definition requirements
 *          depend on the specified runtime. For <code>APPSYNC_JS</code> runtimes, the code defines the
 *          request and response functions. The request function takes the incoming request after a
 *          GraphQL operation is parsed and converts it into a request configuration for the selected
 *          data source operation. The response function interprets responses from the data source and
 *          maps it to the shape of the GraphQL field output type. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, EvaluateCodeCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, EvaluateCodeCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const input = { // EvaluateCodeRequest
 *   runtime: { // AppSyncRuntime
 *     name: "APPSYNC_JS", // required
 *     runtimeVersion: "STRING_VALUE", // required
 *   },
 *   code: "STRING_VALUE", // required
 *   context: "STRING_VALUE", // required
 *   function: "STRING_VALUE",
 * };
 * const command = new EvaluateCodeCommand(input);
 * const response = await client.send(command);
 * // { // EvaluateCodeResponse
 * //   evaluationResult: "STRING_VALUE",
 * //   error: { // EvaluateCodeErrorDetail
 * //     message: "STRING_VALUE",
 * //     codeErrors: [ // CodeErrors
 * //       { // CodeError
 * //         errorType: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //         location: { // CodeErrorLocation
 * //           line: Number("int"),
 * //           column: Number("int"),
 * //           span: Number("int"),
 * //         },
 * //       },
 * //     ],
 * //   },
 * //   logs: [ // Logs
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param EvaluateCodeCommandInput - {@link EvaluateCodeCommandInput}
 * @returns {@link EvaluateCodeCommandOutput}
 * @see {@link EvaluateCodeCommandInput} for command's `input` shape.
 * @see {@link EvaluateCodeCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to perform this operation on this resource.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal AppSync error occurred. Try your request again.</p>
 *
 * @throws {@link AppSyncServiceException}
 * <p>Base exception class for all service exceptions from AppSync service.</p>
 *
 */
export class EvaluateCodeCommand extends $Command<
  EvaluateCodeCommandInput,
  EvaluateCodeCommandOutput,
  AppSyncClientResolvedConfig
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
  constructor(readonly input: EvaluateCodeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EvaluateCodeCommandInput, EvaluateCodeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, EvaluateCodeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "EvaluateCodeCommand";
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
  private serialize(input: EvaluateCodeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_EvaluateCodeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EvaluateCodeCommandOutput> {
    return de_EvaluateCodeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
