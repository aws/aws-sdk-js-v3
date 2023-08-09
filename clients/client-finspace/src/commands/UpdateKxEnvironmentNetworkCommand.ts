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

import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { UpdateKxEnvironmentNetworkRequest, UpdateKxEnvironmentNetworkResponse } from "../models/models_0";
import { de_UpdateKxEnvironmentNetworkCommand, se_UpdateKxEnvironmentNetworkCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateKxEnvironmentNetworkCommand}.
 */
export interface UpdateKxEnvironmentNetworkCommandInput extends UpdateKxEnvironmentNetworkRequest {}
/**
 * @public
 *
 * The output of {@link UpdateKxEnvironmentNetworkCommand}.
 */
export interface UpdateKxEnvironmentNetworkCommandOutput extends UpdateKxEnvironmentNetworkResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates environment network to connect to your internal network by using a transit gateway. This API supports request to create a transit gateway attachment from FinSpace VPC to your transit gateway ID and create a custom Route-53 outbound resolvers.</p>
 *          <p>Once you send a request to update a network, you cannot change it again. Network update might require termination of any clusters that are running in the existing network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, UpdateKxEnvironmentNetworkCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, UpdateKxEnvironmentNetworkCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * const client = new FinspaceClient(config);
 * const input = { // UpdateKxEnvironmentNetworkRequest
 *   environmentId: "STRING_VALUE", // required
 *   transitGatewayConfiguration: { // TransitGatewayConfiguration
 *     transitGatewayID: "STRING_VALUE", // required
 *     routableCIDRSpace: "STRING_VALUE", // required
 *   },
 *   customDNSConfiguration: [ // CustomDNSConfiguration
 *     { // CustomDNSServer
 *       customDNSServerName: "STRING_VALUE", // required
 *       customDNSServerIP: "STRING_VALUE", // required
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateKxEnvironmentNetworkCommand(input);
 * const response = await client.send(command);
 * // { // UpdateKxEnvironmentNetworkResponse
 * //   name: "STRING_VALUE",
 * //   environmentId: "STRING_VALUE",
 * //   awsAccountId: "STRING_VALUE",
 * //   status: "CREATE_REQUESTED" || "CREATING" || "CREATED" || "DELETE_REQUESTED" || "DELETING" || "DELETED" || "FAILED_CREATION" || "RETRY_DELETION" || "FAILED_DELETION" || "UPDATE_NETWORK_REQUESTED" || "UPDATING_NETWORK" || "FAILED_UPDATING_NETWORK" || "SUSPENDED",
 * //   tgwStatus: "NONE" || "UPDATE_REQUESTED" || "UPDATING" || "FAILED_UPDATE" || "SUCCESSFULLY_UPDATED",
 * //   dnsStatus: "NONE" || "UPDATE_REQUESTED" || "UPDATING" || "FAILED_UPDATE" || "SUCCESSFULLY_UPDATED",
 * //   errorMessage: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   environmentArn: "STRING_VALUE",
 * //   kmsKeyId: "STRING_VALUE",
 * //   dedicatedServiceAccountId: "STRING_VALUE",
 * //   transitGatewayConfiguration: { // TransitGatewayConfiguration
 * //     transitGatewayID: "STRING_VALUE", // required
 * //     routableCIDRSpace: "STRING_VALUE", // required
 * //   },
 * //   customDNSConfiguration: [ // CustomDNSConfiguration
 * //     { // CustomDNSServer
 * //       customDNSServerName: "STRING_VALUE", // required
 * //       customDNSServerIP: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   creationTimestamp: new Date("TIMESTAMP"),
 * //   updateTimestamp: new Date("TIMESTAMP"),
 * //   availabilityZoneIds: [ // AvailabilityZoneIds
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateKxEnvironmentNetworkCommandInput - {@link UpdateKxEnvironmentNetworkCommandInput}
 * @returns {@link UpdateKxEnvironmentNetworkCommandOutput}
 * @see {@link UpdateKxEnvironmentNetworkCommandInput} for command's `input` shape.
 * @see {@link UpdateKxEnvironmentNetworkCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict with this action, and it could not be completed.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceServiceException}
 * <p>Base exception class for all service exceptions from Finspace service.</p>
 *
 */
export class UpdateKxEnvironmentNetworkCommand extends $Command<
  UpdateKxEnvironmentNetworkCommandInput,
  UpdateKxEnvironmentNetworkCommandOutput,
  FinspaceClientResolvedConfig
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
  constructor(readonly input: UpdateKxEnvironmentNetworkCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FinspaceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateKxEnvironmentNetworkCommandInput, UpdateKxEnvironmentNetworkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateKxEnvironmentNetworkCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FinspaceClient";
    const commandName = "UpdateKxEnvironmentNetworkCommand";
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
  private serialize(input: UpdateKxEnvironmentNetworkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateKxEnvironmentNetworkCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateKxEnvironmentNetworkCommandOutput> {
    return de_UpdateKxEnvironmentNetworkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
