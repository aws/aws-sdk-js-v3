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
  CreateMeshInput,
  CreateMeshInputFilterSensitiveLog,
  CreateMeshOutput,
  CreateMeshOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateMeshCommand,
  serializeAws_restJson1CreateMeshCommand,
} from "../protocols/Aws_restJson1";

export interface CreateMeshCommandInput extends CreateMeshInput {}
export interface CreateMeshCommandOutput extends CreateMeshOutput, __MetadataBearer {}

/**
 * <p>Creates a service mesh.</p>
 *          <p> A service mesh is a logical boundary for network traffic between services that are
 *          represented by resources within the mesh. After you create your service mesh, you can
 *          create virtual services, virtual nodes, virtual routers, and routes to distribute traffic
 *          between the applications in your mesh.</p>
 *          <p>For more information about service meshes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/meshes.html">Service meshes</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, CreateMeshCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, CreateMeshCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new CreateMeshCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMeshCommandInput} for command's `input` shape.
 * @see {@link CreateMeshCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for AppMeshClient's `config` shape.
 *
 */
export class CreateMeshCommand extends $Command<
  CreateMeshCommandInput,
  CreateMeshCommandOutput,
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

  constructor(readonly input: CreateMeshCommandInput) {
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
  ): Handler<CreateMeshCommandInput, CreateMeshCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateMeshCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppMeshClient";
    const commandName = "CreateMeshCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMeshInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateMeshOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateMeshCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateMeshCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateMeshCommandOutput> {
    return deserializeAws_restJson1CreateMeshCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
