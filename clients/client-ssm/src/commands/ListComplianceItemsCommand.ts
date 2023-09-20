// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ListComplianceItemsRequest, ListComplianceItemsResult } from "../models/models_1";
import { de_ListComplianceItemsCommand, se_ListComplianceItemsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListComplianceItemsCommand}.
 */
export interface ListComplianceItemsCommandInput extends ListComplianceItemsRequest {}
/**
 * @public
 *
 * The output of {@link ListComplianceItemsCommand}.
 */
export interface ListComplianceItemsCommandOutput extends ListComplianceItemsResult, __MetadataBearer {}

/**
 * @public
 * <p>For a specified resource ID, this API operation returns a list of compliance statuses for
 *    different resource types. Currently, you can only specify one resource ID per call. List results
 *    depend on the criteria specified in the filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListComplianceItemsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListComplianceItemsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // ListComplianceItemsRequest
 *   Filters: [ // ComplianceStringFilterList
 *     { // ComplianceStringFilter
 *       Key: "STRING_VALUE",
 *       Values: [ // ComplianceStringFilterValueList
 *         "STRING_VALUE",
 *       ],
 *       Type: "EQUAL" || "NOT_EQUAL" || "BEGIN_WITH" || "LESS_THAN" || "GREATER_THAN",
 *     },
 *   ],
 *   ResourceIds: [ // ComplianceResourceIdList
 *     "STRING_VALUE",
 *   ],
 *   ResourceTypes: [ // ComplianceResourceTypeList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListComplianceItemsCommand(input);
 * const response = await client.send(command);
 * // { // ListComplianceItemsResult
 * //   ComplianceItems: [ // ComplianceItemList
 * //     { // ComplianceItem
 * //       ComplianceType: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Title: "STRING_VALUE",
 * //       Status: "COMPLIANT" || "NON_COMPLIANT",
 * //       Severity: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "INFORMATIONAL" || "UNSPECIFIED",
 * //       ExecutionSummary: { // ComplianceExecutionSummary
 * //         ExecutionTime: new Date("TIMESTAMP"), // required
 * //         ExecutionId: "STRING_VALUE",
 * //         ExecutionType: "STRING_VALUE",
 * //       },
 * //       Details: { // ComplianceItemDetails
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListComplianceItemsCommandInput - {@link ListComplianceItemsCommandInput}
 * @returns {@link ListComplianceItemsCommandOutput}
 * @see {@link ListComplianceItemsCommandInput} for command's `input` shape.
 * @see {@link ListComplianceItemsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidFilter} (client fault)
 *  <p>The filter name isn't valid. Verify the you entered the correct name and try again.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link InvalidResourceId} (client fault)
 *  <p>The resource ID isn't valid. Verify that you entered the correct ID and try again.</p>
 *
 * @throws {@link InvalidResourceType} (client fault)
 *  <p>The resource type isn't valid. For example, if you are attempting to tag an EC2 instance,
 *    the instance must be a registered managed node.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class ListComplianceItemsCommand extends $Command<
  ListComplianceItemsCommandInput,
  ListComplianceItemsCommandOutput,
  SSMClientResolvedConfig
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
  constructor(readonly input: ListComplianceItemsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListComplianceItemsCommandInput, ListComplianceItemsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListComplianceItemsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "ListComplianceItemsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSSM",
        operation: "ListComplianceItems",
      },
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
  private serialize(input: ListComplianceItemsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListComplianceItemsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListComplianceItemsCommandOutput> {
    return de_ListComplianceItemsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
