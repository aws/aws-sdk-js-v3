import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { UnlinkDeveloperIdentityInput } from "../models/models_0";
import {
  deserializeAws_json1_1UnlinkDeveloperIdentityCommand,
  serializeAws_json1_1UnlinkDeveloperIdentityCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
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

export type UnlinkDeveloperIdentityCommandInput = UnlinkDeveloperIdentityInput;
export type UnlinkDeveloperIdentityCommandOutput = __MetadataBearer;

export class UnlinkDeveloperIdentityCommand extends $Command<
  UnlinkDeveloperIdentityCommandInput,
  UnlinkDeveloperIdentityCommandOutput,
  CognitoIdentityClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UnlinkDeveloperIdentityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UnlinkDeveloperIdentityCommandInput, UnlinkDeveloperIdentityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityClient";
    const commandName = "UnlinkDeveloperIdentityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UnlinkDeveloperIdentityInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
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

  private serialize(input: UnlinkDeveloperIdentityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UnlinkDeveloperIdentityCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UnlinkDeveloperIdentityCommandOutput> {
    return deserializeAws_json1_1UnlinkDeveloperIdentityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
