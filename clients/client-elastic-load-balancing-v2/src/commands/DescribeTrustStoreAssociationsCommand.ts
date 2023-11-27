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

import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { DescribeTrustStoreAssociationsInput, DescribeTrustStoreAssociationsOutput } from "../models/models_0";
import {
  de_DescribeTrustStoreAssociationsCommand,
  se_DescribeTrustStoreAssociationsCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTrustStoreAssociationsCommand}.
 */
export interface DescribeTrustStoreAssociationsCommandInput extends DescribeTrustStoreAssociationsInput {}
/**
 * @public
 *
 * The output of {@link DescribeTrustStoreAssociationsCommand}.
 */
export interface DescribeTrustStoreAssociationsCommandOutput
  extends DescribeTrustStoreAssociationsOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes all resources associated with the specified trust store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DescribeTrustStoreAssociationsCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DescribeTrustStoreAssociationsCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // DescribeTrustStoreAssociationsInput
 *   TrustStoreArn: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new DescribeTrustStoreAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTrustStoreAssociationsOutput
 * //   TrustStoreAssociations: [ // TrustStoreAssociations
 * //     { // TrustStoreAssociation
 * //       ResourceArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeTrustStoreAssociationsCommandInput - {@link DescribeTrustStoreAssociationsCommandInput}
 * @returns {@link DescribeTrustStoreAssociationsCommandOutput}
 * @see {@link DescribeTrustStoreAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeTrustStoreAssociationsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link TrustStoreNotFoundException} (client fault)
 *  <p>The specified trust store does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 */
export class DescribeTrustStoreAssociationsCommand extends $Command<
  DescribeTrustStoreAssociationsCommandInput,
  DescribeTrustStoreAssociationsCommandOutput,
  ElasticLoadBalancingV2ClientResolvedConfig
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
  constructor(readonly input: DescribeTrustStoreAssociationsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTrustStoreAssociationsCommandInput, DescribeTrustStoreAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTrustStoreAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "DescribeTrustStoreAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticLoadBalancing_v10",
        operation: "DescribeTrustStoreAssociations",
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
  private serialize(
    input: DescribeTrustStoreAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeTrustStoreAssociationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTrustStoreAssociationsCommandOutput> {
    return de_DescribeTrustStoreAssociationsCommand(output, context);
  }
}
