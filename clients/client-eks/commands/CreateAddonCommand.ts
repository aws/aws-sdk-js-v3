import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { CreateAddonRequest, CreateAddonResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateAddonCommand,
  serializeAws_restJson1CreateAddonCommand,
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

export type CreateAddonCommandInput = CreateAddonRequest;
export type CreateAddonCommandOutput = CreateAddonResponse & __MetadataBearer;

/**
 * <p>Creates an Amazon EKS add-on.</p>
 *         <p>Amazon EKS add-ons help to automate the provisioning and lifecycle management of common
 *             operational software for Amazon EKS clusters. Amazon EKS add-ons can only be used with Amazon EKS
 *             clusters running version 1.18 with platform version <code>eks.3</code> or later because
 *             add-ons rely on the Server-side Apply Kubernetes feature, which is only available in
 *             Kubernetes 1.18 and later.</p>
 */
export class CreateAddonCommand extends $Command<
  CreateAddonCommandInput,
  CreateAddonCommandOutput,
  EKSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAddonCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAddonCommandInput, CreateAddonCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "CreateAddonCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAddonRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAddonResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAddonCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateAddonCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAddonCommandOutput> {
    return deserializeAws_restJson1CreateAddonCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
