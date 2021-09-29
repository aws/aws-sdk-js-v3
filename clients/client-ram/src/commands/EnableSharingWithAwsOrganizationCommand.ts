import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { EnableSharingWithAwsOrganizationRequest, EnableSharingWithAwsOrganizationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1EnableSharingWithAwsOrganizationCommand,
  serializeAws_restJson1EnableSharingWithAwsOrganizationCommand,
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

export interface EnableSharingWithAwsOrganizationCommandInput extends EnableSharingWithAwsOrganizationRequest {}
export interface EnableSharingWithAwsOrganizationCommandOutput
  extends EnableSharingWithAwsOrganizationResponse,
    __MetadataBearer {}

/**
 * <p>Enables resource sharing within your organization in Organizations.</p>
 *         <p>The caller must be the master account for the organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, EnableSharingWithAwsOrganizationCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, EnableSharingWithAwsOrganizationCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new EnableSharingWithAwsOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableSharingWithAwsOrganizationCommandInput} for command's `input` shape.
 * @see {@link EnableSharingWithAwsOrganizationCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class EnableSharingWithAwsOrganizationCommand extends $Command<
  EnableSharingWithAwsOrganizationCommandInput,
  EnableSharingWithAwsOrganizationCommandOutput,
  RAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableSharingWithAwsOrganizationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EnableSharingWithAwsOrganizationCommandInput, EnableSharingWithAwsOrganizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "EnableSharingWithAwsOrganizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableSharingWithAwsOrganizationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: EnableSharingWithAwsOrganizationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: EnableSharingWithAwsOrganizationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1EnableSharingWithAwsOrganizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableSharingWithAwsOrganizationCommandOutput> {
    return deserializeAws_restJson1EnableSharingWithAwsOrganizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
