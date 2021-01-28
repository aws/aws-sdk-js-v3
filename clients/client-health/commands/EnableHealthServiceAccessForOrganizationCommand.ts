import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import {
  deserializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand,
  serializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand,
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

export type EnableHealthServiceAccessForOrganizationCommandInput = {};
export type EnableHealthServiceAccessForOrganizationCommandOutput = __MetadataBearer;

/**
 * <p>Calling this operation enables AWS Health to work with AWS Organizations. This applies a
 *          service-linked role (SLR) to the master account in the organization. To call this
 *          operation, you must sign in as an IAM user, assume an IAM role, or sign in as the root
 *          user (not recommended) in the organization's master account.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/aggregate-events.html">Aggregating AWS Health events</a> in the <i>AWS Health User
 *             Guide</i>.</p>
 */
export class EnableHealthServiceAccessForOrganizationCommand extends $Command<
  EnableHealthServiceAccessForOrganizationCommandInput,
  EnableHealthServiceAccessForOrganizationCommandOutput,
  HealthClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableHealthServiceAccessForOrganizationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HealthClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    EnableHealthServiceAccessForOrganizationCommandInput,
    EnableHealthServiceAccessForOrganizationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthClient";
    const commandName = "EnableHealthServiceAccessForOrganizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: EnableHealthServiceAccessForOrganizationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableHealthServiceAccessForOrganizationCommandOutput> {
    return deserializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
