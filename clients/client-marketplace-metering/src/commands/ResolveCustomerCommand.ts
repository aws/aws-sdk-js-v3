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

import {
  MarketplaceMeteringClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceMeteringClient";
import {
  ResolveCustomerRequest,
  ResolveCustomerRequestFilterSensitiveLog,
  ResolveCustomerResult,
  ResolveCustomerResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ResolveCustomerCommand,
  serializeAws_json1_1ResolveCustomerCommand,
} from "../protocols/Aws_json1_1";

export interface ResolveCustomerCommandInput extends ResolveCustomerRequest {}
export interface ResolveCustomerCommandOutput extends ResolveCustomerResult, __MetadataBearer {}

/**
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
 * const command = new ResolveCustomerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResolveCustomerCommandInput} for command's `input` shape.
 * @see {@link ResolveCustomerCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceMeteringClientResolvedConfig | config} for MarketplaceMeteringClient's `config` shape.
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
      inputFilterSensitiveLog: ResolveCustomerRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ResolveCustomerResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResolveCustomerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ResolveCustomerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResolveCustomerCommandOutput> {
    return deserializeAws_json1_1ResolveCustomerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
