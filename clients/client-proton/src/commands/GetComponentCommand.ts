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
  GetComponentInput,
  GetComponentInputFilterSensitiveLog,
  GetComponentOutput,
  GetComponentOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0GetComponentCommand,
  serializeAws_json1_0GetComponentCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

export interface GetComponentCommandInput extends GetComponentInput {}
export interface GetComponentCommandOutput extends GetComponentOutput, __MetadataBearer {}

/**
 * <p>Get detailed data for a component.</p>
 *          <p>For more information about components, see
 *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
 *   <i>Proton User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, GetComponentCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, GetComponentCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const command = new GetComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetComponentCommandInput} for command's `input` shape.
 * @see {@link GetComponentCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 */
export class GetComponentCommand extends $Command<
  GetComponentCommandInput,
  GetComponentCommandOutput,
  ProtonClientResolvedConfig
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

  constructor(readonly input: GetComponentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ProtonClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetComponentCommandInput, GetComponentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetComponentCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "GetComponentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetComponentInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetComponentOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetComponentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0GetComponentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetComponentCommandOutput> {
    return deserializeAws_json1_0GetComponentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
