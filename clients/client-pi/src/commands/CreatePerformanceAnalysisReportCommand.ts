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

import { CreatePerformanceAnalysisReportRequest, CreatePerformanceAnalysisReportResponse } from "../models/models_0";
import { PIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PIClient";
import {
  de_CreatePerformanceAnalysisReportCommand,
  se_CreatePerformanceAnalysisReportCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreatePerformanceAnalysisReportCommand}.
 */
export interface CreatePerformanceAnalysisReportCommandInput extends CreatePerformanceAnalysisReportRequest {}
/**
 * @public
 *
 * The output of {@link CreatePerformanceAnalysisReportCommand}.
 */
export interface CreatePerformanceAnalysisReportCommandOutput
  extends CreatePerformanceAnalysisReportResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a new performance analysis report for a specific time period for the
 *             DB instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PIClient, CreatePerformanceAnalysisReportCommand } from "@aws-sdk/client-pi"; // ES Modules import
 * // const { PIClient, CreatePerformanceAnalysisReportCommand } = require("@aws-sdk/client-pi"); // CommonJS import
 * const client = new PIClient(config);
 * const input = { // CreatePerformanceAnalysisReportRequest
 *   ServiceType: "RDS" || "DOCDB", // required
 *   Identifier: "STRING_VALUE", // required
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreatePerformanceAnalysisReportCommand(input);
 * const response = await client.send(command);
 * // { // CreatePerformanceAnalysisReportResponse
 * //   AnalysisReportId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePerformanceAnalysisReportCommandInput - {@link CreatePerformanceAnalysisReportCommandInput}
 * @returns {@link CreatePerformanceAnalysisReportCommandOutput}
 * @see {@link CreatePerformanceAnalysisReportCommandInput} for command's `input` shape.
 * @see {@link CreatePerformanceAnalysisReportCommandOutput} for command's `response` shape.
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
export class CreatePerformanceAnalysisReportCommand extends $Command<
  CreatePerformanceAnalysisReportCommandInput,
  CreatePerformanceAnalysisReportCommandOutput,
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
  constructor(readonly input: CreatePerformanceAnalysisReportCommandInput) {
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
  ): Handler<CreatePerformanceAnalysisReportCommandInput, CreatePerformanceAnalysisReportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreatePerformanceAnalysisReportCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PIClient";
    const commandName = "CreatePerformanceAnalysisReportCommand";
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
  private serialize(
    input: CreatePerformanceAnalysisReportCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreatePerformanceAnalysisReportCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreatePerformanceAnalysisReportCommandOutput> {
    return de_CreatePerformanceAnalysisReportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
