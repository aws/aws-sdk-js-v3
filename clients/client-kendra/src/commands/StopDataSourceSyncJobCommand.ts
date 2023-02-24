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

import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { StopDataSourceSyncJobRequest, StopDataSourceSyncJobRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1StopDataSourceSyncJobCommand,
  serializeAws_json1_1StopDataSourceSyncJobCommand,
} from "../protocols/Aws_json1_1";

export interface StopDataSourceSyncJobCommandInput extends StopDataSourceSyncJobRequest {}
export interface StopDataSourceSyncJobCommandOutput extends __MetadataBearer {}

/**
 * <p>Stops a synchronization job that is currently running. You can't stop a scheduled
 *       synchronization job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, StopDataSourceSyncJobCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, StopDataSourceSyncJobCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new StopDataSourceSyncJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopDataSourceSyncJobCommandInput} for command's `input` shape.
 * @see {@link StopDataSourceSyncJobCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 */
export class StopDataSourceSyncJobCommand extends $Command<
  StopDataSourceSyncJobCommandInput,
  StopDataSourceSyncJobCommandOutput,
  KendraClientResolvedConfig
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

  constructor(readonly input: StopDataSourceSyncJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KendraClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopDataSourceSyncJobCommandInput, StopDataSourceSyncJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopDataSourceSyncJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "StopDataSourceSyncJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopDataSourceSyncJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopDataSourceSyncJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopDataSourceSyncJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopDataSourceSyncJobCommandOutput> {
    return deserializeAws_json1_1StopDataSourceSyncJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
