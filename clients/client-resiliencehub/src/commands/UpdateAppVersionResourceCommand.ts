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

import { UpdateAppVersionResourceRequest, UpdateAppVersionResourceResponse } from "../models/models_0";
import { de_UpdateAppVersionResourceCommand, se_UpdateAppVersionResourceCommand } from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateAppVersionResourceCommand}.
 */
export interface UpdateAppVersionResourceCommandInput extends UpdateAppVersionResourceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAppVersionResourceCommand}.
 */
export interface UpdateAppVersionResourceCommandOutput extends UpdateAppVersionResourceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the resource details in the Resilience Hub application.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>This action has no effect outside Resilience Hub.</p>
 *                </li>
 *                <li>
 *                   <p>This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p>
 *                </li>
 *                <li>
 *                   <p>To update application version with new <code>physicalResourceID</code>, you must call
 *               <code>ResolveAppVersionResources</code> API.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, UpdateAppVersionResourceCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, UpdateAppVersionResourceCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const input = { // UpdateAppVersionResourceRequest
 *   appArn: "STRING_VALUE", // required
 *   resourceName: "STRING_VALUE",
 *   logicalResourceId: { // LogicalResourceId
 *     identifier: "STRING_VALUE", // required
 *     logicalStackName: "STRING_VALUE",
 *     resourceGroupName: "STRING_VALUE",
 *     terraformSourceName: "STRING_VALUE",
 *     eksSourceName: "STRING_VALUE",
 *   },
 *   physicalResourceId: "STRING_VALUE",
 *   awsRegion: "STRING_VALUE",
 *   awsAccountId: "STRING_VALUE",
 *   resourceType: "STRING_VALUE",
 *   appComponents: [ // AppComponentNameList
 *     "STRING_VALUE",
 *   ],
 *   additionalInfo: { // AdditionalInfoMap
 *     "<keys>": [ // AdditionalInfoValueList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   excluded: true || false,
 * };
 * const command = new UpdateAppVersionResourceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAppVersionResourceResponse
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
 * @param UpdateAppVersionResourceCommandInput - {@link UpdateAppVersionResourceCommandInput}
 * @returns {@link UpdateAppVersionResourceCommandOutput}
 * @see {@link UpdateAppVersionResourceCommandInput} for command's `input` shape.
 * @see {@link UpdateAppVersionResourceCommandOutput} for command's `response` shape.
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
export class UpdateAppVersionResourceCommand extends $Command<
  UpdateAppVersionResourceCommandInput,
  UpdateAppVersionResourceCommandOutput,
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
  constructor(readonly input: UpdateAppVersionResourceCommandInput) {
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
  ): Handler<UpdateAppVersionResourceCommandInput, UpdateAppVersionResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateAppVersionResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResiliencehubClient";
    const commandName = "UpdateAppVersionResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsResilienceHub",
        operation: "UpdateAppVersionResource",
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
  private serialize(input: UpdateAppVersionResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateAppVersionResourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAppVersionResourceCommandOutput> {
    return de_UpdateAppVersionResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
