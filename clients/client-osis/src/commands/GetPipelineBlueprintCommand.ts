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

import { GetPipelineBlueprintRequest, GetPipelineBlueprintResponse } from "../models/models_0";
import { OSISClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OSISClient";
import { de_GetPipelineBlueprintCommand, se_GetPipelineBlueprintCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link GetPipelineBlueprintCommand}.
 */
export interface GetPipelineBlueprintCommandInput extends GetPipelineBlueprintRequest {}
/**
 * @public
 *
 * The output of {@link GetPipelineBlueprintCommand}.
 */
export interface GetPipelineBlueprintCommandOutput extends GetPipelineBlueprintResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about a specific blueprint for OpenSearch Ingestion. Blueprints are
 *    templates for the configuration needed for a <code>CreatePipeline</code> request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OSISClient, GetPipelineBlueprintCommand } from "@aws-sdk/client-osis"; // ES Modules import
 * // const { OSISClient, GetPipelineBlueprintCommand } = require("@aws-sdk/client-osis"); // CommonJS import
 * const client = new OSISClient(config);
 * const input = { // GetPipelineBlueprintRequest
 *   BlueprintName: "STRING_VALUE", // required
 * };
 * const command = new GetPipelineBlueprintCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetPipelineBlueprintCommandInput - {@link GetPipelineBlueprintCommandInput}
 * @returns {@link GetPipelineBlueprintCommandOutput}
 * @see {@link GetPipelineBlueprintCommandInput} for command's `input` shape.
 * @see {@link GetPipelineBlueprintCommandOutput} for command's `response` shape.
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
export class GetPipelineBlueprintCommand extends $Command<
  GetPipelineBlueprintCommandInput,
  GetPipelineBlueprintCommandOutput,
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
  constructor(readonly input: GetPipelineBlueprintCommandInput) {
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
  ): Handler<GetPipelineBlueprintCommandInput, GetPipelineBlueprintCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPipelineBlueprintCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OSISClient";
    const commandName = "GetPipelineBlueprintCommand";
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
  private serialize(input: GetPipelineBlueprintCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetPipelineBlueprintCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPipelineBlueprintCommandOutput> {
    return de_GetPipelineBlueprintCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
