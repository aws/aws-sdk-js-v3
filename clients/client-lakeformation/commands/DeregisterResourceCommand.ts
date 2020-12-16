import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { DeregisterResourceRequest, DeregisterResourceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeregisterResourceCommand,
  serializeAws_json1_1DeregisterResourceCommand,
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

export type DeregisterResourceCommandInput = DeregisterResourceRequest;
export type DeregisterResourceCommandOutput = DeregisterResourceResponse & __MetadataBearer;

/**
 * <p>Deregisters the resource as managed by the Data Catalog.</p>
 *
 *          <p>When you deregister a path, Lake Formation removes the path from the inline policy attached to your service-linked role.</p>
 */
export class DeregisterResourceCommand extends $Command<
  DeregisterResourceCommandInput,
  DeregisterResourceCommandOutput,
  LakeFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeregisterResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LakeFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeregisterResourceCommandInput, DeregisterResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "DeregisterResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterResourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeregisterResourceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeregisterResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeregisterResourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeregisterResourceCommandOutput> {
    return deserializeAws_json1_1DeregisterResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
