// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ListVPCConnectionsRequest, ListVPCConnectionsResponse } from "../models/models_3";
import { de_ListVPCConnectionsCommand, se_ListVPCConnectionsCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 *
 * The input for {@link ListVPCConnectionsCommand}.
 */
export interface ListVPCConnectionsCommandInput extends ListVPCConnectionsRequest {}
/**
 * @public
 *
 * The output of {@link ListVPCConnectionsCommand}.
 */
export interface ListVPCConnectionsCommandOutput extends ListVPCConnectionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all of the VPC connections in the current set Amazon Web Services Region of an
 * 				Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListVPCConnectionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListVPCConnectionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // ListVPCConnectionsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListVPCConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // ListVPCConnectionsResponse
 * //   VPCConnectionSummaries: [ // VPCConnectionSummaryList
 * //     { // VPCConnectionSummary
 * //       VPCConnectionId: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       VPCId: "STRING_VALUE",
 * //       SecurityGroupIds: [ // SecurityGroupIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       DnsResolvers: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       Status: "CREATION_IN_PROGRESS" || "CREATION_SUCCESSFUL" || "CREATION_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_SUCCESSFUL" || "UPDATE_FAILED" || "DELETION_IN_PROGRESS" || "DELETION_FAILED" || "DELETED",
 * //       AvailabilityStatus: "AVAILABLE" || "UNAVAILABLE" || "PARTIALLY_AVAILABLE",
 * //       NetworkInterfaces: [ // NetworkInterfaceList
 * //         { // NetworkInterface
 * //           SubnetId: "STRING_VALUE",
 * //           AvailabilityZone: "STRING_VALUE",
 * //           ErrorMessage: "STRING_VALUE",
 * //           Status: "CREATING" || "AVAILABLE" || "CREATION_FAILED" || "UPDATING" || "UPDATE_FAILED" || "DELETING" || "DELETED" || "DELETION_FAILED" || "DELETION_SCHEDULED" || "ATTACHMENT_FAILED_ROLLBACK_FAILED",
 * //           NetworkInterfaceId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       RoleArn: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param ListVPCConnectionsCommandInput - {@link ListVPCConnectionsCommandInput}
 * @returns {@link ListVPCConnectionsCommandOutput}
 * @see {@link ListVPCConnectionsCommandInput} for command's `input` shape.
 * @see {@link ListVPCConnectionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value isn't valid.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon QuickSight
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Amazon QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 */
export class ListVPCConnectionsCommand extends $Command<
  ListVPCConnectionsCommandInput,
  ListVPCConnectionsCommandOutput,
  QuickSightClientResolvedConfig
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
  constructor(readonly input: ListVPCConnectionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListVPCConnectionsCommandInput, ListVPCConnectionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListVPCConnectionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "ListVPCConnectionsCommand";
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
  private serialize(input: ListVPCConnectionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListVPCConnectionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVPCConnectionsCommandOutput> {
    return de_ListVPCConnectionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
