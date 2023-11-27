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
import { CreateTrustStoreInput, CreateTrustStoreOutput } from "../models/models_0";
import { de_CreateTrustStoreCommand, se_CreateTrustStoreCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateTrustStoreCommand}.
 */
export interface CreateTrustStoreCommandInput extends CreateTrustStoreInput {}
/**
 * @public
 *
 * The output of {@link CreateTrustStoreCommand}.
 */
export interface CreateTrustStoreCommandOutput extends CreateTrustStoreOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a trust store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, CreateTrustStoreCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, CreateTrustStoreCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // CreateTrustStoreInput
 *   Name: "STRING_VALUE", // required
 *   CaCertificatesBundleS3Bucket: "STRING_VALUE", // required
 *   CaCertificatesBundleS3Key: "STRING_VALUE", // required
 *   CaCertificatesBundleS3ObjectVersion: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateTrustStoreCommand(input);
 * const response = await client.send(command);
 * // { // CreateTrustStoreOutput
 * //   TrustStores: [ // TrustStores
 * //     { // TrustStore
 * //       Name: "STRING_VALUE",
 * //       TrustStoreArn: "STRING_VALUE",
 * //       Status: "ACTIVE" || "CREATING",
 * //       NumberOfCaCertificates: Number("int"),
 * //       TotalRevokedEntries: Number("long"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateTrustStoreCommandInput - {@link CreateTrustStoreCommandInput}
 * @returns {@link CreateTrustStoreCommandOutput}
 * @see {@link CreateTrustStoreCommandInput} for command's `input` shape.
 * @see {@link CreateTrustStoreCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link CaCertificatesBundleNotFoundException} (client fault)
 *  <p>The specified ca certificate bundle does not exist.</p>
 *
 * @throws {@link DuplicateTagKeysException} (client fault)
 *  <p>A tag key was specified more than once.</p>
 *
 * @throws {@link DuplicateTrustStoreNameException} (client fault)
 *  <p>A trust store with the specified name already exists.</p>
 *
 * @throws {@link InvalidCaCertificatesBundleException} (client fault)
 *  <p>The specified ca certificate bundle is in an invalid format, or corrupt.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>You've reached the limit on the number of tags for this resource.</p>
 *
 * @throws {@link TooManyTrustStoresException} (client fault)
 *  <p>You've reached the limit on the number of trust stores for your Amazon Web Services account.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 */
export class CreateTrustStoreCommand extends $Command<
  CreateTrustStoreCommandInput,
  CreateTrustStoreCommandOutput,
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
  constructor(readonly input: CreateTrustStoreCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTrustStoreCommandInput, CreateTrustStoreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateTrustStoreCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "CreateTrustStoreCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticLoadBalancing_v10",
        operation: "CreateTrustStore",
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
  private serialize(input: CreateTrustStoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateTrustStoreCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTrustStoreCommandOutput> {
    return de_CreateTrustStoreCommand(output, context);
  }
}
