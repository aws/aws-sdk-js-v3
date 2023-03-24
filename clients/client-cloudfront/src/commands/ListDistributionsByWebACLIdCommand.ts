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
import {
  ListDistributionsByWebACLIdRequest,
  ListDistributionsByWebACLIdResult,
  ListDistributionsByWebACLIdResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restXmlListDistributionsByWebACLIdCommand,
  serializeAws_restXmlListDistributionsByWebACLIdCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 *
 * The input for {@link ListDistributionsByWebACLIdCommand}.
 */
export interface ListDistributionsByWebACLIdCommandInput extends ListDistributionsByWebACLIdRequest {}
/**
 * @public
 *
 * The output of {@link ListDistributionsByWebACLIdCommand}.
 */
export interface ListDistributionsByWebACLIdCommandOutput extends ListDistributionsByWebACLIdResult, __MetadataBearer {}

/**
 * @public
 * <p>List the distributions that are associated with a specified WAF web ACL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListDistributionsByWebACLIdCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListDistributionsByWebACLIdCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = {
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 *   WebACLId: "STRING_VALUE", // required
 * };
 * const command = new ListDistributionsByWebACLIdCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListDistributionsByWebACLIdCommandInput - {@link ListDistributionsByWebACLIdCommandInput}
 * @returns {@link ListDistributionsByWebACLIdCommandOutput}
 * @see {@link ListDistributionsByWebACLIdCommandInput} for command's `input` shape.
 * @see {@link ListDistributionsByWebACLIdCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link InvalidWebACLId} (client fault)
 *  <p>A web ACL ID specified is not valid. To specify a web ACL created using the latest
 * 			version of WAF, use the ACL ARN, for example
 * 				<code>arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/473e64fd-f30b-4765-81a0-62ad96dd167a</code>.
 * 			To specify a web ACL created using WAF Classic, use the ACL ID, for example
 * 				<code>473e64fd-f30b-4765-81a0-62ad96dd167a</code>.</p>
 *
 *
 */
export class ListDistributionsByWebACLIdCommand extends $Command<
  ListDistributionsByWebACLIdCommandInput,
  ListDistributionsByWebACLIdCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: ListDistributionsByWebACLIdCommandInput) {
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
  ): Handler<ListDistributionsByWebACLIdCommandInput, ListDistributionsByWebACLIdCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDistributionsByWebACLIdCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "ListDistributionsByWebACLIdCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListDistributionsByWebACLIdResultFilterSensitiveLog,
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
  private serialize(input: ListDistributionsByWebACLIdCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlListDistributionsByWebACLIdCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDistributionsByWebACLIdCommandOutput> {
    return deserializeAws_restXmlListDistributionsByWebACLIdCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
