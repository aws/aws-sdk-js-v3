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
  ListDistributionsByRealtimeLogConfigRequest,
  ListDistributionsByRealtimeLogConfigResult,
  ListDistributionsByRealtimeLogConfigResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restXmlListDistributionsByRealtimeLogConfigCommand,
  serializeAws_restXmlListDistributionsByRealtimeLogConfigCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 *
 * The input for {@link ListDistributionsByRealtimeLogConfigCommand}.
 */
export interface ListDistributionsByRealtimeLogConfigCommandInput extends ListDistributionsByRealtimeLogConfigRequest {}
/**
 * @public
 *
 * The output of {@link ListDistributionsByRealtimeLogConfigCommand}.
 */
export interface ListDistributionsByRealtimeLogConfigCommandOutput
  extends ListDistributionsByRealtimeLogConfigResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of distributions that have a cache behavior that's associated with the
 * 			specified real-time log configuration.</p>
 *          <p>You can specify the real-time log configuration by its name or its Amazon Resource
 * 			Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to
 * 			identify the real-time log configuration to list distributions for.</p>
 *          <p>You can optionally specify the maximum number of items to receive in the response. If
 * 			the total number of items in the list exceeds the maximum that you specify, or the
 * 			default maximum, the response is paginated. To get the next page of items, send a
 * 			subsequent request that specifies the <code>NextMarker</code> value from the current
 * 			response as the <code>Marker</code> value in the subsequent request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListDistributionsByRealtimeLogConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListDistributionsByRealtimeLogConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // ListDistributionsByRealtimeLogConfigRequest
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 *   RealtimeLogConfigName: "STRING_VALUE",
 *   RealtimeLogConfigArn: "STRING_VALUE",
 * };
 * const command = new ListDistributionsByRealtimeLogConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListDistributionsByRealtimeLogConfigCommandInput - {@link ListDistributionsByRealtimeLogConfigCommandInput}
 * @returns {@link ListDistributionsByRealtimeLogConfigCommandOutput}
 * @see {@link ListDistributionsByRealtimeLogConfigCommandInput} for command's `input` shape.
 * @see {@link ListDistributionsByRealtimeLogConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 *
 */
export class ListDistributionsByRealtimeLogConfigCommand extends $Command<
  ListDistributionsByRealtimeLogConfigCommandInput,
  ListDistributionsByRealtimeLogConfigCommandOutput,
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
  constructor(readonly input: ListDistributionsByRealtimeLogConfigCommandInput) {
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
  ): Handler<ListDistributionsByRealtimeLogConfigCommandInput, ListDistributionsByRealtimeLogConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDistributionsByRealtimeLogConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "ListDistributionsByRealtimeLogConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListDistributionsByRealtimeLogConfigResultFilterSensitiveLog,
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
  private serialize(
    input: ListDistributionsByRealtimeLogConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlListDistributionsByRealtimeLogConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDistributionsByRealtimeLogConfigCommandOutput> {
    return deserializeAws_restXmlListDistributionsByRealtimeLogConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
