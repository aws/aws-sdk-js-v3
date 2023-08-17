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
  InvokeScreenAutomationRequest,
  InvokeScreenAutomationRequestFilterSensitiveLog,
  InvokeScreenAutomationResult,
} from "../models/models_0";
import { de_InvokeScreenAutomationCommand, se_InvokeScreenAutomationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link InvokeScreenAutomationCommand}.
 */
export interface InvokeScreenAutomationCommandInput extends InvokeScreenAutomationRequest {}
/**
 * @public
 *
 * The output of {@link InvokeScreenAutomationCommand}.
 */
export interface InvokeScreenAutomationCommandOutput extends InvokeScreenAutomationResult, __MetadataBearer {}

/**
 * @public
 * <p>
 *             The InvokeScreenAutomation API allows invoking an action defined in a screen in a Honeycode app.
 *             The API allows setting local variables, which can then be used in the automation being invoked.
 *             This allows automating the Honeycode app interactions to write, update or delete data in the workbook.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, InvokeScreenAutomationCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, InvokeScreenAutomationCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const input = { // InvokeScreenAutomationRequest
 *   workbookId: "STRING_VALUE", // required
 *   appId: "STRING_VALUE", // required
 *   screenId: "STRING_VALUE", // required
 *   screenAutomationId: "STRING_VALUE", // required
 *   variables: { // VariableValueMap
 *     "<keys>": { // VariableValue
 *       rawValue: "STRING_VALUE", // required
 *     },
 *   },
 *   rowId: "STRING_VALUE",
 *   clientRequestToken: "STRING_VALUE",
 * };
 * const command = new InvokeScreenAutomationCommand(input);
 * const response = await client.send(command);
 * // { // InvokeScreenAutomationResult
 * //   workbookCursor: Number("long"), // required
 * // };
 *
 * ```
 *
 * @param InvokeScreenAutomationCommandInput - {@link InvokeScreenAutomationCommandInput}
 * @returns {@link InvokeScreenAutomationCommandOutput}
 * @see {@link InvokeScreenAutomationCommandInput} for command's `input` shape.
 * @see {@link InvokeScreenAutomationCommandOutput} for command's `response` shape.
 * @see {@link HoneycodeClientResolvedConfig | config} for HoneycodeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>
 *             You do not have sufficient access to perform this action. Check that the workbook is owned by you and your
 *             IAM policy allows access to the resource in the request.
 *         </p>
 *
 * @throws {@link AutomationExecutionException} (client fault)
 *  <p>The automation execution did not end successfully.</p>
 *
 * @throws {@link AutomationExecutionTimeoutException} (server fault)
 *  <p>The automation execution timed out.</p>
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>
 *             The request caused service quota to be breached.
 *         </p>
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
export class InvokeScreenAutomationCommand extends $Command<
  InvokeScreenAutomationCommandInput,
  InvokeScreenAutomationCommandOutput,
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
  constructor(readonly input: InvokeScreenAutomationCommandInput) {
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
  ): Handler<InvokeScreenAutomationCommandInput, InvokeScreenAutomationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, InvokeScreenAutomationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HoneycodeClient";
    const commandName = "InvokeScreenAutomationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InvokeScreenAutomationRequestFilterSensitiveLog,
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
  private serialize(input: InvokeScreenAutomationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_InvokeScreenAutomationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InvokeScreenAutomationCommandOutput> {
    return de_InvokeScreenAutomationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
