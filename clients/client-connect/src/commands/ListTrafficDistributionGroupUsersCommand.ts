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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import {
  ListTrafficDistributionGroupUsersRequest,
  ListTrafficDistributionGroupUsersResponse,
} from "../models/models_1";
import {
  de_ListTrafficDistributionGroupUsersCommand,
  se_ListTrafficDistributionGroupUsersCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTrafficDistributionGroupUsersCommand}.
 */
export interface ListTrafficDistributionGroupUsersCommandInput extends ListTrafficDistributionGroupUsersRequest {}
/**
 * @public
 *
 * The output of {@link ListTrafficDistributionGroupUsersCommand}.
 */
export interface ListTrafficDistributionGroupUsersCommandOutput
  extends ListTrafficDistributionGroupUsersResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists traffic distribution group users.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListTrafficDistributionGroupUsersCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListTrafficDistributionGroupUsersCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // ListTrafficDistributionGroupUsersRequest
 *   TrafficDistributionGroupId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListTrafficDistributionGroupUsersCommand(input);
 * const response = await client.send(command);
 * // { // ListTrafficDistributionGroupUsersResponse
 * //   NextToken: "STRING_VALUE",
 * //   TrafficDistributionGroupUserSummaryList: [ // TrafficDistributionGroupUserSummaryList
 * //     { // TrafficDistributionGroupUserSummary
 * //       UserId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListTrafficDistributionGroupUsersCommandInput - {@link ListTrafficDistributionGroupUsersCommandInput}
 * @returns {@link ListTrafficDistributionGroupUsersCommandOutput}
 * @see {@link ListTrafficDistributionGroupUsersCommandInput} for command's `input` shape.
 * @see {@link ListTrafficDistributionGroupUsersCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class ListTrafficDistributionGroupUsersCommand extends $Command<
  ListTrafficDistributionGroupUsersCommandInput,
  ListTrafficDistributionGroupUsersCommandOutput,
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
  constructor(readonly input: ListTrafficDistributionGroupUsersCommandInput) {
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
  ): Handler<ListTrafficDistributionGroupUsersCommandInput, ListTrafficDistributionGroupUsersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTrafficDistributionGroupUsersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListTrafficDistributionGroupUsersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "ListTrafficDistributionGroupUsers",
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
    input: ListTrafficDistributionGroupUsersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListTrafficDistributionGroupUsersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListTrafficDistributionGroupUsersCommandOutput> {
    return de_ListTrafficDistributionGroupUsersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
