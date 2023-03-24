// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  MarketplaceEntitlementServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceEntitlementServiceClient";
import { GetEntitlementsRequest, GetEntitlementsResult } from "../models/models_0";
import {
  deserializeAws_json1_1GetEntitlementsCommand,
  serializeAws_json1_1GetEntitlementsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link GetEntitlementsCommand}.
 */
export interface GetEntitlementsCommandInput extends GetEntitlementsRequest {}
/**
 * @public
 *
 * The output of {@link GetEntitlementsCommand}.
 */
export interface GetEntitlementsCommandOutput extends GetEntitlementsResult, __MetadataBearer {}

/**
 * @public
 * <p>GetEntitlements retrieves entitlement values for a given product. The results can be
 *       filtered based on customer identifier or product dimensions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceEntitlementServiceClient, GetEntitlementsCommand } from "@aws-sdk/client-marketplace-entitlement-service"; // ES Modules import
 * // const { MarketplaceEntitlementServiceClient, GetEntitlementsCommand } = require("@aws-sdk/client-marketplace-entitlement-service"); // CommonJS import
 * const client = new MarketplaceEntitlementServiceClient(config);
 * const input = {
 *   ProductCode: "STRING_VALUE", // required
 *   Filter: {
 *     "<keys>": [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetEntitlementsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetEntitlementsCommandInput - {@link GetEntitlementsCommandInput}
 * @returns {@link GetEntitlementsCommandOutput}
 * @see {@link GetEntitlementsCommandInput} for command's `input` shape.
 * @see {@link GetEntitlementsCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceEntitlementServiceClientResolvedConfig | config} for MarketplaceEntitlementServiceClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An internal error has occurred. Retry your request. If the problem persists, post a
 *    message with details on the AWS forums.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters in your request was invalid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The calls to the GetEntitlements API are throttled.</p>
 *
 *
 */
export class GetEntitlementsCommand extends $Command<
  GetEntitlementsCommandInput,
  GetEntitlementsCommandOutput,
  MarketplaceEntitlementServiceClientResolvedConfig
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
  constructor(readonly input: GetEntitlementsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MarketplaceEntitlementServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEntitlementsCommandInput, GetEntitlementsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetEntitlementsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MarketplaceEntitlementServiceClient";
    const commandName = "GetEntitlementsCommand";
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
  private serialize(input: GetEntitlementsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetEntitlementsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEntitlementsCommandOutput> {
    return deserializeAws_json1_1GetEntitlementsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
