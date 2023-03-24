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

import { PutIdentityPolicyRequest, PutIdentityPolicyResponse } from "../models/models_0";
import {
  deserializeAws_queryPutIdentityPolicyCommand,
  serializeAws_queryPutIdentityPolicyCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 *
 * The input for {@link PutIdentityPolicyCommand}.
 */
export interface PutIdentityPolicyCommandInput extends PutIdentityPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutIdentityPolicyCommand}.
 */
export interface PutIdentityPolicyCommandOutput extends PutIdentityPolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Adds or updates a sending authorization policy for the specified identity (an email
 *             address or a domain).</p>
 *         <note>
 *             <p>This API is for the identity owner only. If you have not verified the identity,
 *                 this API will return an error.</p>
 *         </note>
 *         <p>Sending authorization is a feature that enables an identity owner to authorize other
 *             senders to use its identities. For information about using sending authorization, see
 *             the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer
 *                 Guide</a>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, PutIdentityPolicyCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, PutIdentityPolicyCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = {
 *   Identity: "STRING_VALUE", // required
 *   PolicyName: "STRING_VALUE", // required
 *   Policy: "STRING_VALUE", // required
 * };
 * const command = new PutIdentityPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param PutIdentityPolicyCommandInput - {@link PutIdentityPolicyCommandInput}
 * @returns {@link PutIdentityPolicyCommandOutput}
 * @see {@link PutIdentityPolicyCommandInput} for command's `input` shape.
 * @see {@link PutIdentityPolicyCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link InvalidPolicyException} (client fault)
 *  <p>Indicates that the provided policy is invalid. Check the error stack for more
 *             information about what caused the error.</p>
 *
 *
 * @example PutIdentityPolicy
 * ```javascript
 * // The following example adds a sending authorization policy to an identity:
 * const input = {
 *   "Identity": "example.com",
 *   "Policy": "{\"Version\":\"2008-10-17\",\"Statement\":[{\"Sid\":\"stmt1469123904194\",\"Effect\":\"Allow\",\"Principal\":{\"AWS\":\"arn:aws:iam::123456789012:root\"},\"Action\":[\"ses:SendEmail\",\"ses:SendRawEmail\"],\"Resource\":\"arn:aws:ses:us-east-1:EXAMPLE65304:identity/example.com\"}]}",
 *   "PolicyName": "MyPolicy"
 * };
 * const command = new PutIdentityPolicyCommand(input);
 * await client.send(command);
 * // example id: putidentitypolicy-1469124560016
 * ```
 *
 */
export class PutIdentityPolicyCommand extends $Command<
  PutIdentityPolicyCommandInput,
  PutIdentityPolicyCommandOutput,
  SESClientResolvedConfig
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
  constructor(readonly input: PutIdentityPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutIdentityPolicyCommandInput, PutIdentityPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutIdentityPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "PutIdentityPolicyCommand";
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
  private serialize(input: PutIdentityPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryPutIdentityPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutIdentityPolicyCommandOutput> {
    return deserializeAws_queryPutIdentityPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
