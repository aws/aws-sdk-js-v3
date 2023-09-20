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
import { AcknowledgeJobInput, AcknowledgeJobOutput } from "../models/models_0";
import { de_AcknowledgeJobCommand, se_AcknowledgeJobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AcknowledgeJobCommand}.
 */
export interface AcknowledgeJobCommandInput extends AcknowledgeJobInput {}
/**
 * @public
 *
 * The output of {@link AcknowledgeJobCommand}.
 */
export interface AcknowledgeJobCommandOutput extends AcknowledgeJobOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a specified job and whether that job has been received by
 *             the job worker. Used for custom actions only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, AcknowledgeJobCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, AcknowledgeJobCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const input = { // AcknowledgeJobInput
 *   jobId: "STRING_VALUE", // required
 *   nonce: "STRING_VALUE", // required
 * };
 * const command = new AcknowledgeJobCommand(input);
 * const response = await client.send(command);
 * // { // AcknowledgeJobOutput
 * //   status: "Created" || "Queued" || "Dispatched" || "InProgress" || "TimedOut" || "Succeeded" || "Failed",
 * // };
 *
 * ```
 *
 * @param AcknowledgeJobCommandInput - {@link AcknowledgeJobCommandInput}
 * @returns {@link AcknowledgeJobCommandOutput}
 * @see {@link AcknowledgeJobCommandInput} for command's `input` shape.
 * @see {@link AcknowledgeJobCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link InvalidNonceException} (client fault)
 *  <p>The nonce was specified in an invalid format.</p>
 *
 * @throws {@link JobNotFoundException} (client fault)
 *  <p>The job was specified in an invalid format or cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The validation was specified in an invalid format.</p>
 *
 * @throws {@link CodePipelineServiceException}
 * <p>Base exception class for all service exceptions from CodePipeline service.</p>
 *
 */
export class AcknowledgeJobCommand extends $Command<
  AcknowledgeJobCommandInput,
  AcknowledgeJobCommandOutput,
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
  constructor(readonly input: AcknowledgeJobCommandInput) {
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
  ): Handler<AcknowledgeJobCommandInput, AcknowledgeJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AcknowledgeJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "AcknowledgeJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodePipeline_20150709",
        operation: "AcknowledgeJob",
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
  private serialize(input: AcknowledgeJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AcknowledgeJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AcknowledgeJobCommandOutput> {
    return de_AcknowledgeJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
