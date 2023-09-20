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

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { GetCalculationExecutionRequest, GetCalculationExecutionResponse } from "../models/models_0";
import { de_GetCalculationExecutionCommand, se_GetCalculationExecutionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCalculationExecutionCommand}.
 */
export interface GetCalculationExecutionCommandInput extends GetCalculationExecutionRequest {}
/**
 * @public
 *
 * The output of {@link GetCalculationExecutionCommand}.
 */
export interface GetCalculationExecutionCommandOutput extends GetCalculationExecutionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes a previously submitted calculation execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetCalculationExecutionCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetCalculationExecutionCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // GetCalculationExecutionRequest
 *   CalculationExecutionId: "STRING_VALUE", // required
 * };
 * const command = new GetCalculationExecutionCommand(input);
 * const response = await client.send(command);
 * // { // GetCalculationExecutionResponse
 * //   CalculationExecutionId: "STRING_VALUE",
 * //   SessionId: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   WorkingDirectory: "STRING_VALUE",
 * //   Status: { // CalculationStatus
 * //     SubmissionDateTime: new Date("TIMESTAMP"),
 * //     CompletionDateTime: new Date("TIMESTAMP"),
 * //     State: "CREATING" || "CREATED" || "QUEUED" || "RUNNING" || "CANCELING" || "CANCELED" || "COMPLETED" || "FAILED",
 * //     StateChangeReason: "STRING_VALUE",
 * //   },
 * //   Statistics: { // CalculationStatistics
 * //     DpuExecutionInMillis: Number("long"),
 * //     Progress: "STRING_VALUE",
 * //   },
 * //   Result: { // CalculationResult
 * //     StdOutS3Uri: "STRING_VALUE",
 * //     StdErrorS3Uri: "STRING_VALUE",
 * //     ResultS3Uri: "STRING_VALUE",
 * //     ResultType: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCalculationExecutionCommandInput - {@link GetCalculationExecutionCommandInput}
 * @returns {@link GetCalculationExecutionCommandOutput}
 * @see {@link GetCalculationExecutionCommandInput} for command's `input` shape.
 * @see {@link GetCalculationExecutionCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource, such as a workgroup, was not found.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 */
export class GetCalculationExecutionCommand extends $Command<
  GetCalculationExecutionCommandInput,
  GetCalculationExecutionCommandOutput,
  AthenaClientResolvedConfig
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
  constructor(readonly input: GetCalculationExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCalculationExecutionCommandInput, GetCalculationExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCalculationExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "GetCalculationExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonAthena",
        operation: "GetCalculationExecution",
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
  private serialize(input: GetCalculationExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetCalculationExecutionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCalculationExecutionCommandOutput> {
    return de_GetCalculationExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
