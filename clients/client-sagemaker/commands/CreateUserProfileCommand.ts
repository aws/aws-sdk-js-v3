import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateUserProfileRequest, CreateUserProfileResponse } from "../models/models_1";
import {
  deserializeAws_json1_1CreateUserProfileCommand,
  serializeAws_json1_1CreateUserProfileCommand,
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

export type CreateUserProfileCommandInput = CreateUserProfileRequest;
export type CreateUserProfileCommandOutput = CreateUserProfileResponse & __MetadataBearer;

/**
 * <p>Creates a user profile. A user profile represents a single user within a domain, and is
 *      the main way to reference a "person" for the purposes of sharing, reporting, and other
 *      user-oriented features. This entity is created when a user onboards to Amazon SageMaker Studio. If an
 *      administrator invites a person by email or imports them from SSO, a user profile is
 *      automatically created. A user profile is the primary holder of settings for an individual
 *      user and has a reference to the user's private Amazon Elastic File System (EFS) home directory.
 *    </p>
 */
export class CreateUserProfileCommand extends $Command<
  CreateUserProfileCommandInput,
  CreateUserProfileCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateUserProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateUserProfileCommandInput, CreateUserProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateUserProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateUserProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateUserProfileResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateUserProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateUserProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateUserProfileCommandOutput> {
    return deserializeAws_json1_1CreateUserProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
