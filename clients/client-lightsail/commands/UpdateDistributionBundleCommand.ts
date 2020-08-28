import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { UpdateDistributionBundleRequest, UpdateDistributionBundleResult } from "../models/index";
import {
  deserializeAws_json1_1UpdateDistributionBundleCommand,
  serializeAws_json1_1UpdateDistributionBundleCommand,
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

export type UpdateDistributionBundleCommandInput = UpdateDistributionBundleRequest;
export type UpdateDistributionBundleCommandOutput = UpdateDistributionBundleResult & __MetadataBearer;

export class UpdateDistributionBundleCommand extends $Command<
  UpdateDistributionBundleCommandInput,
  UpdateDistributionBundleCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDistributionBundleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDistributionBundleCommandInput, UpdateDistributionBundleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: UpdateDistributionBundleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDistributionBundleResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDistributionBundleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateDistributionBundleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDistributionBundleCommandOutput> {
    return deserializeAws_json1_1UpdateDistributionBundleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
