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

import { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import { GetDataSetImportTaskRequest, GetDataSetImportTaskResponse } from "../models/models_0";
import { de_GetDataSetImportTaskCommand, se_GetDataSetImportTaskCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDataSetImportTaskCommand}.
 */
export interface GetDataSetImportTaskCommandInput extends GetDataSetImportTaskRequest {}
/**
 * @public
 *
 * The output of {@link GetDataSetImportTaskCommand}.
 */
export interface GetDataSetImportTaskCommandOutput extends GetDataSetImportTaskResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the status of a data set import task initiated with the <a>CreateDataSetImportTask</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, GetDataSetImportTaskCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, GetDataSetImportTaskCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * const client = new M2Client(config);
 * const input = { // GetDataSetImportTaskRequest
 *   applicationId: "STRING_VALUE", // required
 *   taskId: "STRING_VALUE", // required
 * };
 * const command = new GetDataSetImportTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetDataSetImportTaskResponse
 * //   taskId: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   summary: { // DataSetImportSummary
 * //     total: Number("int"), // required
 * //     succeeded: Number("int"), // required
 * //     failed: Number("int"), // required
 * //     pending: Number("int"), // required
 * //     inProgress: Number("int"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDataSetImportTaskCommandInput - {@link GetDataSetImportTaskCommandInput}
 * @returns {@link GetDataSetImportTaskCommandOutput}
 * @see {@link GetDataSetImportTaskCommandInput} for command's `input` shape.
 * @see {@link GetDataSetImportTaskCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The account or role doesn't have the right permissions to make the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests made exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameters provided in the request is not valid.</p>
 *
 * @throws {@link M2ServiceException}
 * <p>Base exception class for all service exceptions from M2 service.</p>
 *
 */
export class GetDataSetImportTaskCommand extends $Command<
  GetDataSetImportTaskCommandInput,
  GetDataSetImportTaskCommandOutput,
  M2ClientResolvedConfig
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
  constructor(readonly input: GetDataSetImportTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: M2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDataSetImportTaskCommandInput, GetDataSetImportTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDataSetImportTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "M2Client";
    const commandName = "GetDataSetImportTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsSupernovaControlPlaneService",
        operation: "GetDataSetImportTask",
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
  private serialize(input: GetDataSetImportTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDataSetImportTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDataSetImportTaskCommandOutput> {
    return de_GetDataSetImportTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
