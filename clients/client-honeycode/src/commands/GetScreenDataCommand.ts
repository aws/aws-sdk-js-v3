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

import { HoneycodeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HoneycodeClient";
import {
  GetScreenDataRequest,
  GetScreenDataRequestFilterSensitiveLog,
  GetScreenDataResult,
  GetScreenDataResultFilterSensitiveLog,
} from "../models/models_0";
import { de_GetScreenDataCommand, se_GetScreenDataCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetScreenDataCommand}.
 */
export interface GetScreenDataCommandInput extends GetScreenDataRequest {}
/**
 * @public
 *
 * The output of {@link GetScreenDataCommand}.
 */
export interface GetScreenDataCommandOutput extends GetScreenDataResult, __MetadataBearer {}

/**
 * @public
 * <p>
 *             The GetScreenData API allows retrieval of data from a screen in a Honeycode app.
 *             The API allows setting local variables in the screen to filter, sort or otherwise affect what will be
 *             displayed on the screen.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, GetScreenDataCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, GetScreenDataCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const input = { // GetScreenDataRequest
 *   workbookId: "STRING_VALUE", // required
 *   appId: "STRING_VALUE", // required
 *   screenId: "STRING_VALUE", // required
 *   variables: { // VariableValueMap
 *     "<keys>": { // VariableValue
 *       rawValue: "STRING_VALUE", // required
 *     },
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetScreenDataCommand(input);
 * const response = await client.send(command);
 * // { // GetScreenDataResult
 * //   results: { // ResultSetMap // required
 * //     "<keys>": { // ResultSet
 * //       headers: [ // ResultHeader // required
 * //         { // ColumnMetadata
 * //           name: "STRING_VALUE", // required
 * //           format: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       rows: [ // ResultRows // required
 * //         { // ResultRow
 * //           rowId: "STRING_VALUE",
 * //           dataItems: [ // DataItems // required
 * //             { // DataItem
 * //               overrideFormat: "STRING_VALUE",
 * //               rawValue: "STRING_VALUE",
 * //               formattedValue: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   workbookCursor: Number("long"), // required
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetScreenDataCommandInput - {@link GetScreenDataCommandInput}
 * @returns {@link GetScreenDataCommandOutput}
 * @see {@link GetScreenDataCommandInput} for command's `input` shape.
 * @see {@link GetScreenDataCommandOutput} for command's `response` shape.
 * @see {@link HoneycodeClientResolvedConfig | config} for HoneycodeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>
 *             You do not have sufficient access to perform this action. Check that the workbook is owned by you and your
 *             IAM policy allows access to the resource in the request.
 *         </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There were unexpected errors from the server.</p>
 *
 * @throws {@link RequestTimeoutException} (server fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A Workbook, Table, App, Screen or Screen Automation was not found with the given ID.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Remote service is unreachable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Tps(transactions per second) rate reached.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>
 *             Request is invalid. The message in the response contains details on why the request is invalid.
 *         </p>
 *
 * @throws {@link HoneycodeServiceException}
 * <p>Base exception class for all service exceptions from Honeycode service.</p>
 *
 */
export class GetScreenDataCommand extends $Command<
  GetScreenDataCommandInput,
  GetScreenDataCommandOutput,
  HoneycodeClientResolvedConfig
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
  constructor(readonly input: GetScreenDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HoneycodeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetScreenDataCommandInput, GetScreenDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetScreenDataCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HoneycodeClient";
    const commandName = "GetScreenDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetScreenDataRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetScreenDataResultFilterSensitiveLog,
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
  private serialize(input: GetScreenDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetScreenDataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetScreenDataCommandOutput> {
    return de_GetScreenDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
