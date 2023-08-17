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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { AssociatePhoneNumberContactFlowRequest } from "../models/models_0";
import {
  de_AssociatePhoneNumberContactFlowCommand,
  se_AssociatePhoneNumberContactFlowCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociatePhoneNumberContactFlowCommand}.
 */
export interface AssociatePhoneNumberContactFlowCommandInput extends AssociatePhoneNumberContactFlowRequest {}
/**
 * @public
 *
 * The output of {@link AssociatePhoneNumberContactFlowCommand}.
 */
export interface AssociatePhoneNumberContactFlowCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Associates a flow with a phone number claimed to your Amazon Connect instance.</p>
 *          <important>
 *             <p>If the number is claimed to a traffic distribution group, and you are calling this API using an instance in the
 *      Amazon Web Services Region where the traffic distribution group was created, you can use either a full phone number
 *     ARN or UUID value for the <code>PhoneNumberId</code> URI request parameter. However, if the
 *     number is claimed to a traffic distribution group and you are calling this API using an instance in the alternate
 *      Amazon Web Services Region associated with the traffic distribution group, you must provide a full phone number ARN.
 *     If a UUID is provided
 *     in
 *     this scenario, you will receive a
 *     <code>ResourceNotFoundException</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociatePhoneNumberContactFlowCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociatePhoneNumberContactFlowCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // AssociatePhoneNumberContactFlowRequest
 *   PhoneNumberId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   ContactFlowId: "STRING_VALUE", // required
 * };
 * const command = new AssociatePhoneNumberContactFlowCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociatePhoneNumberContactFlowCommandInput - {@link AssociatePhoneNumberContactFlowCommandInput}
 * @returns {@link AssociatePhoneNumberContactFlowCommandOutput}
 * @see {@link AssociatePhoneNumberContactFlowCommandInput} for command's `input` shape.
 * @see {@link AssociatePhoneNumberContactFlowCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class AssociatePhoneNumberContactFlowCommand extends $Command<
  AssociatePhoneNumberContactFlowCommandInput,
  AssociatePhoneNumberContactFlowCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: AssociatePhoneNumberContactFlowCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociatePhoneNumberContactFlowCommandInput, AssociatePhoneNumberContactFlowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociatePhoneNumberContactFlowCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "AssociatePhoneNumberContactFlowCommand";
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
  private serialize(
    input: AssociatePhoneNumberContactFlowCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_AssociatePhoneNumberContactFlowCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociatePhoneNumberContactFlowCommandOutput> {
    return de_AssociatePhoneNumberContactFlowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
