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

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import {
  ListSubscriptionsInput,
  ListSubscriptionsOutput,
  ListSubscriptionsOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_ListSubscriptionsCommand, se_ListSubscriptionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSubscriptionsCommand}.
 */
export interface ListSubscriptionsCommandInput extends ListSubscriptionsInput {}
/**
 * @public
 *
 * The output of {@link ListSubscriptionsCommand}.
 */
export interface ListSubscriptionsCommandOutput extends ListSubscriptionsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists subscriptions in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListSubscriptionsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListSubscriptionsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // ListSubscriptionsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   subscriptionRequestIdentifier: "STRING_VALUE",
 *   status: "APPROVED" || "REVOKED" || "CANCELLED",
 *   subscribedListingId: "STRING_VALUE",
 *   owningProjectId: "STRING_VALUE",
 *   approverProjectId: "STRING_VALUE",
 *   sortBy: "CREATED_AT" || "UPDATED_AT",
 *   sortOrder: "ASCENDING" || "DESCENDING",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSubscriptionsCommand(input);
 * const response = await client.send(command);
 * // { // ListSubscriptionsOutput
 * //   items: [ // Subscriptions // required
 * //     { // SubscriptionSummary
 * //       id: "STRING_VALUE", // required
 * //       createdBy: "STRING_VALUE", // required
 * //       updatedBy: "STRING_VALUE",
 * //       domainId: "STRING_VALUE", // required
 * //       status: "APPROVED" || "REVOKED" || "CANCELLED", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       subscribedPrincipal: { // SubscribedPrincipal Union: only one key present
 * //         project: { // SubscribedProject
 * //           id: "STRING_VALUE",
 * //           name: "STRING_VALUE",
 * //         },
 * //       },
 * //       subscribedListing: { // SubscribedListing
 * //         id: "STRING_VALUE", // required
 * //         revision: "STRING_VALUE",
 * //         name: "STRING_VALUE", // required
 * //         description: "STRING_VALUE", // required
 * //         item: { // SubscribedListingItem Union: only one key present
 * //           assetListing: { // SubscribedAssetListing
 * //             entityId: "STRING_VALUE",
 * //             entityRevision: "STRING_VALUE",
 * //             entityType: "STRING_VALUE",
 * //             forms: "STRING_VALUE",
 * //             glossaryTerms: [ // DetailedGlossaryTerms
 * //               { // DetailedGlossaryTerm
 * //                 name: "STRING_VALUE",
 * //                 shortDescription: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //         },
 * //         ownerProjectId: "STRING_VALUE", // required
 * //         ownerProjectName: "STRING_VALUE",
 * //       },
 * //       subscriptionRequestId: "STRING_VALUE",
 * //       retainPermissions: true || false,
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSubscriptionsCommandInput - {@link ListSubscriptionsCommandInput}
 * @returns {@link ListSubscriptionsCommandOutput}
 * @see {@link ListSubscriptionsCommandInput} for command's `input` shape.
 * @see {@link ListSubscriptionsCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 */
export class ListSubscriptionsCommand extends $Command<
  ListSubscriptionsCommandInput,
  ListSubscriptionsCommandOutput,
  DataZoneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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
  constructor(readonly input: ListSubscriptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataZoneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSubscriptionsCommandInput, ListSubscriptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSubscriptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataZoneClient";
    const commandName = "ListSubscriptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListSubscriptionsOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataZone",
        operation: "ListSubscriptions",
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
  private serialize(input: ListSubscriptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSubscriptionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSubscriptionsCommandOutput> {
    return de_ListSubscriptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
