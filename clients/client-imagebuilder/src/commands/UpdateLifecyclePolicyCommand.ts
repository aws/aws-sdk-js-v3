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
import { UpdateLifecyclePolicyRequest, UpdateLifecyclePolicyResponse } from "../models/models_0";
import { de_UpdateLifecyclePolicyCommand, se_UpdateLifecyclePolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateLifecyclePolicyCommand}.
 */
export interface UpdateLifecyclePolicyCommandInput extends UpdateLifecyclePolicyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLifecyclePolicyCommand}.
 */
export interface UpdateLifecyclePolicyCommandOutput extends UpdateLifecyclePolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Update the specified lifecycle policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, UpdateLifecyclePolicyCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, UpdateLifecyclePolicyCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const input = { // UpdateLifecyclePolicyRequest
 *   lifecyclePolicyArn: "STRING_VALUE", // required
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
 *   clientToken: "STRING_VALUE", // required
 * };
 * const command = new UpdateLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * // { // UpdateLifecyclePolicyResponse
 * //   lifecyclePolicyArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateLifecyclePolicyCommandInput - {@link UpdateLifecyclePolicyCommandInput}
 * @returns {@link UpdateLifecyclePolicyCommandOutput}
 * @see {@link UpdateLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateLifecyclePolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>You have specified two or more mutually exclusive parameters. Review the error message
 * 			for details.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You have requested an action that that the service doesn't support.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource that you are trying to operate on is currently in use. Review the message
 * 			details and retry later.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>This exception is thrown when the service encounters an unrecoverable
 * 			exception.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 */
export class UpdateLifecyclePolicyCommand extends $Command<
  UpdateLifecyclePolicyCommandInput,
  UpdateLifecyclePolicyCommandOutput,
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
  constructor(readonly input: UpdateLifecyclePolicyCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ImagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateLifecyclePolicyCommandInput, UpdateLifecyclePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateLifecyclePolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "UpdateLifecyclePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "imagebuilder",
        operation: "UpdateLifecyclePolicy",
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
  private serialize(input: UpdateLifecyclePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateLifecyclePolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateLifecyclePolicyCommandOutput> {
    return de_UpdateLifecyclePolicyCommand(output, context);
  }
}
