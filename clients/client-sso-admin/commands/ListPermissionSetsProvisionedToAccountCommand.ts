import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import {
  ListPermissionSetsProvisionedToAccountRequest,
  ListPermissionSetsProvisionedToAccountResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListPermissionSetsProvisionedToAccountCommand,
  serializeAws_json1_1ListPermissionSetsProvisionedToAccountCommand,
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

export type ListPermissionSetsProvisionedToAccountCommandInput = ListPermissionSetsProvisionedToAccountRequest;
export type ListPermissionSetsProvisionedToAccountCommandOutput = ListPermissionSetsProvisionedToAccountResponse &
  __MetadataBearer;

/**
 * <p>Lists all the permission sets that are provisioned to a specified AWS account.</p>
 */
export class ListPermissionSetsProvisionedToAccountCommand extends $Command<
  ListPermissionSetsProvisionedToAccountCommandInput,
  ListPermissionSetsProvisionedToAccountCommandOutput,
  SSOAdminClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPermissionSetsProvisionedToAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPermissionSetsProvisionedToAccountCommandInput, ListPermissionSetsProvisionedToAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "ListPermissionSetsProvisionedToAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPermissionSetsProvisionedToAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPermissionSetsProvisionedToAccountResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListPermissionSetsProvisionedToAccountCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListPermissionSetsProvisionedToAccountCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPermissionSetsProvisionedToAccountCommandOutput> {
    return deserializeAws_json1_1ListPermissionSetsProvisionedToAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
