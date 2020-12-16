import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { CreatePatchBaselineRequest, CreatePatchBaselineResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreatePatchBaselineCommand,
  serializeAws_json1_1CreatePatchBaselineCommand,
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

export type CreatePatchBaselineCommandInput = CreatePatchBaselineRequest;
export type CreatePatchBaselineCommandOutput = CreatePatchBaselineResult & __MetadataBearer;

/**
 * <p>Creates a patch baseline.</p>
 *          <note>
 *             <p>For information about valid key and value pairs in <code>PatchFilters</code> for each
 *     supported operating system type, see <a href="http://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PatchFilter.html">PatchFilter</a>.</p>
 *          </note>
 */
export class CreatePatchBaselineCommand extends $Command<
  CreatePatchBaselineCommandInput,
  CreatePatchBaselineCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePatchBaselineCommandInput) {
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
  ): Handler<CreatePatchBaselineCommandInput, CreatePatchBaselineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "CreatePatchBaselineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePatchBaselineRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreatePatchBaselineResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePatchBaselineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreatePatchBaselineCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePatchBaselineCommandOutput> {
    return deserializeAws_json1_1CreatePatchBaselineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
