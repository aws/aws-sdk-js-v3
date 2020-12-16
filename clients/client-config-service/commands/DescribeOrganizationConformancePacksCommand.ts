import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  DescribeOrganizationConformancePacksRequest,
  DescribeOrganizationConformancePacksResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeOrganizationConformancePacksCommand,
  serializeAws_json1_1DescribeOrganizationConformancePacksCommand,
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

export type DescribeOrganizationConformancePacksCommandInput = DescribeOrganizationConformancePacksRequest;
export type DescribeOrganizationConformancePacksCommandOutput = DescribeOrganizationConformancePacksResponse &
  __MetadataBearer;

/**
 * <p>Returns a list of organization conformance packs. </p>
 * 		       <p>Only a master account and a delegated administrator account can call this API.
 * 			When calling this API with a delegated administrator, you must ensure AWS Organizations
 * 				<code>ListDelegatedAdministrator</code> permissions are added.</p>
 * 		       <note>
 *             <p>When you specify the limit and the next token, you receive a paginated response. </p>
 * 			         <p>Limit and next token are not applicable if you specify organization conformance packs names. They are only applicable,
 * 			when you request all the organization conformance packs. </p>
 *          </note>
 */
export class DescribeOrganizationConformancePacksCommand extends $Command<
  DescribeOrganizationConformancePacksCommandInput,
  DescribeOrganizationConformancePacksCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeOrganizationConformancePacksCommandInput) {
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
  ): Handler<DescribeOrganizationConformancePacksCommandInput, DescribeOrganizationConformancePacksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeOrganizationConformancePacksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeOrganizationConformancePacksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeOrganizationConformancePacksResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeOrganizationConformancePacksCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeOrganizationConformancePacksCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeOrganizationConformancePacksCommandOutput> {
    return deserializeAws_json1_1DescribeOrganizationConformancePacksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
