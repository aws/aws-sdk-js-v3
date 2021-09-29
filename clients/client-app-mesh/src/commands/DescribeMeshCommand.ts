import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { DescribeMeshInput, DescribeMeshOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeMeshCommand,
  serializeAws_restJson1DescribeMeshCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface DescribeMeshCommandInput extends DescribeMeshInput {}
export interface DescribeMeshCommandOutput extends DescribeMeshOutput, __MetadataBearer {}

/**
 * <p>Describes an existing service mesh.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, DescribeMeshCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, DescribeMeshCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new DescribeMeshCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMeshCommandInput} for command's `input` shape.
 * @see {@link DescribeMeshCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeMeshCommand extends $Command<
  DescribeMeshCommandInput,
  DescribeMeshCommandOutput,
  AppMeshClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeMeshCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeMeshCommandInput, DescribeMeshCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppMeshClient";
    const commandName = "DescribeMeshCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeMeshInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeMeshOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeMeshCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeMeshCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeMeshCommandOutput> {
    return deserializeAws_restJson1DescribeMeshCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
