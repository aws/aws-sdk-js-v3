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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  DeleteContactMethodRequest,
  DeleteContactMethodRequestFilterSensitiveLog,
  DeleteContactMethodResult,
  DeleteContactMethodResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteContactMethodCommand,
  serializeAws_json1_1DeleteContactMethodCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteContactMethodCommandInput extends DeleteContactMethodRequest {}
export interface DeleteContactMethodCommandOutput extends DeleteContactMethodResult, __MetadataBearer {}

/**
 * <p>Deletes a contact method.</p>
 *          <p>A contact method is used to send you notifications about your Amazon Lightsail resources.
 *       You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services
 *       Regions, and SMS text messages cannot be sent to some countries/regions. For more information,
 *       see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteContactMethodCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteContactMethodCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteContactMethodCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteContactMethodCommandInput} for command's `input` shape.
 * @see {@link DeleteContactMethodCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class DeleteContactMethodCommand extends $Command<
  DeleteContactMethodCommandInput,
  DeleteContactMethodCommandOutput,
  LightsailClientResolvedConfig
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

  constructor(readonly input: DeleteContactMethodCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteContactMethodCommandInput, DeleteContactMethodCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteContactMethodCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "DeleteContactMethodCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteContactMethodRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteContactMethodResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteContactMethodCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteContactMethodCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteContactMethodCommandOutput> {
    return deserializeAws_json1_1DeleteContactMethodCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
