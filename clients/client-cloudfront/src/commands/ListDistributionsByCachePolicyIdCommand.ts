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
  ListDistributionsByCachePolicyIdRequest,
  ListDistributionsByCachePolicyIdRequestFilterSensitiveLog,
  ListDistributionsByCachePolicyIdResult,
  ListDistributionsByCachePolicyIdResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restXmlListDistributionsByCachePolicyIdCommand,
  serializeAws_restXmlListDistributionsByCachePolicyIdCommand,
} from "../protocols/Aws_restXml";

export interface ListDistributionsByCachePolicyIdCommandInput extends ListDistributionsByCachePolicyIdRequest {}
export interface ListDistributionsByCachePolicyIdCommandOutput
  extends ListDistributionsByCachePolicyIdResult,
    __MetadataBearer {}

/**
 * <p>Gets a list of distribution IDs for distributions that have a cache behavior that's
 * 			associated with the specified cache policy.</p>
 *          <p>You can optionally specify the maximum number of items to receive in the response. If
 * 			the total number of items in the list exceeds the maximum that you specify, or the
 * 			default maximum, the response is paginated. To get the next page of items, send a
 * 			subsequent request that specifies the <code>NextMarker</code> value from the current
 * 			response as the <code>Marker</code> value in the subsequent request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListDistributionsByCachePolicyIdCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListDistributionsByCachePolicyIdCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new ListDistributionsByCachePolicyIdCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDistributionsByCachePolicyIdCommandInput} for command's `input` shape.
 * @see {@link ListDistributionsByCachePolicyIdCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 */
export class ListDistributionsByCachePolicyIdCommand extends $Command<
  ListDistributionsByCachePolicyIdCommandInput,
  ListDistributionsByCachePolicyIdCommandOutput,
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

  constructor(readonly input: ListDistributionsByCachePolicyIdCommandInput) {
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
  ): Handler<ListDistributionsByCachePolicyIdCommandInput, ListDistributionsByCachePolicyIdCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDistributionsByCachePolicyIdCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "ListDistributionsByCachePolicyIdCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDistributionsByCachePolicyIdRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListDistributionsByCachePolicyIdResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListDistributionsByCachePolicyIdCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlListDistributionsByCachePolicyIdCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDistributionsByCachePolicyIdCommandOutput> {
    return deserializeAws_restXmlListDistributionsByCachePolicyIdCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
