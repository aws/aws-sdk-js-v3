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

import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import {
  StartQueryPlanningRequest,
  StartQueryPlanningRequestFilterSensitiveLog,
  StartQueryPlanningResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1StartQueryPlanningCommand,
  serializeAws_restJson1StartQueryPlanningCommand,
} from "../protocols/Aws_restJson1";

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
 * const input = {
 *   QueryPlanningContext: {
 *     CatalogId: "STRING_VALUE",
 *     DatabaseName: "STRING_VALUE", // required
 *     QueryAsOfTime: new Date("TIMESTAMP"),
 *     QueryParameters: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *     TransactionId: "STRING_VALUE",
 *   },
 *   QueryString: "STRING_VALUE", // required
 * };
 * const command = new StartQueryPlanningCommand(input);
 * const response = await client.send(command);
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
    return serializeAws_restJson1StartQueryPlanningCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartQueryPlanningCommandOutput> {
    return deserializeAws_restJson1StartQueryPlanningCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
