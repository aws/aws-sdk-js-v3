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
  DeleteSchedulingPolicyRequest,
  DeleteSchedulingPolicyRequestFilterSensitiveLog,
  DeleteSchedulingPolicyResponse,
  DeleteSchedulingPolicyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteSchedulingPolicyCommand,
  serializeAws_restJson1DeleteSchedulingPolicyCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteSchedulingPolicyCommandInput extends DeleteSchedulingPolicyRequest {}
export interface DeleteSchedulingPolicyCommandOutput extends DeleteSchedulingPolicyResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified scheduling policy.</p>
 *          <p>You can't delete a scheduling policy that's used in any job queues.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, DeleteSchedulingPolicyCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, DeleteSchedulingPolicyCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const command = new DeleteSchedulingPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSchedulingPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteSchedulingPolicyCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 */
export class DeleteSchedulingPolicyCommand extends $Command<
  DeleteSchedulingPolicyCommandInput,
  DeleteSchedulingPolicyCommandOutput,
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

  constructor(readonly input: DeleteSchedulingPolicyCommandInput) {
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
  ): Handler<DeleteSchedulingPolicyCommandInput, DeleteSchedulingPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteSchedulingPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BatchClient";
    const commandName = "DeleteSchedulingPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSchedulingPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteSchedulingPolicyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteSchedulingPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteSchedulingPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSchedulingPolicyCommandOutput> {
    return deserializeAws_restJson1DeleteSchedulingPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
