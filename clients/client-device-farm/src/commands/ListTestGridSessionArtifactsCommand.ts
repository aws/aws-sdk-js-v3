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

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import {
  ListTestGridSessionArtifactsRequest,
  ListTestGridSessionArtifactsRequestFilterSensitiveLog,
  ListTestGridSessionArtifactsResult,
  ListTestGridSessionArtifactsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListTestGridSessionArtifactsCommand,
  serializeAws_json1_1ListTestGridSessionArtifactsCommand,
} from "../protocols/Aws_json1_1";

export interface ListTestGridSessionArtifactsCommandInput extends ListTestGridSessionArtifactsRequest {}
export interface ListTestGridSessionArtifactsCommandOutput
  extends ListTestGridSessionArtifactsResult,
    __MetadataBearer {}

/**
 * <p>Retrieves a list of artifacts created during the session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListTestGridSessionArtifactsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListTestGridSessionArtifactsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListTestGridSessionArtifactsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTestGridSessionArtifactsCommandInput} for command's `input` shape.
 * @see {@link ListTestGridSessionArtifactsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 */
export class ListTestGridSessionArtifactsCommand extends $Command<
  ListTestGridSessionArtifactsCommandInput,
  ListTestGridSessionArtifactsCommandOutput,
  DeviceFarmClientResolvedConfig
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

  constructor(readonly input: ListTestGridSessionArtifactsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTestGridSessionArtifactsCommandInput, ListTestGridSessionArtifactsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTestGridSessionArtifactsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "ListTestGridSessionArtifactsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTestGridSessionArtifactsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListTestGridSessionArtifactsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTestGridSessionArtifactsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTestGridSessionArtifactsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListTestGridSessionArtifactsCommandOutput> {
    return deserializeAws_json1_1ListTestGridSessionArtifactsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
