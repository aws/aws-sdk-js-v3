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

import { DescribeArtifactRequest, DescribeArtifactResponse } from "../models/models_2";
import { de_DescribeArtifactCommand, se_DescribeArtifactCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeArtifactCommand}.
 */
export interface DescribeArtifactCommandInput extends DescribeArtifactRequest {}
/**
 * @public
 *
 * The output of {@link DescribeArtifactCommand}.
 */
export interface DescribeArtifactCommandOutput extends DescribeArtifactResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes an artifact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeArtifactCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeArtifactCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeArtifactRequest
 *   ArtifactArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeArtifactCommand(input);
 * const response = await client.send(command);
 * // { // DescribeArtifactResponse
 * //   ArtifactName: "STRING_VALUE",
 * //   ArtifactArn: "STRING_VALUE",
 * //   Source: { // ArtifactSource
 * //     SourceUri: "STRING_VALUE", // required
 * //     SourceTypes: [ // ArtifactSourceTypes
 * //       { // ArtifactSourceType
 * //         SourceIdType: "MD5Hash" || "S3ETag" || "S3Version" || "Custom", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   ArtifactType: "STRING_VALUE",
 * //   Properties: { // LineageEntityParameters
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   CreatedBy: { // UserContext
 * //     UserProfileArn: "STRING_VALUE",
 * //     UserProfileName: "STRING_VALUE",
 * //     DomainId: "STRING_VALUE",
 * //     IamIdentity: { // IamIdentity
 * //       Arn: "STRING_VALUE",
 * //       PrincipalId: "STRING_VALUE",
 * //       SourceIdentity: "STRING_VALUE",
 * //     },
 * //   },
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   LastModifiedBy: {
 * //     UserProfileArn: "STRING_VALUE",
 * //     UserProfileName: "STRING_VALUE",
 * //     DomainId: "STRING_VALUE",
 * //     IamIdentity: {
 * //       Arn: "STRING_VALUE",
 * //       PrincipalId: "STRING_VALUE",
 * //       SourceIdentity: "STRING_VALUE",
 * //     },
 * //   },
 * //   MetadataProperties: { // MetadataProperties
 * //     CommitId: "STRING_VALUE",
 * //     Repository: "STRING_VALUE",
 * //     GeneratedBy: "STRING_VALUE",
 * //     ProjectId: "STRING_VALUE",
 * //   },
 * //   LineageGroupArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeArtifactCommandInput - {@link DescribeArtifactCommandInput}
 * @returns {@link DescribeArtifactCommandOutput}
 * @see {@link DescribeArtifactCommandInput} for command's `input` shape.
 * @see {@link DescribeArtifactCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DescribeArtifactCommand extends $Command<
  DescribeArtifactCommandInput,
  DescribeArtifactCommandOutput,
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
  constructor(readonly input: DescribeArtifactCommandInput) {
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
  ): Handler<DescribeArtifactCommandInput, DescribeArtifactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeArtifactCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeArtifactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "DescribeArtifact",
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
  private serialize(input: DescribeArtifactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeArtifactCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeArtifactCommandOutput> {
    return de_DescribeArtifactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
