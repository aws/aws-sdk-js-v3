import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import {
  DescribeEffectivePatchesForPatchBaselineRequest,
  DescribeEffectivePatchesForPatchBaselineResult,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommand,
  serializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommand,
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

export interface DescribeEffectivePatchesForPatchBaselineCommandInput
  extends DescribeEffectivePatchesForPatchBaselineRequest {}
export interface DescribeEffectivePatchesForPatchBaselineCommandOutput
  extends DescribeEffectivePatchesForPatchBaselineResult,
    __MetadataBearer {}

/**
 * <p>Retrieves the current effective patches (the patch and the approval state) for the specified
 *    patch baseline. Applies to patch baselines for Windows only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeEffectivePatchesForPatchBaselineCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeEffectivePatchesForPatchBaselineCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeEffectivePatchesForPatchBaselineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEffectivePatchesForPatchBaselineCommandInput} for command's `input` shape.
 * @see {@link DescribeEffectivePatchesForPatchBaselineCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeEffectivePatchesForPatchBaselineCommand extends $Command<
  DescribeEffectivePatchesForPatchBaselineCommandInput,
  DescribeEffectivePatchesForPatchBaselineCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeEffectivePatchesForPatchBaselineCommandInput) {
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
    DescribeEffectivePatchesForPatchBaselineCommandInput,
    DescribeEffectivePatchesForPatchBaselineCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeEffectivePatchesForPatchBaselineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEffectivePatchesForPatchBaselineRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeEffectivePatchesForPatchBaselineResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeEffectivePatchesForPatchBaselineCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEffectivePatchesForPatchBaselineCommandOutput> {
    return deserializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
