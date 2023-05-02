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

import { GetPipelineChangeProgressRequest, GetPipelineChangeProgressResponse } from "../models/models_0";
import { OSISClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OSISClient";
import { de_GetPipelineChangeProgressCommand, se_GetPipelineChangeProgressCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link GetPipelineChangeProgressCommand}.
 */
export interface GetPipelineChangeProgressCommandInput extends GetPipelineChangeProgressRequest {}
/**
 * @public
 *
 * The output of {@link GetPipelineChangeProgressCommand}.
 */
export interface GetPipelineChangeProgressCommandOutput extends GetPipelineChangeProgressResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns progress information for the current change happening on an OpenSearch Ingestion
 *    pipeline. Currently, this operation only returns information when a pipeline is being
 *    created.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/creating-pipeline.html#get-pipeline-progress">Tracking the status of pipeline creation</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OSISClient, GetPipelineChangeProgressCommand } from "@aws-sdk/client-osis"; // ES Modules import
 * // const { OSISClient, GetPipelineChangeProgressCommand } = require("@aws-sdk/client-osis"); // CommonJS import
 * const client = new OSISClient(config);
 * const input = { // GetPipelineChangeProgressRequest
 *   PipelineName: "STRING_VALUE", // required
 * };
 * const command = new GetPipelineChangeProgressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetPipelineChangeProgressCommandInput - {@link GetPipelineChangeProgressCommandInput}
 * @returns {@link GetPipelineChangeProgressCommandOutput}
 * @see {@link GetPipelineChangeProgressCommandInput} for command's `input` shape.
 * @see {@link GetPipelineChangeProgressCommandOutput} for command's `response` shape.
 * @see {@link OSISClientResolvedConfig | config} for OSISClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to access the resource.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>The request failed because of an unknown error, exception, or failure (the failure is
 *    internal to the service).</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You attempted to access or delete a resource that does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for missing or invalid input fields.</p>
 *
 *
 */
export class GetPipelineChangeProgressCommand extends $Command<
  GetPipelineChangeProgressCommandInput,
  GetPipelineChangeProgressCommandOutput,
  OSISClientResolvedConfig
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
  constructor(readonly input: GetPipelineChangeProgressCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OSISClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPipelineChangeProgressCommandInput, GetPipelineChangeProgressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPipelineChangeProgressCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OSISClient";
    const commandName = "GetPipelineChangeProgressCommand";
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
  private serialize(input: GetPipelineChangeProgressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetPipelineChangeProgressCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetPipelineChangeProgressCommandOutput> {
    return de_GetPipelineChangeProgressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
