import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import {
  DescribeInstancePatchStatesForPatchGroupRequest,
  DescribeInstancePatchStatesForPatchGroupResult,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommand,
  serializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommand,
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

export type DescribeInstancePatchStatesForPatchGroupCommandInput = DescribeInstancePatchStatesForPatchGroupRequest;
export type DescribeInstancePatchStatesForPatchGroupCommandOutput = DescribeInstancePatchStatesForPatchGroupResult &
  __MetadataBearer;

/**
 * <p>Retrieves the high-level patch state for the instances in the specified patch group.</p>
 */
export class DescribeInstancePatchStatesForPatchGroupCommand extends $Command<
  DescribeInstancePatchStatesForPatchGroupCommandInput,
  DescribeInstancePatchStatesForPatchGroupCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeInstancePatchStatesForPatchGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeInstancePatchStatesForPatchGroupCommandInput,
    DescribeInstancePatchStatesForPatchGroupCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeInstancePatchStatesForPatchGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeInstancePatchStatesForPatchGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeInstancePatchStatesForPatchGroupResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeInstancePatchStatesForPatchGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInstancePatchStatesForPatchGroupCommandOutput> {
    return deserializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
