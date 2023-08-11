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

import { VerifyDomainIdentityRequest, VerifyDomainIdentityResponse } from "../models/models_0";
import { de_VerifyDomainIdentityCommand, se_VerifyDomainIdentityCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link VerifyDomainIdentityCommand}.
 */
export interface VerifyDomainIdentityCommandInput extends VerifyDomainIdentityRequest {}
/**
 * @public
 *
 * The output of {@link VerifyDomainIdentityCommand}.
 */
export interface VerifyDomainIdentityCommandOutput extends VerifyDomainIdentityResponse, __MetadataBearer {}

/**
 * @public
 * <p>Adds a domain to the list of identities for your Amazon SES account in the current
 *             Amazon Web Services Region and attempts to verify it. For more information about verifying domains,
 *             see <a href="https://docs.aws.amazon.com/ses/latest/dg/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer
 *                 Guide.</i>
 *          </p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, VerifyDomainIdentityCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, VerifyDomainIdentityCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // VerifyDomainIdentityRequest
 *   Domain: "STRING_VALUE", // required
 * };
 * const command = new VerifyDomainIdentityCommand(input);
 * const response = await client.send(command);
 * // { // VerifyDomainIdentityResponse
 * //   VerificationToken: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param VerifyDomainIdentityCommandInput - {@link VerifyDomainIdentityCommandInput}
 * @returns {@link VerifyDomainIdentityCommandOutput}
 * @see {@link VerifyDomainIdentityCommandInput} for command's `input` shape.
 * @see {@link VerifyDomainIdentityCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example VerifyDomainIdentity
 * ```javascript
 * // The following example starts the domain verification process with Amazon SES:
 * const input = {
 *   "Domain": "example.com"
 * };
 * const command = new VerifyDomainIdentityCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "VerificationToken": "eoEmxw+YaYhb3h3iVJHuXMJXqeu1q1/wwmvjuEXAMPLE"
 * }
 * *\/
 * // example id: verifydomainidentity-1469049165936
 * ```
 *
 */
export class VerifyDomainIdentityCommand extends $Command<
  VerifyDomainIdentityCommandInput,
  VerifyDomainIdentityCommandOutput,
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
  constructor(readonly input: VerifyDomainIdentityCommandInput) {
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
  ): Handler<VerifyDomainIdentityCommandInput, VerifyDomainIdentityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, VerifyDomainIdentityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "VerifyDomainIdentityCommand";
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
  private serialize(input: VerifyDomainIdentityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_VerifyDomainIdentityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<VerifyDomainIdentityCommandOutput> {
    return de_VerifyDomainIdentityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
