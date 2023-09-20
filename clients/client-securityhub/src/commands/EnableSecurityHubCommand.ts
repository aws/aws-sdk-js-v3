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

import { EnableSecurityHubRequest, EnableSecurityHubResponse } from "../models/models_2";
import { de_EnableSecurityHubCommand, se_EnableSecurityHubCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link EnableSecurityHubCommand}.
 */
export interface EnableSecurityHubCommandInput extends EnableSecurityHubRequest {}
/**
 * @public
 *
 * The output of {@link EnableSecurityHubCommand}.
 */
export interface EnableSecurityHubCommandOutput extends EnableSecurityHubResponse, __MetadataBearer {}

/**
 * @public
 * <p>Enables Security Hub for your account in the current Region or the Region you specify in the
 *          request.</p>
 *          <p>When you enable Security Hub, you grant to Security Hub the permissions necessary to gather findings
 *          from other services that are integrated with Security Hub.</p>
 *          <p>When you use the <code>EnableSecurityHub</code> operation to enable Security Hub, you also
 *          automatically enable the following standards:</p>
 *          <ul>
 *             <li>
 *                <p>Center for Internet Security (CIS) Amazon Web Services Foundations Benchmark v1.2.0</p>
 *             </li>
 *             <li>
 *                <p>Amazon Web Services Foundational Security Best Practices</p>
 *             </li>
 *          </ul>
 *          <p>Other standards are not automatically enabled. </p>
 *          <p>To opt out of automatically enabled standards, set
 *             <code>EnableDefaultStandards</code> to <code>false</code>.</p>
 *          <p>After you enable Security Hub, to enable a standard, use the <code>BatchEnableStandards</code> operation. To disable a standard, use the
 *                <code>BatchDisableStandards</code> operation.</p>
 *          <p>To learn more, see the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-settingup.html">setup information</a> in the <i>Security Hub User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, EnableSecurityHubCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, EnableSecurityHubCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // EnableSecurityHubRequest
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   EnableDefaultStandards: true || false,
 *   ControlFindingGenerator: "STANDARD_CONTROL" || "SECURITY_CONTROL",
 * };
 * const command = new EnableSecurityHubCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EnableSecurityHubCommandInput - {@link EnableSecurityHubCommandInput}
 * @returns {@link EnableSecurityHubCommandOutput}
 * @see {@link EnableSecurityHubCommandInput} for command's `input` shape.
 * @see {@link EnableSecurityHubCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource specified in the request conflicts with an existing resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @example To activate Security Hub
 * ```javascript
 * // The following example activates the Security Hub service in the requesting AWS account. The service is activated in the current AWS Region or the Region that you specify in the request. Some standards are automatically turned on in your account unless you opt out. To determine which standards are automatically turned on, see the Security Hub documentation.
 * const input = {
 *   "EnableDefaultStandards": true,
 *   "Tags": {
 *     "Department": "Security"
 *   }
 * };
 * const command = new EnableSecurityHubCommand(input);
 * await client.send(command);
 * // example id: to-activate-security-hub-1676998538599
 * ```
 *
 */
export class EnableSecurityHubCommand extends $Command<
  EnableSecurityHubCommandInput,
  EnableSecurityHubCommandOutput,
  SecurityHubClientResolvedConfig
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
  constructor(readonly input: EnableSecurityHubCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EnableSecurityHubCommandInput, EnableSecurityHubCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EnableSecurityHubCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "EnableSecurityHubCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SecurityHubAPIService",
        operation: "EnableSecurityHub",
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
  private serialize(input: EnableSecurityHubCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_EnableSecurityHubCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableSecurityHubCommandOutput> {
    return de_EnableSecurityHubCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
