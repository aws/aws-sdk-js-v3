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

import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { AssociateAdminAccountRequest } from "../models/models_0";
import {
  deserializeAws_json1_1AssociateAdminAccountCommand,
  serializeAws_json1_1AssociateAdminAccountCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link AssociateAdminAccountCommand}.
 */
export interface AssociateAdminAccountCommandInput extends AssociateAdminAccountRequest {}
/**
 * @public
 *
 * The output of {@link AssociateAdminAccountCommand}.
 */
export interface AssociateAdminAccountCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Sets the Firewall Manager administrator account. The account must be
 *       a member of the organization in Organizations whose resources you want to protect.
 *           Firewall Manager sets the permissions that allow the account to administer your Firewall Manager policies.</p>
 *          <p>The account that you associate with Firewall Manager is called the Firewall Manager administrator account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, AssociateAdminAccountCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, AssociateAdminAccountCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new AssociateAdminAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param AssociateAdminAccountCommandInput - {@link AssociateAdminAccountCommandInput}
 * @returns {@link AssociateAdminAccountCommandOutput}
 * @see {@link AssociateAdminAccountCommandInput} for command's `input` shape.
 * @see {@link AssociateAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (client fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry
 *       your request.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The parameters of the request were invalid.</p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation failed because there was nothing to do or the operation wasn't possible. For example, you might have
 *         submitted an <code>AssociateAdminAccount</code> request for an account ID that
 *             was already set as the Firewall Manager administrator. Or you might have tried to access a Region
 *   that's disabled by default, and that you need to enable for the Firewall Manager
 *   administrator account and for Organizations before you can access it.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The operation exceeds a resource limit, for example, the maximum number of
 *         <code>policy</code> objects that you can create for an Amazon Web Services account. For more information,
 *       see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-limits.html">Firewall
 *         Manager Limits</a> in the <i>WAF Developer Guide</i>.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 *
 */
export class AssociateAdminAccountCommand extends $Command<
  AssociateAdminAccountCommandInput,
  AssociateAdminAccountCommandOutput,
  FMSClientResolvedConfig
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
  constructor(readonly input: AssociateAdminAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateAdminAccountCommandInput, AssociateAdminAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateAdminAccountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "AssociateAdminAccountCommand";
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
  private serialize(input: AssociateAdminAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateAdminAccountCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateAdminAccountCommandOutput> {
    return deserializeAws_json1_1AssociateAdminAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
