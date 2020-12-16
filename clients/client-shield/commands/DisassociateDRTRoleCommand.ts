import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { DisassociateDRTRoleRequest, DisassociateDRTRoleResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateDRTRoleCommand,
  serializeAws_json1_1DisassociateDRTRoleCommand,
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

export type DisassociateDRTRoleCommandInput = DisassociateDRTRoleRequest;
export type DisassociateDRTRoleCommandOutput = DisassociateDRTRoleResponse & __MetadataBearer;

/**
 * <p>Removes the DDoS Response Team's (DRT) access to your AWS account.</p>
 * 	        <p>To make a <code>DisassociateDRTRole</code> request, you must be subscribed to the <a href="https://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="https://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>. However, if you are not subscribed to one of these support plans, but had been previously and had granted the DRT access to your account, you can submit a <code>DisassociateDRTRole</code> request to remove this access.</p>
 */
export class DisassociateDRTRoleCommand extends $Command<
  DisassociateDRTRoleCommandInput,
  DisassociateDRTRoleCommandOutput,
  ShieldClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateDRTRoleCommandInput) {
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
  ): Handler<DisassociateDRTRoleCommandInput, DisassociateDRTRoleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "DisassociateDRTRoleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateDRTRoleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateDRTRoleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateDRTRoleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateDRTRoleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateDRTRoleCommandOutput> {
    return deserializeAws_json1_1DisassociateDRTRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
