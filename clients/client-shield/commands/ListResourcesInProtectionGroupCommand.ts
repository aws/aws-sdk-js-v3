import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { ListResourcesInProtectionGroupRequest, ListResourcesInProtectionGroupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListResourcesInProtectionGroupCommand,
  serializeAws_json1_1ListResourcesInProtectionGroupCommand,
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

export type ListResourcesInProtectionGroupCommandInput = ListResourcesInProtectionGroupRequest;
export type ListResourcesInProtectionGroupCommandOutput = ListResourcesInProtectionGroupResponse & __MetadataBearer;

/**
 * <p>Retrieves the resources that are included in the protection group. </p>
 */
export class ListResourcesInProtectionGroupCommand extends $Command<
  ListResourcesInProtectionGroupCommandInput,
  ListResourcesInProtectionGroupCommandOutput,
  ShieldClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListResourcesInProtectionGroupCommandInput) {
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
  ): Handler<ListResourcesInProtectionGroupCommandInput, ListResourcesInProtectionGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "ListResourcesInProtectionGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListResourcesInProtectionGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListResourcesInProtectionGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListResourcesInProtectionGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListResourcesInProtectionGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListResourcesInProtectionGroupCommandOutput> {
    return deserializeAws_json1_1ListResourcesInProtectionGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
