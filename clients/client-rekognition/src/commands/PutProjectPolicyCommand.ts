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
  PutProjectPolicyRequest,
  PutProjectPolicyRequestFilterSensitiveLog,
  PutProjectPolicyResponse,
  PutProjectPolicyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1PutProjectPolicyCommand,
  serializeAws_json1_1PutProjectPolicyCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

export interface PutProjectPolicyCommandInput extends PutProjectPolicyRequest {}
export interface PutProjectPolicyCommandOutput extends PutProjectPolicyResponse, __MetadataBearer {}

/**
 * <p>Attaches a project policy to a Amazon Rekognition Custom Labels project in a trusting AWS account. A
 *          project policy specifies that a trusted AWS account can copy a model version from a
 *          trusting AWS account to a project in the trusted AWS account. To copy a model version you use
 *        the <a>CopyProjectVersion</a> operation.</p>
 *          <p>For more information about the format of a project policy document, see Attaching a project policy (SDK)
 *          in the <i>Amazon Rekognition Custom Labels Developer Guide</i>.
 *       </p>
 *          <p>The response from <code>PutProjectPolicy</code> is a revision ID for the project policy.
 *          You can attach multiple project policies to a project. You can also update an existing
 *          project policy by specifying the policy revision ID of the existing policy.</p>
 *          <p>To remove a project policy from a project, call <a>DeleteProjectPolicy</a>.
 *          To get a list of project policies attached to a project, call <a>ListProjectPolicies</a>. </p>
 *          <p>You copy a model version by calling <a>CopyProjectVersion</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, PutProjectPolicyCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, PutProjectPolicyCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new PutProjectPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutProjectPolicyCommandInput} for command's `input` shape.
 * @see {@link PutProjectPolicyCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 */
export class PutProjectPolicyCommand extends $Command<
  PutProjectPolicyCommandInput,
  PutProjectPolicyCommandOutput,
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

  constructor(readonly input: PutProjectPolicyCommandInput) {
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
  ): Handler<PutProjectPolicyCommandInput, PutProjectPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutProjectPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "PutProjectPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutProjectPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutProjectPolicyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutProjectPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutProjectPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutProjectPolicyCommandOutput> {
    return deserializeAws_json1_1PutProjectPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
