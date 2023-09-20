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

import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import { ResolveComponentCandidatesRequest, ResolveComponentCandidatesResponse } from "../models/models_0";
import { de_ResolveComponentCandidatesCommand, se_ResolveComponentCandidatesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ResolveComponentCandidatesCommand}.
 */
export interface ResolveComponentCandidatesCommandInput extends ResolveComponentCandidatesRequest {}
/**
 * @public
 *
 * The output of {@link ResolveComponentCandidatesCommand}.
 */
export interface ResolveComponentCandidatesCommandOutput extends ResolveComponentCandidatesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list of components that meet the component, version, and platform requirements
 *       of a deployment. Greengrass core devices call this operation when they receive a deployment to
 *       identify the components to install.</p>
 *          <p>This operation identifies components that meet all dependency requirements for a
 *       deployment. If the requirements conflict, then this operation returns an error and the
 *       deployment fails. For example, this occurs if component <code>A</code> requires version
 *         <code>>2.0.0</code> and component <code>B</code> requires version <code><2.0.0</code>
 *       of a component dependency.</p>
 *          <p>When you specify the component candidates to resolve, IoT Greengrass compares each component's
 *       digest from the core device with the component's digest in the Amazon Web Services Cloud. If the digests
 *       don't match, then IoT Greengrass specifies to use the version from the Amazon Web Services Cloud.</p>
 *          <important>
 *             <p>To use this operation, you must use the data plane API endpoint and authenticate with an
 *         IoT device certificate. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/greengrass.html">IoT Greengrass endpoints and quotas</a>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, ResolveComponentCandidatesCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, ResolveComponentCandidatesCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const input = { // ResolveComponentCandidatesRequest
 *   platform: { // ComponentPlatform
 *     name: "STRING_VALUE",
 *     attributes: { // PlatformAttributesMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   componentCandidates: [ // ComponentCandidateList
 *     { // ComponentCandidate
 *       componentName: "STRING_VALUE",
 *       componentVersion: "STRING_VALUE",
 *       versionRequirements: { // ComponentVersionRequirementMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new ResolveComponentCandidatesCommand(input);
 * const response = await client.send(command);
 * // { // ResolveComponentCandidatesResponse
 * //   resolvedComponentVersions: [ // ResolvedComponentVersionsList
 * //     { // ResolvedComponentVersion
 * //       arn: "STRING_VALUE",
 * //       componentName: "STRING_VALUE",
 * //       componentVersion: "STRING_VALUE",
 * //       recipe: "BLOB_VALUE",
 * //       vendorGuidance: "ACTIVE" || "DISCONTINUED" || "DELETED",
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ResolveComponentCandidatesCommandInput - {@link ResolveComponentCandidatesCommandInput}
 * @returns {@link ResolveComponentCandidatesCommandOutput}
 * @see {@link ResolveComponentCandidatesCommandInput} for command's `input` shape.
 * @see {@link ResolveComponentCandidatesCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for GreengrassV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *       than one operation on the same resource at the same time.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>IoT Greengrass can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota. For example, you might have exceeded the
 *       amount of times that you can retrieve device or deployment status per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters.</p>
 *
 * @throws {@link GreengrassV2ServiceException}
 * <p>Base exception class for all service exceptions from GreengrassV2 service.</p>
 *
 */
export class ResolveComponentCandidatesCommand extends $Command<
  ResolveComponentCandidatesCommandInput,
  ResolveComponentCandidatesCommandOutput,
  GreengrassV2ClientResolvedConfig
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
  constructor(readonly input: ResolveComponentCandidatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResolveComponentCandidatesCommandInput, ResolveComponentCandidatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ResolveComponentCandidatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassV2Client";
    const commandName = "ResolveComponentCandidatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GreengrassV2",
        operation: "ResolveComponentCandidates",
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
  private serialize(input: ResolveComponentCandidatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ResolveComponentCandidatesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ResolveComponentCandidatesCommandOutput> {
    return de_ResolveComponentCandidatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
