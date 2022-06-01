// smithy-typescript generated code
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

import { ListCidrLocationsRequest, ListCidrLocationsResponse } from "../models/models_0";
import {
  deserializeAws_restXmlListCidrLocationsCommand,
  serializeAws_restXmlListCidrLocationsCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

export interface ListCidrLocationsCommandInput extends ListCidrLocationsRequest {}
export interface ListCidrLocationsCommandOutput extends ListCidrLocationsResponse, __MetadataBearer {}

/**
 * <p>Returns a paginated list of CIDR locations for the given collection (metadata only,
 * 			does not include CIDR blocks).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListCidrLocationsCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListCidrLocationsCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ListCidrLocationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCidrLocationsCommandInput} for command's `input` shape.
 * @see {@link ListCidrLocationsCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 */
export class ListCidrLocationsCommand extends $Command<
  ListCidrLocationsCommandInput,
  ListCidrLocationsCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCidrLocationsCommandInput) {
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
  ): Handler<ListCidrLocationsCommandInput, ListCidrLocationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "ListCidrLocationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCidrLocationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListCidrLocationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCidrLocationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlListCidrLocationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCidrLocationsCommandOutput> {
    return deserializeAws_restXmlListCidrLocationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
