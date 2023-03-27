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

import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { ListOrganizationInsightsRequest, ListOrganizationInsightsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListOrganizationInsightsCommand,
  serializeAws_restJson1ListOrganizationInsightsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListOrganizationInsightsCommand}.
 */
export interface ListOrganizationInsightsCommandInput extends ListOrganizationInsightsRequest {}
/**
 * @public
 *
 * The output of {@link ListOrganizationInsightsCommand}.
 */
export interface ListOrganizationInsightsCommandOutput extends ListOrganizationInsightsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of insights associated with the account or OU Id.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, ListOrganizationInsightsCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, ListOrganizationInsightsCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const input = { // ListOrganizationInsightsRequest
 *   StatusFilter: { // ListInsightsStatusFilter
 *     Ongoing: { // ListInsightsOngoingStatusFilter
 *       Type: "REACTIVE" || "PROACTIVE", // required
 *     },
 *     Closed: { // ListInsightsClosedStatusFilter
 *       Type: "REACTIVE" || "PROACTIVE", // required
 *       EndTimeRange: { // EndTimeRange
 *         FromTime: new Date("TIMESTAMP"),
 *         ToTime: new Date("TIMESTAMP"),
 *       },
 *     },
 *     Any: { // ListInsightsAnyStatusFilter
 *       Type: "REACTIVE" || "PROACTIVE", // required
 *       StartTimeRange: { // StartTimeRange
 *         FromTime: new Date("TIMESTAMP"),
 *         ToTime: new Date("TIMESTAMP"),
 *       },
 *     },
 *   },
 *   MaxResults: Number("int"),
 *   AccountIds: [ // ListInsightsAccountIdList
 *     "STRING_VALUE",
 *   ],
 *   OrganizationalUnitIds: [ // ListInsightsOrganizationalUnitIdList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListOrganizationInsightsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListOrganizationInsightsCommandInput - {@link ListOrganizationInsightsCommandInput}
 * @returns {@link ListOrganizationInsightsCommandOutput}
 * @see {@link ListOrganizationInsightsCommandInput} for command's `input` shape.
 * @see {@link ListOrganizationInsightsCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have permissions to perform the requested operation. The user or role that
 * 			is making the request must have at least one IAM permissions policy attached that grants
 * 			the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the
 * 				<i>IAM User Guide</i>. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal failure in an Amazon service occurred.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to a request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Contains information about data passed in to a field during a request that is not
 * 			valid. </p>
 *
 *
 */
export class ListOrganizationInsightsCommand extends $Command<
  ListOrganizationInsightsCommandInput,
  ListOrganizationInsightsCommandOutput,
  DevOpsGuruClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: ListOrganizationInsightsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DevOpsGuruClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListOrganizationInsightsCommandInput, ListOrganizationInsightsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListOrganizationInsightsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "ListOrganizationInsightsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ListOrganizationInsightsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListOrganizationInsightsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListOrganizationInsightsCommandOutput> {
    return deserializeAws_restJson1ListOrganizationInsightsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
