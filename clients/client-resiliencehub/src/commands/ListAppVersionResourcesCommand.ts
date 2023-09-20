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

import { ListAppVersionResourcesRequest, ListAppVersionResourcesResponse } from "../models/models_0";
import { de_ListAppVersionResourcesCommand, se_ListAppVersionResourcesCommand } from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAppVersionResourcesCommand}.
 */
export interface ListAppVersionResourcesCommandInput extends ListAppVersionResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListAppVersionResourcesCommand}.
 */
export interface ListAppVersionResourcesCommandOutput extends ListAppVersionResourcesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all the resources in an Resilience Hub application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, ListAppVersionResourcesCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, ListAppVersionResourcesCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const input = { // ListAppVersionResourcesRequest
 *   appArn: "STRING_VALUE", // required
 *   appVersion: "STRING_VALUE", // required
 *   resolutionId: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAppVersionResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListAppVersionResourcesResponse
 * //   physicalResources: [ // PhysicalResourceList // required
 * //     { // PhysicalResource
 * //       resourceName: "STRING_VALUE",
 * //       logicalResourceId: { // LogicalResourceId
 * //         identifier: "STRING_VALUE", // required
 * //         logicalStackName: "STRING_VALUE",
 * //         resourceGroupName: "STRING_VALUE",
 * //         terraformSourceName: "STRING_VALUE",
 * //         eksSourceName: "STRING_VALUE",
 * //       },
 * //       physicalResourceId: { // PhysicalResourceId
 * //         identifier: "STRING_VALUE", // required
 * //         type: "STRING_VALUE", // required
 * //         awsRegion: "STRING_VALUE",
 * //         awsAccountId: "STRING_VALUE",
 * //       },
 * //       resourceType: "STRING_VALUE", // required
 * //       appComponents: [ // AppComponentList
 * //         { // AppComponent
 * //           name: "STRING_VALUE", // required
 * //           type: "STRING_VALUE", // required
 * //           id: "STRING_VALUE",
 * //           additionalInfo: { // AdditionalInfoMap
 * //             "<keys>": [ // AdditionalInfoValueList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //       additionalInfo: {
 * //         "<keys>": [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       excluded: true || false,
 * //       sourceType: "STRING_VALUE",
 * //       parentResourceName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   resolutionId: "STRING_VALUE", // required
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAppVersionResourcesCommandInput - {@link ListAppVersionResourcesCommandInput}
 * @returns {@link ListAppVersionResourcesCommandOutput}
 * @see {@link ListAppVersionResourcesCommandInput} for command's `input` shape.
 * @see {@link ListAppVersionResourcesCommandOutput} for command's `response` shape.
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
export class ListAppVersionResourcesCommand extends $Command<
  ListAppVersionResourcesCommandInput,
  ListAppVersionResourcesCommandOutput,
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
  constructor(readonly input: ListAppVersionResourcesCommandInput) {
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
  ): Handler<ListAppVersionResourcesCommandInput, ListAppVersionResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAppVersionResourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResiliencehubClient";
    const commandName = "ListAppVersionResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsResilienceHub",
        operation: "ListAppVersionResources",
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
  private serialize(input: ListAppVersionResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAppVersionResourcesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAppVersionResourcesCommandOutput> {
    return de_ListAppVersionResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
