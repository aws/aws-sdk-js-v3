import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyTrafficMirrorSessionRequest, ModifyTrafficMirrorSessionResult } from "../models/models_4";
import {
  deserializeAws_ec2ModifyTrafficMirrorSessionCommand,
  serializeAws_ec2ModifyTrafficMirrorSessionCommand,
} from "../protocols/Aws_ec2";
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

export type ModifyTrafficMirrorSessionCommandInput = ModifyTrafficMirrorSessionRequest;
export type ModifyTrafficMirrorSessionCommandOutput = ModifyTrafficMirrorSessionResult & __MetadataBearer;

/**
 * <p>Modifies a Traffic Mirror session.</p>
 */
export class ModifyTrafficMirrorSessionCommand extends $Command<
  ModifyTrafficMirrorSessionCommandInput,
  ModifyTrafficMirrorSessionCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyTrafficMirrorSessionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyTrafficMirrorSessionCommandInput, ModifyTrafficMirrorSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyTrafficMirrorSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyTrafficMirrorSessionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyTrafficMirrorSessionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyTrafficMirrorSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyTrafficMirrorSessionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyTrafficMirrorSessionCommandOutput> {
    return deserializeAws_ec2ModifyTrafficMirrorSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
