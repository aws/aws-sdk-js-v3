import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { PutAccessControlRuleRequest, PutAccessControlRuleResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutAccessControlRuleCommand,
  serializeAws_json1_1PutAccessControlRuleCommand,
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

export type PutAccessControlRuleCommandInput = PutAccessControlRuleRequest;
export type PutAccessControlRuleCommandOutput = PutAccessControlRuleResponse & __MetadataBearer;

/**
 * <p>Adds a new access control rule for the specified organization. The rule allows or
 *          denies access to the organization for the specified IPv4 addresses, access protocol
 *          actions, and user IDs. Adding a new rule with the same name as an existing rule replaces
 *          the older rule.</p>
 */
export class PutAccessControlRuleCommand extends $Command<
  PutAccessControlRuleCommandInput,
  PutAccessControlRuleCommandOutput,
  WorkMailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutAccessControlRuleCommandInput) {
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
  ): Handler<PutAccessControlRuleCommandInput, PutAccessControlRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "PutAccessControlRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutAccessControlRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutAccessControlRuleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutAccessControlRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutAccessControlRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutAccessControlRuleCommandOutput> {
    return deserializeAws_json1_1PutAccessControlRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
