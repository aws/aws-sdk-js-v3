import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { GetDeploymentInput, GetDeploymentOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetDeploymentCommand,
  serializeAws_json1_1GetDeploymentCommand,
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

export type GetDeploymentCommandInput = GetDeploymentInput;
export type GetDeploymentCommandOutput = GetDeploymentOutput & __MetadataBearer;

/**
 * <p>Gets information about a deployment.</p>
 *         <note>
 *             <p>
 *                 The <code>content</code> property of the <code>appSpecContent</code> object in the returned revision is always null.
 *                 Use <code>GetApplicationRevision</code> and the <code>sha256</code> property of the returned <code>appSpecContent</code>
 *                 object to get the content of the deployment’s AppSpec file.
 *             </p>
 *         </note>
 */
export class GetDeploymentCommand extends $Command<
  GetDeploymentCommandInput,
  GetDeploymentCommandOutput,
  CodeDeployClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDeploymentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeDeployClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDeploymentCommandInput, GetDeploymentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "GetDeploymentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDeploymentInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetDeploymentOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDeploymentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDeploymentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDeploymentCommandOutput> {
    return deserializeAws_json1_1GetDeploymentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
