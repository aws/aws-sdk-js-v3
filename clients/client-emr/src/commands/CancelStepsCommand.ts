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
import { CancelStepsInput, CancelStepsOutput } from "../models/models_0";
import { de_CancelStepsCommand, se_CancelStepsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CancelStepsCommand}.
 */
export interface CancelStepsCommandInput extends CancelStepsInput {}
/**
 * @public
 *
 * The output of {@link CancelStepsCommand}.
 */
export interface CancelStepsCommandOutput extends CancelStepsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Cancels a pending step or steps in a running cluster. Available only in Amazon EMR versions 4.8.0 and later, excluding version 5.0.0. A maximum of 256 steps are allowed in
 *          each CancelSteps request. CancelSteps is idempotent but asynchronous; it does not guarantee
 *          that a step will be canceled, even if the request is successfully submitted. When you use
 *             Amazon EMR releases 5.28.0 and later, you can cancel steps that are in a
 *             <code>PENDING</code> or <code>RUNNING</code> state. In earlier versions of Amazon EMR, you can only cancel steps that are in a <code>PENDING</code> state. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, CancelStepsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, CancelStepsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // CancelStepsInput
 *   ClusterId: "STRING_VALUE", // required
 *   StepIds: [ // StepIdsList // required
 *     "STRING_VALUE",
 *   ],
 *   StepCancellationOption: "SEND_INTERRUPT" || "TERMINATE_PROCESS",
 * };
 * const command = new CancelStepsCommand(input);
 * const response = await client.send(command);
 * // { // CancelStepsOutput
 * //   CancelStepsInfoList: [ // CancelStepsInfoList
 * //     { // CancelStepsInfo
 * //       StepId: "STRING_VALUE",
 * //       Status: "SUBMITTED" || "FAILED",
 * //       Reason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CancelStepsCommandInput - {@link CancelStepsCommandInput}
 * @returns {@link CancelStepsCommandOutput}
 * @see {@link CancelStepsCommandInput} for command's `input` shape.
 * @see {@link CancelStepsCommandOutput} for command's `response` shape.
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
export class CancelStepsCommand extends $Command<
  CancelStepsCommandInput,
  CancelStepsCommandOutput,
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
  constructor(readonly input: CancelStepsCommandInput) {
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
  ): Handler<CancelStepsCommandInput, CancelStepsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CancelStepsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "CancelStepsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticMapReduce",
        operation: "CancelSteps",
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
  private serialize(input: CancelStepsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CancelStepsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelStepsCommandOutput> {
    return de_CancelStepsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
