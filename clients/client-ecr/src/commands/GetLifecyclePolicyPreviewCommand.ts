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
  GetLifecyclePolicyPreviewRequest,
  GetLifecyclePolicyPreviewRequestFilterSensitiveLog,
  GetLifecyclePolicyPreviewResponse,
  GetLifecyclePolicyPreviewResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetLifecyclePolicyPreviewCommand,
  serializeAws_json1_1GetLifecyclePolicyPreviewCommand,
} from "../protocols/Aws_json1_1";

export interface GetLifecyclePolicyPreviewCommandInput extends GetLifecyclePolicyPreviewRequest {}
export interface GetLifecyclePolicyPreviewCommandOutput extends GetLifecyclePolicyPreviewResponse, __MetadataBearer {}

/**
 * <p>Retrieves the results of the lifecycle policy preview request for the specified
 *             repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, GetLifecyclePolicyPreviewCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, GetLifecyclePolicyPreviewCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new GetLifecyclePolicyPreviewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLifecyclePolicyPreviewCommandInput} for command's `input` shape.
 * @see {@link GetLifecyclePolicyPreviewCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 */
export class GetLifecyclePolicyPreviewCommand extends $Command<
  GetLifecyclePolicyPreviewCommandInput,
  GetLifecyclePolicyPreviewCommandOutput,
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

  constructor(readonly input: GetLifecyclePolicyPreviewCommandInput) {
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
  ): Handler<GetLifecyclePolicyPreviewCommandInput, GetLifecyclePolicyPreviewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetLifecyclePolicyPreviewCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "GetLifecyclePolicyPreviewCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetLifecyclePolicyPreviewRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetLifecyclePolicyPreviewResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetLifecyclePolicyPreviewCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetLifecyclePolicyPreviewCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetLifecyclePolicyPreviewCommandOutput> {
    return deserializeAws_json1_1GetLifecyclePolicyPreviewCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
