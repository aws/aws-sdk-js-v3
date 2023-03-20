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

import { DescribeSafetyRuleRequest, DescribeSafetyRuleResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeSafetyRuleCommand,
  serializeAws_restJson1DescribeSafetyRuleCommand,
} from "../protocols/Aws_restJson1";
import {
  Route53RecoveryControlConfigClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryControlConfigClient";

/**
 * @public
 *
 * The input for {@link DescribeSafetyRuleCommand}.
 */
export interface DescribeSafetyRuleCommandInput extends DescribeSafetyRuleRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSafetyRuleCommand}.
 */
export interface DescribeSafetyRuleCommandOutput extends DescribeSafetyRuleResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a safety rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryControlConfigClient, DescribeSafetyRuleCommand } from "@aws-sdk/client-route53-recovery-control-config"; // ES Modules import
 * // const { Route53RecoveryControlConfigClient, DescribeSafetyRuleCommand } = require("@aws-sdk/client-route53-recovery-control-config"); // CommonJS import
 * const client = new Route53RecoveryControlConfigClient(config);
 * const command = new DescribeSafetyRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeSafetyRuleCommandInput - {@link DescribeSafetyRuleCommandInput}
 * @returns {@link DescribeSafetyRuleCommandOutput}
 * @see {@link DescribeSafetyRuleCommandInput} for command's `input` shape.
 * @see {@link DescribeSafetyRuleCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryControlConfigClientResolvedConfig | config} for Route53RecoveryControlConfigClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>404 response - MalformedQueryString. The query string contains a syntax error or resource not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>400 response - Multiple causes. For example, you might have a malformed query string and input parameter might be out of range, or you might have used parameters together incorrectly.</p>
 *
 *
 */
export class DescribeSafetyRuleCommand extends $Command<
  DescribeSafetyRuleCommandInput,
  DescribeSafetyRuleCommandOutput,
  Route53RecoveryControlConfigClientResolvedConfig
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
  constructor(readonly input: DescribeSafetyRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53RecoveryControlConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSafetyRuleCommandInput, DescribeSafetyRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSafetyRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53RecoveryControlConfigClient";
    const commandName = "DescribeSafetyRuleCommand";
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
  private serialize(input: DescribeSafetyRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeSafetyRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSafetyRuleCommandOutput> {
    return deserializeAws_restJson1DescribeSafetyRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
