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
  FailoverDBClusterMessage,
  FailoverDBClusterMessageFilterSensitiveLog,
  FailoverDBClusterResult,
  FailoverDBClusterResultFilterSensitiveLog,
} from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import {
  deserializeAws_queryFailoverDBClusterCommand,
  serializeAws_queryFailoverDBClusterCommand,
} from "../protocols/Aws_query";

export interface FailoverDBClusterCommandInput extends FailoverDBClusterMessage {}
export interface FailoverDBClusterCommandOutput extends FailoverDBClusterResult, __MetadataBearer {}

/**
 * <p>Forces a failover for a DB cluster.</p>
 *          <p>A failover for a DB cluster promotes one of the Read Replicas (read-only instances) in the
 *       DB cluster to be the primary instance (the cluster writer).</p>
 *          <p>Amazon Neptune will automatically fail over to a Read Replica, if one exists, when the
 *       primary instance fails. You can force a failover when you want to simulate a failure of a
 *       primary instance for testing. Because each instance in a DB cluster has its own endpoint
 *       address, you will need to clean up and re-establish any existing connections that use those
 *       endpoint addresses when the failover is complete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, FailoverDBClusterCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, FailoverDBClusterCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new FailoverDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link FailoverDBClusterCommandInput} for command's `input` shape.
 * @see {@link FailoverDBClusterCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 */
export class FailoverDBClusterCommand extends $Command<
  FailoverDBClusterCommandInput,
  FailoverDBClusterCommandOutput,
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

  constructor(readonly input: FailoverDBClusterCommandInput) {
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
  ): Handler<FailoverDBClusterCommandInput, FailoverDBClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, FailoverDBClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "FailoverDBClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: FailoverDBClusterMessageFilterSensitiveLog,
      outputFilterSensitiveLog: FailoverDBClusterResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: FailoverDBClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryFailoverDBClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<FailoverDBClusterCommandOutput> {
    return deserializeAws_queryFailoverDBClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
