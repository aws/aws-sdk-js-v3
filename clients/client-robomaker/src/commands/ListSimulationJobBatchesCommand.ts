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
  ListSimulationJobBatchesRequest,
  ListSimulationJobBatchesRequestFilterSensitiveLog,
  ListSimulationJobBatchesResponse,
  ListSimulationJobBatchesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListSimulationJobBatchesCommand,
  serializeAws_restJson1ListSimulationJobBatchesCommand,
} from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

export interface ListSimulationJobBatchesCommandInput extends ListSimulationJobBatchesRequest {}
export interface ListSimulationJobBatchesCommandOutput extends ListSimulationJobBatchesResponse, __MetadataBearer {}

/**
 * <p>Returns a list simulation job batches. You can optionally provide filters to retrieve
 *          specific simulation batch jobs. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, ListSimulationJobBatchesCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, ListSimulationJobBatchesCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new ListSimulationJobBatchesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSimulationJobBatchesCommandInput} for command's `input` shape.
 * @see {@link ListSimulationJobBatchesCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 */
export class ListSimulationJobBatchesCommand extends $Command<
  ListSimulationJobBatchesCommandInput,
  ListSimulationJobBatchesCommandOutput,
  RoboMakerClientResolvedConfig
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

  constructor(readonly input: ListSimulationJobBatchesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSimulationJobBatchesCommandInput, ListSimulationJobBatchesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSimulationJobBatchesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "ListSimulationJobBatchesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSimulationJobBatchesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListSimulationJobBatchesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSimulationJobBatchesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSimulationJobBatchesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSimulationJobBatchesCommandOutput> {
    return deserializeAws_restJson1ListSimulationJobBatchesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
