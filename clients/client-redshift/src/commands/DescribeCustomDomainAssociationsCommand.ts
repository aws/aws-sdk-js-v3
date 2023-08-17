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

import { CustomDomainAssociationsMessage, DescribeCustomDomainAssociationsMessage } from "../models/models_0";
import {
  de_DescribeCustomDomainAssociationsCommand,
  se_DescribeCustomDomainAssociationsCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeCustomDomainAssociationsCommand}.
 */
export interface DescribeCustomDomainAssociationsCommandInput extends DescribeCustomDomainAssociationsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeCustomDomainAssociationsCommand}.
 */
export interface DescribeCustomDomainAssociationsCommandOutput
  extends CustomDomainAssociationsMessage,
    __MetadataBearer {}

/**
 * @public
 * <p>Contains information for custom domain associations for a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeCustomDomainAssociationsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeCustomDomainAssociationsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DescribeCustomDomainAssociationsMessage
 *   CustomDomainName: "STRING_VALUE",
 *   CustomDomainCertificateArn: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeCustomDomainAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // CustomDomainAssociationsMessage
 * //   Marker: "STRING_VALUE",
 * //   Associations: [ // AssociationList
 * //     { // Association
 * //       CustomDomainCertificateArn: "STRING_VALUE",
 * //       CustomDomainCertificateExpiryDate: new Date("TIMESTAMP"),
 * //       CertificateAssociations: [ // CertificateAssociationList
 * //         { // CertificateAssociation
 * //           CustomDomainName: "STRING_VALUE",
 * //           ClusterIdentifier: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeCustomDomainAssociationsCommandInput - {@link DescribeCustomDomainAssociationsCommandInput}
 * @returns {@link DescribeCustomDomainAssociationsCommandOutput}
 * @see {@link DescribeCustomDomainAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomDomainAssociationsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link CustomDomainAssociationNotFoundFault} (client fault)
 *  <p>An error occurred. The custom domain name couldn't be found.</p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class DescribeCustomDomainAssociationsCommand extends $Command<
  DescribeCustomDomainAssociationsCommandInput,
  DescribeCustomDomainAssociationsCommandOutput,
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
  constructor(readonly input: DescribeCustomDomainAssociationsCommandInput) {
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
  ): Handler<DescribeCustomDomainAssociationsCommandInput, DescribeCustomDomainAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCustomDomainAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeCustomDomainAssociationsCommand";
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
  private serialize(
    input: DescribeCustomDomainAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeCustomDomainAssociationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCustomDomainAssociationsCommandOutput> {
    return de_DescribeCustomDomainAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
