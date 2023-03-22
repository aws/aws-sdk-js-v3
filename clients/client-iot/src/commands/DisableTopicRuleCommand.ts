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
import { DisableTopicRuleRequest } from "../models/models_1";
import {
  deserializeAws_restJson1DisableTopicRuleCommand,
  serializeAws_restJson1DisableTopicRuleCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DisableTopicRuleCommand}.
 */
export interface DisableTopicRuleCommandInput extends DisableTopicRuleRequest {}
/**
 * @public
 *
 * The output of {@link DisableTopicRuleCommand}.
 */
export interface DisableTopicRuleCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Disables the rule.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DisableTopicRule</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DisableTopicRuleCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DisableTopicRuleCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DisableTopicRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DisableTopicRuleCommandInput - {@link DisableTopicRuleCommandInput}
 * @returns {@link DisableTopicRuleCommandOutput}
 * @see {@link DisableTopicRuleCommandInput} for command's `input` shape.
 * @see {@link DisableTopicRuleCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 *
 */
export class DisableTopicRuleCommand extends $Command<
  DisableTopicRuleCommandInput,
  DisableTopicRuleCommandOutput,
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
  constructor(readonly input: DisableTopicRuleCommandInput) {
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
  ): Handler<DisableTopicRuleCommandInput, DisableTopicRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisableTopicRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DisableTopicRuleCommand";
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
  private serialize(input: DisableTopicRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DisableTopicRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisableTopicRuleCommandOutput> {
    return deserializeAws_restJson1DisableTopicRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
