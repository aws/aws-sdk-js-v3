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
} from "@smithy/types";

import { CloudControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudControlClient";
import {
  ListResourceRequestsInput,
  ListResourceRequestsOutput,
  ListResourceRequestsOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_ListResourceRequestsCommand, se_ListResourceRequestsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListResourceRequestsCommand}.
 */
export interface ListResourceRequestsCommandInput extends ListResourceRequestsInput {}
/**
 * @public
 *
 * The output of {@link ListResourceRequestsCommand}.
 */
export interface ListResourceRequestsCommandOutput extends ListResourceRequestsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns existing resource operation requests. This includes requests of all status types.
 *       For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html#resource-operations-manage-requests-list">Listing active resource operation requests</a> in the
 *         <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
 *          <note>
 *             <p>Resource operation requests expire after 7 days.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudControlClient, ListResourceRequestsCommand } from "@aws-sdk/client-cloudcontrol"; // ES Modules import
 * // const { CloudControlClient, ListResourceRequestsCommand } = require("@aws-sdk/client-cloudcontrol"); // CommonJS import
 * const client = new CloudControlClient(config);
 * const input = { // ListResourceRequestsInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ResourceRequestStatusFilter: { // ResourceRequestStatusFilter
 *     Operations: [ // Operations
 *       "STRING_VALUE",
 *     ],
 *     OperationStatuses: [ // OperationStatuses
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new ListResourceRequestsCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceRequestsOutput
 * //   ResourceRequestStatusSummaries: [ // ResourceRequestStatusSummaries
 * //     { // ProgressEvent
 * //       TypeName: "STRING_VALUE",
 * //       Identifier: "STRING_VALUE",
 * //       RequestToken: "STRING_VALUE",
 * //       Operation: "STRING_VALUE",
 * //       OperationStatus: "STRING_VALUE",
 * //       EventTime: new Date("TIMESTAMP"),
 * //       ResourceModel: "STRING_VALUE",
 * //       StatusMessage: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //       RetryAfter: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourceRequestsCommandInput - {@link ListResourceRequestsCommandInput}
 * @returns {@link ListResourceRequestsCommandOutput}
 * @see {@link ListResourceRequestsCommandInput} for command's `input` shape.
 * @see {@link ListResourceRequestsCommandOutput} for command's `response` shape.
 * @see {@link CloudControlClientResolvedConfig | config} for CloudControlClient's `config` shape.
 *
 * @throws {@link CloudControlServiceException}
 * <p>Base exception class for all service exceptions from CloudControl service.</p>
 *
 */
export class ListResourceRequestsCommand extends $Command<
  ListResourceRequestsCommandInput,
  ListResourceRequestsCommandOutput,
  CloudControlClientResolvedConfig
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
  constructor(readonly input: ListResourceRequestsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListResourceRequestsCommandInput, ListResourceRequestsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListResourceRequestsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudControlClient";
    const commandName = "ListResourceRequestsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListResourceRequestsOutputFilterSensitiveLog,
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
  private serialize(input: ListResourceRequestsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListResourceRequestsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListResourceRequestsCommandOutput> {
    return de_ListResourceRequestsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
