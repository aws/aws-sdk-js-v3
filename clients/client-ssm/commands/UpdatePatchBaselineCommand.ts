import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { UpdatePatchBaselineRequest, UpdatePatchBaselineResult } from "../models/models_1";
import {
  deserializeAws_json1_1UpdatePatchBaselineCommand,
  serializeAws_json1_1UpdatePatchBaselineCommand,
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

export type UpdatePatchBaselineCommandInput = UpdatePatchBaselineRequest;
export type UpdatePatchBaselineCommandOutput = UpdatePatchBaselineResult & __MetadataBearer;

/**
 * <p>Modifies an existing patch baseline. Fields not specified in the request are left
 *    unchanged.</p>
 *          <note>
 *             <p>For information about valid key and value pairs in <code>PatchFilters</code> for each
 *     supported operating system type, see <a href="http://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PatchFilter.html">PatchFilter</a>.</p>
 *          </note>
 */
export class UpdatePatchBaselineCommand extends $Command<
  UpdatePatchBaselineCommandInput,
  UpdatePatchBaselineCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdatePatchBaselineCommandInput) {
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
  ): Handler<UpdatePatchBaselineCommandInput, UpdatePatchBaselineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "UpdatePatchBaselineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePatchBaselineRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdatePatchBaselineResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdatePatchBaselineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdatePatchBaselineCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePatchBaselineCommandOutput> {
    return deserializeAws_json1_1UpdatePatchBaselineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
