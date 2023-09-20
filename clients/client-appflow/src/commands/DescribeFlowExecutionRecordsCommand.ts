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

import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import { DescribeFlowExecutionRecordsRequest, DescribeFlowExecutionRecordsResponse } from "../models/models_0";
import {
  de_DescribeFlowExecutionRecordsCommand,
  se_DescribeFlowExecutionRecordsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeFlowExecutionRecordsCommand}.
 */
export interface DescribeFlowExecutionRecordsCommandInput extends DescribeFlowExecutionRecordsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFlowExecutionRecordsCommand}.
 */
export interface DescribeFlowExecutionRecordsCommandOutput
  extends DescribeFlowExecutionRecordsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p> Fetches the execution history of the flow. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, DescribeFlowExecutionRecordsCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, DescribeFlowExecutionRecordsCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const input = { // DescribeFlowExecutionRecordsRequest
 *   flowName: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeFlowExecutionRecordsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFlowExecutionRecordsResponse
 * //   flowExecutions: [ // FlowExecutionList
 * //     { // ExecutionRecord
 * //       executionId: "STRING_VALUE",
 * //       executionStatus: "InProgress" || "Successful" || "Error" || "CancelStarted" || "Canceled",
 * //       executionResult: { // ExecutionResult
 * //         errorInfo: { // ErrorInfo
 * //           putFailuresCount: Number("long"),
 * //           executionMessage: "STRING_VALUE",
 * //         },
 * //         bytesProcessed: Number("long"),
 * //         bytesWritten: Number("long"),
 * //         recordsProcessed: Number("long"),
 * //         numParallelProcesses: Number("long"),
 * //         maxPageSize: Number("long"),
 * //       },
 * //       startedAt: new Date("TIMESTAMP"),
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //       dataPullStartTime: new Date("TIMESTAMP"),
 * //       dataPullEndTime: new Date("TIMESTAMP"),
 * //       metadataCatalogDetails: [ // MetadataCatalogDetails
 * //         { // MetadataCatalogDetail
 * //           catalogType: "GLUE",
 * //           tableName: "STRING_VALUE",
 * //           tableRegistrationOutput: { // RegistrationOutput
 * //             message: "STRING_VALUE",
 * //             result: "STRING_VALUE",
 * //             status: "InProgress" || "Successful" || "Error" || "CancelStarted" || "Canceled",
 * //           },
 * //           partitionRegistrationOutput: {
 * //             message: "STRING_VALUE",
 * //             result: "STRING_VALUE",
 * //             status: "InProgress" || "Successful" || "Error" || "CancelStarted" || "Canceled",
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFlowExecutionRecordsCommandInput - {@link DescribeFlowExecutionRecordsCommandInput}
 * @returns {@link DescribeFlowExecutionRecordsCommandOutput}
 * @see {@link DescribeFlowExecutionRecordsCommandInput} for command's `input` shape.
 * @see {@link DescribeFlowExecutionRecordsCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for AppflowClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *       later. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource specified in the request (such as the source or destination connector
 *       profile) is not found. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request has invalid or missing parameters. </p>
 *
 * @throws {@link AppflowServiceException}
 * <p>Base exception class for all service exceptions from Appflow service.</p>
 *
 */
export class DescribeFlowExecutionRecordsCommand extends $Command<
  DescribeFlowExecutionRecordsCommandInput,
  DescribeFlowExecutionRecordsCommandOutput,
  AppflowClientResolvedConfig
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
  constructor(readonly input: DescribeFlowExecutionRecordsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppflowClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeFlowExecutionRecordsCommandInput, DescribeFlowExecutionRecordsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFlowExecutionRecordsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppflowClient";
    const commandName = "DescribeFlowExecutionRecordsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SandstoneConfigurationServiceLambda",
        operation: "DescribeFlowExecutionRecords",
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
  private serialize(input: DescribeFlowExecutionRecordsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeFlowExecutionRecordsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeFlowExecutionRecordsCommandOutput> {
    return de_DescribeFlowExecutionRecordsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
