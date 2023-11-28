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

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { UpdateDataSourceRequest, UpdateDataSourceResponse } from "../models/models_0";
import { de_UpdateDataSourceCommand, se_UpdateDataSourceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateDataSourceCommand}.
 */
export interface UpdateDataSourceCommandInput extends UpdateDataSourceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDataSourceCommand}.
 */
export interface UpdateDataSourceCommandOutput extends UpdateDataSourceResponse, __MetadataBearer {}

/**
 * @public
 * Update an existing data source
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, UpdateDataSourceCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, UpdateDataSourceCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // UpdateDataSourceRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   dataSourceId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   dataSourceConfiguration: { // DataSourceConfiguration
 *     type: "S3", // required
 *     s3Configuration: { // S3DataSourceConfiguration
 *       bucketArn: "STRING_VALUE", // required
 *       inclusionPrefixes: [ // S3Prefixes
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   serverSideEncryptionConfiguration: { // ServerSideEncryptionConfiguration
 *     kmsKeyArn: "STRING_VALUE",
 *   },
 *   vectorIngestionConfiguration: { // VectorIngestionConfiguration
 *     chunkingConfiguration: { // ChunkingConfiguration
 *       chunkingStrategy: "FIXED_SIZE" || "NONE", // required
 *       fixedSizeChunkingConfiguration: { // FixedSizeChunkingConfiguration
 *         maxTokens: Number("int"), // required
 *         overlapPercentage: Number("int"), // required
 *       },
 *     },
 *   },
 * };
 * const command = new UpdateDataSourceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDataSourceResponse
 * //   dataSource: { // DataSource
 * //     knowledgeBaseId: "STRING_VALUE", // required
 * //     dataSourceId: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     status: "AVAILABLE" || "DELETING", // required
 * //     description: "STRING_VALUE",
 * //     dataSourceConfiguration: { // DataSourceConfiguration
 * //       type: "S3", // required
 * //       s3Configuration: { // S3DataSourceConfiguration
 * //         bucketArn: "STRING_VALUE", // required
 * //         inclusionPrefixes: [ // S3Prefixes
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     serverSideEncryptionConfiguration: { // ServerSideEncryptionConfiguration
 * //       kmsKeyArn: "STRING_VALUE",
 * //     },
 * //     vectorIngestionConfiguration: { // VectorIngestionConfiguration
 * //       chunkingConfiguration: { // ChunkingConfiguration
 * //         chunkingStrategy: "FIXED_SIZE" || "NONE", // required
 * //         fixedSizeChunkingConfiguration: { // FixedSizeChunkingConfiguration
 * //           maxTokens: Number("int"), // required
 * //           overlapPercentage: Number("int"), // required
 * //         },
 * //       },
 * //     },
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateDataSourceCommandInput - {@link UpdateDataSourceCommandInput}
 * @returns {@link UpdateDataSourceCommandOutput}
 * @see {@link UpdateDataSourceCommandInput} for command's `input` shape.
 * @see {@link UpdateDataSourceCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  This exception is thrown when a request is denied per access permissions
 *
 * @throws {@link ConflictException} (client fault)
 *  This exception is thrown when there is a conflict performing an operation
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown if there was an unexpected error during processing of request
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  This exception is thrown when a resource referenced by the operation does not exist
 *
 * @throws {@link ThrottlingException} (client fault)
 *  This exception is thrown when the number of requests exceeds the limit
 *
 * @throws {@link ValidationException} (client fault)
 *  This exception is thrown when the request's input validation fails
 *
 * @throws {@link BedrockAgentServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgent service.</p>
 *
 */
export class UpdateDataSourceCommand extends $Command<
  UpdateDataSourceCommandInput,
  UpdateDataSourceCommandOutput,
  BedrockAgentClientResolvedConfig
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
  constructor(readonly input: UpdateDataSourceCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BedrockAgentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDataSourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BedrockAgentClient";
    const commandName = "UpdateDataSourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonBedrockAgentBuildTimeLambda",
        operation: "UpdateDataSource",
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
  private serialize(input: UpdateDataSourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateDataSourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDataSourceCommandOutput> {
    return de_UpdateDataSourceCommand(output, context);
  }
}
