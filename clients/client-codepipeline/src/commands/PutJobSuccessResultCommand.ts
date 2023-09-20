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
import { PutJobSuccessResultInput } from "../models/models_0";
import { de_PutJobSuccessResultCommand, se_PutJobSuccessResultCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutJobSuccessResultCommand}.
 */
export interface PutJobSuccessResultCommandInput extends PutJobSuccessResultInput {}
/**
 * @public
 *
 * The output of {@link PutJobSuccessResultCommand}.
 */
export interface PutJobSuccessResultCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Represents the success of a job as returned to the pipeline by a job worker. Used
 *             for custom actions only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PutJobSuccessResultCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PutJobSuccessResultCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const input = { // PutJobSuccessResultInput
 *   jobId: "STRING_VALUE", // required
 *   currentRevision: { // CurrentRevision
 *     revision: "STRING_VALUE", // required
 *     changeIdentifier: "STRING_VALUE", // required
 *     created: new Date("TIMESTAMP"),
 *     revisionSummary: "STRING_VALUE",
 *   },
 *   continuationToken: "STRING_VALUE",
 *   executionDetails: { // ExecutionDetails
 *     summary: "STRING_VALUE",
 *     externalExecutionId: "STRING_VALUE",
 *     percentComplete: Number("int"),
 *   },
 *   outputVariables: { // OutputVariablesMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new PutJobSuccessResultCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutJobSuccessResultCommandInput - {@link PutJobSuccessResultCommandInput}
 * @returns {@link PutJobSuccessResultCommandOutput}
 * @see {@link PutJobSuccessResultCommandInput} for command's `input` shape.
 * @see {@link PutJobSuccessResultCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link InvalidJobStateException} (client fault)
 *  <p>The job state was specified in an invalid format.</p>
 *
 * @throws {@link JobNotFoundException} (client fault)
 *  <p>The job was specified in an invalid format or cannot be found.</p>
 *
 * @throws {@link OutputVariablesSizeExceededException} (client fault)
 *  <p>Exceeded the total size limit for all variables in the pipeline.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The validation was specified in an invalid format.</p>
 *
 * @throws {@link CodePipelineServiceException}
 * <p>Base exception class for all service exceptions from CodePipeline service.</p>
 *
 */
export class PutJobSuccessResultCommand extends $Command<
  PutJobSuccessResultCommandInput,
  PutJobSuccessResultCommandOutput,
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
  constructor(readonly input: PutJobSuccessResultCommandInput) {
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
  ): Handler<PutJobSuccessResultCommandInput, PutJobSuccessResultCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutJobSuccessResultCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "PutJobSuccessResultCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodePipeline_20150709",
        operation: "PutJobSuccessResult",
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
  private serialize(input: PutJobSuccessResultCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutJobSuccessResultCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutJobSuccessResultCommandOutput> {
    return de_PutJobSuccessResultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
