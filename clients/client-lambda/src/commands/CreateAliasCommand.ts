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
import { AliasConfiguration, CreateAliasRequest } from "../models/models_0";
import { de_CreateAliasCommand, se_CreateAliasCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAliasCommand}.
 */
export interface CreateAliasCommandInput extends CreateAliasRequest {}
/**
 * @public
 *
 * The output of {@link CreateAliasCommand}.
 */
export interface CreateAliasCommandOutput extends AliasConfiguration, __MetadataBearer {}

/**
 * @public
 * <p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a> for a
 *       Lambda function version. Use aliases to provide clients with a function identifier that you can update to invoke a
 *       different version.</p>
 *          <p>You can also map an alias to split invocation requests between two versions. Use the
 *         <code>RoutingConfig</code> parameter to specify a second version and the percentage of invocation requests that
 *       it receives.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, CreateAliasCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, CreateAliasCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // CreateAliasRequest
 *   FunctionName: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   FunctionVersion: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   RoutingConfig: { // AliasRoutingConfiguration
 *     AdditionalVersionWeights: { // AdditionalVersionWeights
 *       "<keys>": Number("double"),
 *     },
 *   },
 * };
 * const command = new CreateAliasCommand(input);
 * const response = await client.send(command);
 * // { // AliasConfiguration
 * //   AliasArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   FunctionVersion: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   RoutingConfig: { // AliasRoutingConfiguration
 * //     AdditionalVersionWeights: { // AdditionalVersionWeights
 * //       "<keys>": Number("double"),
 * //     },
 * //   },
 * //   RevisionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAliasCommandInput - {@link CreateAliasCommandInput}
 * @returns {@link CreateAliasCommandOutput}
 * @see {@link CreateAliasCommandInput} for command's `input` shape.
 * @see {@link CreateAliasCommandOutput} for command's `response` shape.
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
export class CreateAliasCommand extends $Command<
  CreateAliasCommandInput,
  CreateAliasCommandOutput,
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
  constructor(readonly input: CreateAliasCommandInput) {
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
  ): Handler<CreateAliasCommandInput, CreateAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateAliasCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "CreateAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGirApiService",
        operation: "CreateAlias",
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
  private serialize(input: CreateAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateAliasCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAliasCommandOutput> {
    return de_CreateAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
