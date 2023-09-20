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

import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import {
  StartQueryPlanningRequest,
  StartQueryPlanningRequestFilterSensitiveLog,
  StartQueryPlanningResponse,
} from "../models/models_0";
import { de_StartQueryPlanningCommand, se_StartQueryPlanningCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartQueryPlanningCommand}.
 */
export interface StartQueryPlanningCommandInput extends StartQueryPlanningRequest {}
/**
 * @public
 *
 * The output of {@link StartQueryPlanningCommand}.
 */
export interface StartQueryPlanningCommandOutput extends StartQueryPlanningResponse, __MetadataBearer {}

/**
 * @public
 * <p>Submits a request to process a query statement.</p>
 *          <p>This operation generates work units that can be retrieved with the <code>GetWorkUnits</code> operation as soon as the query state is WORKUNITS_AVAILABLE or FINISHED.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, StartQueryPlanningCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, StartQueryPlanningCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = { // StartQueryPlanningRequest
 *   QueryPlanningContext: { // QueryPlanningContext
 *     CatalogId: "STRING_VALUE",
 *     DatabaseName: "STRING_VALUE", // required
 *     QueryAsOfTime: new Date("TIMESTAMP"),
 *     QueryParameters: { // QueryParameterMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     TransactionId: "STRING_VALUE",
 *   },
 *   QueryString: "STRING_VALUE", // required
 * };
 * const command = new StartQueryPlanningCommand(input);
 * const response = await client.send(command);
 * // { // StartQueryPlanningResponse
 * //   QueryId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartQueryPlanningCommandInput - {@link StartQueryPlanningCommandInput}
 * @returns {@link StartQueryPlanningCommandOutput}
 * @see {@link StartQueryPlanningCommandInput} for command's `input` shape.
 * @see {@link StartQueryPlanningCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>Contains details about an error where the query request was throttled.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 */
export class StartQueryPlanningCommand extends $Command<
  StartQueryPlanningCommandInput,
  StartQueryPlanningCommandOutput,
  LakeFormationClientResolvedConfig
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
  constructor(readonly input: StartQueryPlanningCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LakeFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartQueryPlanningCommandInput, StartQueryPlanningCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartQueryPlanningCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "StartQueryPlanningCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartQueryPlanningRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSLakeFormation",
        operation: "StartQueryPlanning",
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
  private serialize(input: StartQueryPlanningCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartQueryPlanningCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartQueryPlanningCommandOutput> {
    return de_StartQueryPlanningCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
