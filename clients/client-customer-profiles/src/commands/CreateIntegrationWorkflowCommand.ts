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

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import {
  CreateIntegrationWorkflowRequest,
  CreateIntegrationWorkflowRequestFilterSensitiveLog,
  CreateIntegrationWorkflowResponse,
  CreateIntegrationWorkflowResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateIntegrationWorkflowCommand,
  serializeAws_restJson1CreateIntegrationWorkflowCommand,
} from "../protocols/Aws_restJson1";

export interface CreateIntegrationWorkflowCommandInput extends CreateIntegrationWorkflowRequest {}
export interface CreateIntegrationWorkflowCommandOutput extends CreateIntegrationWorkflowResponse, __MetadataBearer {}

/**
 * <p>
 * 	Creates an integration workflow. An integration workflow is an async process which ingests historic data and sets up an integration for ongoing updates. The supported Amazon AppFlow sources are Salesforce, ServiceNow, and Marketo.
 * 	</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, CreateIntegrationWorkflowCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, CreateIntegrationWorkflowCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new CreateIntegrationWorkflowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateIntegrationWorkflowCommandInput} for command's `input` shape.
 * @see {@link CreateIntegrationWorkflowCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 */
export class CreateIntegrationWorkflowCommand extends $Command<
  CreateIntegrationWorkflowCommandInput,
  CreateIntegrationWorkflowCommandOutput,
  CustomerProfilesClientResolvedConfig
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

  constructor(readonly input: CreateIntegrationWorkflowCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CustomerProfilesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateIntegrationWorkflowCommandInput, CreateIntegrationWorkflowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateIntegrationWorkflowCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "CreateIntegrationWorkflowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateIntegrationWorkflowRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateIntegrationWorkflowResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateIntegrationWorkflowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateIntegrationWorkflowCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateIntegrationWorkflowCommandOutput> {
    return deserializeAws_restJson1CreateIntegrationWorkflowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
