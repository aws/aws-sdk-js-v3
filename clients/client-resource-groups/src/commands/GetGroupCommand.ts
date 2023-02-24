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
  GetGroupInput,
  GetGroupInputFilterSensitiveLog,
  GetGroupOutput,
  GetGroupOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetGroupCommand,
  serializeAws_restJson1GetGroupCommand,
} from "../protocols/Aws_restJson1";
import { ResourceGroupsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsClient";

export interface GetGroupCommandInput extends GetGroupInput {}
export interface GetGroupCommandOutput extends GetGroupOutput, __MetadataBearer {}

/**
 * <p>Returns information about a specified resource group.</p>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>resource-groups:GetGroup</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, GetGroupCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, GetGroupCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * const client = new ResourceGroupsClient(config);
 * const command = new GetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGroupCommandInput} for command's `input` shape.
 * @see {@link GetGroupCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsClientResolvedConfig | config} for ResourceGroupsClient's `config` shape.
 *
 */
export class GetGroupCommand extends $Command<
  GetGroupCommandInput,
  GetGroupCommandOutput,
  ResourceGroupsClientResolvedConfig
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

  constructor(readonly input: GetGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResourceGroupsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetGroupCommandInput, GetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetGroupCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResourceGroupsClient";
    const commandName = "GetGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetGroupInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetGroupOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetGroupCommandOutput> {
    return deserializeAws_restJson1GetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
