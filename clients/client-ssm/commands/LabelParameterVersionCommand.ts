import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { LabelParameterVersionRequest, LabelParameterVersionResult } from "../models/models_1";
import {
  deserializeAws_json1_1LabelParameterVersionCommand,
  serializeAws_json1_1LabelParameterVersionCommand,
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

export type LabelParameterVersionCommandInput = LabelParameterVersionRequest;
export type LabelParameterVersionCommandOutput = LabelParameterVersionResult & __MetadataBearer;

/**
 * <p>A parameter label is a user-defined alias to help you manage different versions of a
 *    parameter. When you modify a parameter, Systems Manager automatically saves a new version and increments
 *    the version number by one. A label can help you remember the purpose of a parameter when there
 *    are multiple versions. </p>
 *          <p>Parameter labels have the following requirements and restrictions.</p>
 *          <ul>
 *             <li>
 *                <p>A version of a parameter can have a maximum of 10 labels.</p>
 *             </li>
 *             <li>
 *                <p>You can't attach the same label to different versions of the same parameter. For example,
 *      if version 1 has the label Production, then you can't attach Production to version 2.</p>
 *             </li>
 *             <li>
 *                <p>You can move a label from one version of a parameter to another.</p>
 *             </li>
 *             <li>
 *                <p>You can't create a label when you create a new parameter. You must attach a label to a
 *      specific version of a parameter.</p>
 *             </li>
 *             <li>
 *                <p>You can't delete a parameter label. If you no longer want to use a parameter label, then
 *      you must move it to a different version of a parameter.</p>
 *             </li>
 *             <li>
 *                <p>A label can have a maximum of 100 characters.</p>
 *             </li>
 *             <li>
 *                <p>Labels can contain letters (case sensitive), numbers, periods (.), hyphens (-), or
 *      underscores (_).</p>
 *             </li>
 *             <li>
 *                <p>Labels can't begin with a number, "aws," or "ssm" (not case sensitive). If a label fails
 *      to meet these requirements, then the label is not associated with a parameter and the system
 *      displays it in the list of InvalidLabels.</p>
 *             </li>
 *          </ul>
 */
export class LabelParameterVersionCommand extends $Command<
  LabelParameterVersionCommandInput,
  LabelParameterVersionCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: LabelParameterVersionCommandInput) {
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
  ): Handler<LabelParameterVersionCommandInput, LabelParameterVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "LabelParameterVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: LabelParameterVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: LabelParameterVersionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: LabelParameterVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1LabelParameterVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<LabelParameterVersionCommandOutput> {
    return deserializeAws_json1_1LabelParameterVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
