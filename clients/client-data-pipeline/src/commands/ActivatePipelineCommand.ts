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

import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import { ActivatePipelineInput, ActivatePipelineOutput } from "../models/models_0";
import { de_ActivatePipelineCommand, se_ActivatePipelineCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ActivatePipelineCommand}.
 */
export interface ActivatePipelineCommandInput extends ActivatePipelineInput {}
/**
 * @public
 *
 * The output of {@link ActivatePipelineCommand}.
 */
export interface ActivatePipelineCommandOutput extends ActivatePipelineOutput, __MetadataBearer {}

/**
 * @public
 * <p>Validates the specified pipeline and starts processing pipeline tasks. If the pipeline does not pass validation,
 *            activation fails.</p>
 *         <p>If you need to pause the pipeline to investigate an issue with a component, such as a data source or script,
 *            call <a>DeactivatePipeline</a>.</p>
 *         <p>To activate a finished pipeline, modify the end date for the pipeline and then activate it.</p>
 *         <examples>
 *             <request>
 *
 * POST / HTTP/1.1
 * Content-Type: application/x-amz-json-1.1
 * X-Amz-Target: DataPipeline.ActivatePipeline
 * Content-Length: 39
 * Host: datapipeline.us-east-1.amazonaws.com
 * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
 * Authorization: AuthParams
 *
 * \{"pipelineId": "df-06372391ZG65EXAMPLE"\}
 *
 *             </request>
 *             <response>
 *
 * HTTP/1.1 200
 * x-amzn-RequestId: ee19d5bf-074e-11e2-af6f-6bc7a6be60d9
 * Content-Type: application/x-amz-json-1.1
 * Content-Length: 2
 * Date: Mon, 12 Nov 2012 17:50:53 GMT
 *
 * \{\}
 *
 *             </response>
 *         </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataPipelineClient, ActivatePipelineCommand } from "@aws-sdk/client-data-pipeline"; // ES Modules import
 * // const { DataPipelineClient, ActivatePipelineCommand } = require("@aws-sdk/client-data-pipeline"); // CommonJS import
 * const client = new DataPipelineClient(config);
 * const input = { // ActivatePipelineInput
 *   pipelineId: "STRING_VALUE", // required
 *   parameterValues: [ // ParameterValueList
 *     { // ParameterValue
 *       id: "STRING_VALUE", // required
 *       stringValue: "STRING_VALUE", // required
 *     },
 *   ],
 *   startTimestamp: new Date("TIMESTAMP"),
 * };
 * const command = new ActivatePipelineCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ActivatePipelineCommandInput - {@link ActivatePipelineCommandInput}
 * @returns {@link ActivatePipelineCommandOutput}
 * @see {@link ActivatePipelineCommandInput} for command's `input` shape.
 * @see {@link ActivatePipelineCommandOutput} for command's `response` shape.
 * @see {@link DataPipelineClientResolvedConfig | config} for DataPipelineClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.</p>
 *
 * @throws {@link PipelineDeletedException} (client fault)
 *  <p>The specified pipeline has been deleted.</p>
 *
 * @throws {@link PipelineNotFoundException} (client fault)
 *  <p>The specified pipeline was not found. Verify that you used the correct user and account identifiers.</p>
 *
 * @throws {@link DataPipelineServiceException}
 * <p>Base exception class for all service exceptions from DataPipeline service.</p>
 *
 */
export class ActivatePipelineCommand extends $Command<
  ActivatePipelineCommandInput,
  ActivatePipelineCommandOutput,
  DataPipelineClientResolvedConfig
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
  constructor(readonly input: ActivatePipelineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataPipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ActivatePipelineCommandInput, ActivatePipelineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ActivatePipelineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataPipelineClient";
    const commandName = "ActivatePipelineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataPipeline",
        operation: "ActivatePipeline",
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
  private serialize(input: ActivatePipelineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ActivatePipelineCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ActivatePipelineCommandOutput> {
    return de_ActivatePipelineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
