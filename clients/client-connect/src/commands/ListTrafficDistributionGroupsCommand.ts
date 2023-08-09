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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { ListTrafficDistributionGroupsRequest, ListTrafficDistributionGroupsResponse } from "../models/models_1";
import {
  de_ListTrafficDistributionGroupsCommand,
  se_ListTrafficDistributionGroupsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTrafficDistributionGroupsCommand}.
 */
export interface ListTrafficDistributionGroupsCommandInput extends ListTrafficDistributionGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListTrafficDistributionGroupsCommand}.
 */
export interface ListTrafficDistributionGroupsCommandOutput
  extends ListTrafficDistributionGroupsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists traffic distribution groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListTrafficDistributionGroupsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListTrafficDistributionGroupsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // ListTrafficDistributionGroupsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   InstanceId: "STRING_VALUE",
 * };
 * const command = new ListTrafficDistributionGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListTrafficDistributionGroupsResponse
 * //   NextToken: "STRING_VALUE",
 * //   TrafficDistributionGroupSummaryList: [ // TrafficDistributionGroupSummaryList
 * //     { // TrafficDistributionGroupSummary
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       InstanceArn: "STRING_VALUE",
 * //       Status: "CREATION_IN_PROGRESS" || "ACTIVE" || "CREATION_FAILED" || "PENDING_DELETION" || "DELETION_FAILED" || "UPDATE_IN_PROGRESS",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListTrafficDistributionGroupsCommandInput - {@link ListTrafficDistributionGroupsCommandInput}
 * @returns {@link ListTrafficDistributionGroupsCommandOutput}
 * @see {@link ListTrafficDistributionGroupsCommandInput} for command's `input` shape.
 * @see {@link ListTrafficDistributionGroupsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class ListTrafficDistributionGroupsCommand extends $Command<
  ListTrafficDistributionGroupsCommandInput,
  ListTrafficDistributionGroupsCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: ListTrafficDistributionGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTrafficDistributionGroupsCommandInput, ListTrafficDistributionGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTrafficDistributionGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListTrafficDistributionGroupsCommand";
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
  private serialize(input: ListTrafficDistributionGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTrafficDistributionGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListTrafficDistributionGroupsCommandOutput> {
    return de_ListTrafficDistributionGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
