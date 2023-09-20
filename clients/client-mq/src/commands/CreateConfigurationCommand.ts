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

import { CreateConfigurationRequest, CreateConfigurationResponse } from "../models/models_0";
import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import { de_CreateConfigurationCommand, se_CreateConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateConfigurationCommand}.
 */
export interface CreateConfigurationCommandInput extends CreateConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateConfigurationCommand}.
 */
export interface CreateConfigurationCommandOutput extends CreateConfigurationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, CreateConfigurationCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, CreateConfigurationCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const input = { // CreateConfigurationRequest
 *   AuthenticationStrategy: "SIMPLE" || "LDAP",
 *   EngineType: "ACTIVEMQ" || "RABBITMQ", // required
 *   EngineVersion: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Tags: { // __mapOf__string
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateConfigurationResponse
 * //   Arn: "STRING_VALUE",
 * //   AuthenticationStrategy: "SIMPLE" || "LDAP",
 * //   Created: new Date("TIMESTAMP"),
 * //   Id: "STRING_VALUE",
 * //   LatestRevision: { // ConfigurationRevision
 * //     Created: new Date("TIMESTAMP"), // required
 * //     Description: "STRING_VALUE",
 * //     Revision: Number("int"), // required
 * //   },
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateConfigurationCommandInput - {@link CreateConfigurationCommandInput}
 * @returns {@link CreateConfigurationCommandOutput}
 * @see {@link CreateConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for MqClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link MqServiceException}
 * <p>Base exception class for all service exceptions from Mq service.</p>
 *
 */
export class CreateConfigurationCommand extends $Command<
  CreateConfigurationCommandInput,
  CreateConfigurationCommandOutput,
  MqClientResolvedConfig
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
  constructor(readonly input: CreateConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MqClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateConfigurationCommandInput, CreateConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MqClient";
    const commandName = "CreateConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "mq",
        operation: "CreateConfiguration",
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
  private serialize(input: CreateConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateConfigurationCommandOutput> {
    return de_CreateConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
