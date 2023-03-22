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

import { RemoveFromGlobalClusterMessage, RemoveFromGlobalClusterResult } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import {
  deserializeAws_queryRemoveFromGlobalClusterCommand,
  serializeAws_queryRemoveFromGlobalClusterCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link RemoveFromGlobalClusterCommand}.
 */
export interface RemoveFromGlobalClusterCommandInput extends RemoveFromGlobalClusterMessage {}
/**
 * @public
 *
 * The output of {@link RemoveFromGlobalClusterCommand}.
 */
export interface RemoveFromGlobalClusterCommandOutput extends RemoveFromGlobalClusterResult, __MetadataBearer {}

/**
 * @public
 * <p>Detaches a Neptune DB cluster from a Neptune global database. A secondary
 *       cluster becomes a normal standalone cluster with read-write capability
 *       instead of being read-only, and no longer receives data from a the
 *       primary cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, RemoveFromGlobalClusterCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, RemoveFromGlobalClusterCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new RemoveFromGlobalClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param RemoveFromGlobalClusterCommandInput - {@link RemoveFromGlobalClusterCommandInput}
 * @returns {@link RemoveFromGlobalClusterCommandOutput}
 * @see {@link RemoveFromGlobalClusterCommandInput} for command's `input` shape.
 * @see {@link RemoveFromGlobalClusterCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <i>DBClusterIdentifier</i> does not refer to an existing DB cluster.</p>
 *
 * @throws {@link GlobalClusterNotFoundFault} (client fault)
 *  <p>The <code>GlobalClusterIdentifier</code> doesn't refer to an existing global database cluster. </p>
 *
 * @throws {@link InvalidGlobalClusterStateFault} (client fault)
 *  <p>The global cluster is in an invalid state and can't perform the requested operation. </p>
 *
 *
 */
export class RemoveFromGlobalClusterCommand extends $Command<
  RemoveFromGlobalClusterCommandInput,
  RemoveFromGlobalClusterCommandOutput,
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

  /**
   * @public
   */
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
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveFromGlobalClusterCommandInput, RemoveFromGlobalClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RemoveFromGlobalClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "RemoveFromGlobalClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: RemoveFromGlobalClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRemoveFromGlobalClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RemoveFromGlobalClusterCommandOutput> {
    return deserializeAws_queryRemoveFromGlobalClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
