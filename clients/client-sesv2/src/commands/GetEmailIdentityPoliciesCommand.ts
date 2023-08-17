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

import { GetEmailIdentityPoliciesRequest, GetEmailIdentityPoliciesResponse } from "../models/models_0";
import { de_GetEmailIdentityPoliciesCommand, se_GetEmailIdentityPoliciesCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetEmailIdentityPoliciesCommand}.
 */
export interface GetEmailIdentityPoliciesCommandInput extends GetEmailIdentityPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link GetEmailIdentityPoliciesCommand}.
 */
export interface GetEmailIdentityPoliciesCommandOutput extends GetEmailIdentityPoliciesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the requested sending authorization policies for the given identity (an email
 *             address or a domain). The policies are returned as a map of policy names to policy
 *             contents. You can retrieve a maximum of 20 policies at a time.</p>
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
 * import { SESv2Client, GetEmailIdentityPoliciesCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetEmailIdentityPoliciesCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // GetEmailIdentityPoliciesRequest
 *   EmailIdentity: "STRING_VALUE", // required
 * };
 * const command = new GetEmailIdentityPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // GetEmailIdentityPoliciesResponse
 * //   Policies: { // PolicyMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEmailIdentityPoliciesCommandInput - {@link GetEmailIdentityPoliciesCommandInput}
 * @returns {@link GetEmailIdentityPoliciesCommandOutput}
 * @see {@link GetEmailIdentityPoliciesCommandInput} for command's `input` shape.
 * @see {@link GetEmailIdentityPoliciesCommandOutput} for command's `response` shape.
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
export class GetEmailIdentityPoliciesCommand extends $Command<
  GetEmailIdentityPoliciesCommandInput,
  GetEmailIdentityPoliciesCommandOutput,
  SESv2ClientResolvedConfig
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
  constructor(readonly input: GetEmailIdentityPoliciesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEmailIdentityPoliciesCommandInput, GetEmailIdentityPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetEmailIdentityPoliciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "GetEmailIdentityPoliciesCommand";
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
  private serialize(input: GetEmailIdentityPoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetEmailIdentityPoliciesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEmailIdentityPoliciesCommandOutput> {
    return de_GetEmailIdentityPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
