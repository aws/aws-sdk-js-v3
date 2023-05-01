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
import { RetryDataReplicationRequest, SourceServer, SourceServerFilterSensitiveLog } from "../models/models_0";
import { de_RetryDataReplicationCommand, se_RetryDataReplicationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link RetryDataReplicationCommand}.
 */
export interface RetryDataReplicationCommandInput extends RetryDataReplicationRequest {}
/**
 * @public
 *
 * The output of {@link RetryDataReplicationCommand}.
 */
export interface RetryDataReplicationCommandOutput extends SourceServer, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>WARNING: RetryDataReplication is deprecated.
 *               Causes the data replication initiation sequence to begin immediately upon next Handshake for the specified Source Server ID, regardless of when the previous initiation started. This command will work only if the Source Server is stalled or is in a DISCONNECTED or STOPPED state.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, RetryDataReplicationCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, RetryDataReplicationCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const input = { // RetryDataReplicationRequest
 *   sourceServerID: "STRING_VALUE", // required
 * };
 * const command = new RetryDataReplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param RetryDataReplicationCommandInput - {@link RetryDataReplicationCommandInput}
 * @returns {@link RetryDataReplicationCommandOutput}
 * @see {@link RetryDataReplicationCommandInput} for command's `input` shape.
 * @see {@link RetryDataReplicationCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource for this operation was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service.</p>
 *
 *
 */
export class RetryDataReplicationCommand extends $Command<
  RetryDataReplicationCommandInput,
  RetryDataReplicationCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: RetryDataReplicationCommandInput) {
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
  ): Handler<RetryDataReplicationCommandInput, RetryDataReplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RetryDataReplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DrsClient";
    const commandName = "RetryDataReplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: SourceServerFilterSensitiveLog,
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
  private serialize(input: RetryDataReplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RetryDataReplicationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RetryDataReplicationCommandOutput> {
    return de_RetryDataReplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
