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
import { UpdateUserIdentityInfoRequest } from "../models/models_2";
import { de_UpdateUserIdentityInfoCommand, se_UpdateUserIdentityInfoCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateUserIdentityInfoCommand}.
 */
export interface UpdateUserIdentityInfoCommandInput extends UpdateUserIdentityInfoRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUserIdentityInfoCommand}.
 */
export interface UpdateUserIdentityInfoCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Updates the identity information for the specified user.</p>
 *          <important>
 *             <p>We strongly recommend limiting who has the ability to invoke
 *      <code>UpdateUserIdentityInfo</code>. Someone with that ability can change the login credentials
 *     of other users by changing their email address. This poses a security risk to your organization.
 *     They can change the email address of a user to the attacker's email address, and then reset the
 *     password through email. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-best-practices.html">Best Practices for
 *      Security Profiles</a> in the <i>Amazon Connect Administrator
 *     Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateUserIdentityInfoCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateUserIdentityInfoCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // UpdateUserIdentityInfoRequest
 *   IdentityInfo: { // UserIdentityInfo
 *     FirstName: "STRING_VALUE",
 *     LastName: "STRING_VALUE",
 *     Email: "STRING_VALUE",
 *     SecondaryEmail: "STRING_VALUE",
 *     Mobile: "STRING_VALUE",
 *   },
 *   UserId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new UpdateUserIdentityInfoCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateUserIdentityInfoCommandInput - {@link UpdateUserIdentityInfoCommandInput}
 * @returns {@link UpdateUserIdentityInfoCommandOutput}
 * @see {@link UpdateUserIdentityInfoCommandInput} for command's `input` shape.
 * @see {@link UpdateUserIdentityInfoCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
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
export class UpdateUserIdentityInfoCommand extends $Command<
  UpdateUserIdentityInfoCommandInput,
  UpdateUserIdentityInfoCommandOutput,
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
  constructor(readonly input: UpdateUserIdentityInfoCommandInput) {
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
  ): Handler<UpdateUserIdentityInfoCommandInput, UpdateUserIdentityInfoCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateUserIdentityInfoCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "UpdateUserIdentityInfoCommand";
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
  private serialize(input: UpdateUserIdentityInfoCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateUserIdentityInfoCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateUserIdentityInfoCommandOutput> {
    return de_UpdateUserIdentityInfoCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
