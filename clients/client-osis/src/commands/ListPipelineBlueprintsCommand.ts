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

import { ListPipelineBlueprintsRequest, ListPipelineBlueprintsResponse } from "../models/models_0";
import { OSISClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OSISClient";
import { de_ListPipelineBlueprintsCommand, se_ListPipelineBlueprintsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListPipelineBlueprintsCommand}.
 */
export interface ListPipelineBlueprintsCommandInput extends ListPipelineBlueprintsRequest {}
/**
 * @public
 *
 * The output of {@link ListPipelineBlueprintsCommand}.
 */
export interface ListPipelineBlueprintsCommandOutput extends ListPipelineBlueprintsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list of all available blueprints for Data Prepper. For more information, see
 *    <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/creating-pipeline.html#pipeline-blueprint">Using blueprints to create a pipeline</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OSISClient, ListPipelineBlueprintsCommand } from "@aws-sdk/client-osis"; // ES Modules import
 * // const { OSISClient, ListPipelineBlueprintsCommand } = require("@aws-sdk/client-osis"); // CommonJS import
 * const client = new OSISClient(config);
 * const input = {};
 * const command = new ListPipelineBlueprintsCommand(input);
 * const response = await client.send(command);
 * // { // ListPipelineBlueprintsResponse
 * //   Blueprints: [ // PipelineBlueprintsSummaryList
 * //     { // PipelineBlueprintSummary
 * //       BlueprintName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPipelineBlueprintsCommandInput - {@link ListPipelineBlueprintsCommandInput}
 * @returns {@link ListPipelineBlueprintsCommandOutput}
 * @see {@link ListPipelineBlueprintsCommandInput} for command's `input` shape.
 * @see {@link ListPipelineBlueprintsCommandOutput} for command's `response` shape.
 * @see {@link OSISClientResolvedConfig | config} for OSISClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to access the resource.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>The request failed because of an unknown error, exception, or failure (the failure is
 *    internal to the service).</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>An invalid pagination token provided in the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for missing or invalid input fields.</p>
 *
 * @throws {@link OSISServiceException}
 * <p>Base exception class for all service exceptions from OSIS service.</p>
 *
 */
export class ListPipelineBlueprintsCommand extends $Command<
  ListPipelineBlueprintsCommandInput,
  ListPipelineBlueprintsCommandOutput,
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
  constructor(readonly input: ListPipelineBlueprintsCommandInput) {
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
  ): Handler<ListPipelineBlueprintsCommandInput, ListPipelineBlueprintsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPipelineBlueprintsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OSISClient";
    const commandName = "ListPipelineBlueprintsCommand";
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
  private serialize(input: ListPipelineBlueprintsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListPipelineBlueprintsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPipelineBlueprintsCommandOutput> {
    return de_ListPipelineBlueprintsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
