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

import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import {
  UpdateVirtualRouterInput,
  UpdateVirtualRouterInputFilterSensitiveLog,
  UpdateVirtualRouterOutput,
  UpdateVirtualRouterOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateVirtualRouterCommand,
  serializeAws_restJson1UpdateVirtualRouterCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateVirtualRouterCommandInput extends UpdateVirtualRouterInput {}
export interface UpdateVirtualRouterCommandOutput extends UpdateVirtualRouterOutput, __MetadataBearer {}

/**
 * <p>Updates an existing virtual router in a specified service mesh.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, UpdateVirtualRouterCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, UpdateVirtualRouterCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new UpdateVirtualRouterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateVirtualRouterCommandInput} for command's `input` shape.
 * @see {@link UpdateVirtualRouterCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for AppMeshClient's `config` shape.
 *
 */
export class UpdateVirtualRouterCommand extends $Command<
  UpdateVirtualRouterCommandInput,
  UpdateVirtualRouterCommandOutput,
  AppMeshClientResolvedConfig
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

  constructor(readonly input: UpdateVirtualRouterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateVirtualRouterCommandInput, UpdateVirtualRouterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateVirtualRouterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppMeshClient";
    const commandName = "UpdateVirtualRouterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateVirtualRouterInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateVirtualRouterOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateVirtualRouterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateVirtualRouterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateVirtualRouterCommandOutput> {
    return deserializeAws_restJson1UpdateVirtualRouterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
