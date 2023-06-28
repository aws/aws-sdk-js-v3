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

import { CancelMessageMoveTaskRequest, CancelMessageMoveTaskResult } from "../models/models_0";
import { de_CancelMessageMoveTaskCommand, se_CancelMessageMoveTaskCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CancelMessageMoveTaskCommand}.
 */
export interface CancelMessageMoveTaskCommandInput extends CancelMessageMoveTaskRequest {}
/**
 * @public
 *
 * The output of {@link CancelMessageMoveTaskCommand}.
 */
export interface CancelMessageMoveTaskCommandOutput extends CancelMessageMoveTaskResult, __MetadataBearer {}

/**
 * @public
 * <p>Cancels a specified message movement task.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>A message movement can only be cancelled when the current status is
 *                         RUNNING.</p>
 *                </li>
 *                <li>
 *                   <p>Cancelling a message movement task does not revert the messages that have
 *                         already been moved. It can only stop the messages that have not been moved
 *                         yet.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, CancelMessageMoveTaskCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, CancelMessageMoveTaskCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const input = { // CancelMessageMoveTaskRequest
 *   TaskHandle: "STRING_VALUE", // required
 * };
 * const command = new CancelMessageMoveTaskCommand(input);
 * const response = await client.send(command);
 * // { // CancelMessageMoveTaskResult
 * //   ApproximateNumberOfMessagesMoved: Number("long"),
 * // };
 *
 * ```
 *
 * @param CancelMessageMoveTaskCommandInput - {@link CancelMessageMoveTaskCommandInput}
 * @returns {@link CancelMessageMoveTaskCommandOutput}
 * @see {@link CancelMessageMoveTaskCommandInput} for command's `input` shape.
 * @see {@link CancelMessageMoveTaskCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for SQSClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more specified resources don't exist.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>Error code 400. Unsupported operation.</p>
 *
 * @throws {@link SQSServiceException}
 * <p>Base exception class for all service exceptions from SQS service.</p>
 *
 */
export class CancelMessageMoveTaskCommand extends $Command<
  CancelMessageMoveTaskCommandInput,
  CancelMessageMoveTaskCommandOutput,
  SQSClientResolvedConfig
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
  constructor(readonly input: CancelMessageMoveTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SQSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelMessageMoveTaskCommandInput, CancelMessageMoveTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelMessageMoveTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SQSClient";
    const commandName = "CancelMessageMoveTaskCommand";
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
  private serialize(input: CancelMessageMoveTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CancelMessageMoveTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelMessageMoveTaskCommandOutput> {
    return de_CancelMessageMoveTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
