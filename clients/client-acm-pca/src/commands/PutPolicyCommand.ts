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

import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { PutPolicyRequest } from "../models/models_0";
import { de_PutPolicyCommand, se_PutPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutPolicyCommand}.
 */
export interface PutPolicyCommandInput extends PutPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutPolicyCommand}.
 */
export interface PutPolicyCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Attaches a resource-based policy to a private CA. </p>
 *          <p>A policy can also be applied by sharing a private CA through Amazon Web Services Resource Access
 * 			Manager (RAM). For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account
 * 			Access</a>.</p>
 *          <p>The policy can be displayed with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetPolicy.html">GetPolicy</a> and removed with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePolicy.html">DeletePolicy</a>.</p>
 *          <p class="title">
 *             <b>About Policies</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>A policy grants access on a private CA to an Amazon Web Services customer account, to Amazon Web Services Organizations, or to
 * 			an Amazon Web Services Organizations unit. Policies are under the control of a CA administrator. For more information,
 * 			see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p>
 *             </li>
 *             <li>
 *                <p>A policy permits a user of Certificate Manager (ACM) to issue ACM certificates
 * 			signed by a CA in another account.</p>
 *             </li>
 *             <li>
 *                <p>For ACM to manage automatic renewal of these certificates,
 * 			the ACM user must configure a Service Linked Role (SLR). The SLR allows
 * 			the ACM service to assume the identity of the user, subject to confirmation against the
 * 			Amazon Web Services Private CA policy. For more information, see
 * 			<a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-slr.html">Using a
 *             Service Linked Role with ACM</a>.</p>
 *             </li>
 *             <li>
 *                <p>Updates made in Amazon Web Services Resource Manager (RAM) are reflected in policies. For more information,
 * 			see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account
 * 			Access</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, PutPolicyCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, PutPolicyCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const input = { // PutPolicyRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   Policy: "STRING_VALUE", // required
 * };
 * const command = new PutPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutPolicyCommandInput - {@link PutPolicyCommandInput}
 * @returns {@link PutPolicyCommandOutput}
 * @see {@link PutPolicyCommandInput} for command's `input` shape.
 * @see {@link PutPolicyCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for ACMPCAClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>A previous update to your private CA is still ongoing.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The requested Amazon Resource Name (ARN) does not refer to an existing
 * 			resource.</p>
 *
 * @throws {@link InvalidPolicyException} (client fault)
 *  <p>The resource policy is invalid or is missing a required statement. For general
 * 			information about IAM policy and statement structure, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policies-json">Overview of JSON Policies</a>.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>The state of the private CA does not allow this action to occur.</p>
 *
 * @throws {@link LockoutPreventedException} (client fault)
 *  <p>The current action was prevented because it would lock the caller out from performing
 * 			subsequent actions. Verify that the specified parameters would not result in the caller
 * 			being denied access to the resource. </p>
 *
 * @throws {@link RequestFailedException} (client fault)
 *  <p>The request has failed for an unspecified reason.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource such as a private CA, S3 bucket, certificate, audit report, or policy
 * 			cannot be found.</p>
 *
 * @throws {@link ACMPCAServiceException}
 * <p>Base exception class for all service exceptions from ACMPCA service.</p>
 *
 */
export class PutPolicyCommand extends $Command<
  PutPolicyCommandInput,
  PutPolicyCommandOutput,
  ACMPCAClientResolvedConfig
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
  constructor(readonly input: PutPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMPCAClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutPolicyCommandInput, PutPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutPolicyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMPCAClient";
    const commandName = "PutPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ACMPrivateCA",
        operation: "PutPolicy",
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
  private serialize(input: PutPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutPolicyCommandOutput> {
    return de_PutPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
