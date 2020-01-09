import {
  CognitoIdentityClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityClient";
import {
  MergeDeveloperIdentitiesInput,
  MergeDeveloperIdentitiesResponse,
} from "../models/index";
import {
  deserializeAws_json1_1MergeDeveloperIdentitiesCommand,
  serializeAws_json1_1MergeDeveloperIdentitiesCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions,
} from "@aws-sdk/types";

export type MergeDeveloperIdentitiesCommandInput = MergeDeveloperIdentitiesInput;
export type MergeDeveloperIdentitiesCommandOutput = MergeDeveloperIdentitiesResponse;

export class MergeDeveloperIdentitiesCommand extends $Command<MergeDeveloperIdentitiesCommandInput, MergeDeveloperIdentitiesCommandOutput, CognitoIdentityClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: MergeDeveloperIdentitiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<MergeDeveloperIdentitiesCommandInput, MergeDeveloperIdentitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: MergeDeveloperIdentitiesCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1MergeDeveloperIdentitiesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<MergeDeveloperIdentitiesCommandOutput> {
    return deserializeAws_json1_1MergeDeveloperIdentitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
