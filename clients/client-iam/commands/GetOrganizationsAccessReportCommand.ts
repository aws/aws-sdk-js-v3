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

export interface GetOrganizationsAccessReportCommandInput extends GetOrganizationsAccessReportRequest {}
export interface GetOrganizationsAccessReportCommandOutput
  extends GetOrganizationsAccessReportResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the service last accessed data report for AWS Organizations that was previously generated
 *             using the <code>
 *                <a>GenerateOrganizationsAccessReport</a>
 *             </code> operation.
 *             This operation retrieves the status of your report job and the report contents.</p>
 *         <p>Depending on the parameters that you passed when you generated the report, the data
 *             returned could include different information. For details, see <a>GenerateOrganizationsAccessReport</a>.</p>
 *         <p>To call this operation, you must be signed in to the management account in your
 *             organization. SCPs must be enabled for your organization root. You must have permissions
 *             to perform this operation. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Refining permissions using
 *                 service last accessed data</a> in the
 *             <i>IAM User Guide</i>.</p>
 *         <p>For each service that principals in an account (root users, IAM users, or IAM
 *             roles) could access using SCPs, the operation returns details about the most recent
 *             access attempt. If there was no attempt, the service is listed without details about the
 *             most recent attempt to access the service. If the operation fails, it returns the reason
 *             that it failed.</p>
 *         <p>By default, the list is sorted by service namespace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetOrganizationsAccessReportCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetOrganizationsAccessReportCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetOrganizationsAccessReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOrganizationsAccessReportCommandInput} for command's `input` shape.
 * @see {@link GetOrganizationsAccessReportCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
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
