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

import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { GetFilterRequest, GetFilterResponse } from "../models/models_0";
import { de_GetFilterCommand, se_GetFilterCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetFilterCommand}.
 */
export interface GetFilterCommandInput extends GetFilterRequest {}
/**
 * @public
 *
 * The output of {@link GetFilterCommand}.
 */
export interface GetFilterCommandOutput extends GetFilterResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the details of the filter specified by the filter name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetFilterCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetFilterCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const input = { // GetFilterRequest
 *   DetectorId: "STRING_VALUE", // required
 *   FilterName: "STRING_VALUE", // required
 * };
 * const command = new GetFilterCommand(input);
 * const response = await client.send(command);
 * // { // GetFilterResponse
 * //   Name: "STRING_VALUE", // required
 * //   Description: "STRING_VALUE",
 * //   Action: "NOOP" || "ARCHIVE", // required
 * //   Rank: Number("int"),
 * //   FindingCriteria: { // FindingCriteria
 * //     Criterion: { // Criterion
 * //       "<keys>": { // Condition
 * //         Eq: [ // Eq
 * //           "STRING_VALUE",
 * //         ],
 * //         Neq: [ // Neq
 * //           "STRING_VALUE",
 * //         ],
 * //         Gt: Number("int"),
 * //         Gte: Number("int"),
 * //         Lt: Number("int"),
 * //         Lte: Number("int"),
 * //         Equals: [ // Equals
 * //           "STRING_VALUE",
 * //         ],
 * //         NotEquals: [ // NotEquals
 * //           "STRING_VALUE",
 * //         ],
 * //         GreaterThan: Number("long"),
 * //         GreaterThanOrEqual: Number("long"),
 * //         LessThan: Number("long"),
 * //         LessThanOrEqual: Number("long"),
 * //       },
 * //     },
 * //   },
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetFilterCommandInput - {@link GetFilterCommandInput}
 * @returns {@link GetFilterCommandOutput}
 * @see {@link GetFilterCommandInput} for command's `input` shape.
 * @see {@link GetFilterCommandOutput} for command's `response` shape.
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
export class GetFilterCommand extends $Command<
  GetFilterCommandInput,
  GetFilterCommandOutput,
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
  constructor(readonly input: GetFilterCommandInput) {
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
  ): Handler<GetFilterCommandInput, GetFilterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetFilterCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "GetFilterCommand";
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
  private serialize(input: GetFilterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetFilterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFilterCommandOutput> {
    return de_GetFilterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
