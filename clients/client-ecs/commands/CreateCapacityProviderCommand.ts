import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { CreateCapacityProviderRequest, CreateCapacityProviderResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateCapacityProviderCommand,
  serializeAws_json1_1CreateCapacityProviderCommand,
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

export type CreateCapacityProviderCommandInput = CreateCapacityProviderRequest;
export type CreateCapacityProviderCommandOutput = CreateCapacityProviderResponse & __MetadataBearer;

/**
 * <p>Creates a new capacity provider. Capacity providers are associated with an Amazon ECS
 * 			cluster and are used in capacity provider strategies to facilitate cluster auto
 * 			scaling.</p>
 * 		       <p>Only capacity providers using an Auto Scaling group can be created. Amazon ECS tasks on
 * 			AWS Fargate use the <code>FARGATE</code> and <code>FARGATE_SPOT</code> capacity providers
 * 			which are already created and available to all accounts in Regions supported by
 * 			AWS Fargate.</p>
 */
export class CreateCapacityProviderCommand extends $Command<
  CreateCapacityProviderCommandInput,
  CreateCapacityProviderCommandOutput,
  ECSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateCapacityProviderCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCapacityProviderCommandInput, CreateCapacityProviderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "CreateCapacityProviderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCapacityProviderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCapacityProviderResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCapacityProviderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateCapacityProviderCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCapacityProviderCommandOutput> {
    return deserializeAws_json1_1CreateCapacityProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
