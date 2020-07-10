import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribeStackProvisioningParametersRequest, DescribeStackProvisioningParametersResult } from "../models/index";
import {
  deserializeAws_json1_1DescribeStackProvisioningParametersCommand,
  serializeAws_json1_1DescribeStackProvisioningParametersCommand,
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

export type DescribeStackProvisioningParametersCommandInput = DescribeStackProvisioningParametersRequest;
export type DescribeStackProvisioningParametersCommandOutput = DescribeStackProvisioningParametersResult &
  __MetadataBearer;

export class DescribeStackProvisioningParametersCommand extends $Command<
  DescribeStackProvisioningParametersCommandInput,
  DescribeStackProvisioningParametersCommandOutput,
  OpsWorksClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeStackProvisioningParametersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeStackProvisioningParametersCommandInput, DescribeStackProvisioningParametersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeStackProvisioningParametersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeStackProvisioningParametersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeStackProvisioningParametersCommandOutput> {
    return deserializeAws_json1_1DescribeStackProvisioningParametersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
