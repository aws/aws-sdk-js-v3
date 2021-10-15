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

import { UpdateDefaultMailDomainRequest, UpdateDefaultMailDomainResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateDefaultMailDomainCommand,
  serializeAws_json1_1UpdateDefaultMailDomainCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

export interface UpdateDefaultMailDomainCommandInput extends UpdateDefaultMailDomainRequest {}
export interface UpdateDefaultMailDomainCommandOutput extends UpdateDefaultMailDomainResponse, __MetadataBearer {}

/**
 * <p>Updates the default mail domain for an organization. The default mail domain is used by the WorkMail AWS Console to suggest an email address when enabling a mail user. You can only have one default domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, UpdateDefaultMailDomainCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, UpdateDefaultMailDomainCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new UpdateDefaultMailDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDefaultMailDomainCommandInput} for command's `input` shape.
 * @see {@link UpdateDefaultMailDomainCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateDefaultMailDomainCommand extends $Command<
  UpdateDefaultMailDomainCommandInput,
  UpdateDefaultMailDomainCommandOutput,
  WorkMailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDefaultMailDomainCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDefaultMailDomainCommandInput, UpdateDefaultMailDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "UpdateDefaultMailDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDefaultMailDomainRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDefaultMailDomainResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDefaultMailDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateDefaultMailDomainCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDefaultMailDomainCommandOutput> {
    return deserializeAws_json1_1UpdateDefaultMailDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
