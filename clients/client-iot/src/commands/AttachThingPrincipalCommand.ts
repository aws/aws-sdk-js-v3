import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { AttachThingPrincipalRequest, AttachThingPrincipalResponse } from "../models/models_0";
import {
  deserializeAws_restJson1AttachThingPrincipalCommand,
  serializeAws_restJson1AttachThingPrincipalCommand,
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

export interface AttachThingPrincipalCommandInput extends AttachThingPrincipalRequest {}
export interface AttachThingPrincipalCommandOutput extends AttachThingPrincipalResponse, __MetadataBearer {}

/**
 * <p>Attaches the specified principal to the specified thing. A principal can be X.509
 * 			certificates, IAM users, groups, and roles, Amazon Cognito identities or federated
 * 			identities.</p>
 * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AttachThingPrincipal</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, AttachThingPrincipalCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, AttachThingPrincipalCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new AttachThingPrincipalCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachThingPrincipalCommandInput} for command's `input` shape.
 * @see {@link AttachThingPrincipalCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AttachThingPrincipalCommand extends $Command<
  AttachThingPrincipalCommandInput,
  AttachThingPrincipalCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AttachThingPrincipalCommandInput) {
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
  ): Handler<AttachThingPrincipalCommandInput, AttachThingPrincipalCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "AttachThingPrincipalCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AttachThingPrincipalRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AttachThingPrincipalResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AttachThingPrincipalCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AttachThingPrincipalCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AttachThingPrincipalCommandOutput> {
    return deserializeAws_restJson1AttachThingPrincipalCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
