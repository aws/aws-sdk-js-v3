import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { UpdateProtectionGroupRequest, UpdateProtectionGroupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateProtectionGroupCommand,
  serializeAws_json1_1UpdateProtectionGroupCommand,
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

export type UpdateProtectionGroupCommandInput = UpdateProtectionGroupRequest;
export type UpdateProtectionGroupCommandOutput = UpdateProtectionGroupResponse & __MetadataBearer;

/**
 * <p>Updates an existing protection group. A protection group is a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives. </p>
 */
export class UpdateProtectionGroupCommand extends $Command<
  UpdateProtectionGroupCommandInput,
  UpdateProtectionGroupCommandOutput,
  ShieldClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateProtectionGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ShieldClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateProtectionGroupCommandInput, UpdateProtectionGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "UpdateProtectionGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateProtectionGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateProtectionGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateProtectionGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateProtectionGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateProtectionGroupCommandOutput> {
    return deserializeAws_json1_1UpdateProtectionGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
