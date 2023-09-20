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

import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { CreateConnectionRequest, CreateConnectionResponse } from "../models/models_0";
import { de_CreateConnectionCommand, se_CreateConnectionCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateConnectionCommand}.
 */
export interface CreateConnectionCommandInput extends CreateConnectionRequest {}
/**
 * @public
 *
 * The output of {@link CreateConnectionCommand}.
 */
export interface CreateConnectionCommandOutput extends CreateConnectionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Create an App Runner connection resource. App Runner requires a connection resource when you create App Runner services that access private repositories from
 *       certain third-party providers. You can share a connection across multiple services.</p>
 *          <p>A connection resource is needed to access GitHub and Bitbucket repositories. Both require
 *       a user interface approval process through the App Runner console before you can use the
 *       connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, CreateConnectionCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, CreateConnectionCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const input = { // CreateConnectionRequest
 *   ConnectionName: "STRING_VALUE", // required
 *   ProviderType: "GITHUB" || "BITBUCKET", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateConnectionCommand(input);
 * const response = await client.send(command);
 * // { // CreateConnectionResponse
 * //   Connection: { // Connection
 * //     ConnectionName: "STRING_VALUE",
 * //     ConnectionArn: "STRING_VALUE",
 * //     ProviderType: "GITHUB" || "BITBUCKET",
 * //     Status: "PENDING_HANDSHAKE" || "AVAILABLE" || "ERROR" || "DELETED",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateConnectionCommandInput - {@link CreateConnectionCommandInput}
 * @returns {@link CreateConnectionCommandOutput}
 * @see {@link CreateConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateConnectionCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for AppRunnerClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An unexpected service exception occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more input parameters aren't valid. Refer to the API action's document page, correct the input parameters, and try the action again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>App Runner can't create this resource. You've reached your account quota for this resource type.</p>
 *          <p>For App Runner per-resource quotas, see <a href="https://docs.aws.amazon.com/general/latest/gr/apprunner.html">App Runner endpoints and quotas</a> in the
 *         <i>Amazon Web Services General Reference</i>.</p>
 *
 * @throws {@link AppRunnerServiceException}
 * <p>Base exception class for all service exceptions from AppRunner service.</p>
 *
 */
export class CreateConnectionCommand extends $Command<
  CreateConnectionCommandInput,
  CreateConnectionCommandOutput,
  AppRunnerClientResolvedConfig
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
  constructor(readonly input: CreateConnectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppRunnerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateConnectionCommandInput, CreateConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateConnectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppRunnerClient";
    const commandName = "CreateConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AppRunner",
        operation: "CreateConnection",
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
  private serialize(input: CreateConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateConnectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateConnectionCommandOutput> {
    return de_CreateConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
