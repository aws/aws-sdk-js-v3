import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { AssociateHealthCheckRequest, AssociateHealthCheckResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AssociateHealthCheckCommand,
  serializeAws_json1_1AssociateHealthCheckCommand,
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

export type AssociateHealthCheckCommandInput = AssociateHealthCheckRequest;
export type AssociateHealthCheckCommandOutput = AssociateHealthCheckResponse & __MetadataBearer;

/**
 * <p>Adds health-based detection to the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your AWS resource to improve responsiveness and accuracy in attack detection and mitigation.  </p>
 *          <p>You define the health check in Route 53 and then associate it with your Shield Advanced protection. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html#ddos-advanced-health-check-option">Shield Advanced Health-Based Detection</a> in the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF and AWS Shield Developer Guide</a>. </p>
 */
export class AssociateHealthCheckCommand extends $Command<
  AssociateHealthCheckCommandInput,
  AssociateHealthCheckCommandOutput,
  ShieldClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateHealthCheckCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ShieldClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateHealthCheckCommandInput, AssociateHealthCheckCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "AssociateHealthCheckCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateHealthCheckRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateHealthCheckResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateHealthCheckCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateHealthCheckCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateHealthCheckCommandOutput> {
    return deserializeAws_json1_1AssociateHealthCheckCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
