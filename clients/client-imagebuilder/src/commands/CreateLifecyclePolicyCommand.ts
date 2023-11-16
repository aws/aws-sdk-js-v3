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

import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { CreateLifecyclePolicyRequest, CreateLifecyclePolicyResponse } from "../models/models_0";
import { de_CreateLifecyclePolicyCommand, se_CreateLifecyclePolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateLifecyclePolicyCommand}.
 */
export interface CreateLifecyclePolicyCommandInput extends CreateLifecyclePolicyRequest {}
/**
 * @public
 *
 * The output of {@link CreateLifecyclePolicyCommand}.
 */
export interface CreateLifecyclePolicyCommandOutput extends CreateLifecyclePolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Create a lifecycle policy resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CreateLifecyclePolicyCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, CreateLifecyclePolicyCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const input = { // CreateLifecyclePolicyRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   status: "DISABLED" || "ENABLED",
 *   executionRole: "STRING_VALUE", // required
 *   resourceType: "AMI_IMAGE" || "CONTAINER_IMAGE", // required
 *   policyDetails: [ // LifecyclePolicyDetails // required
 *     { // LifecyclePolicyDetail
 *       action: { // LifecyclePolicyDetailAction
 *         type: "DELETE" || "DEPRECATE" || "DISABLE", // required
 *         includeResources: { // LifecyclePolicyDetailActionIncludeResources
 *           amis: true || false,
 *           snapshots: true || false,
 *           containers: true || false,
 *         },
 *       },
 *       filter: { // LifecyclePolicyDetailFilter
 *         type: "AGE" || "COUNT", // required
 *         value: Number("int"), // required
 *         unit: "DAYS" || "WEEKS" || "MONTHS" || "YEARS",
 *         retainAtLeast: Number("int"),
 *       },
 *       exclusionRules: { // LifecyclePolicyDetailExclusionRules
 *         tagMap: { // TagMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *         amis: { // LifecyclePolicyDetailExclusionRulesAmis
 *           isPublic: true || false,
 *           regions: [ // StringList
 *             "STRING_VALUE",
 *           ],
 *           sharedAccounts: [ // AccountList
 *             "STRING_VALUE",
 *           ],
 *           lastLaunched: { // LifecyclePolicyDetailExclusionRulesAmisLastLaunched
 *             value: Number("int"), // required
 *             unit: "DAYS" || "WEEKS" || "MONTHS" || "YEARS", // required
 *           },
 *           tagMap: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *       },
 *     },
 *   ],
 *   resourceSelection: { // LifecyclePolicyResourceSelection
 *     recipes: [ // LifecyclePolicyResourceSelectionRecipes
 *       { // LifecyclePolicyResourceSelectionRecipe
 *         name: "STRING_VALUE", // required
 *         semanticVersion: "STRING_VALUE", // required
 *       },
 *     ],
 *     tagMap: "<TagMap>",
 *   },
 *   tags: "<TagMap>",
 *   clientToken: "STRING_VALUE", // required
 * };
 * const command = new CreateLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * // { // CreateLifecyclePolicyResponse
 * //   clientToken: "STRING_VALUE",
 * //   lifecyclePolicyArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLifecyclePolicyCommandInput - {@link CreateLifecyclePolicyCommandInput}
 * @returns {@link CreateLifecyclePolicyCommandOutput}
 * @see {@link CreateLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link CreateLifecyclePolicyCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 * @throws {@link CallRateLimitExceededException} (client fault)
 *  <p>You have exceeded the permitted request rate for the specific operation.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action, such as using an action or
 * 			resource on behalf of a user that doesn't have permissions to use the action or
 * 			resource, or specifying an invalid resource identifier.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>You have specified a client token for an operation using parameter values that differ
 * 			from a previous request that used the same client token.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You have requested an action that that the service doesn't support.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource that you are trying to create already exists.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource that you are trying to operate on is currently in use. Review the message
 * 			details and retry later.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>This exception is thrown when the service encounters an unrecoverable
 * 			exception.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the number of permitted resources or operations for this service.
 * 			For service quotas, see <a href="https://docs.aws.amazon.com/general/latest/gr/imagebuilder.html#limits_imagebuilder">EC2 Image Builder endpoints and
 * 				quotas</a>.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 */
export class CreateLifecyclePolicyCommand extends $Command<
  CreateLifecyclePolicyCommandInput,
  CreateLifecyclePolicyCommandOutput,
  ImagebuilderClientResolvedConfig
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
  constructor(readonly input: CreateLifecyclePolicyCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ImagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLifecyclePolicyCommandInput, CreateLifecyclePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLifecyclePolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "CreateLifecyclePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "imagebuilder",
        operation: "CreateLifecyclePolicy",
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
  private serialize(input: CreateLifecyclePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateLifecyclePolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLifecyclePolicyCommandOutput> {
    return de_CreateLifecyclePolicyCommand(output, context);
  }
}
