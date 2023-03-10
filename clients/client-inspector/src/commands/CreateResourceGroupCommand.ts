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

/**
 * The input for {@link CreateResourceGroupCommand}.
 */
export interface CreateResourceGroupCommandInput extends CreateResourceGroupRequest {}
/**
 * The output of {@link CreateResourceGroupCommand}.
 */
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
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have required permissions to access the requested resource.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *          AWS account limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link ServiceTemporarilyUnavailableException} (server fault)
 *  <p>The serice is temporary unavailable.</p>
 *
 *
 * @example Create resource group
 * ```javascript
 * // Creates a resource group using the specified set of tags (key and value pairs) that are used to select the EC2 instances to be included in an Amazon Inspector assessment target. The created resource group is then used to create an Amazon Inspector assessment target.
 * const input = {
 *   "resourceGroupTags": [
 *     {
 *       "key": "Name",
 *       "value": "example"
 *     }
 *   ]
 * };
 * const command = new CreateResourceGroupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "resourceGroupArn": "arn:aws:inspector:us-west-2:123456789012:resourcegroup/0-AB6DMKnv"
 * }
 * *\/
 * // example id: create-resource-group-1481064169037
 * ```
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
