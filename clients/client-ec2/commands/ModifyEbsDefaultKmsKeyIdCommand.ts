import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../EC2Client";
import {
  ModifyEbsDefaultKmsKeyIdRequest,
  ModifyEbsDefaultKmsKeyIdResult
} from "../models/index";
import {
  deserializeAws_ec2ModifyEbsDefaultKmsKeyIdCommand,
  serializeAws_ec2ModifyEbsDefaultKmsKeyIdCommand
} from "../protocols/Aws_ec2";
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

export type ModifyEbsDefaultKmsKeyIdCommandInput = ModifyEbsDefaultKmsKeyIdRequest;
export type ModifyEbsDefaultKmsKeyIdCommandOutput = ModifyEbsDefaultKmsKeyIdResult &
  __MetadataBearer;

export class ModifyEbsDefaultKmsKeyIdCommand extends $Command<
  ModifyEbsDefaultKmsKeyIdCommandInput,
  ModifyEbsDefaultKmsKeyIdCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyEbsDefaultKmsKeyIdCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ModifyEbsDefaultKmsKeyIdCommandInput,
    ModifyEbsDefaultKmsKeyIdCommandOutput
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
    input: ModifyEbsDefaultKmsKeyIdCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyEbsDefaultKmsKeyIdCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyEbsDefaultKmsKeyIdCommandOutput> {
    return deserializeAws_ec2ModifyEbsDefaultKmsKeyIdCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
