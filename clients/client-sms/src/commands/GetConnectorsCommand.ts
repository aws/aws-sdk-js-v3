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

import { GetConnectorsRequest, GetConnectorsResponse } from "../models/models_0";
import { de_GetConnectorsCommand, se_GetConnectorsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetConnectorsCommand}.
 */
export interface GetConnectorsCommandInput extends GetConnectorsRequest {}
/**
 * @public
 *
 * The output of {@link GetConnectorsCommand}.
 */
export interface GetConnectorsCommandOutput extends GetConnectorsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the connectors registered with the Server Migration Service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GetConnectorsCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GetConnectorsCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const input = { // GetConnectorsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetConnectorsCommand(input);
 * const response = await client.send(command);
 * // { // GetConnectorsResponse
 * //   connectorList: [ // ConnectorList
 * //     { // Connector
 * //       connectorId: "STRING_VALUE",
 * //       version: "STRING_VALUE",
 * //       status: "HEALTHY" || "UNHEALTHY",
 * //       capabilityList: [ // ConnectorCapabilityList
 * //         "VSPHERE" || "SCVMM" || "HYPERV-MANAGER" || "SNAPSHOT_BATCHING" || "SMS_OPTIMIZED",
 * //       ],
 * //       vmManagerName: "STRING_VALUE",
 * //       vmManagerType: "VSPHERE" || "SCVMM" || "HYPERV-MANAGER",
 * //       vmManagerId: "STRING_VALUE",
 * //       ipAddress: "STRING_VALUE",
 * //       macAddress: "STRING_VALUE",
 * //       associatedOn: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetConnectorsCommandInput - {@link GetConnectorsCommandInput}
 * @returns {@link GetConnectorsCommandOutput}
 * @see {@link GetConnectorsCommandInput} for command's `input` shape.
 * @see {@link GetConnectorsCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for SMSClient's `config` shape.
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *  <p>You lack permissions needed to perform this operation. Check your IAM policies,
 *             and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link SMSServiceException}
 * <p>Base exception class for all service exceptions from SMS service.</p>
 *
 */
export class GetConnectorsCommand extends $Command<
  GetConnectorsCommandInput,
  GetConnectorsCommandOutput,
  SMSClientResolvedConfig
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
  constructor(readonly input: GetConnectorsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetConnectorsCommandInput, GetConnectorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetConnectorsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "GetConnectorsCommand";
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
  private serialize(input: GetConnectorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetConnectorsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetConnectorsCommandOutput> {
    return de_GetConnectorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
