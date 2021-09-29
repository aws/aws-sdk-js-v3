import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DeleteDomainRequest, DeleteDomainResult } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteDomainCommand,
  serializeAws_json1_1DeleteDomainCommand,
} from "../protocols/Aws_json1_1";
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

export interface DeleteDomainCommandInput extends DeleteDomainRequest {}
export interface DeleteDomainCommandOutput extends DeleteDomainResult, __MetadataBearer {}

/**
 * <p>Deletes the specified domain recordset and all of its domain records.</p>
 *          <p>The <code>delete domain</code> operation supports tag-based access control via resource
 *       tags applied to the resource identified by <code>domain name</code>. For more information, see
 *       the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteDomainCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteDomainCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDomainCommandInput} for command's `input` shape.
 * @see {@link DeleteDomainCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteDomainCommand extends $Command<
  DeleteDomainCommandInput,
  DeleteDomainCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDomainCommandInput) {
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
  ): Handler<DeleteDomainCommandInput, DeleteDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "DeleteDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDomainRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteDomainResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteDomainCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDomainCommandOutput> {
    return deserializeAws_json1_1DeleteDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
