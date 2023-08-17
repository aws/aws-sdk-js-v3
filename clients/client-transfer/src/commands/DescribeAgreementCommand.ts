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

import { DescribeAgreementRequest, DescribeAgreementResponse } from "../models/models_0";
import { de_DescribeAgreementCommand, se_DescribeAgreementCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAgreementCommand}.
 */
export interface DescribeAgreementCommandInput extends DescribeAgreementRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAgreementCommand}.
 */
export interface DescribeAgreementCommandOutput extends DescribeAgreementResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the agreement that's identified by the <code>AgreementId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DescribeAgreementCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DescribeAgreementCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const input = { // DescribeAgreementRequest
 *   AgreementId: "STRING_VALUE", // required
 *   ServerId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAgreementCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAgreementResponse
 * //   Agreement: { // DescribedAgreement
 * //     Arn: "STRING_VALUE", // required
 * //     AgreementId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Status: "ACTIVE" || "INACTIVE",
 * //     ServerId: "STRING_VALUE",
 * //     LocalProfileId: "STRING_VALUE",
 * //     PartnerProfileId: "STRING_VALUE",
 * //     BaseDirectory: "STRING_VALUE",
 * //     AccessRole: "STRING_VALUE",
 * //     Tags: [ // Tags
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAgreementCommandInput - {@link DescribeAgreementCommandInput}
 * @returns {@link DescribeAgreementCommandOutput}
 * @see {@link DescribeAgreementCommandInput} for command's `input` shape.
 * @see {@link DescribeAgreementCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Amazon Web ServicesTransfer Family service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family
 *       service.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed because the Amazon Web ServicesTransfer Family service is not available.</p>
 *
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 */
export class DescribeAgreementCommand extends $Command<
  DescribeAgreementCommandInput,
  DescribeAgreementCommandOutput,
  TransferClientResolvedConfig
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
  constructor(readonly input: DescribeAgreementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TransferClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAgreementCommandInput, DescribeAgreementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAgreementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "DescribeAgreementCommand";
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
  private serialize(input: DescribeAgreementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAgreementCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAgreementCommandOutput> {
    return de_DescribeAgreementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
