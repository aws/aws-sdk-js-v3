import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DescribeCrossAccountAccessRoleResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeCrossAccountAccessRoleCommand,
  serializeAws_json1_1DescribeCrossAccountAccessRoleCommand,
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

export type DescribeCrossAccountAccessRoleCommandInput = {};
export type DescribeCrossAccountAccessRoleCommandOutput = DescribeCrossAccountAccessRoleResponse & __MetadataBearer;

/**
 * <p>Describes the IAM role that enables Amazon Inspector to access your AWS
 *          account.</p>
 */
export class DescribeCrossAccountAccessRoleCommand extends $Command<
  DescribeCrossAccountAccessRoleCommandInput,
  DescribeCrossAccountAccessRoleCommandOutput,
  InspectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeCrossAccountAccessRoleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeCrossAccountAccessRoleCommandInput, DescribeCrossAccountAccessRoleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "DescribeCrossAccountAccessRoleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: DescribeCrossAccountAccessRoleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeCrossAccountAccessRoleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeCrossAccountAccessRoleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCrossAccountAccessRoleCommandOutput> {
    return deserializeAws_json1_1DescribeCrossAccountAccessRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
