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

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import {
  ReverseReplicationRequest,
  ReverseReplicationRequestFilterSensitiveLog,
  ReverseReplicationResponse,
  ReverseReplicationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ReverseReplicationCommand,
  serializeAws_restJson1ReverseReplicationCommand,
} from "../protocols/Aws_restJson1";

export interface ReverseReplicationCommandInput extends ReverseReplicationRequest {}
export interface ReverseReplicationCommandOutput extends ReverseReplicationResponse, __MetadataBearer {}

/**
 * <p>Start replication to origin / target region - applies only to protected instances that originated in EC2.
 *             For recovery instances on target region - starts replication back to origin region.
 *             For failback instances on origin region - starts replication to target region to re-protect them.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, ReverseReplicationCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, ReverseReplicationCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const command = new ReverseReplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReverseReplicationCommandInput} for command's `input` shape.
 * @see {@link ReverseReplicationCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 */
export class ReverseReplicationCommand extends $Command<
  ReverseReplicationCommandInput,
  ReverseReplicationCommandOutput,
  DrsClientResolvedConfig
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

  constructor(readonly input: ReverseReplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DrsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ReverseReplicationCommandInput, ReverseReplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ReverseReplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DrsClient";
    const commandName = "ReverseReplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ReverseReplicationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ReverseReplicationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ReverseReplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ReverseReplicationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ReverseReplicationCommandOutput> {
    return deserializeAws_restJson1ReverseReplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
