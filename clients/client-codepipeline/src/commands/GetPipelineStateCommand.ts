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
  GetPipelineStateInput,
  GetPipelineStateInputFilterSensitiveLog,
  GetPipelineStateOutput,
  GetPipelineStateOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetPipelineStateCommand,
  serializeAws_json1_1GetPipelineStateCommand,
} from "../protocols/Aws_json1_1";

export interface GetPipelineStateCommandInput extends GetPipelineStateInput {}
export interface GetPipelineStateCommandOutput extends GetPipelineStateOutput, __MetadataBearer {}

/**
 * <p>Returns information about the state of a pipeline, including the stages and
 *             actions.</p>
 *         <note>
 *             <p>Values returned in the <code>revisionId</code> and <code>revisionUrl</code>
 *                 fields indicate the source revision information, such as the commit ID, for the
 *                 current state.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, GetPipelineStateCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, GetPipelineStateCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new GetPipelineStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPipelineStateCommandInput} for command's `input` shape.
 * @see {@link GetPipelineStateCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 */
export class GetPipelineStateCommand extends $Command<
  GetPipelineStateCommandInput,
  GetPipelineStateCommandOutput,
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

  constructor(readonly input: GetPipelineStateCommandInput) {
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
  ): Handler<GetPipelineStateCommandInput, GetPipelineStateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPipelineStateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "GetPipelineStateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPipelineStateInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetPipelineStateOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPipelineStateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetPipelineStateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPipelineStateCommandOutput> {
    return deserializeAws_json1_1GetPipelineStateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
