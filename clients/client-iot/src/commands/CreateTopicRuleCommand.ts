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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateTopicRuleRequest } from "../models/models_0";
import {
  deserializeAws_restJson1CreateTopicRuleCommand,
  serializeAws_restJson1CreateTopicRuleCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateTopicRuleCommand}.
 */
export interface CreateTopicRuleCommandInput extends CreateTopicRuleRequest {}
/**
 * @public
 *
 * The output of {@link CreateTopicRuleCommand}.
 */
export interface CreateTopicRuleCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Creates a rule. Creating rules is an administrator-level action. Any user who has
 *          permission to create rules will be able to access data processed by the rule.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateTopicRule</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateTopicRuleCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateTopicRuleCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateTopicRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateTopicRuleCommandInput - {@link CreateTopicRuleCommandInput}
 * @returns {@link CreateTopicRuleCommandOutput}
 * @see {@link CreateTopicRuleCommandInput} for command's `input` shape.
 * @see {@link CreateTopicRuleCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link ConflictingResourceUpdateException} (client fault)
 *  <p>A conflicting resource update exception. This exception is thrown when two pending
 *          updates cause a conflict.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link SqlParseException} (client fault)
 *  <p>The Rule-SQL expression can't be parsed correctly.</p>
 *
 *
 */
export class CreateTopicRuleCommand extends $Command<
  CreateTopicRuleCommandInput,
  CreateTopicRuleCommandOutput,
  IoTClientResolvedConfig
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
  constructor(readonly input: CreateTopicRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTopicRuleCommandInput, CreateTopicRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateTopicRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "CreateTopicRuleCommand";
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
  private serialize(input: CreateTopicRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateTopicRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTopicRuleCommandOutput> {
    return deserializeAws_restJson1CreateTopicRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
