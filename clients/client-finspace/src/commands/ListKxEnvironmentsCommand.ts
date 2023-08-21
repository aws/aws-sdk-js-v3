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
import { ListKxEnvironmentsRequest, ListKxEnvironmentsResponse } from "../models/models_0";
import { de_ListKxEnvironmentsCommand, se_ListKxEnvironmentsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListKxEnvironmentsCommand}.
 */
export interface ListKxEnvironmentsCommandInput extends ListKxEnvironmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListKxEnvironmentsCommand}.
 */
export interface ListKxEnvironmentsCommandOutput extends ListKxEnvironmentsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of kdb environments created in an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, ListKxEnvironmentsCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, ListKxEnvironmentsCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * const client = new FinspaceClient(config);
 * const input = { // ListKxEnvironmentsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListKxEnvironmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListKxEnvironmentsResponse
 * //   environments: [ // KxEnvironmentList
 * //     { // KxEnvironment
 * //       name: "STRING_VALUE",
 * //       environmentId: "STRING_VALUE",
 * //       awsAccountId: "STRING_VALUE",
 * //       status: "CREATE_REQUESTED" || "CREATING" || "CREATED" || "DELETE_REQUESTED" || "DELETING" || "DELETED" || "FAILED_CREATION" || "RETRY_DELETION" || "FAILED_DELETION" || "UPDATE_NETWORK_REQUESTED" || "UPDATING_NETWORK" || "FAILED_UPDATING_NETWORK" || "SUSPENDED",
 * //       tgwStatus: "NONE" || "UPDATE_REQUESTED" || "UPDATING" || "FAILED_UPDATE" || "SUCCESSFULLY_UPDATED",
 * //       dnsStatus: "NONE" || "UPDATE_REQUESTED" || "UPDATING" || "FAILED_UPDATE" || "SUCCESSFULLY_UPDATED",
 * //       errorMessage: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       environmentArn: "STRING_VALUE",
 * //       kmsKeyId: "STRING_VALUE",
 * //       dedicatedServiceAccountId: "STRING_VALUE",
 * //       transitGatewayConfiguration: { // TransitGatewayConfiguration
 * //         transitGatewayID: "STRING_VALUE", // required
 * //         routableCIDRSpace: "STRING_VALUE", // required
 * //         attachmentNetworkAclConfiguration: [ // NetworkACLConfiguration
 * //           { // NetworkACLEntry
 * //             ruleNumber: Number("int"), // required
 * //             protocol: "STRING_VALUE", // required
 * //             ruleAction: "allow" || "deny", // required
 * //             portRange: { // PortRange
 * //               from: Number("int"), // required
 * //               to: Number("int"), // required
 * //             },
 * //             icmpTypeCode: { // IcmpTypeCode
 * //               type: Number("int"), // required
 * //               code: Number("int"), // required
 * //             },
 * //             cidrBlock: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       customDNSConfiguration: [ // CustomDNSConfiguration
 * //         { // CustomDNSServer
 * //           customDNSServerName: "STRING_VALUE", // required
 * //           customDNSServerIP: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       creationTimestamp: new Date("TIMESTAMP"),
 * //       updateTimestamp: new Date("TIMESTAMP"),
 * //       availabilityZoneIds: [ // AvailabilityZoneIds
 * //         "STRING_VALUE",
 * //       ],
 * //       certificateAuthorityArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListKxEnvironmentsCommandInput - {@link ListKxEnvironmentsCommandInput}
 * @returns {@link ListKxEnvironmentsCommandOutput}
 * @see {@link ListKxEnvironmentsCommandInput} for command's `input` shape.
 * @see {@link ListKxEnvironmentsCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceServiceException}
 * <p>Base exception class for all service exceptions from Finspace service.</p>
 *
 */
export class ListKxEnvironmentsCommand extends $Command<
  ListKxEnvironmentsCommandInput,
  ListKxEnvironmentsCommandOutput,
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
  constructor(readonly input: ListKxEnvironmentsCommandInput) {
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
  ): Handler<ListKxEnvironmentsCommandInput, ListKxEnvironmentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListKxEnvironmentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FinspaceClient";
    const commandName = "ListKxEnvironmentsCommand";
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
  private serialize(input: ListKxEnvironmentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListKxEnvironmentsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListKxEnvironmentsCommandOutput> {
    return de_ListKxEnvironmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
