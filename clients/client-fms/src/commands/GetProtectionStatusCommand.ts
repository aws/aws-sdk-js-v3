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

import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { GetProtectionStatusRequest, GetProtectionStatusResponse } from "../models/models_0";
import { de_GetProtectionStatusCommand, se_GetProtectionStatusCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetProtectionStatusCommand}.
 */
export interface GetProtectionStatusCommandInput extends GetProtectionStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetProtectionStatusCommand}.
 */
export interface GetProtectionStatusCommandOutput extends GetProtectionStatusResponse, __MetadataBearer {}

/**
 * @public
 * <p>If you created a Shield Advanced policy, returns policy-level attack summary information
 *          in the event of a potential DDoS attack. Other policy types are currently unsupported.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, GetProtectionStatusCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, GetProtectionStatusCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const input = { // GetProtectionStatusRequest
 *   PolicyId: "STRING_VALUE", // required
 *   MemberAccountId: "STRING_VALUE",
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetProtectionStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetProtectionStatusResponse
 * //   AdminAccountId: "STRING_VALUE",
 * //   ServiceType: "WAF" || "WAFV2" || "SHIELD_ADVANCED" || "SECURITY_GROUPS_COMMON" || "SECURITY_GROUPS_CONTENT_AUDIT" || "SECURITY_GROUPS_USAGE_AUDIT" || "NETWORK_FIREWALL" || "DNS_FIREWALL" || "THIRD_PARTY_FIREWALL" || "IMPORT_NETWORK_FIREWALL",
 * //   Data: "STRING_VALUE",
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetProtectionStatusCommandInput - {@link GetProtectionStatusCommandInput}
 * @returns {@link GetProtectionStatusCommandOutput}
 * @see {@link GetProtectionStatusCommandInput} for command's `input` shape.
 * @see {@link GetProtectionStatusCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (client fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry
 *       your request.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The parameters of the request were invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link FMSServiceException}
 * <p>Base exception class for all service exceptions from FMS service.</p>
 *
 */
export class GetProtectionStatusCommand extends $Command<
  GetProtectionStatusCommandInput,
  GetProtectionStatusCommandOutput,
  FMSClientResolvedConfig
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
  constructor(readonly input: GetProtectionStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetProtectionStatusCommandInput, GetProtectionStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetProtectionStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "GetProtectionStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSFMS_20180101",
        operation: "GetProtectionStatus",
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
  private serialize(input: GetProtectionStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetProtectionStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetProtectionStatusCommandOutput> {
    return de_GetProtectionStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
