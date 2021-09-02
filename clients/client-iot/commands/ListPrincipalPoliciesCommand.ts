import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListPrincipalPoliciesRequest, ListPrincipalPoliciesResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListPrincipalPoliciesCommand,
  serializeAws_restJson1ListPrincipalPoliciesCommand,
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

export interface ListPrincipalPoliciesCommandInput extends ListPrincipalPoliciesRequest {}
export interface ListPrincipalPoliciesCommandOutput extends ListPrincipalPoliciesResponse, __MetadataBearer {}

/**
 * @deprecated
 *
 * <p>Lists the policies attached to the specified principal. If you use an Cognito
 *          identity, the ID must be in <a href="https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetCredentialsForIdentity.html#API_GetCredentialsForIdentity_RequestSyntax">AmazonCognito Identity format</a>.</p>
 *          <p>
 *             <b>Note:</b> This action is deprecated. Please use <a>ListAttachedPolicies</a> instead.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPrincipalPolicies</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListPrincipalPoliciesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListPrincipalPoliciesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListPrincipalPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPrincipalPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListPrincipalPoliciesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListPrincipalPoliciesCommand extends $Command<
  ListPrincipalPoliciesCommandInput,
  ListPrincipalPoliciesCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPrincipalPoliciesCommandInput) {
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
  ): Handler<ListPrincipalPoliciesCommandInput, ListPrincipalPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListPrincipalPoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPrincipalPoliciesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPrincipalPoliciesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPrincipalPoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPrincipalPoliciesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPrincipalPoliciesCommandOutput> {
    return deserializeAws_restJson1ListPrincipalPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
