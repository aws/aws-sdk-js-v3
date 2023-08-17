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

import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import { SetStatusInput } from "../models/models_0";
import { de_SetStatusCommand, se_SetStatusCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SetStatusCommand}.
 */
export interface SetStatusCommandInput extends SetStatusInput {}
/**
 * @public
 *
 * The output of {@link SetStatusCommand}.
 */
export interface SetStatusCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Requests that the status of the specified physical or logical pipeline objects be updated in the specified pipeline.
 *             This update might not occur immediately, but is eventually consistent. The status that can be set depends on the type of object (for example, DataNode or Activity).
 *             You cannot perform this operation on <code>FINISHED</code> pipelines and attempting to do so returns <code>InvalidRequestException</code>.</p>
 *
 *         <examples>
 *             <request>
 *
 * POST / HTTP/1.1
 * Content-Type: application/x-amz-json-1.1
 * X-Amz-Target: DataPipeline.SetStatus
 * Content-Length: 100
 * Host: datapipeline.us-east-1.amazonaws.com
 * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
 * Authorization: AuthParams
 *
 * \{"pipelineId": "df-0634701J7KEXAMPLE",
 *  "objectIds":
 *   ["o-08600941GHJWMBR9E2"],
 *  "status": "pause"\}
 *
 *             </request>
 *
 *             <response>
 *
 * x-amzn-RequestId: e83b8ab7-076a-11e2-af6f-6bc7a6be60d9
 * Content-Type: application/x-amz-json-1.1
 * Content-Length: 0
 * Date: Mon, 12 Nov 2012 17:50:53 GMT
 *
 * Unexpected response: 200, OK, undefined
 *
 *             </response>
 *         </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataPipelineClient, SetStatusCommand } from "@aws-sdk/client-data-pipeline"; // ES Modules import
 * // const { DataPipelineClient, SetStatusCommand } = require("@aws-sdk/client-data-pipeline"); // CommonJS import
 * const client = new DataPipelineClient(config);
 * const input = { // SetStatusInput
 *   pipelineId: "STRING_VALUE", // required
 *   objectIds: [ // idList // required
 *     "STRING_VALUE",
 *   ],
 *   status: "STRING_VALUE", // required
 * };
 * const command = new SetStatusCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetStatusCommandInput - {@link SetStatusCommandInput}
 * @returns {@link SetStatusCommandOutput}
 * @see {@link SetStatusCommandInput} for command's `input` shape.
 * @see {@link SetStatusCommandOutput} for command's `response` shape.
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
export class SetStatusCommand extends $Command<
  SetStatusCommandInput,
  SetStatusCommandOutput,
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
  constructor(readonly input: SetStatusCommandInput) {
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
  ): Handler<SetStatusCommandInput, SetStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, SetStatusCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataPipelineClient";
    const commandName = "SetStatusCommand";
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
  private serialize(input: SetStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SetStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetStatusCommandOutput> {
    return de_SetStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
