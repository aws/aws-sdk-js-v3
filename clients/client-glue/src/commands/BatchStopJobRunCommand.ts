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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchStopJobRunRequest, BatchStopJobRunResponse } from "../models/models_0";
import {
  deserializeAws_json1_1BatchStopJobRunCommand,
  serializeAws_json1_1BatchStopJobRunCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link BatchStopJobRunCommand}.
 */
export interface BatchStopJobRunCommandInput extends BatchStopJobRunRequest {}
/**
 * @public
 *
 * The output of {@link BatchStopJobRunCommand}.
 */
export interface BatchStopJobRunCommandOutput extends BatchStopJobRunResponse, __MetadataBearer {}

/**
 * @public
 * <p>Stops one or more job runs for a specified job definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchStopJobRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchStopJobRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new BatchStopJobRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param BatchStopJobRunCommandInput - {@link BatchStopJobRunCommandInput}
 * @returns {@link BatchStopJobRunCommandOutput}
 * @see {@link BatchStopJobRunCommandInput} for command's `input` shape.
 * @see {@link BatchStopJobRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 *
 */
export class BatchStopJobRunCommand extends $Command<
  BatchStopJobRunCommandInput,
  BatchStopJobRunCommandOutput,
  GlueClientResolvedConfig
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
  constructor(readonly input: BatchStopJobRunCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchStopJobRunCommandInput, BatchStopJobRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchStopJobRunCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "BatchStopJobRunCommand";
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
  private serialize(input: BatchStopJobRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchStopJobRunCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchStopJobRunCommandOutput> {
    return deserializeAws_json1_1BatchStopJobRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
