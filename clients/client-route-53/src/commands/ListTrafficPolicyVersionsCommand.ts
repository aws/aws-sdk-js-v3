// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
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
  ListTrafficPolicyVersionsRequest,
  ListTrafficPolicyVersionsRequestFilterSensitiveLog,
  ListTrafficPolicyVersionsResponse,
  ListTrafficPolicyVersionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlListTrafficPolicyVersionsCommand,
  serializeAws_restXmlListTrafficPolicyVersionsCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

export interface ListTrafficPolicyVersionsCommandInput extends ListTrafficPolicyVersionsRequest {}
export interface ListTrafficPolicyVersionsCommandOutput extends ListTrafficPolicyVersionsResponse, __MetadataBearer {}

/**
 * <p>Gets information about all of the versions for a specified traffic policy.</p>
 *          <p>Traffic policy versions are listed in numerical order by
 * 			<code>VersionNumber</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListTrafficPolicyVersionsCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListTrafficPolicyVersionsCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ListTrafficPolicyVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTrafficPolicyVersionsCommandInput} for command's `input` shape.
 * @see {@link ListTrafficPolicyVersionsCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 */
export class ListTrafficPolicyVersionsCommand extends $Command<
  ListTrafficPolicyVersionsCommandInput,
  ListTrafficPolicyVersionsCommandOutput,
  Route53ClientResolvedConfig
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

  constructor(readonly input: ListTrafficPolicyVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTrafficPolicyVersionsCommandInput, ListTrafficPolicyVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTrafficPolicyVersionsCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "ListTrafficPolicyVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTrafficPolicyVersionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListTrafficPolicyVersionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTrafficPolicyVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlListTrafficPolicyVersionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListTrafficPolicyVersionsCommandOutput> {
    return deserializeAws_restXmlListTrafficPolicyVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
