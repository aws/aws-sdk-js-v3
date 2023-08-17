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

import { DeleteSafetyRuleRequest, DeleteSafetyRuleResponse } from "../models/models_0";
import { de_DeleteSafetyRuleCommand, se_DeleteSafetyRuleCommand } from "../protocols/Aws_restJson1";
import {
  Route53RecoveryControlConfigClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryControlConfigClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteSafetyRuleCommand}.
 */
export interface DeleteSafetyRuleCommandInput extends DeleteSafetyRuleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSafetyRuleCommand}.
 */
export interface DeleteSafetyRuleCommandOutput extends DeleteSafetyRuleResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a safety rule.</p>/&gt;
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryControlConfigClient, DeleteSafetyRuleCommand } from "@aws-sdk/client-route53-recovery-control-config"; // ES Modules import
 * // const { Route53RecoveryControlConfigClient, DeleteSafetyRuleCommand } = require("@aws-sdk/client-route53-recovery-control-config"); // CommonJS import
 * const client = new Route53RecoveryControlConfigClient(config);
 * const input = { // DeleteSafetyRuleRequest
 *   SafetyRuleArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteSafetyRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSafetyRuleCommandInput - {@link DeleteSafetyRuleCommandInput}
 * @returns {@link DeleteSafetyRuleCommandOutput}
 * @see {@link DeleteSafetyRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteSafetyRuleCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryControlConfigClientResolvedConfig | config} for Route53RecoveryControlConfigClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>500 response - InternalServiceError. Temporary service error. Retry the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>404 response - MalformedQueryString. The query string contains a syntax error or resource not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>400 response - Multiple causes. For example, you might have a malformed query string and input parameter might be out of range, or you might have used parameters together incorrectly.</p>
 *
 * @throws {@link Route53RecoveryControlConfigServiceException}
 * <p>Base exception class for all service exceptions from Route53RecoveryControlConfig service.</p>
 *
 */
export class DeleteSafetyRuleCommand extends $Command<
  DeleteSafetyRuleCommandInput,
  DeleteSafetyRuleCommandOutput,
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
  constructor(readonly input: DeleteSafetyRuleCommandInput) {
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
  ): Handler<DeleteSafetyRuleCommandInput, DeleteSafetyRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteSafetyRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53RecoveryControlConfigClient";
    const commandName = "DeleteSafetyRuleCommand";
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
  private serialize(input: DeleteSafetyRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteSafetyRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSafetyRuleCommandOutput> {
    return de_DeleteSafetyRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
