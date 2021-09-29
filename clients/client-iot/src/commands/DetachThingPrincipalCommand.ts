import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DetachThingPrincipalRequest, DetachThingPrincipalResponse } from "../models/models_1";
import {
  deserializeAws_restJson1DetachThingPrincipalCommand,
  serializeAws_restJson1DetachThingPrincipalCommand,
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

export interface DetachThingPrincipalCommandInput extends DetachThingPrincipalRequest {}
export interface DetachThingPrincipalCommandOutput extends DetachThingPrincipalResponse, __MetadataBearer {}

/**
 * <p>Detaches the specified principal from the specified thing. A principal can be X.509
 * 			certificates, IAM users, groups, and roles, Amazon Cognito identities or federated
 * 			identities.</p>
 * 		       <note>
 * 			         <p>This call is asynchronous. It might take several seconds for the detachment to
 * 				propagate.</p>
 * 		       </note>
 * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DetachThingPrincipal</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DetachThingPrincipalCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DetachThingPrincipalCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DetachThingPrincipalCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachThingPrincipalCommandInput} for command's `input` shape.
 * @see {@link DetachThingPrincipalCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DetachThingPrincipalCommand extends $Command<
  DetachThingPrincipalCommandInput,
  DetachThingPrincipalCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DetachThingPrincipalCommandInput) {
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
  ): Handler<DetachThingPrincipalCommandInput, DetachThingPrincipalCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DetachThingPrincipalCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetachThingPrincipalRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DetachThingPrincipalResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetachThingPrincipalCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DetachThingPrincipalCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetachThingPrincipalCommandOutput> {
    return deserializeAws_restJson1DetachThingPrincipalCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
