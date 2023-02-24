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
  ListCidrCollectionsRequest,
  ListCidrCollectionsRequestFilterSensitiveLog,
  ListCidrCollectionsResponse,
  ListCidrCollectionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlListCidrCollectionsCommand,
  serializeAws_restXmlListCidrCollectionsCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

export interface ListCidrCollectionsCommandInput extends ListCidrCollectionsRequest {}
export interface ListCidrCollectionsCommandOutput extends ListCidrCollectionsResponse, __MetadataBearer {}

/**
 * <p>Returns a paginated list of CIDR collections in the Amazon Web Services account
 * 			(metadata only).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListCidrCollectionsCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListCidrCollectionsCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ListCidrCollectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCidrCollectionsCommandInput} for command's `input` shape.
 * @see {@link ListCidrCollectionsCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 */
export class ListCidrCollectionsCommand extends $Command<
  ListCidrCollectionsCommandInput,
  ListCidrCollectionsCommandOutput,
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

  constructor(readonly input: ListCidrCollectionsCommandInput) {
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
  ): Handler<ListCidrCollectionsCommandInput, ListCidrCollectionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCidrCollectionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "ListCidrCollectionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCidrCollectionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListCidrCollectionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCidrCollectionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlListCidrCollectionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCidrCollectionsCommandOutput> {
    return deserializeAws_restXmlListCidrCollectionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
