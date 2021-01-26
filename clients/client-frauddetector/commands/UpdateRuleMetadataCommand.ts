import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { UpdateRuleMetadataRequest, UpdateRuleMetadataResult } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateRuleMetadataCommand,
  serializeAws_json1_1UpdateRuleMetadataCommand,
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

export type UpdateRuleMetadataCommandInput = UpdateRuleMetadataRequest;
export type UpdateRuleMetadataCommandOutput = UpdateRuleMetadataResult & __MetadataBearer;

/**
 * <p>Updates a rule's metadata. The description attribute can be updated.</p>
 */
export class UpdateRuleMetadataCommand extends $Command<
  UpdateRuleMetadataCommandInput,
  UpdateRuleMetadataCommandOutput,
  FraudDetectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateRuleMetadataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FraudDetectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRuleMetadataCommandInput, UpdateRuleMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "UpdateRuleMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRuleMetadataRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateRuleMetadataResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateRuleMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateRuleMetadataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRuleMetadataCommandOutput> {
    return deserializeAws_json1_1UpdateRuleMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
