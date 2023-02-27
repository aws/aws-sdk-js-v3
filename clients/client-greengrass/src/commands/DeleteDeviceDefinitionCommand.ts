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

import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import {
  DeleteDeviceDefinitionRequest,
  DeleteDeviceDefinitionRequestFilterSensitiveLog,
  DeleteDeviceDefinitionResponse,
  DeleteDeviceDefinitionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteDeviceDefinitionCommand,
  serializeAws_restJson1DeleteDeviceDefinitionCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link DeleteDeviceDefinitionCommand}.
 */
export interface DeleteDeviceDefinitionCommandInput extends DeleteDeviceDefinitionRequest {}
/**
 * The output of {@link DeleteDeviceDefinitionCommand}.
 */
export interface DeleteDeviceDefinitionCommandOutput extends DeleteDeviceDefinitionResponse, __MetadataBearer {}

/**
 * Deletes a device definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, DeleteDeviceDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, DeleteDeviceDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new DeleteDeviceDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDeviceDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteDeviceDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 */
export class DeleteDeviceDefinitionCommand extends $Command<
  DeleteDeviceDefinitionCommandInput,
  DeleteDeviceDefinitionCommandOutput,
  GreengrassClientResolvedConfig
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

  constructor(readonly input: DeleteDeviceDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDeviceDefinitionCommandInput, DeleteDeviceDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteDeviceDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "DeleteDeviceDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDeviceDefinitionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteDeviceDefinitionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDeviceDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteDeviceDefinitionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDeviceDefinitionCommandOutput> {
    return deserializeAws_restJson1DeleteDeviceDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
