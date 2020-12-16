import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  GetOrganizationConformancePackDetailedStatusRequest,
  GetOrganizationConformancePackDetailedStatusResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommand,
  serializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommand,
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

export type GetOrganizationConformancePackDetailedStatusCommandInput = GetOrganizationConformancePackDetailedStatusRequest;
export type GetOrganizationConformancePackDetailedStatusCommandOutput = GetOrganizationConformancePackDetailedStatusResponse &
  __MetadataBearer;

/**
 * <p>Returns detailed status for each member account within an organization for a given organization conformance pack.</p>
 * 		       <p>Only a master account and a delegated administrator account can call this API.
 * 			When calling this API with a delegated administrator, you must ensure AWS Organizations
 * 			<code>ListDelegatedAdministrator</code> permissions are added.</p>
 */
export class GetOrganizationConformancePackDetailedStatusCommand extends $Command<
  GetOrganizationConformancePackDetailedStatusCommandInput,
  GetOrganizationConformancePackDetailedStatusCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetOrganizationConformancePackDetailedStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetOrganizationConformancePackDetailedStatusCommandInput,
    GetOrganizationConformancePackDetailedStatusCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "GetOrganizationConformancePackDetailedStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetOrganizationConformancePackDetailedStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetOrganizationConformancePackDetailedStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetOrganizationConformancePackDetailedStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetOrganizationConformancePackDetailedStatusCommandOutput> {
    return deserializeAws_json1_1GetOrganizationConformancePackDetailedStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
