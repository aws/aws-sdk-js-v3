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

import {
  MarketplaceMeteringClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceMeteringClient";
import { ResolveCustomerRequest, ResolveCustomerResult } from "../models/models_0";
import { de_ResolveCustomerCommand, se_ResolveCustomerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ResolveCustomerCommand}.
 */
export interface ResolveCustomerCommandInput extends ResolveCustomerRequest {}
/**
 * @public
 *
 * The output of {@link ResolveCustomerCommand}.
 */
export interface ResolveCustomerCommandOutput extends ResolveCustomerResult, __MetadataBearer {}

/**
 * @public
 * <p>
 *             <code>ResolveCustomer</code> is called by a SaaS application during the registration
 *             process. When a buyer visits your website during the registration process, the buyer
 *             submits a registration token through their browser. The registration token is resolved
 *             through this API to obtain a <code>CustomerIdentifier</code>
 *              along with the
 *                 <code>CustomerAWSAccountId</code> and
 *             <code>ProductCode</code>.</p>
 *         <note>
 *             <p>The API needs to called from the seller account id used to publish the SaaS
 *                 application to successfully resolve the token.</p>
 *             <p>For an example of using <code>ResolveCustomer</code>, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/saas-code-examples.html#saas-resolvecustomer-example"> ResolveCustomer code example</a> in the <i>AWS Marketplace Seller
 *                     Guide</i>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceMeteringClient, ResolveCustomerCommand } from "@aws-sdk/client-marketplace-metering"; // ES Modules import
 * // const { MarketplaceMeteringClient, ResolveCustomerCommand } = require("@aws-sdk/client-marketplace-metering"); // CommonJS import
 * const client = new MarketplaceMeteringClient(config);
 * const input = { // ResolveCustomerRequest
 *   RegistrationToken: "STRING_VALUE", // required
 * };
 * const command = new ResolveCustomerCommand(input);
 * const response = await client.send(command);
 * // { // ResolveCustomerResult
 * //   CustomerIdentifier: "STRING_VALUE",
 * //   ProductCode: "STRING_VALUE",
 * //   CustomerAWSAccountId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ResolveCustomerCommandInput - {@link ResolveCustomerCommandInput}
 * @returns {@link ResolveCustomerCommandOutput}
 * @see {@link ResolveCustomerCommandInput} for command's `input` shape.
 * @see {@link ResolveCustomerCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceMeteringClientResolvedConfig | config} for MarketplaceMeteringClient's `config` shape.
 *
 * @throws {@link DisabledApiException} (client fault)
 *  <p>The API is disabled in the Region.</p>
 *
 * @throws {@link ExpiredTokenException} (client fault)
 *  <p>The submitted registration token has expired. This can happen if the buyer's browser
 *             takes too long to redirect to your page, the buyer has resubmitted the registration
 *             token, or your application has held on to the registration token for too long. Your SaaS
 *             registration website should redeem this token as soon as it is submitted by the buyer's
 *             browser.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An internal error has occurred. Retry your request. If the problem persists, post a
 *             message with details on the AWS forums.</p>
 *
 * @throws {@link InvalidTokenException} (client fault)
 *  <p>Registration token is invalid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The calls to the API are throttled.</p>
 *
 * @throws {@link MarketplaceMeteringServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceMetering service.</p>
 *
 */
export class ResolveCustomerCommand extends $Command<
  ResolveCustomerCommandInput,
  ResolveCustomerCommandOutput,
  MarketplaceMeteringClientResolvedConfig
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
  constructor(readonly input: ResolveCustomerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MarketplaceMeteringClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResolveCustomerCommandInput, ResolveCustomerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ResolveCustomerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MarketplaceMeteringClient";
    const commandName = "ResolveCustomerCommand";
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
  private serialize(input: ResolveCustomerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ResolveCustomerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResolveCustomerCommandOutput> {
    return de_ResolveCustomerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
