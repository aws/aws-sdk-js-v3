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

import {
  MigrationHubStrategyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubStrategyClient";
import { ListImportFileTaskRequest, ListImportFileTaskResponse } from "../models/models_0";
import { de_ListImportFileTaskCommand, se_ListImportFileTaskCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListImportFileTaskCommand}.
 */
export interface ListImportFileTaskCommandInput extends ListImportFileTaskRequest {}
/**
 * @public
 *
 * The output of {@link ListImportFileTaskCommand}.
 */
export interface ListImportFileTaskCommandOutput extends ListImportFileTaskResponse, __MetadataBearer {}

/**
 * @public
 * <p> Retrieves a list of all the imports performed. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, ListImportFileTaskCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, ListImportFileTaskCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * const client = new MigrationHubStrategyClient(config);
 * const input = { // ListImportFileTaskRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListImportFileTaskCommand(input);
 * const response = await client.send(command);
 * // { // ListImportFileTaskResponse
 * //   taskInfos: [ // ListImportFileTaskInformation
 * //     { // ImportFileTaskInformation
 * //       id: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       startTime: new Date("TIMESTAMP"),
 * //       inputS3Bucket: "STRING_VALUE",
 * //       inputS3Key: "STRING_VALUE",
 * //       statusReportS3Bucket: "STRING_VALUE",
 * //       statusReportS3Key: "STRING_VALUE",
 * //       completionTime: new Date("TIMESTAMP"),
 * //       numberOfRecordsSuccess: Number("int"),
 * //       numberOfRecordsFailed: Number("int"),
 * //       importName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListImportFileTaskCommandInput - {@link ListImportFileTaskCommandInput}
 * @returns {@link ListImportFileTaskCommandOutput}
 * @see {@link ListImportFileTaskCommandInput} for command's `input` shape.
 * @see {@link ListImportFileTaskCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> The user does not have permission to perform the action. Check the
 *       AWS Identity and Access Management (IAM) policy associated with this user.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The server experienced an internal error. Try again. </p>
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
export class ListImportFileTaskCommand extends $Command<
  ListImportFileTaskCommandInput,
  ListImportFileTaskCommandOutput,
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
  constructor(readonly input: ListImportFileTaskCommandInput) {
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
  ): Handler<ListImportFileTaskCommandInput, ListImportFileTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListImportFileTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubStrategyClient";
    const commandName = "ListImportFileTaskCommand";
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
  private serialize(input: ListImportFileTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListImportFileTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListImportFileTaskCommandOutput> {
    return de_ListImportFileTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
