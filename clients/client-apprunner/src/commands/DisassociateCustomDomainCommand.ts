import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { DisassociateCustomDomainRequest, DisassociateCustomDomainResponse } from "../models/models_0";
import {
  deserializeAws_json1_0DisassociateCustomDomainCommand,
  serializeAws_json1_0DisassociateCustomDomainCommand,
} from "../protocols/Aws_json1_0";
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

export interface DisassociateCustomDomainCommandInput extends DisassociateCustomDomainRequest {}
export interface DisassociateCustomDomainCommandOutput extends DisassociateCustomDomainResponse, __MetadataBearer {}

/**
 * <p>Disassociate a custom domain name from an AWS App Runner service.</p>
 *          <p>Certificates tracking domain validity are associated with a custom domain and are stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS
 *         Certificate Manager (ACM)</a>. These certificates aren't deleted as part of this action. App Runner delays certificate deletion for
 *       30 days after a domain is disassociated from your service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, DisassociateCustomDomainCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, DisassociateCustomDomainCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new DisassociateCustomDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateCustomDomainCommandInput} for command's `input` shape.
 * @see {@link DisassociateCustomDomainCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DisassociateCustomDomainCommand extends $Command<
  DisassociateCustomDomainCommandInput,
  DisassociateCustomDomainCommandOutput,
  AppRunnerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateCustomDomainCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppRunnerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateCustomDomainCommandInput, DisassociateCustomDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppRunnerClient";
    const commandName = "DisassociateCustomDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateCustomDomainRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateCustomDomainResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateCustomDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DisassociateCustomDomainCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateCustomDomainCommandOutput> {
    return deserializeAws_json1_0DisassociateCustomDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
