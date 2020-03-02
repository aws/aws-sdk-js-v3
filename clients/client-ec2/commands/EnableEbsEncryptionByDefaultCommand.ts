import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../EC2Client";
import {
  EnableEbsEncryptionByDefaultRequest,
  EnableEbsEncryptionByDefaultResult
} from "../models/index";
import {
  deserializeAws_ec2EnableEbsEncryptionByDefaultCommand,
  serializeAws_ec2EnableEbsEncryptionByDefaultCommand
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

export type EnableEbsEncryptionByDefaultCommandInput = EnableEbsEncryptionByDefaultRequest;
export type EnableEbsEncryptionByDefaultCommandOutput = EnableEbsEncryptionByDefaultResult &
  __MetadataBearer;

export class EnableEbsEncryptionByDefaultCommand extends $Command<
  EnableEbsEncryptionByDefaultCommandInput,
  EnableEbsEncryptionByDefaultCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableEbsEncryptionByDefaultCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    EnableEbsEncryptionByDefaultCommandInput,
    EnableEbsEncryptionByDefaultCommandOutput
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
    input: EnableEbsEncryptionByDefaultCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2EnableEbsEncryptionByDefaultCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableEbsEncryptionByDefaultCommandOutput> {
    return deserializeAws_ec2EnableEbsEncryptionByDefaultCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
