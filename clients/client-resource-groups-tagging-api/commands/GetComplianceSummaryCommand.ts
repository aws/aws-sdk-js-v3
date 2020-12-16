import {
  ResourceGroupsTaggingAPIClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceGroupsTaggingAPIClient";
import { GetComplianceSummaryInput, GetComplianceSummaryOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetComplianceSummaryCommand,
  serializeAws_json1_1GetComplianceSummaryCommand,
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

export type GetComplianceSummaryCommandInput = GetComplianceSummaryInput;
export type GetComplianceSummaryCommandOutput = GetComplianceSummaryOutput & __MetadataBearer;

/**
 * <p>Returns a table that shows counts of resources that are noncompliant with their tag
 *             policies.</p>
 *         <p>For more information on tag policies, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">Tag Policies</a> in
 *             the <i>AWS Organizations User Guide.</i>
 *          </p>
 *         <p>You can call this operation only from the organization's master account and from the us-east-1 Region.</p>
 */
export class GetComplianceSummaryCommand extends $Command<
  GetComplianceSummaryCommandInput,
  GetComplianceSummaryCommandOutput,
  ResourceGroupsTaggingAPIClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetComplianceSummaryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResourceGroupsTaggingAPIClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetComplianceSummaryCommandInput, GetComplianceSummaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResourceGroupsTaggingAPIClient";
    const commandName = "GetComplianceSummaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetComplianceSummaryInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetComplianceSummaryOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetComplianceSummaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetComplianceSummaryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetComplianceSummaryCommandOutput> {
    return deserializeAws_json1_1GetComplianceSummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
