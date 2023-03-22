// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import {
  UpdateComputeEnvironmentRequest,
  UpdateComputeEnvironmentRequestFilterSensitiveLog,
  UpdateComputeEnvironmentResponse,
  UpdateComputeEnvironmentResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateComputeEnvironmentCommand,
  serializeAws_restJson1UpdateComputeEnvironmentCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateComputeEnvironmentCommand}.
 */
export interface UpdateComputeEnvironmentCommandInput extends UpdateComputeEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateComputeEnvironmentCommand}.
 */
export interface UpdateComputeEnvironmentCommandOutput extends UpdateComputeEnvironmentResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates an Batch compute environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, UpdateComputeEnvironmentCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, UpdateComputeEnvironmentCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const command = new UpdateComputeEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateComputeEnvironmentCommandInput - {@link UpdateComputeEnvironmentCommandInput}
 * @returns {@link UpdateComputeEnvironmentCommandOutput}
 * @see {@link UpdateComputeEnvironmentCommandInput} for command's `input` shape.
 * @see {@link UpdateComputeEnvironmentCommandOutput} for command's `response` shape.
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
 *
 * @example To update a compute environment
 * ```javascript
 * // This example disables the P2OnDemand compute environment so it can be deleted.
 * const input = {
 *   "computeEnvironment": "P2OnDemand",
 *   "state": "DISABLED"
 * };
 * const command = new UpdateComputeEnvironmentCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "computeEnvironmentArn": "arn:aws:batch:us-east-1:012345678910:compute-environment/P2OnDemand",
 *   "computeEnvironmentName": "P2OnDemand"
 * }
 * *\/
 * // example id: to-update-a-compute-environment-1481154702731
 * ```
 *
 */
export class UpdateComputeEnvironmentCommand extends $Command<
  UpdateComputeEnvironmentCommandInput,
  UpdateComputeEnvironmentCommandOutput,
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
  constructor(readonly input: UpdateComputeEnvironmentCommandInput) {
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
  ): Handler<UpdateComputeEnvironmentCommandInput, UpdateComputeEnvironmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateComputeEnvironmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BatchClient";
    const commandName = "UpdateComputeEnvironmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateComputeEnvironmentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateComputeEnvironmentResponseFilterSensitiveLog,
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
  private serialize(input: UpdateComputeEnvironmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateComputeEnvironmentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateComputeEnvironmentCommandOutput> {
    return deserializeAws_restJson1UpdateComputeEnvironmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
