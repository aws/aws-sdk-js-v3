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

import {
  MigrationHubStrategyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubStrategyClient";
import { GetImportFileTaskRequest, GetImportFileTaskResponse } from "../models/models_0";
import { de_GetImportFileTaskCommand, se_GetImportFileTaskCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetImportFileTaskCommand}.
 */
export interface GetImportFileTaskCommandInput extends GetImportFileTaskRequest {}
/**
 * @public
 *
 * The output of {@link GetImportFileTaskCommand}.
 */
export interface GetImportFileTaskCommandOutput extends GetImportFileTaskResponse, __MetadataBearer {}

/**
 * @public
 * <p> Retrieves the details about a specific import task. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, GetImportFileTaskCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, GetImportFileTaskCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * const client = new MigrationHubStrategyClient(config);
 * const input = { // GetImportFileTaskRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetImportFileTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetImportFileTaskResponse
 * //   id: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   startTime: new Date("TIMESTAMP"),
 * //   inputS3Bucket: "STRING_VALUE",
 * //   inputS3Key: "STRING_VALUE",
 * //   statusReportS3Bucket: "STRING_VALUE",
 * //   statusReportS3Key: "STRING_VALUE",
 * //   completionTime: new Date("TIMESTAMP"),
 * //   numberOfRecordsSuccess: Number("int"),
 * //   numberOfRecordsFailed: Number("int"),
 * //   importName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetImportFileTaskCommandInput - {@link GetImportFileTaskCommandInput}
 * @returns {@link GetImportFileTaskCommandOutput}
 * @see {@link GetImportFileTaskCommandInput} for command's `input` shape.
 * @see {@link GetImportFileTaskCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> The user does not have permission to perform the action. Check the
 *       AWS Identity and Access Management (IAM) policy associated with this user.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The server experienced an internal error. Try again. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified ID in the request is not found. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request body isn't valid. </p>
 *
 * @throws {@link MigrationHubStrategyServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubStrategy service.</p>
 *
 */
export class GetImportFileTaskCommand extends $Command<
  GetImportFileTaskCommandInput,
  GetImportFileTaskCommandOutput,
  MigrationHubStrategyClientResolvedConfig
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
  constructor(readonly input: GetImportFileTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubStrategyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetImportFileTaskCommandInput, GetImportFileTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetImportFileTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubStrategyClient";
    const commandName = "GetImportFileTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSMigrationHubStrategyRecommendation",
        operation: "GetImportFileTask",
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
  private serialize(input: GetImportFileTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetImportFileTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetImportFileTaskCommandOutput> {
    return de_GetImportFileTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
