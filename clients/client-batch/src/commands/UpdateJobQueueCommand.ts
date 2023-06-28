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

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { UpdateJobQueueRequest, UpdateJobQueueResponse } from "../models/models_0";
import { de_UpdateJobQueueCommand, se_UpdateJobQueueCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateJobQueueCommand}.
 */
export interface UpdateJobQueueCommandInput extends UpdateJobQueueRequest {}
/**
 * @public
 *
 * The output of {@link UpdateJobQueueCommand}.
 */
export interface UpdateJobQueueCommandOutput extends UpdateJobQueueResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates a job queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, UpdateJobQueueCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, UpdateJobQueueCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const input = { // UpdateJobQueueRequest
 *   jobQueue: "STRING_VALUE", // required
 *   state: "ENABLED" || "DISABLED",
 *   schedulingPolicyArn: "STRING_VALUE",
 *   priority: Number("int"),
 *   computeEnvironmentOrder: [ // ComputeEnvironmentOrders
 *     { // ComputeEnvironmentOrder
 *       order: Number("int"), // required
 *       computeEnvironment: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new UpdateJobQueueCommand(input);
 * const response = await client.send(command);
 * // { // UpdateJobQueueResponse
 * //   jobQueueName: "STRING_VALUE",
 * //   jobQueueArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateJobQueueCommandInput - {@link UpdateJobQueueCommandInput}
 * @returns {@link UpdateJobQueueCommandOutput}
 * @see {@link UpdateJobQueueCommandInput} for command's `input` shape.
 * @see {@link UpdateJobQueueCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. One example cause is using an action or resource on behalf
 *    of a user that doesn't have permissions to use the action or resource. Another cause is specifying an identifier
 *    that's not valid.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link BatchServiceException}
 * <p>Base exception class for all service exceptions from Batch service.</p>
 *
 * @example To update a job queue
 * ```javascript
 * // This example disables a job queue so that it can be deleted.
 * const input = {
 *   "jobQueue": "GPGPU",
 *   "state": "DISABLED"
 * };
 * const command = new UpdateJobQueueCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "jobQueueArn": "arn:aws:batch:us-east-1:012345678910:job-queue/GPGPU",
 *   "jobQueueName": "GPGPU"
 * }
 * *\/
 * // example id: to-update-a-job-queue-1481154806981
 * ```
 *
 */
export class UpdateJobQueueCommand extends $Command<
  UpdateJobQueueCommandInput,
  UpdateJobQueueCommandOutput,
  BatchClientResolvedConfig
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
  constructor(readonly input: UpdateJobQueueCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateJobQueueCommandInput, UpdateJobQueueCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateJobQueueCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BatchClient";
    const commandName = "UpdateJobQueueCommand";
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
  private serialize(input: UpdateJobQueueCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateJobQueueCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateJobQueueCommandOutput> {
    return de_UpdateJobQueueCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
