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

import { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient";
import { BatchCheckLayerAvailabilityRequest, BatchCheckLayerAvailabilityResponse } from "../models/models_0";
import { de_BatchCheckLayerAvailabilityCommand, se_BatchCheckLayerAvailabilityCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchCheckLayerAvailabilityCommand}.
 */
export interface BatchCheckLayerAvailabilityCommandInput extends BatchCheckLayerAvailabilityRequest {}
/**
 * @public
 *
 * The output of {@link BatchCheckLayerAvailabilityCommand}.
 */
export interface BatchCheckLayerAvailabilityCommandOutput
  extends BatchCheckLayerAvailabilityResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Checks the availability of one or more image layers that are within a repository in a
 *          public registry. When an image is pushed to a repository, each image layer is checked to
 *          verify if it has been uploaded before. If it has been uploaded, then the image layer is
 *          skipped.</p>
 *          <note>
 *             <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, BatchCheckLayerAvailabilityCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, BatchCheckLayerAvailabilityCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * const client = new ECRPUBLICClient(config);
 * const input = { // BatchCheckLayerAvailabilityRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 *   layerDigests: [ // BatchedOperationLayerDigestList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchCheckLayerAvailabilityCommand(input);
 * const response = await client.send(command);
 * // { // BatchCheckLayerAvailabilityResponse
 * //   layers: [ // LayerList
 * //     { // Layer
 * //       layerDigest: "STRING_VALUE",
 * //       layerAvailability: "AVAILABLE" || "UNAVAILABLE",
 * //       layerSize: Number("long"),
 * //       mediaType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   failures: [ // LayerFailureList
 * //     { // LayerFailure
 * //       layerDigest: "STRING_VALUE",
 * //       failureCode: "InvalidLayerDigest" || "MissingLayerDigest",
 * //       failureReason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchCheckLayerAvailabilityCommandInput - {@link BatchCheckLayerAvailabilityCommandInput}
 * @returns {@link BatchCheckLayerAvailabilityCommandOutput}
 * @see {@link BatchCheckLayerAvailabilityCommandInput} for command's `input` shape.
 * @see {@link BatchCheckLayerAvailabilityCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for ECRPUBLICClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *          request.</p>
 *
 * @throws {@link RegistryNotFoundException} (client fault)
 *  <p>The registry doesn't exist.</p>
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *  <p>The specified repository can't be found. Check the spelling of the specified repository
 *          and ensure that you're performing operations on the correct registry.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link UnsupportedCommandException} (client fault)
 *  <p>The action isn't supported in this Region.</p>
 *
 * @throws {@link ECRPUBLICServiceException}
 * <p>Base exception class for all service exceptions from ECRPUBLIC service.</p>
 *
 */
export class BatchCheckLayerAvailabilityCommand extends $Command<
  BatchCheckLayerAvailabilityCommandInput,
  BatchCheckLayerAvailabilityCommandOutput,
  ECRPUBLICClientResolvedConfig
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
  constructor(readonly input: BatchCheckLayerAvailabilityCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRPUBLICClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchCheckLayerAvailabilityCommandInput, BatchCheckLayerAvailabilityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchCheckLayerAvailabilityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRPUBLICClient";
    const commandName = "BatchCheckLayerAvailabilityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SpencerFrontendService",
        operation: "BatchCheckLayerAvailability",
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
  private serialize(input: BatchCheckLayerAvailabilityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchCheckLayerAvailabilityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchCheckLayerAvailabilityCommandOutput> {
    return de_BatchCheckLayerAvailabilityCommand(output, context);
  }
}
