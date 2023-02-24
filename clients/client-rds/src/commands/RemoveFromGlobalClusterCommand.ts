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
  RemoveFromGlobalClusterMessage,
  RemoveFromGlobalClusterMessageFilterSensitiveLog,
  RemoveFromGlobalClusterResult,
  RemoveFromGlobalClusterResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryRemoveFromGlobalClusterCommand,
  serializeAws_queryRemoveFromGlobalClusterCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface RemoveFromGlobalClusterCommandInput extends RemoveFromGlobalClusterMessage {}
export interface RemoveFromGlobalClusterCommandOutput extends RemoveFromGlobalClusterResult, __MetadataBearer {}

/**
 * <p>Detaches an Aurora secondary cluster from an Aurora global database cluster. The cluster becomes a
 *         standalone cluster with read-write capability instead of being read-only and receiving data from a
 *         primary cluster in a different Region.</p>
 *          <note>
 *             <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RemoveFromGlobalClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RemoveFromGlobalClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new RemoveFromGlobalClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveFromGlobalClusterCommandInput} for command's `input` shape.
 * @see {@link RemoveFromGlobalClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class RemoveFromGlobalClusterCommand extends $Command<
  RemoveFromGlobalClusterCommandInput,
  RemoveFromGlobalClusterCommandOutput,
  RDSClientResolvedConfig
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

  constructor(readonly input: RemoveFromGlobalClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveFromGlobalClusterCommandInput, RemoveFromGlobalClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RemoveFromGlobalClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "RemoveFromGlobalClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveFromGlobalClusterMessageFilterSensitiveLog,
      outputFilterSensitiveLog: RemoveFromGlobalClusterResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveFromGlobalClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRemoveFromGlobalClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RemoveFromGlobalClusterCommandOutput> {
    return deserializeAws_queryRemoveFromGlobalClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
