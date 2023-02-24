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
  ListProvisioningTemplatesRequest,
  ListProvisioningTemplatesRequestFilterSensitiveLog,
  ListProvisioningTemplatesResponse,
  ListProvisioningTemplatesResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1ListProvisioningTemplatesCommand,
  serializeAws_restJson1ListProvisioningTemplatesCommand,
} from "../protocols/Aws_restJson1";

export interface ListProvisioningTemplatesCommandInput extends ListProvisioningTemplatesRequest {}
export interface ListProvisioningTemplatesCommandOutput extends ListProvisioningTemplatesResponse, __MetadataBearer {}

/**
 * <p>Lists the provisioning templates in your Amazon Web Services account.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListProvisioningTemplates</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListProvisioningTemplatesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListProvisioningTemplatesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListProvisioningTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProvisioningTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListProvisioningTemplatesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class ListProvisioningTemplatesCommand extends $Command<
  ListProvisioningTemplatesCommandInput,
  ListProvisioningTemplatesCommandOutput,
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

  constructor(readonly input: ListProvisioningTemplatesCommandInput) {
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
  ): Handler<ListProvisioningTemplatesCommandInput, ListProvisioningTemplatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListProvisioningTemplatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListProvisioningTemplatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListProvisioningTemplatesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListProvisioningTemplatesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListProvisioningTemplatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListProvisioningTemplatesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListProvisioningTemplatesCommandOutput> {
    return deserializeAws_restJson1ListProvisioningTemplatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
