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

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import {
  ListApplicationDPUSizesInput,
  ListApplicationDPUSizesInputFilterSensitiveLog,
  ListApplicationDPUSizesOutput,
  ListApplicationDPUSizesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListApplicationDPUSizesCommand,
  serializeAws_json1_1ListApplicationDPUSizesCommand,
} from "../protocols/Aws_json1_1";

export interface ListApplicationDPUSizesCommandInput extends ListApplicationDPUSizesInput {}
export interface ListApplicationDPUSizesCommandOutput extends ListApplicationDPUSizesOutput, __MetadataBearer {}

/**
 * <p>Returns the supported DPU sizes for the supported application runtimes (for example,
 *                 <code>Jupyter 1.0</code>). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListApplicationDPUSizesCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListApplicationDPUSizesCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new ListApplicationDPUSizesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListApplicationDPUSizesCommandInput} for command's `input` shape.
 * @see {@link ListApplicationDPUSizesCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 */
export class ListApplicationDPUSizesCommand extends $Command<
  ListApplicationDPUSizesCommandInput,
  ListApplicationDPUSizesCommandOutput,
  AthenaClientResolvedConfig
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

  constructor(readonly input: ListApplicationDPUSizesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListApplicationDPUSizesCommandInput, ListApplicationDPUSizesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListApplicationDPUSizesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "ListApplicationDPUSizesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListApplicationDPUSizesInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListApplicationDPUSizesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListApplicationDPUSizesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListApplicationDPUSizesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListApplicationDPUSizesCommandOutput> {
    return deserializeAws_json1_1ListApplicationDPUSizesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
