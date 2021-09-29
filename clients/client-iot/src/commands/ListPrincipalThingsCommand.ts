import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListPrincipalThingsRequest, ListPrincipalThingsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListPrincipalThingsCommand,
  serializeAws_restJson1ListPrincipalThingsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface ListPrincipalThingsCommandInput extends ListPrincipalThingsRequest {}
export interface ListPrincipalThingsCommandOutput extends ListPrincipalThingsResponse, __MetadataBearer {}

/**
 * <p>Lists the things associated with the specified principal. A principal can be X.509
 * 			certificates, IAM users, groups, and roles, Amazon Cognito identities or federated
 * 			identities. </p>
 * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPrincipalThings</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListPrincipalThingsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListPrincipalThingsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListPrincipalThingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPrincipalThingsCommandInput} for command's `input` shape.
 * @see {@link ListPrincipalThingsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListPrincipalThingsCommand extends $Command<
  ListPrincipalThingsCommandInput,
  ListPrincipalThingsCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPrincipalThingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPrincipalThingsCommandInput, ListPrincipalThingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListPrincipalThingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPrincipalThingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPrincipalThingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPrincipalThingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPrincipalThingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPrincipalThingsCommandOutput> {
    return deserializeAws_restJson1ListPrincipalThingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
