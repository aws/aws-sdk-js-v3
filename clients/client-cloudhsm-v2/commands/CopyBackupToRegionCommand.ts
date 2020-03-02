import {
  CloudHSMV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CloudHSMV2Client";
import {
  CopyBackupToRegionRequest,
  CopyBackupToRegionResponse
} from "../models/index";
import {
  deserializeAws_json1_1CopyBackupToRegionCommand,
  serializeAws_json1_1CopyBackupToRegionCommand
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

export type CopyBackupToRegionCommandInput = CopyBackupToRegionRequest;
export type CopyBackupToRegionCommandOutput = CopyBackupToRegionResponse &
  __MetadataBearer;

export class CopyBackupToRegionCommand extends $Command<
  CopyBackupToRegionCommandInput,
  CopyBackupToRegionCommandOutput,
  CloudHSMV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CopyBackupToRegionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudHSMV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CopyBackupToRegionCommandInput, CopyBackupToRegionCommandOutput> {
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
    input: CopyBackupToRegionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CopyBackupToRegionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CopyBackupToRegionCommandOutput> {
    return deserializeAws_json1_1CopyBackupToRegionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
