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

import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { ListAnomalousLogGroupsRequest, ListAnomalousLogGroupsResponse } from "../models/models_0";
import { de_ListAnomalousLogGroupsCommand, se_ListAnomalousLogGroupsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAnomalousLogGroupsCommand}.
 */
export interface ListAnomalousLogGroupsCommandInput extends ListAnomalousLogGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListAnomalousLogGroupsCommand}.
 */
export interface ListAnomalousLogGroupsCommandOutput extends ListAnomalousLogGroupsResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 * 			Returns the list of log groups that contain log anomalies.
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, ListAnomalousLogGroupsCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, ListAnomalousLogGroupsCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const input = { // ListAnomalousLogGroupsRequest
 *   InsightId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAnomalousLogGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListAnomalousLogGroupsResponse
 * //   InsightId: "STRING_VALUE", // required
 * //   AnomalousLogGroups: [ // AnomalousLogGroups // required
 * //     { // AnomalousLogGroup
 * //       LogGroupName: "STRING_VALUE",
 * //       ImpactStartTime: new Date("TIMESTAMP"),
 * //       ImpactEndTime: new Date("TIMESTAMP"),
 * //       NumberOfLogLinesScanned: Number("int"),
 * //       LogAnomalyShowcases: [ // LogAnomalyShowcases
 * //         { // LogAnomalyShowcase
 * //           LogAnomalyClasses: [ // LogAnomalyClasses
 * //             { // LogAnomalyClass
 * //               LogStreamName: "STRING_VALUE",
 * //               LogAnomalyType: "KEYWORD" || "KEYWORD_TOKEN" || "FORMAT" || "HTTP_CODE" || "BLOCK_FORMAT" || "NUMERICAL_POINT" || "NUMERICAL_NAN" || "NEW_FIELD_NAME",
 * //               LogAnomalyToken: "STRING_VALUE",
 * //               LogEventId: "STRING_VALUE",
 * //               Explanation: "STRING_VALUE",
 * //               NumberOfLogLinesOccurrences: Number("int"),
 * //               LogEventTimestamp: new Date("TIMESTAMP"),
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAnomalousLogGroupsCommandInput - {@link ListAnomalousLogGroupsCommandInput}
 * @returns {@link ListAnomalousLogGroupsCommandOutput}
 * @see {@link ListAnomalousLogGroupsCommandInput} for command's `input` shape.
 * @see {@link ListAnomalousLogGroupsCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource could not be found</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to a request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Contains information about data passed in to a field during a request that is not
 * 			valid. </p>
 *
 * @throws {@link DevOpsGuruServiceException}
 * <p>Base exception class for all service exceptions from DevOpsGuru service.</p>
 *
 */
export class ListAnomalousLogGroupsCommand extends $Command<
  ListAnomalousLogGroupsCommandInput,
  ListAnomalousLogGroupsCommandOutput,
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
  constructor(readonly input: ListAnomalousLogGroupsCommandInput) {
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
  ): Handler<ListAnomalousLogGroupsCommandInput, ListAnomalousLogGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAnomalousLogGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "ListAnomalousLogGroupsCommand";
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
  private serialize(input: ListAnomalousLogGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAnomalousLogGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAnomalousLogGroupsCommandOutput> {
    return de_ListAnomalousLogGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
