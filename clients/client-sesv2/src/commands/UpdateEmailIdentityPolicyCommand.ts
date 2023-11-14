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

import { UpdateEmailIdentityPolicyRequest, UpdateEmailIdentityPolicyResponse } from "../models/models_1";
import { de_UpdateEmailIdentityPolicyCommand, se_UpdateEmailIdentityPolicyCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateEmailIdentityPolicyCommand}.
 */
export interface UpdateEmailIdentityPolicyCommandInput extends UpdateEmailIdentityPolicyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEmailIdentityPolicyCommand}.
 */
export interface UpdateEmailIdentityPolicyCommandOutput extends UpdateEmailIdentityPolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the specified sending authorization policy for the given identity (an email
 *             address or a domain). This API returns successfully even if a policy with the specified
 *             name does not exist.</p>
 *          <note>
 *             <p>This API is for the identity owner only. If you have not verified the identity,
 *                 this API will return an error.</p>
 *          </note>
 *          <p>Sending authorization is a feature that enables an identity owner to authorize other
 *             senders to use its identities. For information about using sending authorization, see
 *             the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer
 *                 Guide</a>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, UpdateEmailIdentityPolicyCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, UpdateEmailIdentityPolicyCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // UpdateEmailIdentityPolicyRequest
 *   EmailIdentity: "STRING_VALUE", // required
 *   PolicyName: "STRING_VALUE", // required
 *   Policy: "STRING_VALUE", // required
 * };
 * const command = new UpdateEmailIdentityPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateEmailIdentityPolicyCommandInput - {@link UpdateEmailIdentityPolicyCommandInput}
 * @returns {@link UpdateEmailIdentityPolicyCommandOutput}
 * @see {@link UpdateEmailIdentityPolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateEmailIdentityPolicyCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 */
export class UpdateEmailIdentityPolicyCommand extends $Command<
  UpdateEmailIdentityPolicyCommandInput,
  UpdateEmailIdentityPolicyCommandOutput,
  SESv2ClientResolvedConfig
> {
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
  constructor(readonly input: UpdateEmailIdentityPolicyCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateEmailIdentityPolicyCommandInput, UpdateEmailIdentityPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateEmailIdentityPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "UpdateEmailIdentityPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SimpleEmailService_v2",
        operation: "UpdateEmailIdentityPolicy",
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
  private serialize(input: UpdateEmailIdentityPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateEmailIdentityPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateEmailIdentityPolicyCommandOutput> {
    return de_UpdateEmailIdentityPolicyCommand(output, context);
  }
}
