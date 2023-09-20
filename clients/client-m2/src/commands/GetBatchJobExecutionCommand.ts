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
import { GetBatchJobExecutionRequest, GetBatchJobExecutionResponse } from "../models/models_0";
import { de_GetBatchJobExecutionCommand, se_GetBatchJobExecutionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBatchJobExecutionCommand}.
 */
export interface GetBatchJobExecutionCommandInput extends GetBatchJobExecutionRequest {}
/**
 * @public
 *
 * The output of {@link GetBatchJobExecutionCommand}.
 */
export interface GetBatchJobExecutionCommandOutput extends GetBatchJobExecutionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the details of a specific batch job execution for a specific application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, GetBatchJobExecutionCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, GetBatchJobExecutionCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * const client = new M2Client(config);
 * const input = { // GetBatchJobExecutionRequest
 *   applicationId: "STRING_VALUE", // required
 *   executionId: "STRING_VALUE", // required
 * };
 * const command = new GetBatchJobExecutionCommand(input);
 * const response = await client.send(command);
 * // { // GetBatchJobExecutionResponse
 * //   executionId: "STRING_VALUE", // required
 * //   applicationId: "STRING_VALUE", // required
 * //   jobId: "STRING_VALUE",
 * //   jobName: "STRING_VALUE",
 * //   jobUser: "STRING_VALUE",
 * //   jobType: "STRING_VALUE",
 * //   status: "STRING_VALUE", // required
 * //   startTime: new Date("TIMESTAMP"), // required
 * //   endTime: new Date("TIMESTAMP"),
 * //   statusReason: "STRING_VALUE",
 * //   returnCode: "STRING_VALUE",
 * //   batchJobIdentifier: { // BatchJobIdentifier Union: only one key present
 * //     fileBatchJobIdentifier: { // FileBatchJobIdentifier
 * //       fileName: "STRING_VALUE", // required
 * //       folderPath: "STRING_VALUE",
 * //     },
 * //     scriptBatchJobIdentifier: { // ScriptBatchJobIdentifier
 * //       scriptName: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBatchJobExecutionCommandInput - {@link GetBatchJobExecutionCommandInput}
 * @returns {@link GetBatchJobExecutionCommandOutput}
 * @see {@link GetBatchJobExecutionCommandInput} for command's `input` shape.
 * @see {@link GetBatchJobExecutionCommandOutput} for command's `response` shape.
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
export class GetBatchJobExecutionCommand extends $Command<
  GetBatchJobExecutionCommandInput,
  GetBatchJobExecutionCommandOutput,
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
  constructor(readonly input: GetBatchJobExecutionCommandInput) {
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
  ): Handler<GetBatchJobExecutionCommandInput, GetBatchJobExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBatchJobExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "M2Client";
    const commandName = "GetBatchJobExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsSupernovaControlPlaneService",
        operation: "GetBatchJobExecution",
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
  private serialize(input: GetBatchJobExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetBatchJobExecutionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBatchJobExecutionCommandOutput> {
    return de_GetBatchJobExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
