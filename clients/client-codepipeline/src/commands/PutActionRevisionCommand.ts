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
} from "@smithy/types";

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { PutActionRevisionInput, PutActionRevisionOutput } from "../models/models_0";
import { de_PutActionRevisionCommand, se_PutActionRevisionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutActionRevisionCommand}.
 */
export interface PutActionRevisionCommandInput extends PutActionRevisionInput {}
/**
 * @public
 *
 * The output of {@link PutActionRevisionCommand}.
 */
export interface PutActionRevisionCommandOutput extends PutActionRevisionOutput, __MetadataBearer {}

/**
 * @public
 * <p>Provides information to CodePipeline about new revisions to a
 *             source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PutActionRevisionCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PutActionRevisionCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const input = { // PutActionRevisionInput
 *   pipelineName: "STRING_VALUE", // required
 *   stageName: "STRING_VALUE", // required
 *   actionName: "STRING_VALUE", // required
 *   actionRevision: { // ActionRevision
 *     revisionId: "STRING_VALUE", // required
 *     revisionChangeId: "STRING_VALUE", // required
 *     created: new Date("TIMESTAMP"), // required
 *   },
 * };
 * const command = new PutActionRevisionCommand(input);
 * const response = await client.send(command);
 * // { // PutActionRevisionOutput
 * //   newRevision: true || false,
 * //   pipelineExecutionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutActionRevisionCommandInput - {@link PutActionRevisionCommandInput}
 * @returns {@link PutActionRevisionCommandOutput}
 * @see {@link PutActionRevisionCommandInput} for command's `input` shape.
 * @see {@link PutActionRevisionCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link ActionNotFoundException} (client fault)
 *  <p>The specified action cannot be found.</p>
 *
 * @throws {@link PipelineNotFoundException} (client fault)
 *  <p>The pipeline was specified in an invalid format or cannot be found.</p>
 *
 * @throws {@link StageNotFoundException} (client fault)
 *  <p>The stage was specified in an invalid format or cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The validation was specified in an invalid format.</p>
 *
 * @throws {@link CodePipelineServiceException}
 * <p>Base exception class for all service exceptions from CodePipeline service.</p>
 *
 */
export class PutActionRevisionCommand extends $Command<
  PutActionRevisionCommandInput,
  PutActionRevisionCommandOutput,
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
  constructor(readonly input: PutActionRevisionCommandInput) {
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
  ): Handler<PutActionRevisionCommandInput, PutActionRevisionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutActionRevisionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "PutActionRevisionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: PutActionRevisionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutActionRevisionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutActionRevisionCommandOutput> {
    return de_PutActionRevisionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
