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
import { UpdateSubscriptionGrantStatusInput, UpdateSubscriptionGrantStatusOutput } from "../models/models_1";
import {
  de_UpdateSubscriptionGrantStatusCommand,
  se_UpdateSubscriptionGrantStatusCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateSubscriptionGrantStatusCommand}.
 */
export interface UpdateSubscriptionGrantStatusCommandInput extends UpdateSubscriptionGrantStatusInput {}
/**
 * @public
 *
 * The output of {@link UpdateSubscriptionGrantStatusCommand}.
 */
export interface UpdateSubscriptionGrantStatusCommandOutput
  extends UpdateSubscriptionGrantStatusOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates the status of the specified subscription grant status in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, UpdateSubscriptionGrantStatusCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, UpdateSubscriptionGrantStatusCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // UpdateSubscriptionGrantStatusInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   assetIdentifier: "STRING_VALUE", // required
 *   status: "GRANT_PENDING" || "REVOKE_PENDING" || "GRANT_IN_PROGRESS" || "REVOKE_IN_PROGRESS" || "GRANTED" || "REVOKED" || "GRANT_FAILED" || "REVOKE_FAILED", // required
 *   failureCause: { // FailureCause
 *     message: "STRING_VALUE",
 *   },
 *   targetName: "STRING_VALUE",
 * };
 * const command = new UpdateSubscriptionGrantStatusCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSubscriptionGrantStatusOutput
 * //   id: "STRING_VALUE", // required
 * //   createdBy: "STRING_VALUE", // required
 * //   updatedBy: "STRING_VALUE",
 * //   domainId: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   subscriptionTargetId: "STRING_VALUE", // required
 * //   grantedEntity: { // GrantedEntity Union: only one key present
 * //     listing: { // ListingRevision
 * //       id: "STRING_VALUE", // required
 * //       revision: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   status: "PENDING" || "IN_PROGRESS" || "GRANT_FAILED" || "REVOKE_FAILED" || "GRANT_AND_REVOKE_FAILED" || "COMPLETED" || "INACCESSIBLE", // required
 * //   assets: [ // SubscribedAssets
 * //     { // SubscribedAsset
 * //       assetId: "STRING_VALUE", // required
 * //       assetRevision: "STRING_VALUE", // required
 * //       status: "GRANT_PENDING" || "REVOKE_PENDING" || "GRANT_IN_PROGRESS" || "REVOKE_IN_PROGRESS" || "GRANTED" || "REVOKED" || "GRANT_FAILED" || "REVOKE_FAILED", // required
 * //       targetName: "STRING_VALUE",
 * //       failureCause: { // FailureCause
 * //         message: "STRING_VALUE",
 * //       },
 * //       grantedTimestamp: new Date("TIMESTAMP"),
 * //       failureTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   subscriptionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateSubscriptionGrantStatusCommandInput - {@link UpdateSubscriptionGrantStatusCommandInput}
 * @returns {@link UpdateSubscriptionGrantStatusCommandOutput}
 * @see {@link UpdateSubscriptionGrantStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateSubscriptionGrantStatusCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict while performing this action.</p>
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
export class UpdateSubscriptionGrantStatusCommand extends $Command<
  UpdateSubscriptionGrantStatusCommandInput,
  UpdateSubscriptionGrantStatusCommandOutput,
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
  constructor(readonly input: UpdateSubscriptionGrantStatusCommandInput) {
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
  ): Handler<UpdateSubscriptionGrantStatusCommandInput, UpdateSubscriptionGrantStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateSubscriptionGrantStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataZoneClient";
    const commandName = "UpdateSubscriptionGrantStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataZone",
        operation: "UpdateSubscriptionGrantStatus",
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
  private serialize(input: UpdateSubscriptionGrantStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateSubscriptionGrantStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateSubscriptionGrantStatusCommandOutput> {
    return de_UpdateSubscriptionGrantStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
