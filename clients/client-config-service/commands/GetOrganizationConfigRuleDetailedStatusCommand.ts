import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  GetOrganizationConfigRuleDetailedStatusRequest,
  GetOrganizationConfigRuleDetailedStatusResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetOrganizationConfigRuleDetailedStatusCommand,
  serializeAws_json1_1GetOrganizationConfigRuleDetailedStatusCommand,
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

export type GetOrganizationConfigRuleDetailedStatusCommandInput = GetOrganizationConfigRuleDetailedStatusRequest;
export type GetOrganizationConfigRuleDetailedStatusCommandOutput = GetOrganizationConfigRuleDetailedStatusResponse &
  __MetadataBearer;

/**
 * <p>Returns detailed status for each member account within an organization for a given organization config rule.</p>
 * 		       <p>Only a master account and a delegated administrator account can call this API.
 * 			When calling this API with a delegated administrator, you must ensure AWS Organizations
 * 			<code>ListDelegatedAdministrator</code> permissions are added.</p>
 */
export class GetOrganizationConfigRuleDetailedStatusCommand extends $Command<
  GetOrganizationConfigRuleDetailedStatusCommandInput,
  GetOrganizationConfigRuleDetailedStatusCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetOrganizationConfigRuleDetailedStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetOrganizationConfigRuleDetailedStatusCommandInput,
    GetOrganizationConfigRuleDetailedStatusCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "GetOrganizationConfigRuleDetailedStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetOrganizationConfigRuleDetailedStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetOrganizationConfigRuleDetailedStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetOrganizationConfigRuleDetailedStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetOrganizationConfigRuleDetailedStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetOrganizationConfigRuleDetailedStatusCommandOutput> {
    return deserializeAws_json1_1GetOrganizationConfigRuleDetailedStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
