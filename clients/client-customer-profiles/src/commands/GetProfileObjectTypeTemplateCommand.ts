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
  GetProfileObjectTypeTemplateRequest,
  GetProfileObjectTypeTemplateRequestFilterSensitiveLog,
  GetProfileObjectTypeTemplateResponse,
  GetProfileObjectTypeTemplateResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetProfileObjectTypeTemplateCommand,
  serializeAws_restJson1GetProfileObjectTypeTemplateCommand,
} from "../protocols/Aws_restJson1";

export interface GetProfileObjectTypeTemplateCommandInput extends GetProfileObjectTypeTemplateRequest {}
export interface GetProfileObjectTypeTemplateCommandOutput
  extends GetProfileObjectTypeTemplateResponse,
    __MetadataBearer {}

/**
 * <p>Returns the template information for a specific object type.</p>
 *          <p>A template is a predefined ProfileObjectType, such as “Salesforce-Account” or
 *          “Salesforce-Contact.” When a user sends a ProfileObject, using the PutProfileObject API,
 *          with an ObjectTypeName that matches one of the TemplateIds, it uses the mappings from the
 *          template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetProfileObjectTypeTemplateCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetProfileObjectTypeTemplateCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new GetProfileObjectTypeTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetProfileObjectTypeTemplateCommandInput} for command's `input` shape.
 * @see {@link GetProfileObjectTypeTemplateCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 */
export class GetProfileObjectTypeTemplateCommand extends $Command<
  GetProfileObjectTypeTemplateCommandInput,
  GetProfileObjectTypeTemplateCommandOutput,
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

  constructor(readonly input: GetProfileObjectTypeTemplateCommandInput) {
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
  ): Handler<GetProfileObjectTypeTemplateCommandInput, GetProfileObjectTypeTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetProfileObjectTypeTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "GetProfileObjectTypeTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetProfileObjectTypeTemplateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetProfileObjectTypeTemplateResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetProfileObjectTypeTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetProfileObjectTypeTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetProfileObjectTypeTemplateCommandOutput> {
    return deserializeAws_restJson1GetProfileObjectTypeTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
