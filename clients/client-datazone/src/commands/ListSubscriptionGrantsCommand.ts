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
import { ListSubscriptionGrantsInput, ListSubscriptionGrantsOutput } from "../models/models_0";
import { de_ListSubscriptionGrantsCommand, se_ListSubscriptionGrantsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSubscriptionGrantsCommand}.
 */
export interface ListSubscriptionGrantsCommandInput extends ListSubscriptionGrantsInput {}
/**
 * @public
 *
 * The output of {@link ListSubscriptionGrantsCommand}.
 */
export interface ListSubscriptionGrantsCommandOutput extends ListSubscriptionGrantsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists subscription grants.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListSubscriptionGrantsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListSubscriptionGrantsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // ListSubscriptionGrantsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   environmentId: "STRING_VALUE",
 *   subscriptionTargetId: "STRING_VALUE",
 *   subscribedListingId: "STRING_VALUE",
 *   subscriptionId: "STRING_VALUE",
 *   sortBy: "CREATED_AT" || "UPDATED_AT",
 *   sortOrder: "ASCENDING" || "DESCENDING",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSubscriptionGrantsCommand(input);
 * const response = await client.send(command);
 * // { // ListSubscriptionGrantsOutput
 * //   items: [ // SubscriptionGrants // required
 * //     { // SubscriptionGrantSummary
 * //       id: "STRING_VALUE", // required
 * //       createdBy: "STRING_VALUE", // required
 * //       updatedBy: "STRING_VALUE",
 * //       domainId: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       subscriptionTargetId: "STRING_VALUE", // required
 * //       grantedEntity: { // GrantedEntity Union: only one key present
 * //         listing: { // ListingRevision
 * //           id: "STRING_VALUE", // required
 * //           revision: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       status: "PENDING" || "IN_PROGRESS" || "GRANT_FAILED" || "REVOKE_FAILED" || "GRANT_AND_REVOKE_FAILED" || "COMPLETED" || "INACCESSIBLE", // required
 * //       assets: [ // SubscribedAssets
 * //         { // SubscribedAsset
 * //           assetId: "STRING_VALUE", // required
 * //           assetRevision: "STRING_VALUE", // required
 * //           status: "GRANT_PENDING" || "REVOKE_PENDING" || "GRANT_IN_PROGRESS" || "REVOKE_IN_PROGRESS" || "GRANTED" || "REVOKED" || "GRANT_FAILED" || "REVOKE_FAILED", // required
 * //           targetName: "STRING_VALUE",
 * //           failureCause: { // FailureCause
 * //             message: "STRING_VALUE",
 * //           },
 * //           grantedTimestamp: new Date("TIMESTAMP"),
 * //           failureTimestamp: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //       subscriptionId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSubscriptionGrantsCommandInput - {@link ListSubscriptionGrantsCommandInput}
 * @returns {@link ListSubscriptionGrantsCommandOutput}
 * @see {@link ListSubscriptionGrantsCommandInput} for command's `input` shape.
 * @see {@link ListSubscriptionGrantsCommandOutput} for command's `response` shape.
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
export class ListSubscriptionGrantsCommand extends $Command<
  ListSubscriptionGrantsCommandInput,
  ListSubscriptionGrantsCommandOutput,
  DataZoneClientResolvedConfig
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
  constructor(readonly input: ListSubscriptionGrantsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataZoneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSubscriptionGrantsCommandInput, ListSubscriptionGrantsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSubscriptionGrantsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataZoneClient";
    const commandName = "ListSubscriptionGrantsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataZone",
        operation: "ListSubscriptionGrants",
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
  private serialize(input: ListSubscriptionGrantsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSubscriptionGrantsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSubscriptionGrantsCommandOutput> {
    return de_ListSubscriptionGrantsCommand(output, context);
  }
}
