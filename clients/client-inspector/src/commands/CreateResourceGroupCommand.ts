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
  CreateResourceGroupRequest,
  CreateResourceGroupRequestFilterSensitiveLog,
  CreateResourceGroupResponse,
  CreateResourceGroupResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateResourceGroupCommand,
  serializeAws_json1_1CreateResourceGroupCommand,
} from "../protocols/Aws_json1_1";

export interface CreateResourceGroupCommandInput extends CreateResourceGroupRequest {}
export interface CreateResourceGroupCommandOutput extends CreateResourceGroupResponse, __MetadataBearer {}

/**
 * <p>Creates a resource group using the specified set of tags (key and value pairs) that
 *          are used to select the EC2 instances to be included in an Amazon Inspector assessment
 *          target. The created resource group is then used to create an Amazon Inspector assessment
 *          target. For more information, see <a>CreateAssessmentTarget</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, CreateResourceGroupCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, CreateResourceGroupCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new CreateResourceGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateResourceGroupCommandInput} for command's `input` shape.
 * @see {@link CreateResourceGroupCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 */
export class CreateResourceGroupCommand extends $Command<
  CreateResourceGroupCommandInput,
  CreateResourceGroupCommandOutput,
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

  constructor(readonly input: CreateResourceGroupCommandInput) {
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
  ): Handler<CreateResourceGroupCommandInput, CreateResourceGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateResourceGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "CreateResourceGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateResourceGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateResourceGroupResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateResourceGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateResourceGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateResourceGroupCommandOutput> {
    return deserializeAws_json1_1CreateResourceGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
