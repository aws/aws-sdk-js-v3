import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import {
  DescribeAffectedAccountsForOrganizationRequest,
  DescribeAffectedAccountsForOrganizationResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeAffectedAccountsForOrganizationCommand,
  serializeAws_json1_1DescribeAffectedAccountsForOrganizationCommand,
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

export type DescribeAffectedAccountsForOrganizationCommandInput = DescribeAffectedAccountsForOrganizationRequest;
export type DescribeAffectedAccountsForOrganizationCommandOutput = DescribeAffectedAccountsForOrganizationResponse &
  __MetadataBearer;

/**
 * <p>Returns a list of accounts in the organization from AWS Organizations that are affected by the
 *          provided event. For more information about the different types of AWS Health events, see
 *          <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a>. </p>
 *          <p>Before you can call this operation, you must first enable AWS Health to work with
 *          AWS Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a>
 *          operation from your organization's master account.</p>
 *
 *          <note>
 *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
 *          </note>
 */
export class DescribeAffectedAccountsForOrganizationCommand extends $Command<
  DescribeAffectedAccountsForOrganizationCommandInput,
  DescribeAffectedAccountsForOrganizationCommandOutput,
  HealthClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAffectedAccountsForOrganizationCommandInput) {
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
    DescribeAffectedAccountsForOrganizationCommandInput,
    DescribeAffectedAccountsForOrganizationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthClient";
    const commandName = "DescribeAffectedAccountsForOrganizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAffectedAccountsForOrganizationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAffectedAccountsForOrganizationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeAffectedAccountsForOrganizationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAffectedAccountsForOrganizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAffectedAccountsForOrganizationCommandOutput> {
    return deserializeAws_json1_1DescribeAffectedAccountsForOrganizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
