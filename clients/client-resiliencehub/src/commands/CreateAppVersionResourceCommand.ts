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

import { CreateAppVersionResourceRequest, CreateAppVersionResourceResponse } from "../models/models_0";
import { de_CreateAppVersionResourceCommand, se_CreateAppVersionResourceCommand } from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAppVersionResourceCommand}.
 */
export interface CreateAppVersionResourceCommandInput extends CreateAppVersionResourceRequest {}
/**
 * @public
 *
 * The output of {@link CreateAppVersionResourceCommand}.
 */
export interface CreateAppVersionResourceCommandOutput extends CreateAppVersionResourceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Adds a resource to the Resilience Hub application and assigns it to the specified
 *       Application Components. If you specify a new Application Component, Resilience Hub will automatically
 *       create the Application Component.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>This action has no effect outside Resilience Hub.</p>
 *                </li>
 *                <li>
 *                   <p>This API updates the Resilience Hub application draft version. To use this resource
 *             for running resiliency assessments, you must publish the Resilience Hub application using
 *             the <code>PublishAppVersion</code> API.</p>
 *                </li>
 *                <li>
 *                   <p>To update application version with new <code>physicalResourceID</code>, you must
 *             call <code>ResolveAppVersionResources</code> API.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, CreateAppVersionResourceCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, CreateAppVersionResourceCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const input = { // CreateAppVersionResourceRequest
 *   appArn: "STRING_VALUE", // required
 *   resourceName: "STRING_VALUE",
 *   logicalResourceId: { // LogicalResourceId
 *     identifier: "STRING_VALUE", // required
 *     logicalStackName: "STRING_VALUE",
 *     resourceGroupName: "STRING_VALUE",
 *     terraformSourceName: "STRING_VALUE",
 *     eksSourceName: "STRING_VALUE",
 *   },
 *   physicalResourceId: "STRING_VALUE", // required
 *   awsRegion: "STRING_VALUE",
 *   awsAccountId: "STRING_VALUE",
 *   resourceType: "STRING_VALUE", // required
 *   appComponents: [ // AppComponentNameList // required
 *     "STRING_VALUE",
 *   ],
 *   additionalInfo: { // AdditionalInfoMap
 *     "<keys>": [ // AdditionalInfoValueList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateAppVersionResourceCommand(input);
 * const response = await client.send(command);
 * // { // CreateAppVersionResourceResponse
 * //   appArn: "STRING_VALUE", // required
 * //   appVersion: "STRING_VALUE", // required
 * //   physicalResource: { // PhysicalResource
 * //     resourceName: "STRING_VALUE",
 * //     logicalResourceId: { // LogicalResourceId
 * //       identifier: "STRING_VALUE", // required
 * //       logicalStackName: "STRING_VALUE",
 * //       resourceGroupName: "STRING_VALUE",
 * //       terraformSourceName: "STRING_VALUE",
 * //       eksSourceName: "STRING_VALUE",
 * //     },
 * //     physicalResourceId: { // PhysicalResourceId
 * //       identifier: "STRING_VALUE", // required
 * //       type: "STRING_VALUE", // required
 * //       awsRegion: "STRING_VALUE",
 * //       awsAccountId: "STRING_VALUE",
 * //     },
 * //     resourceType: "STRING_VALUE", // required
 * //     appComponents: [ // AppComponentList
 * //       { // AppComponent
 * //         name: "STRING_VALUE", // required
 * //         type: "STRING_VALUE", // required
 * //         id: "STRING_VALUE",
 * //         additionalInfo: { // AdditionalInfoMap
 * //           "<keys>": [ // AdditionalInfoValueList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     ],
 * //     additionalInfo: {
 * //       "<keys>": [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     excluded: true || false,
 * //     sourceType: "STRING_VALUE",
 * //     parentResourceName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateAppVersionResourceCommandInput - {@link CreateAppVersionResourceCommandInput}
 * @returns {@link CreateAppVersionResourceCommandOutput}
 * @see {@link CreateAppVersionResourceCommandInput} for command's `input` shape.
 * @see {@link CreateAppVersionResourceCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception occurs when a conflict with a previous successful write is detected. This generally occurs
 *       when the previous write did not have time to propagate to the host serving the current
 *       request. A retry (with appropriate backoff logic) is the recommended response to this
 *       exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception occurs when the specified resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This exception occurs when you have exceeded your service quota. To perform the requested action, remove some of the
 *       relevant resources, or use Service Quotas to request a service quota increase.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 */
export class CreateAppVersionResourceCommand extends $Command<
  CreateAppVersionResourceCommandInput,
  CreateAppVersionResourceCommandOutput,
  ResiliencehubClientResolvedConfig
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
  constructor(readonly input: CreateAppVersionResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResiliencehubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAppVersionResourceCommandInput, CreateAppVersionResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAppVersionResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResiliencehubClient";
    const commandName = "CreateAppVersionResourceCommand";
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
  private serialize(input: CreateAppVersionResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateAppVersionResourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAppVersionResourceCommandOutput> {
    return de_CreateAppVersionResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
