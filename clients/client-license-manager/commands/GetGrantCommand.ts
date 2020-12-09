import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { GetGrantRequest, GetGrantResponse } from "../models/models_0";
import { deserializeAws_json1_1GetGrantCommand, serializeAws_json1_1GetGrantCommand } from "../protocols/Aws_json1_1";
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

export type GetGrantCommandInput = GetGrantRequest;
export type GetGrantCommandOutput = GetGrantResponse & __MetadataBearer;

/**
 * <p>Gets detailed information about the specified grant.</p>
 */
export class GetGrantCommand extends $Command<
  GetGrantCommandInput,
  GetGrantCommandOutput,
  LicenseManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetGrantCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LicenseManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetGrantCommandInput, GetGrantCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "GetGrantCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetGrantRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetGrantResponse.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetGrantCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetGrantCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetGrantCommandOutput> {
    return deserializeAws_json1_1GetGrantCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
