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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { DescribeStepInput, DescribeStepOutput } from "../models/models_0";
import { de_DescribeStepCommand, se_DescribeStepCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeStepCommand}.
 */
export interface DescribeStepCommandInput extends DescribeStepInput {}
/**
 * @public
 *
 * The output of {@link DescribeStepCommand}.
 */
export interface DescribeStepCommandOutput extends DescribeStepOutput, __MetadataBearer {}

/**
 * @public
 * <p>Provides more detail about the cluster step.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, DescribeStepCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, DescribeStepCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // DescribeStepInput
 *   ClusterId: "STRING_VALUE", // required
 *   StepId: "STRING_VALUE", // required
 * };
 * const command = new DescribeStepCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStepOutput
 * //   Step: { // Step
 * //     Id: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Config: { // HadoopStepConfig
 * //       Jar: "STRING_VALUE",
 * //       Properties: { // StringMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       MainClass: "STRING_VALUE",
 * //       Args: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     ActionOnFailure: "TERMINATE_JOB_FLOW" || "TERMINATE_CLUSTER" || "CANCEL_AND_WAIT" || "CONTINUE",
 * //     Status: { // StepStatus
 * //       State: "PENDING" || "CANCEL_PENDING" || "RUNNING" || "COMPLETED" || "CANCELLED" || "FAILED" || "INTERRUPTED",
 * //       StateChangeReason: { // StepStateChangeReason
 * //         Code: "NONE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       FailureDetails: { // FailureDetails
 * //         Reason: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //         LogFile: "STRING_VALUE",
 * //       },
 * //       Timeline: { // StepTimeline
 * //         CreationDateTime: new Date("TIMESTAMP"),
 * //         StartDateTime: new Date("TIMESTAMP"),
 * //         EndDateTime: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //     ExecutionRoleArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeStepCommandInput - {@link DescribeStepCommandInput}
 * @returns {@link DescribeStepCommandOutput}
 * @see {@link DescribeStepCommandInput} for command's `input` shape.
 * @see {@link DescribeStepCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon EMR
 *          service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 */
export class DescribeStepCommand extends $Command<
  DescribeStepCommandInput,
  DescribeStepCommandOutput,
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
  constructor(readonly input: DescribeStepCommandInput) {
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
  ): Handler<DescribeStepCommandInput, DescribeStepCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeStepCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "DescribeStepCommand";
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
  private serialize(input: DescribeStepCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeStepCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeStepCommandOutput> {
    return de_DescribeStepCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
