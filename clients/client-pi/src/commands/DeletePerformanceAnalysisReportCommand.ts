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

import { DeletePerformanceAnalysisReportRequest, DeletePerformanceAnalysisReportResponse } from "../models/models_0";
import { PIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PIClient";
import {
  de_DeletePerformanceAnalysisReportCommand,
  se_DeletePerformanceAnalysisReportCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeletePerformanceAnalysisReportCommand}.
 */
export interface DeletePerformanceAnalysisReportCommandInput extends DeletePerformanceAnalysisReportRequest {}
/**
 * @public
 *
 * The output of {@link DeletePerformanceAnalysisReportCommand}.
 */
export interface DeletePerformanceAnalysisReportCommandOutput
  extends DeletePerformanceAnalysisReportResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes a performance analysis report.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PIClient, DeletePerformanceAnalysisReportCommand } from "@aws-sdk/client-pi"; // ES Modules import
 * // const { PIClient, DeletePerformanceAnalysisReportCommand } = require("@aws-sdk/client-pi"); // CommonJS import
 * const client = new PIClient(config);
 * const input = { // DeletePerformanceAnalysisReportRequest
 *   ServiceType: "RDS" || "DOCDB", // required
 *   Identifier: "STRING_VALUE", // required
 *   AnalysisReportId: "STRING_VALUE", // required
 * };
 * const command = new DeletePerformanceAnalysisReportCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePerformanceAnalysisReportCommandInput - {@link DeletePerformanceAnalysisReportCommandInput}
 * @returns {@link DeletePerformanceAnalysisReportCommandOutput}
 * @see {@link DeletePerformanceAnalysisReportCommandInput} for command's `input` shape.
 * @see {@link DeletePerformanceAnalysisReportCommandOutput} for command's `response` shape.
 * @see {@link PIClientResolvedConfig | config} for PIClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>The request failed due to an unknown error.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>One of the arguments provided is invalid for this request.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>The user is not authorized to perform this request.</p>
 *
 * @throws {@link PIServiceException}
 * <p>Base exception class for all service exceptions from PI service.</p>
 *
 */
export class DeletePerformanceAnalysisReportCommand extends $Command<
  DeletePerformanceAnalysisReportCommandInput,
  DeletePerformanceAnalysisReportCommandOutput,
  PIClientResolvedConfig
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
  constructor(readonly input: DeletePerformanceAnalysisReportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PIClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeletePerformanceAnalysisReportCommandInput, DeletePerformanceAnalysisReportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeletePerformanceAnalysisReportCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PIClient";
    const commandName = "DeletePerformanceAnalysisReportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PerformanceInsightsv20180227",
        operation: "DeletePerformanceAnalysisReport",
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
  private serialize(
    input: DeletePerformanceAnalysisReportCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DeletePerformanceAnalysisReportCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeletePerformanceAnalysisReportCommandOutput> {
    return de_DeletePerformanceAnalysisReportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
