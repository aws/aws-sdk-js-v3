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
  UpdatePortfolioShareInput,
  UpdatePortfolioShareInputFilterSensitiveLog,
  UpdatePortfolioShareOutput,
  UpdatePortfolioShareOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdatePortfolioShareCommand,
  serializeAws_json1_1UpdatePortfolioShareCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

export interface UpdatePortfolioShareCommandInput extends UpdatePortfolioShareInput {}
export interface UpdatePortfolioShareCommandOutput extends UpdatePortfolioShareOutput, __MetadataBearer {}

/**
 * <p>Updates the specified portfolio share. You can use this API to enable or disable <code>TagOptions</code> sharing
 *          or Principal sharing for an existing portfolio share. </p>
 *
 *          <p>The portfolio share cannot be updated if the <code>CreatePortfolioShare</code> operation is <code>IN_PROGRESS</code>, as the share is not available to recipient entities. In this case, you must wait for the portfolio share to be COMPLETED.</p>
 *
 *          <p>You must provide the <code>accountId</code> or organization node in the input, but not both.</p>
 *
 *          <p>If the portfolio is shared to both an external account and an organization node, and both shares need to be updated, you must invoke <code>UpdatePortfolioShare</code> separately for each share type. </p>
 *
 *          <p>This API cannot be used for removing the portfolio share. You must use <code>DeletePortfolioShare</code> API for that action. </p>
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
 * import { ServiceCatalogClient, UpdatePortfolioShareCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, UpdatePortfolioShareCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new UpdatePortfolioShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePortfolioShareCommandInput} for command's `input` shape.
 * @see {@link UpdatePortfolioShareCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 */
export class UpdatePortfolioShareCommand extends $Command<
  UpdatePortfolioShareCommandInput,
  UpdatePortfolioShareCommandOutput,
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

  constructor(readonly input: UpdatePortfolioShareCommandInput) {
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
  ): Handler<UpdatePortfolioShareCommandInput, UpdatePortfolioShareCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdatePortfolioShareCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "UpdatePortfolioShareCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePortfolioShareInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdatePortfolioShareOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdatePortfolioShareCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdatePortfolioShareCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePortfolioShareCommandOutput> {
    return deserializeAws_json1_1UpdatePortfolioShareCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
