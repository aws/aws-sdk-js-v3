import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetPatchBaselineForPatchGroupRequest, GetPatchBaselineForPatchGroupResult } from "../models/models_1";
import {
  deserializeAws_json1_1GetPatchBaselineForPatchGroupCommand,
  serializeAws_json1_1GetPatchBaselineForPatchGroupCommand,
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

export type GetPatchBaselineForPatchGroupCommandInput = GetPatchBaselineForPatchGroupRequest;
export type GetPatchBaselineForPatchGroupCommandOutput = GetPatchBaselineForPatchGroupResult & __MetadataBearer;

/**
 * <p>Retrieves the patch baseline that should be used for the specified patch group.</p>
 */
export class GetPatchBaselineForPatchGroupCommand extends $Command<
  GetPatchBaselineForPatchGroupCommandInput,
  GetPatchBaselineForPatchGroupCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetPatchBaselineForPatchGroupCommandInput) {
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
  ): Handler<GetPatchBaselineForPatchGroupCommandInput, GetPatchBaselineForPatchGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetPatchBaselineForPatchGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPatchBaselineForPatchGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetPatchBaselineForPatchGroupResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPatchBaselineForPatchGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetPatchBaselineForPatchGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetPatchBaselineForPatchGroupCommandOutput> {
    return deserializeAws_json1_1GetPatchBaselineForPatchGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
