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
import { ListLifecycleExecutionResourcesRequest, ListLifecycleExecutionResourcesResponse } from "../models/models_0";
import {
  de_ListLifecycleExecutionResourcesCommand,
  se_ListLifecycleExecutionResourcesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListLifecycleExecutionResourcesCommand}.
 */
export interface ListLifecycleExecutionResourcesCommandInput extends ListLifecycleExecutionResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListLifecycleExecutionResourcesCommand}.
 */
export interface ListLifecycleExecutionResourcesCommandOutput
  extends ListLifecycleExecutionResourcesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>List resources that the runtime instance of the image lifecycle identified for lifecycle actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListLifecycleExecutionResourcesCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListLifecycleExecutionResourcesCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const input = { // ListLifecycleExecutionResourcesRequest
 *   lifecycleExecutionId: "STRING_VALUE", // required
 *   parentResourceId: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListLifecycleExecutionResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListLifecycleExecutionResourcesResponse
 * //   lifecycleExecutionId: "STRING_VALUE",
 * //   lifecycleExecutionState: { // LifecycleExecutionState
 * //     status: "IN_PROGRESS" || "CANCELLED" || "CANCELLING" || "FAILED" || "SUCCESS",
 * //     reason: "STRING_VALUE",
 * //   },
 * //   resources: [ // LifecycleExecutionResourceList
 * //     { // LifecycleExecutionResource
 * //       accountId: "STRING_VALUE",
 * //       resourceId: "STRING_VALUE",
 * //       state: { // LifecycleExecutionResourceState
 * //         status: "FAILED" || "IN_PROGRESS" || "SKIPPED" || "SUCCESS",
 * //         reason: "STRING_VALUE",
 * //       },
 * //       action: { // LifecycleExecutionResourceAction
 * //         name: "AVAILABLE" || "DELETE" || "DEPRECATE" || "DISABLE",
 * //         reason: "STRING_VALUE",
 * //       },
 * //       region: "STRING_VALUE",
 * //       snapshots: [ // LifecycleExecutionSnapshotResourceList
 * //         { // LifecycleExecutionSnapshotResource
 * //           snapshotId: "STRING_VALUE",
 * //           state: {
 * //             status: "FAILED" || "IN_PROGRESS" || "SKIPPED" || "SUCCESS",
 * //             reason: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       imageUris: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLifecycleExecutionResourcesCommandInput - {@link ListLifecycleExecutionResourcesCommandInput}
 * @returns {@link ListLifecycleExecutionResourcesCommandOutput}
 * @see {@link ListLifecycleExecutionResourcesCommandInput} for command's `input` shape.
 * @see {@link ListLifecycleExecutionResourcesCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>You have provided an invalid pagination token in your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You have requested an action that that the service doesn't support.</p>
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
export class ListLifecycleExecutionResourcesCommand extends $Command<
  ListLifecycleExecutionResourcesCommandInput,
  ListLifecycleExecutionResourcesCommandOutput,
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
  constructor(readonly input: ListLifecycleExecutionResourcesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ImagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListLifecycleExecutionResourcesCommandInput, ListLifecycleExecutionResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListLifecycleExecutionResourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "ListLifecycleExecutionResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "imagebuilder",
        operation: "ListLifecycleExecutionResources",
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
  private serialize(
    input: ListLifecycleExecutionResourcesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListLifecycleExecutionResourcesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListLifecycleExecutionResourcesCommandOutput> {
    return de_ListLifecycleExecutionResourcesCommand(output, context);
  }
}
