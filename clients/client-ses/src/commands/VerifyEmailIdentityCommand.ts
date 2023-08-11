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

import { VerifyEmailIdentityRequest, VerifyEmailIdentityResponse } from "../models/models_0";
import { de_VerifyEmailIdentityCommand, se_VerifyEmailIdentityCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link VerifyEmailIdentityCommand}.
 */
export interface VerifyEmailIdentityCommandInput extends VerifyEmailIdentityRequest {}
/**
 * @public
 *
 * The output of {@link VerifyEmailIdentityCommand}.
 */
export interface VerifyEmailIdentityCommandOutput extends VerifyEmailIdentityResponse, __MetadataBearer {}

/**
 * @public
 * <p>Adds an email address to the list of identities for your Amazon SES account in the current
 *             Amazon Web Services Region and attempts to verify it. As a result of executing this operation, a
 *             verification email is sent to the specified address.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, VerifyEmailIdentityCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, VerifyEmailIdentityCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // VerifyEmailIdentityRequest
 *   EmailAddress: "STRING_VALUE", // required
 * };
 * const command = new VerifyEmailIdentityCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param VerifyEmailIdentityCommandInput - {@link VerifyEmailIdentityCommandInput}
 * @returns {@link VerifyEmailIdentityCommandOutput}
 * @see {@link VerifyEmailIdentityCommandInput} for command's `input` shape.
 * @see {@link VerifyEmailIdentityCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example VerifyEmailIdentity
 * ```javascript
 * // The following example starts the email address verification process with Amazon SES:
 * const input = {
 *   "EmailAddress": "user@example.com"
 * };
 * const command = new VerifyEmailIdentityCommand(input);
 * await client.send(command);
 * // example id: verifyemailidentity-1469049068623
 * ```
 *
 */
export class VerifyEmailIdentityCommand extends $Command<
  VerifyEmailIdentityCommandInput,
  VerifyEmailIdentityCommandOutput,
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
  constructor(readonly input: VerifyEmailIdentityCommandInput) {
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
  ): Handler<VerifyEmailIdentityCommandInput, VerifyEmailIdentityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, VerifyEmailIdentityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "VerifyEmailIdentityCommand";
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
  private serialize(input: VerifyEmailIdentityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_VerifyEmailIdentityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<VerifyEmailIdentityCommandOutput> {
    return de_VerifyEmailIdentityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
