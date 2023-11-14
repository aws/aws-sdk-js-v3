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

import { DescribeInboundIntegrationsMessage, InboundIntegrationsMessage } from "../models/models_1";
import { de_DescribeInboundIntegrationsCommand, se_DescribeInboundIntegrationsCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeInboundIntegrationsCommand}.
 */
export interface DescribeInboundIntegrationsCommandInput extends DescribeInboundIntegrationsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeInboundIntegrationsCommand}.
 */
export interface DescribeInboundIntegrationsCommandOutput extends InboundIntegrationsMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of inbound integrations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeInboundIntegrationsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeInboundIntegrationsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DescribeInboundIntegrationsMessage
 *   IntegrationArn: "STRING_VALUE",
 *   TargetArn: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeInboundIntegrationsCommand(input);
 * const response = await client.send(command);
 * // { // InboundIntegrationsMessage
 * //   Marker: "STRING_VALUE",
 * //   InboundIntegrations: [ // InboundIntegrationList
 * //     { // InboundIntegration
 * //       IntegrationArn: "STRING_VALUE",
 * //       SourceArn: "STRING_VALUE",
 * //       TargetArn: "STRING_VALUE",
 * //       Status: "creating" || "active" || "modifying" || "failed" || "deleting" || "syncing" || "needs_attention",
 * //       Errors: [ // IntegrationErrorList
 * //         { // IntegrationError
 * //           ErrorCode: "STRING_VALUE", // required
 * //           ErrorMessage: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CreateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeInboundIntegrationsCommandInput - {@link DescribeInboundIntegrationsCommandInput}
 * @returns {@link DescribeInboundIntegrationsCommandOutput}
 * @see {@link DescribeInboundIntegrationsCommandInput} for command's `input` shape.
 * @see {@link DescribeInboundIntegrationsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link IntegrationNotFoundFault} (client fault)
 *  <p>The integration can't be found.</p>
 *
 * @throws {@link InvalidNamespaceFault} (client fault)
 *  <p>The namespace isn't valid because the namespace doesn't exist. Provide a valid namespace.</p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class DescribeInboundIntegrationsCommand extends $Command<
  DescribeInboundIntegrationsCommandInput,
  DescribeInboundIntegrationsCommandOutput,
  RedshiftClientResolvedConfig
> {
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
  constructor(readonly input: DescribeInboundIntegrationsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeInboundIntegrationsCommandInput, DescribeInboundIntegrationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeInboundIntegrationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeInboundIntegrationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RedshiftServiceVersion20121201",
        operation: "DescribeInboundIntegrations",
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
  private serialize(input: DescribeInboundIntegrationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeInboundIntegrationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInboundIntegrationsCommandOutput> {
    return de_DescribeInboundIntegrationsCommand(output, context);
  }
}
