// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { PollForThirdPartyJobsInput, PollForThirdPartyJobsOutput } from "../models/models_0";
import { de_PollForThirdPartyJobsCommand, se_PollForThirdPartyJobsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PollForThirdPartyJobsCommand}.
 */
export interface PollForThirdPartyJobsCommandInput extends PollForThirdPartyJobsInput {}
/**
 * @public
 *
 * The output of {@link PollForThirdPartyJobsCommand}.
 */
export interface PollForThirdPartyJobsCommandOutput extends PollForThirdPartyJobsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Determines whether there are any third party jobs for a job worker to act on. Used
 *             for partner actions only.</p>
 *          <important>
 *             <p>When this API is called, CodePipeline returns temporary credentials for
 *                 the S3 bucket used to store artifacts for the pipeline, if the action requires
 *                 access to that S3 bucket for input or output artifacts.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PollForThirdPartyJobsCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PollForThirdPartyJobsCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const input = { // PollForThirdPartyJobsInput
 *   actionTypeId: { // ActionTypeId
 *     category: "Source" || "Build" || "Deploy" || "Test" || "Invoke" || "Approval", // required
 *     owner: "AWS" || "ThirdParty" || "Custom", // required
 *     provider: "STRING_VALUE", // required
 *     version: "STRING_VALUE", // required
 *   },
 *   maxBatchSize: Number("int"),
 * };
 * const command = new PollForThirdPartyJobsCommand(input);
 * const response = await client.send(command);
 * // { // PollForThirdPartyJobsOutput
 * //   jobs: [ // ThirdPartyJobList
 * //     { // ThirdPartyJob
 * //       clientId: "STRING_VALUE",
 * //       jobId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PollForThirdPartyJobsCommandInput - {@link PollForThirdPartyJobsCommandInput}
 * @returns {@link PollForThirdPartyJobsCommandOutput}
 * @see {@link PollForThirdPartyJobsCommandInput} for command's `input` shape.
 * @see {@link PollForThirdPartyJobsCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link ActionTypeNotFoundException} (client fault)
 *  <p>The specified action type cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The validation was specified in an invalid format.</p>
 *
 * @throws {@link CodePipelineServiceException}
 * <p>Base exception class for all service exceptions from CodePipeline service.</p>
 *
 */
export class PollForThirdPartyJobsCommand extends $Command<
  PollForThirdPartyJobsCommandInput,
  PollForThirdPartyJobsCommandOutput,
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
  constructor(readonly input: PollForThirdPartyJobsCommandInput) {
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
  ): Handler<PollForThirdPartyJobsCommandInput, PollForThirdPartyJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PollForThirdPartyJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "PollForThirdPartyJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodePipeline_20150709",
        operation: "PollForThirdPartyJobs",
      },
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
  private serialize(input: PollForThirdPartyJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PollForThirdPartyJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PollForThirdPartyJobsCommandOutput> {
    return de_PollForThirdPartyJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
