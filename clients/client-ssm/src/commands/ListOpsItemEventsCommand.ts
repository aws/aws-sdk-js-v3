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

import { ListOpsItemEventsRequest, ListOpsItemEventsResponse } from "../models/models_1";
import { de_ListOpsItemEventsCommand, se_ListOpsItemEventsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListOpsItemEventsCommand}.
 */
export interface ListOpsItemEventsCommandInput extends ListOpsItemEventsRequest {}
/**
 * @public
 *
 * The output of {@link ListOpsItemEventsCommand}.
 */
export interface ListOpsItemEventsCommandOutput extends ListOpsItemEventsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of all OpsItem events in the current Amazon Web Services Region and Amazon Web Services account. You can
 *    limit the results to events associated with specific OpsItems by specifying a filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListOpsItemEventsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListOpsItemEventsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // ListOpsItemEventsRequest
 *   Filters: [ // OpsItemEventFilters
 *     { // OpsItemEventFilter
 *       Key: "OpsItemId", // required
 *       Values: [ // OpsItemEventFilterValues // required
 *         "STRING_VALUE",
 *       ],
 *       Operator: "Equal", // required
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListOpsItemEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListOpsItemEventsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Summaries: [ // OpsItemEventSummaries
 * //     { // OpsItemEventSummary
 * //       OpsItemId: "STRING_VALUE",
 * //       EventId: "STRING_VALUE",
 * //       Source: "STRING_VALUE",
 * //       DetailType: "STRING_VALUE",
 * //       Detail: "STRING_VALUE",
 * //       CreatedBy: { // OpsItemIdentity
 * //         Arn: "STRING_VALUE",
 * //       },
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListOpsItemEventsCommandInput - {@link ListOpsItemEventsCommandInput}
 * @returns {@link ListOpsItemEventsCommandOutput}
 * @see {@link ListOpsItemEventsCommandInput} for command's `input` shape.
 * @see {@link ListOpsItemEventsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link OpsItemInvalidParameterException} (client fault)
 *  <p>A specified parameter argument isn't valid. Verify the available arguments and try
 *    again.</p>
 *
 * @throws {@link OpsItemLimitExceededException} (client fault)
 *  <p>The request caused OpsItems to exceed one or more quotas.</p>
 *
 * @throws {@link OpsItemNotFoundException} (client fault)
 *  <p>The specified OpsItem ID doesn't exist. Verify the ID and try again.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class ListOpsItemEventsCommand extends $Command<
  ListOpsItemEventsCommandInput,
  ListOpsItemEventsCommandOutput,
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
  constructor(readonly input: ListOpsItemEventsCommandInput) {
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
  ): Handler<ListOpsItemEventsCommandInput, ListOpsItemEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListOpsItemEventsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "ListOpsItemEventsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSSM",
        operation: "ListOpsItemEvents",
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
  private serialize(input: ListOpsItemEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListOpsItemEventsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListOpsItemEventsCommandOutput> {
    return de_ListOpsItemEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
