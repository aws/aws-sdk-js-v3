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

import { DescribeFeatureMetadataRequest, DescribeFeatureMetadataResponse } from "../models/models_2";
import { de_DescribeFeatureMetadataCommand, se_DescribeFeatureMetadataCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeFeatureMetadataCommand}.
 */
export interface DescribeFeatureMetadataCommandInput extends DescribeFeatureMetadataRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFeatureMetadataCommand}.
 */
export interface DescribeFeatureMetadataCommandOutput extends DescribeFeatureMetadataResponse, __MetadataBearer {}

/**
 * @public
 * <p>Shows the metadata for a feature within a feature group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeFeatureMetadataCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeFeatureMetadataCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeFeatureMetadataRequest
 *   FeatureGroupName: "STRING_VALUE", // required
 *   FeatureName: "STRING_VALUE", // required
 * };
 * const command = new DescribeFeatureMetadataCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFeatureMetadataResponse
 * //   FeatureGroupArn: "STRING_VALUE", // required
 * //   FeatureGroupName: "STRING_VALUE", // required
 * //   FeatureName: "STRING_VALUE", // required
 * //   FeatureType: "Integral" || "Fractional" || "String", // required
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   LastModifiedTime: new Date("TIMESTAMP"), // required
 * //   Description: "STRING_VALUE",
 * //   Parameters: [ // FeatureParameters
 * //     { // FeatureParameter
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeFeatureMetadataCommandInput - {@link DescribeFeatureMetadataCommandInput}
 * @returns {@link DescribeFeatureMetadataCommandOutput}
 * @see {@link DescribeFeatureMetadataCommandInput} for command's `input` shape.
 * @see {@link DescribeFeatureMetadataCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DescribeFeatureMetadataCommand extends $Command<
  DescribeFeatureMetadataCommandInput,
  DescribeFeatureMetadataCommandOutput,
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
  constructor(readonly input: DescribeFeatureMetadataCommandInput) {
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
  ): Handler<DescribeFeatureMetadataCommandInput, DescribeFeatureMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFeatureMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeFeatureMetadataCommand";
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
  private serialize(input: DescribeFeatureMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeFeatureMetadataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFeatureMetadataCommandOutput> {
    return de_DescribeFeatureMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
