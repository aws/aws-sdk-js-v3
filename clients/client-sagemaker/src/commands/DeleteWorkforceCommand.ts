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

import {
  DeleteWorkforceRequest,
  DeleteWorkforceRequestFilterSensitiveLog,
  DeleteWorkforceResponse,
  DeleteWorkforceResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1DeleteWorkforceCommand,
  serializeAws_json1_1DeleteWorkforceCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

export interface DeleteWorkforceCommandInput extends DeleteWorkforceRequest {}
export interface DeleteWorkforceCommandOutput extends DeleteWorkforceResponse, __MetadataBearer {}

/**
 * <p>Use this operation to delete a workforce.</p>
 *          <p>If you want to create a new workforce in an Amazon Web Services Region where
 *       a workforce already exists, use this operation to delete the
 *       existing workforce and then use
 *       to create a new workforce.</p>
 *          <important>
 *             <p>If a private workforce contains one or more work teams, you must use
 *             the
 *             operation to delete all work teams before you delete the workforce.
 *             If you try to delete a workforce that contains one or more work teams,
 *             you will recieve a <code>ResourceInUse</code> error.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteWorkforceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteWorkforceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteWorkforceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWorkforceCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkforceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 */
export class DeleteWorkforceCommand extends $Command<
  DeleteWorkforceCommandInput,
  DeleteWorkforceCommandOutput,
  SageMakerClientResolvedConfig
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

  constructor(readonly input: DeleteWorkforceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteWorkforceCommandInput, DeleteWorkforceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteWorkforceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DeleteWorkforceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteWorkforceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteWorkforceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteWorkforceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteWorkforceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteWorkforceCommandOutput> {
    return deserializeAws_json1_1DeleteWorkforceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
