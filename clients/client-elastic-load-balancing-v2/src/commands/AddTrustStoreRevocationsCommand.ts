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
import { AddTrustStoreRevocationsInput, AddTrustStoreRevocationsOutput } from "../models/models_0";
import { de_AddTrustStoreRevocationsCommand, se_AddTrustStoreRevocationsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AddTrustStoreRevocationsCommand}.
 */
export interface AddTrustStoreRevocationsCommandInput extends AddTrustStoreRevocationsInput {}
/**
 * @public
 *
 * The output of {@link AddTrustStoreRevocationsCommand}.
 */
export interface AddTrustStoreRevocationsCommandOutput extends AddTrustStoreRevocationsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Adds the specified revocation file to the specified trust store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, AddTrustStoreRevocationsCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, AddTrustStoreRevocationsCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // AddTrustStoreRevocationsInput
 *   TrustStoreArn: "STRING_VALUE", // required
 *   RevocationContents: [ // RevocationContents
 *     { // RevocationContent
 *       S3Bucket: "STRING_VALUE",
 *       S3Key: "STRING_VALUE",
 *       S3ObjectVersion: "STRING_VALUE",
 *       RevocationType: "CRL",
 *     },
 *   ],
 * };
 * const command = new AddTrustStoreRevocationsCommand(input);
 * const response = await client.send(command);
 * // { // AddTrustStoreRevocationsOutput
 * //   TrustStoreRevocations: [ // TrustStoreRevocations
 * //     { // TrustStoreRevocation
 * //       TrustStoreArn: "STRING_VALUE",
 * //       RevocationId: Number("long"),
 * //       RevocationType: "CRL",
 * //       NumberOfRevokedEntries: Number("long"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AddTrustStoreRevocationsCommandInput - {@link AddTrustStoreRevocationsCommandInput}
 * @returns {@link AddTrustStoreRevocationsCommandOutput}
 * @see {@link AddTrustStoreRevocationsCommandInput} for command's `input` shape.
 * @see {@link AddTrustStoreRevocationsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link InvalidRevocationContentException} (client fault)
 *  <p>The provided revocation file is an invalid format, or uses an incorrect algorithm.</p>
 *
 * @throws {@link RevocationContentNotFoundException} (client fault)
 *  <p>The specified revocation file does not exist.</p>
 *
 * @throws {@link TooManyTrustStoreRevocationEntriesException} (client fault)
 *  <p>The specified trust store has too many revocation entries.</p>
 *
 * @throws {@link TrustStoreNotFoundException} (client fault)
 *  <p>The specified trust store does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 */
export class AddTrustStoreRevocationsCommand extends $Command<
  AddTrustStoreRevocationsCommandInput,
  AddTrustStoreRevocationsCommandOutput,
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
  constructor(readonly input: AddTrustStoreRevocationsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddTrustStoreRevocationsCommandInput, AddTrustStoreRevocationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddTrustStoreRevocationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "AddTrustStoreRevocationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticLoadBalancing_v10",
        operation: "AddTrustStoreRevocations",
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
  private serialize(input: AddTrustStoreRevocationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AddTrustStoreRevocationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddTrustStoreRevocationsCommandOutput> {
    return de_AddTrustStoreRevocationsCommand(output, context);
  }
}
