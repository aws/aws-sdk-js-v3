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

import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import { RegisterConnectorRequest, RegisterConnectorResponse } from "../models/models_0";
import { de_RegisterConnectorCommand, se_RegisterConnectorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RegisterConnectorCommand}.
 */
export interface RegisterConnectorCommandInput extends RegisterConnectorRequest {}
/**
 * @public
 *
 * The output of {@link RegisterConnectorCommand}.
 */
export interface RegisterConnectorCommandOutput extends RegisterConnectorResponse, __MetadataBearer {}

/**
 * @public
 * <p>Registers a new custom connector with your Amazon Web Services account. Before you can
 *       register the connector, you must deploy the associated AWS lambda function in your
 *       account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, RegisterConnectorCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, RegisterConnectorCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const input = { // RegisterConnectorRequest
 *   connectorLabel: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   connectorProvisioningType: "LAMBDA",
 *   connectorProvisioningConfig: { // ConnectorProvisioningConfig
 *     lambda: { // LambdaConnectorProvisioningConfig
 *       lambdaArn: "STRING_VALUE", // required
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new RegisterConnectorCommand(input);
 * const response = await client.send(command);
 * // { // RegisterConnectorResponse
 * //   connectorArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterConnectorCommandInput - {@link RegisterConnectorCommandInput}
 * @returns {@link RegisterConnectorCommandOutput}
 * @see {@link RegisterConnectorCommandInput} for command's `input` shape.
 * @see {@link RegisterConnectorCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for AppflowClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>AppFlow/Requester has invalid or missing permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> There was a conflict when processing the request (for example, a flow with the given name
 *       already exists within the account. Check for conflicting resource names and try again. </p>
 *
 * @throws {@link ConnectorAuthenticationException} (client fault)
 *  <p> An error occurred when authenticating with the connector endpoint. </p>
 *
 * @throws {@link ConnectorServerException} (client fault)
 *  <p> An error occurred when retrieving data from the connector endpoint. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *       later. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource specified in the request (such as the source or destination connector
 *       profile) is not found. </p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p> The request would cause a service quota (such as the number of flows) to be exceeded.
 *     </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>API calls have exceeded the maximum allowed API request rate per account and per Region.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request has invalid or missing parameters. </p>
 *
 * @throws {@link AppflowServiceException}
 * <p>Base exception class for all service exceptions from Appflow service.</p>
 *
 */
export class RegisterConnectorCommand extends $Command<
  RegisterConnectorCommandInput,
  RegisterConnectorCommandOutput,
  AppflowClientResolvedConfig
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
  constructor(readonly input: RegisterConnectorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppflowClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterConnectorCommandInput, RegisterConnectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterConnectorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppflowClient";
    const commandName = "RegisterConnectorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SandstoneConfigurationServiceLambda",
        operation: "RegisterConnector",
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
  private serialize(input: RegisterConnectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RegisterConnectorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterConnectorCommandOutput> {
    return de_RegisterConnectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
