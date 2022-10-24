// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import {
  AcknowledgeThirdPartyJobInput,
  AcknowledgeThirdPartyJobInputFilterSensitiveLog,
  AcknowledgeThirdPartyJobOutput,
  AcknowledgeThirdPartyJobOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AcknowledgeThirdPartyJobCommand,
  serializeAws_json1_1AcknowledgeThirdPartyJobCommand,
} from "../protocols/Aws_json1_1";

export interface AcknowledgeThirdPartyJobCommandInput extends AcknowledgeThirdPartyJobInput {}
export interface AcknowledgeThirdPartyJobCommandOutput extends AcknowledgeThirdPartyJobOutput, __MetadataBearer {}

/**
 * <p>Confirms a job worker has received the specified job. Used for partner actions
 *             only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, AcknowledgeThirdPartyJobCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, AcknowledgeThirdPartyJobCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new AcknowledgeThirdPartyJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcknowledgeThirdPartyJobCommandInput} for command's `input` shape.
 * @see {@link AcknowledgeThirdPartyJobCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 */
export class AcknowledgeThirdPartyJobCommand extends $Command<
  AcknowledgeThirdPartyJobCommandInput,
  AcknowledgeThirdPartyJobCommandOutput,
  CodePipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: AcknowledgeThirdPartyJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodePipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AcknowledgeThirdPartyJobCommandInput, AcknowledgeThirdPartyJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AcknowledgeThirdPartyJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "AcknowledgeThirdPartyJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AcknowledgeThirdPartyJobInputFilterSensitiveLog,
      outputFilterSensitiveLog: AcknowledgeThirdPartyJobOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AcknowledgeThirdPartyJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AcknowledgeThirdPartyJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AcknowledgeThirdPartyJobCommandOutput> {
    return deserializeAws_json1_1AcknowledgeThirdPartyJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
