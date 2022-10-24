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
  DeleteActivationRequest,
  DeleteActivationRequestFilterSensitiveLog,
  DeleteActivationResult,
  DeleteActivationResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteActivationCommand,
  serializeAws_json1_1DeleteActivationCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface DeleteActivationCommandInput extends DeleteActivationRequest {}
export interface DeleteActivationCommandOutput extends DeleteActivationResult, __MetadataBearer {}

/**
 * <p>Deletes an activation. You aren't required to delete an activation. If you delete an
 *    activation, you can no longer use it to register additional managed nodes. Deleting an activation
 *    doesn't de-register managed nodes. You must manually de-register managed nodes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteActivationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteActivationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DeleteActivationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteActivationCommandInput} for command's `input` shape.
 * @see {@link DeleteActivationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class DeleteActivationCommand extends $Command<
  DeleteActivationCommandInput,
  DeleteActivationCommandOutput,
  SSMClientResolvedConfig
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

  constructor(readonly input: DeleteActivationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteActivationCommandInput, DeleteActivationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteActivationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DeleteActivationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteActivationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteActivationResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteActivationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteActivationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteActivationCommandOutput> {
    return deserializeAws_json1_1DeleteActivationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
