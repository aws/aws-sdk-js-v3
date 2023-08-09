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

import { DescribeHsmClientCertificatesMessage, HsmClientCertificateMessage } from "../models/models_1";
import {
  de_DescribeHsmClientCertificatesCommand,
  se_DescribeHsmClientCertificatesCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeHsmClientCertificatesCommand}.
 */
export interface DescribeHsmClientCertificatesCommandInput extends DescribeHsmClientCertificatesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeHsmClientCertificatesCommand}.
 */
export interface DescribeHsmClientCertificatesCommandOutput extends HsmClientCertificateMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the specified HSM client certificate. If no certificate
 *             ID is specified, returns information about all the HSM certificates owned by your Amazon Web Services account.</p>
 *          <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 *             all HSM client certificates that match any combination of the specified keys and values.
 *             For example, if you have <code>owner</code> and <code>environment</code> for tag keys,
 *             and <code>admin</code> and <code>test</code> for tag values, all HSM client certificates
 *             that have any combination of those values are returned.</p>
 *          <p>If both tag keys and values are omitted from the request, HSM client certificates
 *             are returned regardless of whether they have tag keys or values associated with
 *             them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeHsmClientCertificatesCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeHsmClientCertificatesCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DescribeHsmClientCertificatesMessage
 *   HsmClientCertificateIdentifier: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 *   TagKeys: [ // TagKeyList
 *     "STRING_VALUE",
 *   ],
 *   TagValues: [ // TagValueList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeHsmClientCertificatesCommand(input);
 * const response = await client.send(command);
 * // { // HsmClientCertificateMessage
 * //   Marker: "STRING_VALUE",
 * //   HsmClientCertificates: [ // HsmClientCertificateList
 * //     { // HsmClientCertificate
 * //       HsmClientCertificateIdentifier: "STRING_VALUE",
 * //       HsmClientCertificatePublicKey: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeHsmClientCertificatesCommandInput - {@link DescribeHsmClientCertificatesCommandInput}
 * @returns {@link DescribeHsmClientCertificatesCommandOutput}
 * @see {@link DescribeHsmClientCertificatesCommandInput} for command's `input` shape.
 * @see {@link DescribeHsmClientCertificatesCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link HsmClientCertificateNotFoundFault} (client fault)
 *  <p>There is no Amazon Redshift HSM client certificate with the specified
 *             identifier.</p>
 *
 * @throws {@link InvalidTagFault} (client fault)
 *  <p>The tag is invalid.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class DescribeHsmClientCertificatesCommand extends $Command<
  DescribeHsmClientCertificatesCommandInput,
  DescribeHsmClientCertificatesCommandOutput,
  RedshiftClientResolvedConfig
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
  constructor(readonly input: DescribeHsmClientCertificatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeHsmClientCertificatesCommandInput, DescribeHsmClientCertificatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeHsmClientCertificatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeHsmClientCertificatesCommand";
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
  private serialize(input: DescribeHsmClientCertificatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeHsmClientCertificatesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeHsmClientCertificatesCommandOutput> {
    return de_DescribeHsmClientCertificatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
