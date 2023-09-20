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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetDataflowGraphRequest, GetDataflowGraphResponse } from "../models/models_1";
import { de_GetDataflowGraphCommand, se_GetDataflowGraphCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDataflowGraphCommand}.
 */
export interface GetDataflowGraphCommandInput extends GetDataflowGraphRequest {}
/**
 * @public
 *
 * The output of {@link GetDataflowGraphCommand}.
 */
export interface GetDataflowGraphCommandOutput extends GetDataflowGraphResponse, __MetadataBearer {}

/**
 * @public
 * <p>Transforms a Python script into a directed acyclic graph (DAG). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetDataflowGraphCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetDataflowGraphCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetDataflowGraphRequest
 *   PythonScript: "STRING_VALUE",
 * };
 * const command = new GetDataflowGraphCommand(input);
 * const response = await client.send(command);
 * // { // GetDataflowGraphResponse
 * //   DagNodes: [ // DagNodes
 * //     { // CodeGenNode
 * //       Id: "STRING_VALUE", // required
 * //       NodeType: "STRING_VALUE", // required
 * //       Args: [ // CodeGenNodeArgs // required
 * //         { // CodeGenNodeArg
 * //           Name: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //           Param: true || false,
 * //         },
 * //       ],
 * //       LineNumber: Number("int"),
 * //     },
 * //   ],
 * //   DagEdges: [ // DagEdges
 * //     { // CodeGenEdge
 * //       Source: "STRING_VALUE", // required
 * //       Target: "STRING_VALUE", // required
 * //       TargetParameter: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetDataflowGraphCommandInput - {@link GetDataflowGraphCommandInput}
 * @returns {@link GetDataflowGraphCommandOutput}
 * @see {@link GetDataflowGraphCommandInput} for command's `input` shape.
 * @see {@link GetDataflowGraphCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class GetDataflowGraphCommand extends $Command<
  GetDataflowGraphCommandInput,
  GetDataflowGraphCommandOutput,
  GlueClientResolvedConfig
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
  constructor(readonly input: GetDataflowGraphCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDataflowGraphCommandInput, GetDataflowGraphCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDataflowGraphCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetDataflowGraphCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "GetDataflowGraph",
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
  private serialize(input: GetDataflowGraphCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDataflowGraphCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDataflowGraphCommandOutput> {
    return de_GetDataflowGraphCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
