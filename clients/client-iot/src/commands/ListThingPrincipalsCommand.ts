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
  ListThingPrincipalsRequest,
  ListThingPrincipalsRequestFilterSensitiveLog,
  ListThingPrincipalsResponse,
  ListThingPrincipalsResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_restJson1ListThingPrincipalsCommand,
  serializeAws_restJson1ListThingPrincipalsCommand,
} from "../protocols/Aws_restJson1";

export interface ListThingPrincipalsCommandInput extends ListThingPrincipalsRequest {}
export interface ListThingPrincipalsCommandOutput extends ListThingPrincipalsResponse, __MetadataBearer {}

/**
 * <p>Lists the principals associated with the specified thing. A principal can be X.509
 * 			certificates, IAM users, groups, and roles, Amazon Cognito identities or federated
 * 			identities.</p>
 * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingPrincipals</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListThingPrincipalsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListThingPrincipalsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListThingPrincipalsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListThingPrincipalsCommandInput} for command's `input` shape.
 * @see {@link ListThingPrincipalsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class ListThingPrincipalsCommand extends $Command<
  ListThingPrincipalsCommandInput,
  ListThingPrincipalsCommandOutput,
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

  constructor(readonly input: ListThingPrincipalsCommandInput) {
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
  ): Handler<ListThingPrincipalsCommandInput, ListThingPrincipalsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListThingPrincipalsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListThingPrincipalsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListThingPrincipalsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListThingPrincipalsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListThingPrincipalsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListThingPrincipalsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListThingPrincipalsCommandOutput> {
    return deserializeAws_restJson1ListThingPrincipalsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
