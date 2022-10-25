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
  ListPolicyPrincipalsRequest,
  ListPolicyPrincipalsRequestFilterSensitiveLog,
  ListPolicyPrincipalsResponse,
  ListPolicyPrincipalsResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1ListPolicyPrincipalsCommand,
  serializeAws_restJson1ListPolicyPrincipalsCommand,
} from "../protocols/Aws_restJson1";

export interface ListPolicyPrincipalsCommandInput extends ListPolicyPrincipalsRequest {}
export interface ListPolicyPrincipalsCommandOutput extends ListPolicyPrincipalsResponse, __MetadataBearer {}

/**
 * @deprecated
 *
 * <p>Lists the principals associated with the specified policy.</p>
 *          <p>
 *             <b>Note:</b> This action is deprecated and works as
 *          expected for backward compatibility, but we won't add enhancements. Use <a>ListTargetsForPolicy</a> instead.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPolicyPrincipals</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListPolicyPrincipalsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListPolicyPrincipalsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListPolicyPrincipalsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPolicyPrincipalsCommandInput} for command's `input` shape.
 * @see {@link ListPolicyPrincipalsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class ListPolicyPrincipalsCommand extends $Command<
  ListPolicyPrincipalsCommandInput,
  ListPolicyPrincipalsCommandOutput,
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

  constructor(readonly input: ListPolicyPrincipalsCommandInput) {
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
  ): Handler<ListPolicyPrincipalsCommandInput, ListPolicyPrincipalsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPolicyPrincipalsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListPolicyPrincipalsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPolicyPrincipalsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListPolicyPrincipalsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPolicyPrincipalsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPolicyPrincipalsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPolicyPrincipalsCommandOutput> {
    return deserializeAws_restJson1ListPolicyPrincipalsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
