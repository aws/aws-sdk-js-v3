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

import { GetAppMonitorDataRequest, GetAppMonitorDataResponse } from "../models/models_0";
import { de_GetAppMonitorDataCommand, se_GetAppMonitorDataCommand } from "../protocols/Aws_restJson1";
import { RUMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RUMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAppMonitorDataCommand}.
 */
export interface GetAppMonitorDataCommandInput extends GetAppMonitorDataRequest {}
/**
 * @public
 *
 * The output of {@link GetAppMonitorDataCommand}.
 */
export interface GetAppMonitorDataCommandOutput extends GetAppMonitorDataResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the raw performance events that RUM has collected from your web application,
 *          so that you can do your own processing or analysis of this data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, GetAppMonitorDataCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, GetAppMonitorDataCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * const client = new RUMClient(config);
 * const input = { // GetAppMonitorDataRequest
 *   Name: "STRING_VALUE", // required
 *   TimeRange: { // TimeRange
 *     After: Number("long"), // required
 *     Before: Number("long"),
 *   },
 *   Filters: [ // QueryFilters
 *     { // QueryFilter
 *       Name: "STRING_VALUE",
 *       Values: [ // QueryFilterValueList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetAppMonitorDataCommand(input);
 * const response = await client.send(command);
 * // { // GetAppMonitorDataResponse
 * //   Events: [ // EventDataList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAppMonitorDataCommandInput - {@link GetAppMonitorDataCommandInput}
 * @returns {@link GetAppMonitorDataCommandOutput}
 * @see {@link GetAppMonitorDataCommandInput} for command's `input` shape.
 * @see {@link GetAppMonitorDataCommandOutput} for command's `response` shape.
 * @see {@link RUMClientResolvedConfig | config} for RUMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exception.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the arguments for the request is not valid.</p>
 *
 * @throws {@link RUMServiceException}
 * <p>Base exception class for all service exceptions from RUM service.</p>
 *
 */
export class GetAppMonitorDataCommand extends $Command<
  GetAppMonitorDataCommandInput,
  GetAppMonitorDataCommandOutput,
  RUMClientResolvedConfig
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
  constructor(readonly input: GetAppMonitorDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RUMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAppMonitorDataCommandInput, GetAppMonitorDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAppMonitorDataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RUMClient";
    const commandName = "GetAppMonitorDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RUM",
        operation: "GetAppMonitorData",
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
  private serialize(input: GetAppMonitorDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAppMonitorDataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAppMonitorDataCommandOutput> {
    return de_GetAppMonitorDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
