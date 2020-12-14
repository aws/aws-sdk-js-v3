import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { UpdateRulesOfIpGroupRequest, UpdateRulesOfIpGroupResult } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateRulesOfIpGroupCommand,
  serializeAws_json1_1UpdateRulesOfIpGroupCommand,
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

export type UpdateRulesOfIpGroupCommandInput = UpdateRulesOfIpGroupRequest;
export type UpdateRulesOfIpGroupCommandOutput = UpdateRulesOfIpGroupResult & __MetadataBearer;

/**
 * <p>Replaces the current rules of the specified IP access control group with the specified
 *          rules.</p>
 */
export class UpdateRulesOfIpGroupCommand extends $Command<
  UpdateRulesOfIpGroupCommandInput,
  UpdateRulesOfIpGroupCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateRulesOfIpGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRulesOfIpGroupCommandInput, UpdateRulesOfIpGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "UpdateRulesOfIpGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRulesOfIpGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateRulesOfIpGroupResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateRulesOfIpGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateRulesOfIpGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRulesOfIpGroupCommandOutput> {
    return deserializeAws_json1_1UpdateRulesOfIpGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
