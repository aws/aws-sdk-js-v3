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

import {
  ListUnsupportedAppVersionResourcesRequest,
  ListUnsupportedAppVersionResourcesResponse,
} from "../models/models_0";
import {
  de_ListUnsupportedAppVersionResourcesCommand,
  se_ListUnsupportedAppVersionResourcesCommand,
} from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListUnsupportedAppVersionResourcesCommand}.
 */
export interface ListUnsupportedAppVersionResourcesCommandInput extends ListUnsupportedAppVersionResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListUnsupportedAppVersionResourcesCommand}.
 */
export interface ListUnsupportedAppVersionResourcesCommandOutput
  extends ListUnsupportedAppVersionResourcesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists the resources that are not currently supported in Resilience Hub. An unsupported
 *       resource is a resource that exists in the object that was used to create an app, but is not
 *       supported by Resilience Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, ListUnsupportedAppVersionResourcesCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, ListUnsupportedAppVersionResourcesCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const input = { // ListUnsupportedAppVersionResourcesRequest
 *   appArn: "STRING_VALUE", // required
 *   appVersion: "STRING_VALUE", // required
 *   resolutionId: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListUnsupportedAppVersionResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListUnsupportedAppVersionResourcesResponse
 * //   unsupportedResources: [ // UnsupportedResourceList // required
 * //     { // UnsupportedResource
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
 * //       unsupportedResourceStatus: "STRING_VALUE",
 * //     },
 * //   ],
 * //   resolutionId: "STRING_VALUE", // required
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUnsupportedAppVersionResourcesCommandInput - {@link ListUnsupportedAppVersionResourcesCommandInput}
 * @returns {@link ListUnsupportedAppVersionResourcesCommandOutput}
 * @see {@link ListUnsupportedAppVersionResourcesCommandInput} for command's `input` shape.
 * @see {@link ListUnsupportedAppVersionResourcesCommandOutput} for command's `response` shape.
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
export class ListUnsupportedAppVersionResourcesCommand extends $Command<
  ListUnsupportedAppVersionResourcesCommandInput,
  ListUnsupportedAppVersionResourcesCommandOutput,
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
  constructor(readonly input: ListUnsupportedAppVersionResourcesCommandInput) {
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
  ): Handler<ListUnsupportedAppVersionResourcesCommandInput, ListUnsupportedAppVersionResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListUnsupportedAppVersionResourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResiliencehubClient";
    const commandName = "ListUnsupportedAppVersionResourcesCommand";
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
    input: ListUnsupportedAppVersionResourcesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListUnsupportedAppVersionResourcesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListUnsupportedAppVersionResourcesCommandOutput> {
    return de_ListUnsupportedAppVersionResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
