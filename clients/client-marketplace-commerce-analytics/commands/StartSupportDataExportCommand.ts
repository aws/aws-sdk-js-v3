import {
  MarketplaceCommerceAnalyticsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../MarketplaceCommerceAnalyticsClient";
import {
  StartSupportDataExportRequest,
  StartSupportDataExportResult
} from "../models/index";
import {
  deserializeAws_json1_1StartSupportDataExportCommand,
  serializeAws_json1_1StartSupportDataExportCommand
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export type StartSupportDataExportCommandInput = StartSupportDataExportRequest;
export type StartSupportDataExportCommandOutput = StartSupportDataExportResult &
  __MetadataBearer;

export class StartSupportDataExportCommand extends $Command<
  StartSupportDataExportCommandInput,
  StartSupportDataExportCommandOutput,
  MarketplaceCommerceAnalyticsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartSupportDataExportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MarketplaceCommerceAnalyticsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    StartSupportDataExportCommandInput,
    StartSupportDataExportCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: StartSupportDataExportCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1StartSupportDataExportCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartSupportDataExportCommandOutput> {
    return deserializeAws_json1_1StartSupportDataExportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
