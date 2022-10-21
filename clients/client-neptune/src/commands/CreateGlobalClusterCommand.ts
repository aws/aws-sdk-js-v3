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
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import {
  deserializeAws_queryCreateGlobalClusterCommand,
  serializeAws_queryCreateGlobalClusterCommand,
} from "../protocols/Aws_query";

export interface CreateGlobalClusterCommandInput extends CreateGlobalClusterMessage {}
export interface CreateGlobalClusterCommandOutput extends CreateGlobalClusterResult, __MetadataBearer {}

/**
 * <p>Creates a Neptune global database spread across multiple Amazon Regions.
 *       The global database contains a single primary cluster with read-write
 *       capability, and read-only secondary clusters that receive data from the
 *       primary cluster through high-speed replication performed by the Neptune
 *       storage subsystem.</p>
 *
 *          <p>You can create a global database that is initially empty, and then
 *       add a primary cluster and secondary clusters to it, or you can specify
 *       an existing Neptune cluster during the create operation to become the
 *       primary cluster of the global database.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, CreateGlobalClusterCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, CreateGlobalClusterCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new CreateGlobalClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGlobalClusterCommandInput} for command's `input` shape.
 * @see {@link CreateGlobalClusterCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 */
export class CreateGlobalClusterCommand extends $Command<
  CreateGlobalClusterCommandInput,
  CreateGlobalClusterCommandOutput,
  NeptuneClientResolvedConfig
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
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateGlobalClusterCommandInput, CreateGlobalClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateGlobalClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
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
