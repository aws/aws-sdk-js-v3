import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  DescribeOrganizationConfigRuleStatusesRequest,
  DescribeOrganizationConfigRuleStatusesResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommand,
  serializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommand,
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

export type DescribeOrganizationConfigRuleStatusesCommandInput = DescribeOrganizationConfigRuleStatusesRequest;
export type DescribeOrganizationConfigRuleStatusesCommandOutput = DescribeOrganizationConfigRuleStatusesResponse &
  __MetadataBearer;

/**
 * <p>Provides organization config rule deployment status for an organization.</p>
 * 		       <p>Only a master account and a delegated administrator account can call this API.
 * 			When calling this API with a delegated administrator, you must ensure AWS Organizations
 * 			<code>ListDelegatedAdministrator</code> permissions are added.</p>
 * 		       <note>
 *             <p>The status is not considered successful until organization config rule is successfully deployed in all the member
 * 			accounts with an exception of excluded accounts.</p>
 * 			         <p>When you specify the limit and the next token, you receive a paginated response.
 * 			Limit and next token are not applicable if you specify organization config rule names.
 * 			It is only applicable, when you request all the organization config rules.</p>
 * 			      </note>
 */
export class DescribeOrganizationConfigRuleStatusesCommand extends $Command<
  DescribeOrganizationConfigRuleStatusesCommandInput,
  DescribeOrganizationConfigRuleStatusesCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeOrganizationConfigRuleStatusesCommandInput) {
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
  ): Handler<DescribeOrganizationConfigRuleStatusesCommandInput, DescribeOrganizationConfigRuleStatusesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeOrganizationConfigRuleStatusesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeOrganizationConfigRuleStatusesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeOrganizationConfigRuleStatusesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeOrganizationConfigRuleStatusesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeOrganizationConfigRuleStatusesCommandOutput> {
    return deserializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
