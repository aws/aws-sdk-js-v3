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
  GetJobDetailsInput,
  GetJobDetailsInputFilterSensitiveLog,
  GetJobDetailsOutput,
  GetJobDetailsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetJobDetailsCommand,
  serializeAws_json1_1GetJobDetailsCommand,
} from "../protocols/Aws_json1_1";

export interface GetJobDetailsCommandInput extends GetJobDetailsInput {}
export interface GetJobDetailsCommandOutput extends GetJobDetailsOutput, __MetadataBearer {}

/**
 * <p>Returns information about a job. Used for custom actions only.</p>
 *         <important>
 *             <p>When this API is called, AWS CodePipeline returns temporary credentials for the
 *                 S3 bucket used to store artifacts for the pipeline, if the action requires access to
 *                 that S3 bucket for input or output artifacts. This API also returns any secret
 *                 values defined for the action.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, GetJobDetailsCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, GetJobDetailsCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new GetJobDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJobDetailsCommandInput} for command's `input` shape.
 * @see {@link GetJobDetailsCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 */
export class GetJobDetailsCommand extends $Command<
  GetJobDetailsCommandInput,
  GetJobDetailsCommandOutput,
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

  constructor(readonly input: GetJobDetailsCommandInput) {
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
  ): Handler<GetJobDetailsCommandInput, GetJobDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetJobDetailsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "GetJobDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetJobDetailsInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetJobDetailsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetJobDetailsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetJobDetailsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetJobDetailsCommandOutput> {
    return deserializeAws_json1_1GetJobDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
