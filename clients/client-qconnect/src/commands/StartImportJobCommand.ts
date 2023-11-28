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
  StartImportJobRequest,
  StartImportJobResponse,
  StartImportJobResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_StartImportJobCommand, se_StartImportJobCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartImportJobCommand}.
 */
export interface StartImportJobCommandInput extends StartImportJobRequest {}
/**
 * @public
 *
 * The output of {@link StartImportJobCommand}.
 */
export interface StartImportJobCommandOutput extends StartImportJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Start an asynchronous job to import Amazon Q resources from an uploaded source file. Before calling this API, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a> to
 *       upload an asset that contains the resource data.</p>
 *          <ul>
 *             <li>
 *                <p>For importing Amazon Q quick responses, you need to upload a csv file including the quick responses. For information about how to format the csv file for importing quick responses, see <a href="https://docs.aws.amazon.com/console/connect/quick-responses/add-data">Import quick responses</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, StartImportJobCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, StartImportJobCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * const client = new QConnectClient(config);
 * const input = { // StartImportJobRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   importJobType: "STRING_VALUE", // required
 *   uploadId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   metadata: { // ContentMetadata
 *     "<keys>": "STRING_VALUE",
 *   },
 *   externalSourceConfiguration: { // ExternalSourceConfiguration
 *     source: "STRING_VALUE", // required
 *     configuration: { // Configuration Union: only one key present
 *       connectConfiguration: { // ConnectConfiguration
 *         instanceId: "STRING_VALUE",
 *       },
 *     },
 *   },
 * };
 * const command = new StartImportJobCommand(input);
 * const response = await client.send(command);
 * // { // StartImportJobResponse
 * //   importJob: { // ImportJobData
 * //     importJobId: "STRING_VALUE", // required
 * //     knowledgeBaseId: "STRING_VALUE", // required
 * //     uploadId: "STRING_VALUE", // required
 * //     knowledgeBaseArn: "STRING_VALUE", // required
 * //     importJobType: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     url: "STRING_VALUE", // required
 * //     failedRecordReport: "STRING_VALUE",
 * //     urlExpiry: new Date("TIMESTAMP"), // required
 * //     createdTime: new Date("TIMESTAMP"), // required
 * //     lastModifiedTime: new Date("TIMESTAMP"), // required
 * //     metadata: { // ContentMetadata
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     externalSourceConfiguration: { // ExternalSourceConfiguration
 * //       source: "STRING_VALUE", // required
 * //       configuration: { // Configuration Union: only one key present
 * //         connectConfiguration: { // ConnectConfiguration
 * //           instanceId: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param StartImportJobCommandInput - {@link StartImportJobCommandInput}
 * @returns {@link StartImportJobCommandOutput}
 * @see {@link StartImportJobCommandInput} for command's `input` shape.
 * @see {@link StartImportJobCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *       resource. For example, if you're using a <code>Create</code> API (such as
 *         <code>CreateAssistant</code>) that accepts name, a conflicting resource (usually with the
 *       same name) is being created or mutated.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You've exceeded your service quota. To perform the requested action, remove some of the
 *       relevant resources, or use service quotas to request a service quota increase.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
 */
export class StartImportJobCommand extends $Command<
  StartImportJobCommandInput,
  StartImportJobCommandOutput,
  QConnectClientResolvedConfig
> {
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
  constructor(readonly input: StartImportJobCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartImportJobCommandInput, StartImportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartImportJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QConnectClient";
    const commandName = "StartImportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: StartImportJobResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "WisdomService",
        operation: "StartImportJob",
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
  private serialize(input: StartImportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartImportJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartImportJobCommandOutput> {
    return de_StartImportJobCommand(output, context);
  }
}
