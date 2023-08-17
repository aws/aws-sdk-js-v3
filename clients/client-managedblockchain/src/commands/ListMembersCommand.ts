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
  ManagedBlockchainClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ManagedBlockchainClient";
import { ListMembersInput, ListMembersOutput } from "../models/models_0";
import { de_ListMembersCommand, se_ListMembersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListMembersCommand}.
 */
export interface ListMembersCommandInput extends ListMembersInput {}
/**
 * @public
 *
 * The output of {@link ListMembersCommand}.
 */
export interface ListMembersCommandOutput extends ListMembersOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of the members in a network and properties of their configurations.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, ListMembersCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, ListMembersCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const input = { // ListMembersInput
 *   NetworkId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Status: "CREATING" || "AVAILABLE" || "CREATE_FAILED" || "UPDATING" || "DELETING" || "DELETED" || "INACCESSIBLE_ENCRYPTION_KEY",
 *   IsOwned: true || false,
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListMembersCommand(input);
 * const response = await client.send(command);
 * // { // ListMembersOutput
 * //   Members: [ // MemberSummaryList
 * //     { // MemberSummary
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Status: "CREATING" || "AVAILABLE" || "CREATE_FAILED" || "UPDATING" || "DELETING" || "DELETED" || "INACCESSIBLE_ENCRYPTION_KEY",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       IsOwned: true || false,
 * //       Arn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMembersCommandInput - {@link ListMembersCommandInput}
 * @returns {@link ListMembersCommandOutput}
 * @see {@link ListMembersCommandInput} for command's `input` shape.
 * @see {@link ListMembersCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for ManagedBlockchainClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The action or operation requested is invalid. Verify that the action is typed correctly.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request or operation couldn't be performed because a service is
 *          throttling requests. The most common source of throttling errors is
 *          creating resources that exceed your service limit for this resource type.
 *          Request a limit increase or delete unused resources if possible.</p>
 *
 * @throws {@link ManagedBlockchainServiceException}
 * <p>Base exception class for all service exceptions from ManagedBlockchain service.</p>
 *
 */
export class ListMembersCommand extends $Command<
  ListMembersCommandInput,
  ListMembersCommandOutput,
  ManagedBlockchainClientResolvedConfig
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
  constructor(readonly input: ListMembersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ManagedBlockchainClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMembersCommandInput, ListMembersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListMembersCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ManagedBlockchainClient";
    const commandName = "ListMembersCommand";
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
  private serialize(input: ListMembersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListMembersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMembersCommandOutput> {
    return de_ListMembersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
