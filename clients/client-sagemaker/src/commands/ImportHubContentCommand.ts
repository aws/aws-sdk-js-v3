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

import { ImportHubContentRequest, ImportHubContentResponse } from "../models/models_3";
import { de_ImportHubContentCommand, se_ImportHubContentCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ImportHubContentCommand}.
 */
export interface ImportHubContentCommandInput extends ImportHubContentRequest {}
/**
 * @public
 *
 * The output of {@link ImportHubContentCommand}.
 */
export interface ImportHubContentCommandOutput extends ImportHubContentResponse, __MetadataBearer {}

/**
 * @public
 * <p>Import hub content.</p>
 *          <note>
 *             <p>Hub APIs are only callable through SageMaker Studio.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ImportHubContentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ImportHubContentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ImportHubContentRequest
 *   HubContentName: "STRING_VALUE", // required
 *   HubContentVersion: "STRING_VALUE",
 *   HubContentType: "Model" || "Notebook", // required
 *   DocumentSchemaVersion: "STRING_VALUE", // required
 *   HubName: "STRING_VALUE", // required
 *   HubContentDisplayName: "STRING_VALUE",
 *   HubContentDescription: "STRING_VALUE",
 *   HubContentMarkdown: "STRING_VALUE",
 *   HubContentDocument: "STRING_VALUE", // required
 *   HubContentSearchKeywords: [ // HubContentSearchKeywordList
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new ImportHubContentCommand(input);
 * const response = await client.send(command);
 * // { // ImportHubContentResponse
 * //   HubArn: "STRING_VALUE", // required
 * //   HubContentArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ImportHubContentCommandInput - {@link ImportHubContentCommandInput}
 * @returns {@link ImportHubContentCommandOutput}
 * @see {@link ImportHubContentCommandInput} for command's `input` shape.
 * @see {@link ImportHubContentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class ImportHubContentCommand extends $Command<
  ImportHubContentCommandInput,
  ImportHubContentCommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: ImportHubContentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportHubContentCommandInput, ImportHubContentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ImportHubContentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ImportHubContentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "ImportHubContent",
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
  private serialize(input: ImportHubContentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ImportHubContentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportHubContentCommandOutput> {
    return de_ImportHubContentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
