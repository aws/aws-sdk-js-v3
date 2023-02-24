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

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import {
  DeregisterClusterRequest,
  DeregisterClusterRequestFilterSensitiveLog,
  DeregisterClusterResponse,
  DeregisterClusterResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeregisterClusterCommand,
  serializeAws_restJson1DeregisterClusterCommand,
} from "../protocols/Aws_restJson1";

export interface DeregisterClusterCommandInput extends DeregisterClusterRequest {}
export interface DeregisterClusterCommandOutput extends DeregisterClusterResponse, __MetadataBearer {}

/**
 * <p>Deregisters a connected cluster to remove it from the Amazon EKS control
 *             plane.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DeregisterClusterCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DeregisterClusterCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new DeregisterClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterClusterCommandInput} for command's `input` shape.
 * @see {@link DeregisterClusterCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 */
export class DeregisterClusterCommand extends $Command<
  DeregisterClusterCommandInput,
  DeregisterClusterCommandOutput,
  EKSClientResolvedConfig
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

  constructor(readonly input: DeregisterClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeregisterClusterCommandInput, DeregisterClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeregisterClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "DeregisterClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterClusterRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeregisterClusterResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeregisterClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeregisterClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeregisterClusterCommandOutput> {
    return deserializeAws_restJson1DeregisterClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
