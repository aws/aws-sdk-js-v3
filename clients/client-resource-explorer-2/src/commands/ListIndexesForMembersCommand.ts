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

import { ListIndexesForMembersInput, ListIndexesForMembersOutput } from "../models/models_0";
import { de_ListIndexesForMembersCommand, se_ListIndexesForMembersCommand } from "../protocols/Aws_restJson1";
import {
  ResourceExplorer2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceExplorer2Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListIndexesForMembersCommand}.
 */
export interface ListIndexesForMembersCommandInput extends ListIndexesForMembersInput {}
/**
 * @public
 *
 * The output of {@link ListIndexesForMembersCommand}.
 */
export interface ListIndexesForMembersCommandOutput extends ListIndexesForMembersOutput, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list of a member's indexes in all Amazon Web Services Regions that are currently
 *             collecting resource information for Amazon Web Services Resource Explorer. Only the management account or a
 *             delegated administrator with service access enabled can invoke this API call.
 *             </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, ListIndexesForMembersCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, ListIndexesForMembersCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * const client = new ResourceExplorer2Client(config);
 * const input = { // ListIndexesForMembersInput
 *   AccountIdList: [ // AccountIdList // required
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListIndexesForMembersCommand(input);
 * const response = await client.send(command);
 * // { // ListIndexesForMembersOutput
 * //   Indexes: [ // MemberIndexList
 * //     { // MemberIndex
 * //       AccountId: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIndexesForMembersCommandInput - {@link ListIndexesForMembersCommandInput}
 * @returns {@link ListIndexesForMembersCommandOutput}
 * @see {@link ListIndexesForMembersCommandInput} for command's `input` shape.
 * @see {@link ListIndexesForMembersCommandOutput} for command's `response` shape.
 * @see {@link ResourceExplorer2ClientResolvedConfig | config} for ResourceExplorer2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The credentials that you used to call this operation don't have the minimum required
 *             permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed because of internal service error. Try your request again
 *             later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request failed because you exceeded a rate limit for this operation. For more
 *             information, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/quotas.html">Quotas for
 *             Resource Explorer</a>.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>You provided an invalid value for one of the operation's parameters. Check the syntax
 *             for the operation, and try again.</p>
 *
 * @throws {@link ResourceExplorer2ServiceException}
 * <p>Base exception class for all service exceptions from ResourceExplorer2 service.</p>
 *
 */
export class ListIndexesForMembersCommand extends $Command<
  ListIndexesForMembersCommandInput,
  ListIndexesForMembersCommandOutput,
  ResourceExplorer2ClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ListIndexesForMembersCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResourceExplorer2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListIndexesForMembersCommandInput, ListIndexesForMembersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListIndexesForMembersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResourceExplorer2Client";
    const commandName = "ListIndexesForMembersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ResourceExplorer",
        operation: "ListIndexesForMembers",
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
  private serialize(input: ListIndexesForMembersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListIndexesForMembersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListIndexesForMembersCommandOutput> {
    return de_ListIndexesForMembersCommand(output, context);
  }
}
