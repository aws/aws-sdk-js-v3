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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  AttachThingPrincipalRequest,
  AttachThingPrincipalRequestFilterSensitiveLog,
  AttachThingPrincipalResponse,
  AttachThingPrincipalResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1AttachThingPrincipalCommand,
  serializeAws_restJson1AttachThingPrincipalCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link AttachThingPrincipalCommand}.
 */
export interface AttachThingPrincipalCommandInput extends AttachThingPrincipalRequest {}
/**
 * The output of {@link AttachThingPrincipalCommand}.
 */
export interface AttachThingPrincipalCommandOutput extends AttachThingPrincipalResponse, __MetadataBearer {}

/**
 * <p>Attaches the specified principal to the specified thing. A principal can be X.509
 * 			certificates, Amazon Cognito identities or federated identities.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AttachThingPrincipal</a> action.</p>
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
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class AttachThingPrincipalCommand extends $Command<
  AttachThingPrincipalCommandInput,
  AttachThingPrincipalCommandOutput,
  IoTClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AttachThingPrincipalCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "AttachThingPrincipalCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AttachThingPrincipalRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AttachThingPrincipalResponseFilterSensitiveLog,
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
