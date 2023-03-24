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
import { PollForJobsInput, PollForJobsOutput, PollForJobsOutputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1PollForJobsCommand,
  serializeAws_json1_1PollForJobsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link PollForJobsCommand}.
 */
export interface PollForJobsCommandInput extends PollForJobsInput {}
/**
 * @public
 *
 * The output of {@link PollForJobsCommand}.
 */
export interface PollForJobsCommandOutput extends PollForJobsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about any jobs for AWS CodePipeline to act on.
 *                 <code>PollForJobs</code> is valid only for action types with "Custom" in the owner
 *             field. If the action type contains "AWS" or "ThirdParty" in the owner field, the
 *                 <code>PollForJobs</code> action returns an error.</p>
 *         <important>
 *             <p>When this API is called, AWS CodePipeline returns temporary credentials for the
 *                 S3 bucket used to store artifacts for the pipeline, if the action requires access to
 *                 that S3 bucket for input or output artifacts. This API also returns any secret
 *                 values defined for the action.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PollForJobsCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PollForJobsCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const input = {
 *   actionTypeId: {
 *     category: "STRING_VALUE", // required
 *     owner: "STRING_VALUE", // required
 *     provider: "STRING_VALUE", // required
 *     version: "STRING_VALUE", // required
 *   },
 *   maxBatchSize: Number("int"),
 *   queryParam: {
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new PollForJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param PollForJobsCommandInput - {@link PollForJobsCommandInput}
 * @returns {@link PollForJobsCommandOutput}
 * @see {@link PollForJobsCommandInput} for command's `input` shape.
 * @see {@link PollForJobsCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link ActionTypeNotFoundException} (client fault)
 *  <p>The specified action type cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The validation was specified in an invalid format.</p>
 *
 *
 */
export class PollForJobsCommand extends $Command<
  PollForJobsCommandInput,
  PollForJobsCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: PollForJobsCommandInput) {
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
  ): Handler<PollForJobsCommandInput, PollForJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PollForJobsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "PollForJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: PollForJobsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: PollForJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PollForJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PollForJobsCommandOutput> {
    return deserializeAws_json1_1PollForJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
