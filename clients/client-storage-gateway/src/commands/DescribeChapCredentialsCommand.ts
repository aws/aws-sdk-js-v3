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
  DescribeChapCredentialsInput,
  DescribeChapCredentialsOutput,
  DescribeChapCredentialsOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeChapCredentialsCommand, se_DescribeChapCredentialsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeChapCredentialsCommand}.
 */
export interface DescribeChapCredentialsCommandInput extends DescribeChapCredentialsInput {}
/**
 * @public
 *
 * The output of {@link DescribeChapCredentialsCommand}.
 */
export interface DescribeChapCredentialsCommandOutput extends DescribeChapCredentialsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns an array of Challenge-Handshake Authentication Protocol (CHAP) credentials
 *          information for a specified iSCSI target, one for each target-initiator pair. This
 *          operation is supported in the volume and tape gateway types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeChapCredentialsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeChapCredentialsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeChapCredentialsInput
 *   TargetARN: "STRING_VALUE", // required
 * };
 * const command = new DescribeChapCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeChapCredentialsOutput
 * //   ChapCredentials: [ // ChapCredentials
 * //     { // ChapInfo
 * //       TargetARN: "STRING_VALUE",
 * //       SecretToAuthenticateInitiator: "STRING_VALUE",
 * //       InitiatorName: "STRING_VALUE",
 * //       SecretToAuthenticateTarget: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeChapCredentialsCommandInput - {@link DescribeChapCredentialsCommandInput}
 * @returns {@link DescribeChapCredentialsCommandOutput}
 * @see {@link DescribeChapCredentialsCommandInput} for command's `input` shape.
 * @see {@link DescribeChapCredentialsCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 * @example To describe CHAP credetnitals for an iSCSI
 * ```javascript
 * // Returns an array of Challenge-Handshake Authentication Protocol (CHAP) credentials information for a specified iSCSI target, one for each target-initiator pair.
 * const input = {
 *   "TargetARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume"
 * };
 * const command = new DescribeChapCredentialsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ChapCredentials": [
 *     {
 *       "InitiatorName": "iqn.1991-05.com.microsoft:computername.domain.example.com",
 *       "SecretToAuthenticateInitiator": "111111111111",
 *       "SecretToAuthenticateTarget": "222222222222",
 *       "TargetARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-chap-credetnitals-for-an-iscsi-1471467462967
 * ```
 *
 */
export class DescribeChapCredentialsCommand extends $Command<
  DescribeChapCredentialsCommandInput,
  DescribeChapCredentialsCommandOutput,
  StorageGatewayClientResolvedConfig
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
  constructor(readonly input: DescribeChapCredentialsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeChapCredentialsCommandInput, DescribeChapCredentialsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeChapCredentialsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeChapCredentialsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeChapCredentialsOutputFilterSensitiveLog,
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
  private serialize(input: DescribeChapCredentialsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeChapCredentialsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeChapCredentialsCommandOutput> {
    return de_DescribeChapCredentialsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
