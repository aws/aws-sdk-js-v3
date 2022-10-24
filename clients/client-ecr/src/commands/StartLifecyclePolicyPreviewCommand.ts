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
  StartLifecyclePolicyPreviewRequest,
  StartLifecyclePolicyPreviewRequestFilterSensitiveLog,
  StartLifecyclePolicyPreviewResponse,
  StartLifecyclePolicyPreviewResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartLifecyclePolicyPreviewCommand,
  serializeAws_json1_1StartLifecyclePolicyPreviewCommand,
} from "../protocols/Aws_json1_1";

export interface StartLifecyclePolicyPreviewCommandInput extends StartLifecyclePolicyPreviewRequest {}
export interface StartLifecyclePolicyPreviewCommandOutput
  extends StartLifecyclePolicyPreviewResponse,
    __MetadataBearer {}

/**
 * <p>Starts a preview of a lifecycle policy for the specified repository. This allows you
 *             to see the results before associating the lifecycle policy with the repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, StartLifecyclePolicyPreviewCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, StartLifecyclePolicyPreviewCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new StartLifecyclePolicyPreviewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartLifecyclePolicyPreviewCommandInput} for command's `input` shape.
 * @see {@link StartLifecyclePolicyPreviewCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 */
export class StartLifecyclePolicyPreviewCommand extends $Command<
  StartLifecyclePolicyPreviewCommandInput,
  StartLifecyclePolicyPreviewCommandOutput,
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

  constructor(readonly input: StartLifecyclePolicyPreviewCommandInput) {
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
  ): Handler<StartLifecyclePolicyPreviewCommandInput, StartLifecyclePolicyPreviewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartLifecyclePolicyPreviewCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "StartLifecyclePolicyPreviewCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartLifecyclePolicyPreviewRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartLifecyclePolicyPreviewResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartLifecyclePolicyPreviewCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartLifecyclePolicyPreviewCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartLifecyclePolicyPreviewCommandOutput> {
    return deserializeAws_json1_1StartLifecyclePolicyPreviewCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
