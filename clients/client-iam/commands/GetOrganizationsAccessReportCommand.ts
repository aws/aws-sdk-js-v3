import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetOrganizationsAccessReportRequest, GetOrganizationsAccessReportResponse } from "../models/models_0";
import {
  deserializeAws_queryGetOrganizationsAccessReportCommand,
  serializeAws_queryGetOrganizationsAccessReportCommand,
} from "../protocols/Aws_query";
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

export type GetOrganizationsAccessReportCommandInput = GetOrganizationsAccessReportRequest;
export type GetOrganizationsAccessReportCommandOutput = GetOrganizationsAccessReportResponse & __MetadataBearer;

/**
 * <p>Retrieves the service last accessed data report for AWS Organizations that was previously generated
 *          using the <code>
 *                <a>GenerateOrganizationsAccessReport</a>
 *             </code> operation. This
 *          operation retrieves the status of your report job and the report contents.</p>
 *          <p>Depending on the parameters that you passed when you generated the report, the data
 *          returned could include different information. For details, see <a>GenerateOrganizationsAccessReport</a>.</p>
 *          <p>To call this operation, you must be signed in to the master account in your
 *          organization. SCPs must be enabled for your organization root. You must have permissions to
 *          perform this operation. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Refining Permissions Using
 *             Service Last Accessed Data</a> in the <i>IAM User Guide</i>.</p>
 *          <p>For each service that principals in an account (root users, IAM users, or IAM roles)
 *          could access using SCPs, the operation returns details about the most recent access
 *          attempt. If there was no attempt, the service is listed without details about the most
 *          recent attempt to access the service. If the operation fails, it returns the reason that it
 *          failed.</p>
 *          <p>By default, the list is sorted by service namespace.</p>
 */
export class GetOrganizationsAccessReportCommand extends $Command<
  GetOrganizationsAccessReportCommandInput,
  GetOrganizationsAccessReportCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetOrganizationsAccessReportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetOrganizationsAccessReportCommandInput, GetOrganizationsAccessReportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GetOrganizationsAccessReportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetOrganizationsAccessReportRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetOrganizationsAccessReportResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetOrganizationsAccessReportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetOrganizationsAccessReportCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetOrganizationsAccessReportCommandOutput> {
    return deserializeAws_queryGetOrganizationsAccessReportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
