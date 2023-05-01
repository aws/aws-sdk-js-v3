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

import { QueryLineageRequest, QueryLineageResponse } from "../models/models_3";
import { de_QueryLineageCommand, se_QueryLineageCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 *
 * The input for {@link QueryLineageCommand}.
 */
export interface QueryLineageCommandInput extends QueryLineageRequest {}
/**
 * @public
 *
 * The output of {@link QueryLineageCommand}.
 */
export interface QueryLineageCommandOutput extends QueryLineageResponse, __MetadataBearer {}

/**
 * @public
 * <p>Use this action to inspect your lineage and discover relationships between entities.
 *          For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/querying-lineage-entities.html">
 *             Querying Lineage Entities</a> in the <i>Amazon SageMaker Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, QueryLineageCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, QueryLineageCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // QueryLineageRequest
 *   StartArns: [ // QueryLineageStartArns
 *     "STRING_VALUE",
 *   ],
 *   Direction: "Both" || "Ascendants" || "Descendants",
 *   IncludeEdges: true || false,
 *   Filters: { // QueryFilters
 *     Types: [ // QueryTypes
 *       "STRING_VALUE",
 *     ],
 *     LineageTypes: [ // QueryLineageTypes
 *       "TrialComponent" || "Artifact" || "Context" || "Action",
 *     ],
 *     CreatedBefore: new Date("TIMESTAMP"),
 *     CreatedAfter: new Date("TIMESTAMP"),
 *     ModifiedBefore: new Date("TIMESTAMP"),
 *     ModifiedAfter: new Date("TIMESTAMP"),
 *     Properties: { // QueryProperties
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   MaxDepth: Number("int"),
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new QueryLineageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param QueryLineageCommandInput - {@link QueryLineageCommandInput}
 * @returns {@link QueryLineageCommandOutput}
 * @see {@link QueryLineageCommandInput} for command's `input` shape.
 * @see {@link QueryLineageCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 *
 */
export class QueryLineageCommand extends $Command<
  QueryLineageCommandInput,
  QueryLineageCommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: QueryLineageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<QueryLineageCommandInput, QueryLineageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, QueryLineageCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "QueryLineageCommand";
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
  private serialize(input: QueryLineageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_QueryLineageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<QueryLineageCommandOutput> {
    return de_QueryLineageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
