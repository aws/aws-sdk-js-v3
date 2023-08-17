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

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { DescribeImageReplicationStatusRequest, DescribeImageReplicationStatusResponse } from "../models/models_0";
import {
  de_DescribeImageReplicationStatusCommand,
  se_DescribeImageReplicationStatusCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeImageReplicationStatusCommand}.
 */
export interface DescribeImageReplicationStatusCommandInput extends DescribeImageReplicationStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeImageReplicationStatusCommand}.
 */
export interface DescribeImageReplicationStatusCommandOutput
  extends DescribeImageReplicationStatusResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the replication status for a specified image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DescribeImageReplicationStatusCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DescribeImageReplicationStatusCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const input = { // DescribeImageReplicationStatusRequest
 *   repositoryName: "STRING_VALUE", // required
 *   imageId: { // ImageIdentifier
 *     imageDigest: "STRING_VALUE",
 *     imageTag: "STRING_VALUE",
 *   },
 *   registryId: "STRING_VALUE",
 * };
 * const command = new DescribeImageReplicationStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeImageReplicationStatusResponse
 * //   repositoryName: "STRING_VALUE",
 * //   imageId: { // ImageIdentifier
 * //     imageDigest: "STRING_VALUE",
 * //     imageTag: "STRING_VALUE",
 * //   },
 * //   replicationStatuses: [ // ImageReplicationStatusList
 * //     { // ImageReplicationStatus
 * //       region: "STRING_VALUE",
 * //       registryId: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       failureCode: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeImageReplicationStatusCommandInput - {@link DescribeImageReplicationStatusCommandInput}
 * @returns {@link DescribeImageReplicationStatusCommandOutput}
 * @see {@link DescribeImageReplicationStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeImageReplicationStatusCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link ImageNotFoundException} (client fault)
 *  <p>The image requested does not exist in the specified repository.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *  <p>The specified repository could not be found. Check the spelling of the specified
 *             repository and ensure that you are performing operations on the correct registry.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There was an exception validating this request.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 */
export class DescribeImageReplicationStatusCommand extends $Command<
  DescribeImageReplicationStatusCommandInput,
  DescribeImageReplicationStatusCommandOutput,
  ECRClientResolvedConfig
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
  constructor(readonly input: DescribeImageReplicationStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeImageReplicationStatusCommandInput, DescribeImageReplicationStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeImageReplicationStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "DescribeImageReplicationStatusCommand";
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
  private serialize(
    input: DescribeImageReplicationStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeImageReplicationStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeImageReplicationStatusCommandOutput> {
    return de_DescribeImageReplicationStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
