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

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DescribeCustomerMetadataResponse } from "../models/models_0";
import { de_DescribeCustomerMetadataCommand, se_DescribeCustomerMetadataCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeCustomerMetadataCommand}.
 */
export interface DescribeCustomerMetadataCommandInput {}
/**
 * @public
 *
 * The output of {@link DescribeCustomerMetadataCommand}.
 */
export interface DescribeCustomerMetadataCommandOutput extends DescribeCustomerMetadataResponse, __MetadataBearer {}

/**
 * @public
 * <p>Get and view a list of customer agreements, along with their signed status and whether the customer is an NNIPartner, NNIPartnerV2, or a nonPartner. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeCustomerMetadataCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeCustomerMetadataCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const input = {};
 * const command = new DescribeCustomerMetadataCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCustomerMetadataResponse
 * //   agreements: [ // AgreementList
 * //     { // CustomerAgreement
 * //       agreementName: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nniPartnerType: "v1" || "v2" || "nonPartner",
 * // };
 *
 * ```
 *
 * @param DescribeCustomerMetadataCommandInput - {@link DescribeCustomerMetadataCommandInput}
 * @returns {@link DescribeCustomerMetadataCommandOutput}
 * @see {@link DescribeCustomerMetadataCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomerMetadataCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 * @throws {@link DirectConnectClientException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *  <p>A server-side error occurred.</p>
 *
 * @throws {@link DirectConnectServiceException}
 * <p>Base exception class for all service exceptions from DirectConnect service.</p>
 *
 */
export class DescribeCustomerMetadataCommand extends $Command<
  DescribeCustomerMetadataCommandInput,
  DescribeCustomerMetadataCommandOutput,
  DirectConnectClientResolvedConfig
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
  constructor(readonly input: DescribeCustomerMetadataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeCustomerMetadataCommandInput, DescribeCustomerMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCustomerMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "DescribeCustomerMetadataCommand";
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
  private serialize(input: DescribeCustomerMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeCustomerMetadataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCustomerMetadataCommandOutput> {
    return de_DescribeCustomerMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
