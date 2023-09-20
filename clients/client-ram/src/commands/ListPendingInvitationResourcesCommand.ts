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

import { ListPendingInvitationResourcesRequest, ListPendingInvitationResourcesResponse } from "../models/models_0";
import {
  de_ListPendingInvitationResourcesCommand,
  se_ListPendingInvitationResourcesCommand,
} from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListPendingInvitationResourcesCommand}.
 */
export interface ListPendingInvitationResourcesCommandInput extends ListPendingInvitationResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListPendingInvitationResourcesCommand}.
 */
export interface ListPendingInvitationResourcesCommandOutput
  extends ListPendingInvitationResourcesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists the resources in a resource share that is shared with you but for which the invitation is
 *             still <code>PENDING</code>. That means that you haven't accepted or rejected the
 *             invitation and the invitation hasn't expired.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, ListPendingInvitationResourcesCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, ListPendingInvitationResourcesCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const input = { // ListPendingInvitationResourcesRequest
 *   resourceShareInvitationArn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   resourceRegionScope: "ALL" || "REGIONAL" || "GLOBAL",
 * };
 * const command = new ListPendingInvitationResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListPendingInvitationResourcesResponse
 * //   resources: [ // ResourceList
 * //     { // Resource
 * //       arn: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //       resourceShareArn: "STRING_VALUE",
 * //       resourceGroupArn: "STRING_VALUE",
 * //       status: "AVAILABLE" || "ZONAL_RESOURCE_INACCESSIBLE" || "LIMIT_EXCEEDED" || "UNAVAILABLE" || "PENDING",
 * //       statusMessage: "STRING_VALUE",
 * //       creationTime: new Date("TIMESTAMP"),
 * //       lastUpdatedTime: new Date("TIMESTAMP"),
 * //       resourceRegionScope: "REGIONAL" || "GLOBAL",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPendingInvitationResourcesCommandInput - {@link ListPendingInvitationResourcesCommandInput}
 * @returns {@link ListPendingInvitationResourcesCommandOutput}
 * @see {@link ListPendingInvitationResourcesCommandInput} for command's `input` shape.
 * @see {@link ListPendingInvitationResourcesCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The operation failed because the specified value for <code>NextToken</code> isn't
 *             valid. You must specify a value you received in the <code>NextToken</code> response of a
 *             previous call to this operation.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The operation failed because a parameter you specified isn't valid.</p>
 *
 * @throws {@link MalformedArnException} (client fault)
 *  <p>The operation failed because the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> has a format that isn't
 *             valid.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>The operation failed because a required input parameter is missing.</p>
 *
 * @throws {@link ResourceShareInvitationAlreadyRejectedException} (client fault)
 *  <p>The operation failed because the specified invitation was already rejected.</p>
 *
 * @throws {@link ResourceShareInvitationArnNotFoundException} (client fault)
 *  <p>The operation failed because the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> for an invitation was not
 *             found.</p>
 *
 * @throws {@link ResourceShareInvitationExpiredException} (client fault)
 *  <p>The operation failed because the specified invitation is past its expiration date and
 *             time.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The operation failed because the service could not respond to the request due to an
 *             internal problem. Try again later.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The operation failed because the service isn't available. Try again later.</p>
 *
 * @throws {@link RAMServiceException}
 * <p>Base exception class for all service exceptions from RAM service.</p>
 *
 */
export class ListPendingInvitationResourcesCommand extends $Command<
  ListPendingInvitationResourcesCommandInput,
  ListPendingInvitationResourcesCommandOutput,
  RAMClientResolvedConfig
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
  constructor(readonly input: ListPendingInvitationResourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPendingInvitationResourcesCommandInput, ListPendingInvitationResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPendingInvitationResourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "ListPendingInvitationResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonResourceSharing",
        operation: "ListPendingInvitationResources",
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
    input: ListPendingInvitationResourcesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListPendingInvitationResourcesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPendingInvitationResourcesCommandOutput> {
    return de_ListPendingInvitationResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
