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
import { StartLifecyclePolicyPreviewRequest, StartLifecyclePolicyPreviewResponse } from "../models/models_0";
import { de_StartLifecyclePolicyPreviewCommand, se_StartLifecyclePolicyPreviewCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartLifecyclePolicyPreviewCommand}.
 */
export interface StartLifecyclePolicyPreviewCommandInput extends StartLifecyclePolicyPreviewRequest {}
/**
 * @public
 *
 * The output of {@link StartLifecyclePolicyPreviewCommand}.
 */
export interface StartLifecyclePolicyPreviewCommandOutput
  extends StartLifecyclePolicyPreviewResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Starts a preview of a lifecycle policy for the specified repository. This allows you
 *             to see the results before associating the lifecycle policy with the repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, StartLifecyclePolicyPreviewCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, StartLifecyclePolicyPreviewCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const input = { // StartLifecyclePolicyPreviewRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 *   lifecyclePolicyText: "STRING_VALUE",
 * };
 * const command = new StartLifecyclePolicyPreviewCommand(input);
 * const response = await client.send(command);
 * // { // StartLifecyclePolicyPreviewResponse
 * //   registryId: "STRING_VALUE",
 * //   repositoryName: "STRING_VALUE",
 * //   lifecyclePolicyText: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartLifecyclePolicyPreviewCommandInput - {@link StartLifecyclePolicyPreviewCommandInput}
 * @returns {@link StartLifecyclePolicyPreviewCommandOutput}
 * @see {@link StartLifecyclePolicyPreviewCommandInput} for command's `input` shape.
 * @see {@link StartLifecyclePolicyPreviewCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link LifecyclePolicyNotFoundException} (client fault)
 *  <p>The lifecycle policy could not be found, and no policy is set to the
 *             repository.</p>
 *
 * @throws {@link LifecyclePolicyPreviewInProgressException} (client fault)
 *  <p>The previous lifecycle policy preview request has not completed. Wait and try
 *             again.</p>
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *  <p>The specified repository could not be found. Check the spelling of the specified
 *             repository and ensure that you are performing operations on the correct registry.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 */
export class StartLifecyclePolicyPreviewCommand extends $Command<
  StartLifecyclePolicyPreviewCommandInput,
  StartLifecyclePolicyPreviewCommandOutput,
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
  constructor(readonly input: StartLifecyclePolicyPreviewCommandInput) {
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
  ): Handler<StartLifecyclePolicyPreviewCommandInput, StartLifecyclePolicyPreviewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartLifecyclePolicyPreviewCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "StartLifecyclePolicyPreviewCommand";
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
  private serialize(input: StartLifecyclePolicyPreviewCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartLifecyclePolicyPreviewCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartLifecyclePolicyPreviewCommandOutput> {
    return de_StartLifecyclePolicyPreviewCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
