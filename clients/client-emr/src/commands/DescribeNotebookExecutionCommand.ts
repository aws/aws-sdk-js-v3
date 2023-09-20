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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { DescribeNotebookExecutionInput, DescribeNotebookExecutionOutput } from "../models/models_0";
import { de_DescribeNotebookExecutionCommand, se_DescribeNotebookExecutionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeNotebookExecutionCommand}.
 */
export interface DescribeNotebookExecutionCommandInput extends DescribeNotebookExecutionInput {}
/**
 * @public
 *
 * The output of {@link DescribeNotebookExecutionCommand}.
 */
export interface DescribeNotebookExecutionCommandOutput extends DescribeNotebookExecutionOutput, __MetadataBearer {}

/**
 * @public
 * <p>Provides details of a notebook execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, DescribeNotebookExecutionCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, DescribeNotebookExecutionCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // DescribeNotebookExecutionInput
 *   NotebookExecutionId: "STRING_VALUE", // required
 * };
 * const command = new DescribeNotebookExecutionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNotebookExecutionOutput
 * //   NotebookExecution: { // NotebookExecution
 * //     NotebookExecutionId: "STRING_VALUE",
 * //     EditorId: "STRING_VALUE",
 * //     ExecutionEngine: { // ExecutionEngineConfig
 * //       Id: "STRING_VALUE", // required
 * //       Type: "EMR",
 * //       MasterInstanceSecurityGroupId: "STRING_VALUE",
 * //       ExecutionRoleArn: "STRING_VALUE",
 * //     },
 * //     NotebookExecutionName: "STRING_VALUE",
 * //     NotebookParams: "STRING_VALUE",
 * //     Status: "START_PENDING" || "STARTING" || "RUNNING" || "FINISHING" || "FINISHED" || "FAILING" || "FAILED" || "STOP_PENDING" || "STOPPING" || "STOPPED",
 * //     StartTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     Arn: "STRING_VALUE",
 * //     OutputNotebookURI: "STRING_VALUE",
 * //     LastStateChangeReason: "STRING_VALUE",
 * //     NotebookInstanceSecurityGroupId: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     NotebookS3Location: { // NotebookS3LocationForOutput
 * //       Bucket: "STRING_VALUE",
 * //       Key: "STRING_VALUE",
 * //     },
 * //     OutputNotebookS3Location: { // OutputNotebookS3LocationForOutput
 * //       Bucket: "STRING_VALUE",
 * //       Key: "STRING_VALUE",
 * //     },
 * //     OutputNotebookFormat: "HTML",
 * //     EnvironmentVariables: { // EnvironmentVariablesMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeNotebookExecutionCommandInput - {@link DescribeNotebookExecutionCommandInput}
 * @returns {@link DescribeNotebookExecutionCommandOutput}
 * @see {@link DescribeNotebookExecutionCommandInput} for command's `input` shape.
 * @see {@link DescribeNotebookExecutionCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Indicates that an error occurred while processing the request and that the request was
 *          not completed.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 */
export class DescribeNotebookExecutionCommand extends $Command<
  DescribeNotebookExecutionCommandInput,
  DescribeNotebookExecutionCommandOutput,
  EMRClientResolvedConfig
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
  constructor(readonly input: DescribeNotebookExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeNotebookExecutionCommandInput, DescribeNotebookExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeNotebookExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "DescribeNotebookExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticMapReduce",
        operation: "DescribeNotebookExecution",
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
  private serialize(input: DescribeNotebookExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeNotebookExecutionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeNotebookExecutionCommandOutput> {
    return de_DescribeNotebookExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
