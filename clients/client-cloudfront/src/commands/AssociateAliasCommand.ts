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

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { AssociateAliasRequest, AssociateAliasRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restXmlAssociateAliasCommand,
  serializeAws_restXmlAssociateAliasCommand,
} from "../protocols/Aws_restXml";

export interface AssociateAliasCommandInput extends AssociateAliasRequest {}
export interface AssociateAliasCommandOutput extends __MetadataBearer {}

/**
 * <p>Associates an alias (also known as a CNAME or an alternate domain name) with a CloudFront
 * 			distribution.</p>
 *          <p>With this operation you can move an alias that's already in use on a CloudFront distribution
 * 			to a different distribution in one step. This prevents the downtime that could occur if
 * 			you first remove the alias from one distribution and then separately add the alias to
 * 			another distribution.</p>
 *          <p>To use this operation to associate an alias with a distribution, you provide the alias
 * 			and the ID of the target distribution for the alias. For more information, including how
 * 			to set up the target distribution, prerequisites that you must complete, and other
 * 			restrictions, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html#alternate-domain-names-move">Moving an alternate domain name to a different
 * 				distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, AssociateAliasCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, AssociateAliasCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new AssociateAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateAliasCommandInput} for command's `input` shape.
 * @see {@link AssociateAliasCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 */
export class AssociateAliasCommand extends $Command<
  AssociateAliasCommandInput,
  AssociateAliasCommandOutput,
  CloudFrontClientResolvedConfig
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

  constructor(readonly input: AssociateAliasCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateAliasCommandInput, AssociateAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateAliasCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "AssociateAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateAliasRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlAssociateAliasCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateAliasCommandOutput> {
    return deserializeAws_restXmlAssociateAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
