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
  CreatePortfolioShareInput,
  CreatePortfolioShareInputFilterSensitiveLog,
  CreatePortfolioShareOutput,
  CreatePortfolioShareOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreatePortfolioShareCommand,
  serializeAws_json1_1CreatePortfolioShareCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

export interface CreatePortfolioShareCommandInput extends CreatePortfolioShareInput {}
export interface CreatePortfolioShareCommandOutput extends CreatePortfolioShareOutput, __MetadataBearer {}

/**
 * <p>Shares the specified portfolio with the specified account or organization node.
 *          Shares to an organization node can only be created by the management account of an
 *          organization or by a delegated administrator. You can share portfolios to an organization,
 *          an organizational unit, or a specific account.</p>
 *          <p>Note that if a delegated admin is de-registered, they can no longer create portfolio shares.</p>
 *         <p>
 *             <code>AWSOrganizationsAccess</code> must be enabled in order to create a portfolio share to an organization node.</p>
 *          <p>You can't share a shared resource, including portfolios that contain a shared product.</p>
 *          <p>If the portfolio share with the specified account or organization node already exists, this action will have no effect
 *          and will not return an error. To update an existing share, you must use the <code> UpdatePortfolioShare</code> API instead. </p>
 *
 *          <note>
 *             <p>When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is
 *          then shared with other accounts. For a user in a recipient account who is <i>not</i> an Service Catalog Admin,
 *          but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal
 *          name association for the portfolio. Although this user may not know which principal names are associated through
 *          Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then
 *          Service Catalog recommends using <code>PrincipalType</code> as <code>IAM</code>. With this configuration,
 *          the <code>PrincipalARN</code> must already exist in the recipient account before it can be associated. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, CreatePortfolioShareCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, CreatePortfolioShareCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new CreatePortfolioShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePortfolioShareCommandInput} for command's `input` shape.
 * @see {@link CreatePortfolioShareCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 */
export class CreatePortfolioShareCommand extends $Command<
  CreatePortfolioShareCommandInput,
  CreatePortfolioShareCommandOutput,
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

  constructor(readonly input: CreatePortfolioShareCommandInput) {
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
  ): Handler<CreatePortfolioShareCommandInput, CreatePortfolioShareCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreatePortfolioShareCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "CreatePortfolioShareCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePortfolioShareInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreatePortfolioShareOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePortfolioShareCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreatePortfolioShareCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePortfolioShareCommandOutput> {
    return deserializeAws_json1_1CreatePortfolioShareCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
