// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  GetComplianceSummaryInput,
  GetComplianceSummaryInputFilterSensitiveLog,
  GetComplianceSummaryOutput,
  GetComplianceSummaryOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetComplianceSummaryCommand,
  serializeAws_json1_1GetComplianceSummaryCommand,
} from "../protocols/Aws_json1_1";
import {
  ResourceGroupsTaggingAPIClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceGroupsTaggingAPIClient";

export interface GetComplianceSummaryCommandInput extends GetComplianceSummaryInput {}
export interface GetComplianceSummaryCommandOutput extends GetComplianceSummaryOutput, __MetadataBearer {}

/**
 * <p>Returns a table that shows counts of resources that are noncompliant with their tag
 *             policies.</p>
 *         <p>For more information on tag policies, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">Tag Policies</a> in
 *             the <i>Organizations User Guide.</i>
 *          </p>
 *         <p>You can call this operation only from the organization's
 *     management account and from the us-east-1 Region.</p>
 *         <p>This operation supports pagination, where the response can be sent in
 *     multiple pages. You should check the <code>PaginationToken</code> response parameter to determine
 *     if there are additional results available to return. Repeat the query, passing the
 *     <code>PaginationToken</code> response parameter value as an input to the next request until you
 *     recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that
 *     there are no more results waiting to be returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsTaggingAPIClient, GetComplianceSummaryCommand } from "@aws-sdk/client-resource-groups-tagging-api"; // ES Modules import
 * // const { ResourceGroupsTaggingAPIClient, GetComplianceSummaryCommand } = require("@aws-sdk/client-resource-groups-tagging-api"); // CommonJS import
 * const client = new ResourceGroupsTaggingAPIClient(config);
 * const command = new GetComplianceSummaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetComplianceSummaryCommandInput} for command's `input` shape.
 * @see {@link GetComplianceSummaryCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsTaggingAPIClientResolvedConfig | config} for ResourceGroupsTaggingAPIClient's `config` shape.
 *
 */
export class GetComplianceSummaryCommand extends $Command<
  GetComplianceSummaryCommandInput,
  GetComplianceSummaryCommandOutput,
  ResourceGroupsTaggingAPIClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetComplianceSummaryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResourceGroupsTaggingAPIClient";
    const commandName = "GetComplianceSummaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetComplianceSummaryInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetComplianceSummaryOutputFilterSensitiveLog,
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
