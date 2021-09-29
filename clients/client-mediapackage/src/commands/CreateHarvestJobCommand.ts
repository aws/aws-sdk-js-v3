import { MediaPackageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageClient";
import { CreateHarvestJobRequest, CreateHarvestJobResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateHarvestJobCommand,
  serializeAws_restJson1CreateHarvestJobCommand,
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

export interface CreateHarvestJobCommandInput extends CreateHarvestJobRequest {}
export interface CreateHarvestJobCommandOutput extends CreateHarvestJobResponse, __MetadataBearer {}

/**
 * Creates a new HarvestJob record.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, CreateHarvestJobCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, CreateHarvestJobCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const command = new CreateHarvestJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateHarvestJobCommandInput} for command's `input` shape.
 * @see {@link CreateHarvestJobCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateHarvestJobCommand extends $Command<
  CreateHarvestJobCommandInput,
  CreateHarvestJobCommandOutput,
  MediaPackageClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateHarvestJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaPackageClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateHarvestJobCommandInput, CreateHarvestJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaPackageClient";
    const commandName = "CreateHarvestJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateHarvestJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateHarvestJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateHarvestJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateHarvestJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateHarvestJobCommandOutput> {
    return deserializeAws_restJson1CreateHarvestJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
