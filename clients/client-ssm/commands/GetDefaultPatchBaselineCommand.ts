import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetDefaultPatchBaselineRequest, GetDefaultPatchBaselineResult } from "../models/models_1";
import {
  deserializeAws_json1_1GetDefaultPatchBaselineCommand,
  serializeAws_json1_1GetDefaultPatchBaselineCommand,
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

export type GetDefaultPatchBaselineCommandInput = GetDefaultPatchBaselineRequest;
export type GetDefaultPatchBaselineCommandOutput = GetDefaultPatchBaselineResult & __MetadataBearer;

/**
 * <p>Retrieves the default patch baseline. Note that Systems Manager supports creating multiple default
 *    patch baselines. For example, you can create a default patch baseline for each operating
 *    system.</p>
 *          <p>If you do not specify an operating system value, the default patch baseline for Windows is
 *    returned.</p>
 */
export class GetDefaultPatchBaselineCommand extends $Command<
  GetDefaultPatchBaselineCommandInput,
  GetDefaultPatchBaselineCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDefaultPatchBaselineCommandInput) {
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
  ): Handler<GetDefaultPatchBaselineCommandInput, GetDefaultPatchBaselineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetDefaultPatchBaselineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDefaultPatchBaselineRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDefaultPatchBaselineResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDefaultPatchBaselineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDefaultPatchBaselineCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDefaultPatchBaselineCommandOutput> {
    return deserializeAws_json1_1GetDefaultPatchBaselineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
