import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { PutAppsListRequest, PutAppsListResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutAppsListCommand,
  serializeAws_json1_1PutAppsListCommand,
} from "../protocols/Aws_json1_1";
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

export type PutAppsListCommandInput = PutAppsListRequest;
export type PutAppsListCommandOutput = PutAppsListResponse & __MetadataBearer;

/**
 * <p>Creates an AWS Firewall Manager applications list.</p>
 */
export class PutAppsListCommand extends $Command<
  PutAppsListCommandInput,
  PutAppsListCommandOutput,
  FMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutAppsListCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutAppsListCommandInput, PutAppsListCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "PutAppsListCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutAppsListRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutAppsListResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutAppsListCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutAppsListCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutAppsListCommandOutput> {
    return deserializeAws_json1_1PutAppsListCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
