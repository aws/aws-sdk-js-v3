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

import { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient";
import {
  SetRepositoryPolicyRequest,
  SetRepositoryPolicyRequestFilterSensitiveLog,
  SetRepositoryPolicyResponse,
  SetRepositoryPolicyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1SetRepositoryPolicyCommand,
  serializeAws_json1_1SetRepositoryPolicyCommand,
} from "../protocols/Aws_json1_1";

export interface SetRepositoryPolicyCommandInput extends SetRepositoryPolicyRequest {}
export interface SetRepositoryPolicyCommandOutput extends SetRepositoryPolicyResponse, __MetadataBearer {}

/**
 * <p>Applies a repository policy to the specified public repository to control access
 *          permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html">Amazon ECR Repository
 *             Policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, SetRepositoryPolicyCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, SetRepositoryPolicyCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * const client = new ECRPUBLICClient(config);
 * const command = new SetRepositoryPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetRepositoryPolicyCommandInput} for command's `input` shape.
 * @see {@link SetRepositoryPolicyCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for ECRPUBLICClient's `config` shape.
 *
 */
export class SetRepositoryPolicyCommand extends $Command<
  SetRepositoryPolicyCommandInput,
  SetRepositoryPolicyCommandOutput,
  ECRPUBLICClientResolvedConfig
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

  constructor(readonly input: SetRepositoryPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRPUBLICClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetRepositoryPolicyCommandInput, SetRepositoryPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetRepositoryPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRPUBLICClient";
    const commandName = "SetRepositoryPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetRepositoryPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SetRepositoryPolicyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetRepositoryPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SetRepositoryPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetRepositoryPolicyCommandOutput> {
    return deserializeAws_json1_1SetRepositoryPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
