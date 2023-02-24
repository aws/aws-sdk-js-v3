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
  DisassociatePrincipalFromPortfolioInput,
  DisassociatePrincipalFromPortfolioInputFilterSensitiveLog,
  DisassociatePrincipalFromPortfolioOutput,
  DisassociatePrincipalFromPortfolioOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DisassociatePrincipalFromPortfolioCommand,
  serializeAws_json1_1DisassociatePrincipalFromPortfolioCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

export interface DisassociatePrincipalFromPortfolioCommandInput extends DisassociatePrincipalFromPortfolioInput {}
export interface DisassociatePrincipalFromPortfolioCommandOutput
  extends DisassociatePrincipalFromPortfolioOutput,
    __MetadataBearer {}

/**
 * <p>Disassociates a previously associated principal ARN from a specified
 *          portfolio.</p>
 *          <p>The <code>PrincipalType</code> and <code>PrincipalARN</code> must match the
 *          <code>AssociatePrincipalWithPortfolio</code> call request details. For example,
 *          to disassociate an association created with a <code>PrincipalARN</code> of <code>PrincipalType</code>
 *          IAM you must use the <code>PrincipalType</code> IAM when calling <code>DisassociatePrincipalFromPortfolio</code>. </p>
 *          <p>For portfolios that have been shared with principal name sharing enabled: after disassociating a principal,
 *    share recipient accounts will no longer be able to provision products in this portfolio using a role matching the name
 *    of the associated principal. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DisassociatePrincipalFromPortfolioCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DisassociatePrincipalFromPortfolioCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DisassociatePrincipalFromPortfolioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociatePrincipalFromPortfolioCommandInput} for command's `input` shape.
 * @see {@link DisassociatePrincipalFromPortfolioCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 */
export class DisassociatePrincipalFromPortfolioCommand extends $Command<
  DisassociatePrincipalFromPortfolioCommandInput,
  DisassociatePrincipalFromPortfolioCommandOutput,
  ServiceCatalogClientResolvedConfig
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

  constructor(readonly input: DisassociatePrincipalFromPortfolioCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociatePrincipalFromPortfolioCommandInput, DisassociatePrincipalFromPortfolioCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociatePrincipalFromPortfolioCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "DisassociatePrincipalFromPortfolioCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociatePrincipalFromPortfolioInputFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociatePrincipalFromPortfolioOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociatePrincipalFromPortfolioCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociatePrincipalFromPortfolioCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociatePrincipalFromPortfolioCommandOutput> {
    return deserializeAws_json1_1DisassociatePrincipalFromPortfolioCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
