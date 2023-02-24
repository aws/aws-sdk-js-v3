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
  CreateGlobalClusterMessage,
  CreateGlobalClusterMessageFilterSensitiveLog,
  CreateGlobalClusterResult,
  CreateGlobalClusterResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCreateGlobalClusterCommand,
  serializeAws_queryCreateGlobalClusterCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface CreateGlobalClusterCommandInput extends CreateGlobalClusterMessage {}
export interface CreateGlobalClusterCommandOutput extends CreateGlobalClusterResult, __MetadataBearer {}

/**
 * <p>Creates an Aurora global database
 *         spread across multiple Amazon Web Services Regions. The global database
 *         contains a single primary cluster with read-write capability,
 *         and a read-only secondary cluster that receives
 *         data from the primary cluster through high-speed replication
 *         performed by the Aurora storage subsystem.</p>
 *          <p>You can create a global database that is initially empty, and then
 *         add a primary cluster and a secondary cluster to it.
 *         Or you can specify an existing Aurora cluster during the create operation,
 *         and this cluster becomes the primary cluster of the global database.</p>
 *          <note>
 *             <p>This action applies only to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateGlobalClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateGlobalClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CreateGlobalClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGlobalClusterCommandInput} for command's `input` shape.
 * @see {@link CreateGlobalClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class CreateGlobalClusterCommand extends $Command<
  CreateGlobalClusterCommandInput,
  CreateGlobalClusterCommandOutput,
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

  constructor(readonly input: CreateGlobalClusterCommandInput) {
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
  ): Handler<CreateGlobalClusterCommandInput, CreateGlobalClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateGlobalClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CreateGlobalClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateGlobalClusterMessageFilterSensitiveLog,
      outputFilterSensitiveLog: CreateGlobalClusterResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateGlobalClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateGlobalClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateGlobalClusterCommandOutput> {
    return deserializeAws_queryCreateGlobalClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
