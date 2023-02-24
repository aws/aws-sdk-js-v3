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
  ListOriginAccessControlsRequest,
  ListOriginAccessControlsRequestFilterSensitiveLog,
  ListOriginAccessControlsResult,
  ListOriginAccessControlsResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restXmlListOriginAccessControlsCommand,
  serializeAws_restXmlListOriginAccessControlsCommand,
} from "../protocols/Aws_restXml";

export interface ListOriginAccessControlsCommandInput extends ListOriginAccessControlsRequest {}
export interface ListOriginAccessControlsCommandOutput extends ListOriginAccessControlsResult, __MetadataBearer {}

/**
 * <p>Gets the list of CloudFront origin access controls in this Amazon Web Services account.</p>
 *          <p>You can optionally specify the maximum number of items to receive in the response. If
 * 			the total number of items in the list exceeds the maximum that you specify, or the
 * 			default maximum, the response is paginated. To get the next page of items, send another
 * 			request that specifies the <code>NextMarker</code> value from the current response as
 * 			the <code>Marker</code> value in the next request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListOriginAccessControlsCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListOriginAccessControlsCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new ListOriginAccessControlsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOriginAccessControlsCommandInput} for command's `input` shape.
 * @see {@link ListOriginAccessControlsCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 */
export class ListOriginAccessControlsCommand extends $Command<
  ListOriginAccessControlsCommandInput,
  ListOriginAccessControlsCommandOutput,
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

  constructor(readonly input: ListOriginAccessControlsCommandInput) {
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
  ): Handler<ListOriginAccessControlsCommandInput, ListOriginAccessControlsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListOriginAccessControlsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "ListOriginAccessControlsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListOriginAccessControlsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListOriginAccessControlsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListOriginAccessControlsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlListOriginAccessControlsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListOriginAccessControlsCommandOutput> {
    return deserializeAws_restXmlListOriginAccessControlsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
