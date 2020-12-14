import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { ListAvailableManagementCidrRangesRequest, ListAvailableManagementCidrRangesResult } from "../models/models_0";
import {
  deserializeAws_json1_1ListAvailableManagementCidrRangesCommand,
  serializeAws_json1_1ListAvailableManagementCidrRangesCommand,
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

export type ListAvailableManagementCidrRangesCommandInput = ListAvailableManagementCidrRangesRequest;
export type ListAvailableManagementCidrRangesCommandOutput = ListAvailableManagementCidrRangesResult & __MetadataBearer;

/**
 * <p>Retrieves a list of IP address ranges, specified as IPv4 CIDR blocks, that you can use
 *          for the network management interface when you enable Bring Your Own License (BYOL). </p>
 *
 *          <p>This operation can be run only by AWS accounts that are enabled for BYOL. If your account
 *          isn't enabled for BYOL, you'll receive an <code>AccessDeniedException</code> error.</p>
 *
 *          <p>The management network interface is connected to a secure Amazon WorkSpaces management
 *          network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces
 *          clients, and to allow Amazon WorkSpaces to manage the WorkSpace.</p>
 */
export class ListAvailableManagementCidrRangesCommand extends $Command<
  ListAvailableManagementCidrRangesCommandInput,
  ListAvailableManagementCidrRangesCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAvailableManagementCidrRangesCommandInput) {
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
  ): Handler<ListAvailableManagementCidrRangesCommandInput, ListAvailableManagementCidrRangesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "ListAvailableManagementCidrRangesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAvailableManagementCidrRangesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAvailableManagementCidrRangesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListAvailableManagementCidrRangesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAvailableManagementCidrRangesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAvailableManagementCidrRangesCommandOutput> {
    return deserializeAws_json1_1ListAvailableManagementCidrRangesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
