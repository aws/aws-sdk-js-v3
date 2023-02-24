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
  ListDistributionsByResponseHeadersPolicyIdRequest,
  ListDistributionsByResponseHeadersPolicyIdRequestFilterSensitiveLog,
  ListDistributionsByResponseHeadersPolicyIdResult,
  ListDistributionsByResponseHeadersPolicyIdResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restXmlListDistributionsByResponseHeadersPolicyIdCommand,
  serializeAws_restXmlListDistributionsByResponseHeadersPolicyIdCommand,
} from "../protocols/Aws_restXml";

export interface ListDistributionsByResponseHeadersPolicyIdCommandInput
  extends ListDistributionsByResponseHeadersPolicyIdRequest {}
export interface ListDistributionsByResponseHeadersPolicyIdCommandOutput
  extends ListDistributionsByResponseHeadersPolicyIdResult,
    __MetadataBearer {}

/**
 * <p>Gets a list of distribution IDs for distributions that have a cache behavior that's
 * 			associated with the specified response headers policy.</p>
 *          <p>You can optionally specify the maximum number of items to receive in the response. If
 * 			the total number of items in the list exceeds the maximum that you specify, or the
 * 			default maximum, the response is paginated. To get the next page of items, send a
 * 			subsequent request that specifies the <code>NextMarker</code> value from the current
 * 			response as the <code>Marker</code> value in the subsequent request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListDistributionsByResponseHeadersPolicyIdCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListDistributionsByResponseHeadersPolicyIdCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new ListDistributionsByResponseHeadersPolicyIdCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDistributionsByResponseHeadersPolicyIdCommandInput} for command's `input` shape.
 * @see {@link ListDistributionsByResponseHeadersPolicyIdCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 */
export class ListDistributionsByResponseHeadersPolicyIdCommand extends $Command<
  ListDistributionsByResponseHeadersPolicyIdCommandInput,
  ListDistributionsByResponseHeadersPolicyIdCommandOutput,
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

  constructor(readonly input: ListDistributionsByResponseHeadersPolicyIdCommandInput) {
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
  ): Handler<
    ListDistributionsByResponseHeadersPolicyIdCommandInput,
    ListDistributionsByResponseHeadersPolicyIdCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        ListDistributionsByResponseHeadersPolicyIdCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "ListDistributionsByResponseHeadersPolicyIdCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDistributionsByResponseHeadersPolicyIdRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListDistributionsByResponseHeadersPolicyIdResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListDistributionsByResponseHeadersPolicyIdCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlListDistributionsByResponseHeadersPolicyIdCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDistributionsByResponseHeadersPolicyIdCommandOutput> {
    return deserializeAws_restXmlListDistributionsByResponseHeadersPolicyIdCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
