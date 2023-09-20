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

import { CreateArtifactRequest, CreateArtifactResponse } from "../models/models_0";
import { de_CreateArtifactCommand, se_CreateArtifactCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateArtifactCommand}.
 */
export interface CreateArtifactCommandInput extends CreateArtifactRequest {}
/**
 * @public
 *
 * The output of {@link CreateArtifactCommand}.
 */
export interface CreateArtifactCommandOutput extends CreateArtifactResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an <i>artifact</i>. An artifact is a lineage tracking entity that
 *         represents a URI addressable object or data. Some examples are the S3 URI of a dataset and
 *         the ECR registry path of an image. For more information, see
 *         <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker
 *           ML Lineage Tracking</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateArtifactCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateArtifactCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreateArtifactRequest
 *   ArtifactName: "STRING_VALUE",
 *   Source: { // ArtifactSource
 *     SourceUri: "STRING_VALUE", // required
 *     SourceTypes: [ // ArtifactSourceTypes
 *       { // ArtifactSourceType
 *         SourceIdType: "MD5Hash" || "S3ETag" || "S3Version" || "Custom", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   ArtifactType: "STRING_VALUE", // required
 *   Properties: { // LineageEntityParameters
 *     "<keys>": "STRING_VALUE",
 *   },
 *   MetadataProperties: { // MetadataProperties
 *     CommitId: "STRING_VALUE",
 *     Repository: "STRING_VALUE",
 *     GeneratedBy: "STRING_VALUE",
 *     ProjectId: "STRING_VALUE",
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateArtifactCommand(input);
 * const response = await client.send(command);
 * // { // CreateArtifactResponse
 * //   ArtifactArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateArtifactCommandInput - {@link CreateArtifactCommandInput}
 * @returns {@link CreateArtifactCommandOutput}
 * @see {@link CreateArtifactCommandInput} for command's `input` shape.
 * @see {@link CreateArtifactCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class CreateArtifactCommand extends $Command<
  CreateArtifactCommandInput,
  CreateArtifactCommandOutput,
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
  constructor(readonly input: CreateArtifactCommandInput) {
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
  ): Handler<CreateArtifactCommandInput, CreateArtifactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateArtifactCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateArtifactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "CreateArtifact",
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
  private serialize(input: CreateArtifactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateArtifactCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateArtifactCommandOutput> {
    return de_CreateArtifactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
