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

import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import {
  PreviewAgentsRequest,
  PreviewAgentsRequestFilterSensitiveLog,
  PreviewAgentsResponse,
  PreviewAgentsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1PreviewAgentsCommand,
  serializeAws_json1_1PreviewAgentsCommand,
} from "../protocols/Aws_json1_1";

export interface PreviewAgentsCommandInput extends PreviewAgentsRequest {}
export interface PreviewAgentsCommandOutput extends PreviewAgentsResponse, __MetadataBearer {}

/**
 * <p>Previews the agents installed on the EC2 instances that are part of the specified
 *          assessment target.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, PreviewAgentsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, PreviewAgentsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new PreviewAgentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PreviewAgentsCommandInput} for command's `input` shape.
 * @see {@link PreviewAgentsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 */
export class PreviewAgentsCommand extends $Command<
  PreviewAgentsCommandInput,
  PreviewAgentsCommandOutput,
  InspectorClientResolvedConfig
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

  constructor(readonly input: PreviewAgentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PreviewAgentsCommandInput, PreviewAgentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PreviewAgentsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "PreviewAgentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PreviewAgentsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PreviewAgentsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PreviewAgentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PreviewAgentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PreviewAgentsCommandOutput> {
    return deserializeAws_json1_1PreviewAgentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
