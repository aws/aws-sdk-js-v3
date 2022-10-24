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

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import {
  DeleteRepositoryPolicyRequest,
  DeleteRepositoryPolicyRequestFilterSensitiveLog,
  DeleteRepositoryPolicyResponse,
  DeleteRepositoryPolicyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteRepositoryPolicyCommand,
  serializeAws_json1_1DeleteRepositoryPolicyCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteRepositoryPolicyCommandInput extends DeleteRepositoryPolicyRequest {}
export interface DeleteRepositoryPolicyCommandOutput extends DeleteRepositoryPolicyResponse, __MetadataBearer {}

/**
 * <p>Deletes the repository policy associated with the specified repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DeleteRepositoryPolicyCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DeleteRepositoryPolicyCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new DeleteRepositoryPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRepositoryPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteRepositoryPolicyCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 */
export class DeleteRepositoryPolicyCommand extends $Command<
  DeleteRepositoryPolicyCommandInput,
  DeleteRepositoryPolicyCommandOutput,
  ECRClientResolvedConfig
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

  constructor(readonly input: DeleteRepositoryPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteRepositoryPolicyCommandInput, DeleteRepositoryPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteRepositoryPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "DeleteRepositoryPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteRepositoryPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteRepositoryPolicyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteRepositoryPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteRepositoryPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteRepositoryPolicyCommandOutput> {
    return deserializeAws_json1_1DeleteRepositoryPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
