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

import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { UpdateFilterRequest, UpdateFilterResponse } from "../models/models_1";
import { de_UpdateFilterCommand, se_UpdateFilterCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateFilterCommand}.
 */
export interface UpdateFilterCommandInput extends UpdateFilterRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFilterCommand}.
 */
export interface UpdateFilterCommandOutput extends UpdateFilterResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the filter specified by the filter name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, UpdateFilterCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, UpdateFilterCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const input = { // UpdateFilterRequest
 *   DetectorId: "STRING_VALUE", // required
 *   FilterName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Action: "NOOP" || "ARCHIVE",
 *   Rank: Number("int"),
 *   FindingCriteria: { // FindingCriteria
 *     Criterion: { // Criterion
 *       "<keys>": { // Condition
 *         Eq: [ // Eq
 *           "STRING_VALUE",
 *         ],
 *         Neq: [ // Neq
 *           "STRING_VALUE",
 *         ],
 *         Gt: Number("int"),
 *         Gte: Number("int"),
 *         Lt: Number("int"),
 *         Lte: Number("int"),
 *         Equals: [ // Equals
 *           "STRING_VALUE",
 *         ],
 *         NotEquals: [ // NotEquals
 *           "STRING_VALUE",
 *         ],
 *         GreaterThan: Number("long"),
 *         GreaterThanOrEqual: Number("long"),
 *         LessThan: Number("long"),
 *         LessThanOrEqual: Number("long"),
 *       },
 *     },
 *   },
 * };
 * const command = new UpdateFilterCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFilterResponse
 * //   Name: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateFilterCommandInput - {@link UpdateFilterCommandInput}
 * @returns {@link UpdateFilterCommandOutput}
 * @see {@link UpdateFilterCommandInput} for command's `input` shape.
 * @see {@link UpdateFilterCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A bad request exception object.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error exception object.</p>
 *
 * @throws {@link GuardDutyServiceException}
 * <p>Base exception class for all service exceptions from GuardDuty service.</p>
 *
 */
export class UpdateFilterCommand extends $Command<
  UpdateFilterCommandInput,
  UpdateFilterCommandOutput,
  GuardDutyClientResolvedConfig
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
  constructor(readonly input: UpdateFilterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateFilterCommandInput, UpdateFilterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateFilterCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "UpdateFilterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GuardDutyAPIService",
        operation: "UpdateFilter",
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
  private serialize(input: UpdateFilterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateFilterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFilterCommandOutput> {
    return de_UpdateFilterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
