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
  DeleteProjectPolicyRequest,
  DeleteProjectPolicyRequestFilterSensitiveLog,
  DeleteProjectPolicyResponse,
  DeleteProjectPolicyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteProjectPolicyCommand,
  serializeAws_json1_1DeleteProjectPolicyCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

export interface DeleteProjectPolicyCommandInput extends DeleteProjectPolicyRequest {}
export interface DeleteProjectPolicyCommandOutput extends DeleteProjectPolicyResponse, __MetadataBearer {}

/**
 * <p>Deletes an existing project policy.</p>
 *          <p>To get a list of project policies attached to a project, call <a>ListProjectPolicies</a>. To attach a project policy to a project, call <a>PutProjectPolicy</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DeleteProjectPolicyCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, DeleteProjectPolicyCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new DeleteProjectPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProjectPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteProjectPolicyCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 */
export class DeleteProjectPolicyCommand extends $Command<
  DeleteProjectPolicyCommandInput,
  DeleteProjectPolicyCommandOutput,
  RekognitionClientResolvedConfig
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

  constructor(readonly input: DeleteProjectPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RekognitionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteProjectPolicyCommandInput, DeleteProjectPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteProjectPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "DeleteProjectPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteProjectPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteProjectPolicyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteProjectPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteProjectPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteProjectPolicyCommandOutput> {
    return deserializeAws_json1_1DeleteProjectPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
