import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { DescribeProtectionGroupRequest, DescribeProtectionGroupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeProtectionGroupCommand,
  serializeAws_json1_1DescribeProtectionGroupCommand,
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

export type DescribeProtectionGroupCommandInput = DescribeProtectionGroupRequest;
export type DescribeProtectionGroupCommandOutput = DescribeProtectionGroupResponse & __MetadataBearer;

/**
 * <p>Returns the specification for the specified protection group.</p>
 */
export class DescribeProtectionGroupCommand extends $Command<
  DescribeProtectionGroupCommandInput,
  DescribeProtectionGroupCommandOutput,
  ShieldClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeProtectionGroupCommandInput) {
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
  ): Handler<DescribeProtectionGroupCommandInput, DescribeProtectionGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "DescribeProtectionGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeProtectionGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeProtectionGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeProtectionGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeProtectionGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeProtectionGroupCommandOutput> {
    return deserializeAws_json1_1DescribeProtectionGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
