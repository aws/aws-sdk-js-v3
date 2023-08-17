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
import { GetKxEnvironmentRequest, GetKxEnvironmentResponse } from "../models/models_0";
import { de_GetKxEnvironmentCommand, se_GetKxEnvironmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetKxEnvironmentCommand}.
 */
export interface GetKxEnvironmentCommandInput extends GetKxEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link GetKxEnvironmentCommand}.
 */
export interface GetKxEnvironmentCommandOutput extends GetKxEnvironmentResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves all the information for the specified kdb environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, GetKxEnvironmentCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, GetKxEnvironmentCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * const client = new FinspaceClient(config);
 * const input = { // GetKxEnvironmentRequest
 *   environmentId: "STRING_VALUE", // required
 * };
 * const command = new GetKxEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // GetKxEnvironmentResponse
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
 * //   certificateAuthorityArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetKxEnvironmentCommandInput - {@link GetKxEnvironmentCommandInput}
 * @returns {@link GetKxEnvironmentCommandOutput}
 * @see {@link GetKxEnvironmentCommandInput} for command's `input` shape.
 * @see {@link GetKxEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceServiceException}
 * <p>Base exception class for all service exceptions from Finspace service.</p>
 *
 */
export class GetKxEnvironmentCommand extends $Command<
  GetKxEnvironmentCommandInput,
  GetKxEnvironmentCommandOutput,
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
  constructor(readonly input: GetKxEnvironmentCommandInput) {
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
  ): Handler<GetKxEnvironmentCommandInput, GetKxEnvironmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetKxEnvironmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FinspaceClient";
    const commandName = "GetKxEnvironmentCommand";
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
  private serialize(input: GetKxEnvironmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetKxEnvironmentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetKxEnvironmentCommandOutput> {
    return de_GetKxEnvironmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
