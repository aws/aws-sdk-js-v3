import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { StartMonitoringMemberRequest } from "../models/index";
import {
  deserializeAws_restJson1StartMonitoringMemberCommand,
  serializeAws_restJson1StartMonitoringMemberCommand,
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

export type StartMonitoringMemberCommandInput = StartMonitoringMemberRequest;
export type StartMonitoringMemberCommandOutput = __MetadataBearer;

export class StartMonitoringMemberCommand extends $Command<
  StartMonitoringMemberCommandInput,
  StartMonitoringMemberCommandOutput,
  DetectiveClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartMonitoringMemberCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DetectiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartMonitoringMemberCommandInput, StartMonitoringMemberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: StartMonitoringMemberRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartMonitoringMemberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartMonitoringMemberCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartMonitoringMemberCommandOutput> {
    return deserializeAws_restJson1StartMonitoringMemberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
