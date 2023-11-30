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
  MarketplaceDeploymentClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceDeploymentClient";
import {
  PutDeploymentParameterRequest,
  PutDeploymentParameterRequestFilterSensitiveLog,
  PutDeploymentParameterResponse,
} from "../models/models_0";
import { de_PutDeploymentParameterCommand, se_PutDeploymentParameterCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutDeploymentParameterCommand}.
 */
export interface PutDeploymentParameterCommandInput extends PutDeploymentParameterRequest {}
/**
 * @public
 *
 * The output of {@link PutDeploymentParameterCommand}.
 */
export interface PutDeploymentParameterCommandOutput extends PutDeploymentParameterResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates or updates a deployment parameter and is targeted by <code>catalog</code> and <code>agreementId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceDeploymentClient, PutDeploymentParameterCommand } from "@aws-sdk/client-marketplace-deployment"; // ES Modules import
 * // const { MarketplaceDeploymentClient, PutDeploymentParameterCommand } = require("@aws-sdk/client-marketplace-deployment"); // CommonJS import
 * const client = new MarketplaceDeploymentClient(config);
 * const input = { // PutDeploymentParameterRequest
 *   catalog: "STRING_VALUE", // required
 *   productId: "STRING_VALUE", // required
 *   agreementId: "STRING_VALUE", // required
 *   deploymentParameter: { // DeploymentParameterInput
 *     name: "STRING_VALUE", // required
 *     secretString: "STRING_VALUE", // required
 *   },
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   expirationDate: new Date("TIMESTAMP"),
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new PutDeploymentParameterCommand(input);
 * const response = await client.send(command);
 * // { // PutDeploymentParameterResponse
 * //   resourceArn: "STRING_VALUE", // required
 * //   agreementId: "STRING_VALUE", // required
 * //   deploymentParameterId: "STRING_VALUE", // required
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param PutDeploymentParameterCommandInput - {@link PutDeploymentParameterCommandInput}
 * @returns {@link PutDeploymentParameterCommandOutput}
 * @see {@link PutDeploymentParameterCommandInput} for command's `input` shape.
 * @see {@link PutDeploymentParameterCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceDeploymentClientResolvedConfig | config} for MarketplaceDeploymentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal service exception.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource wasn't found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The maximum number of requests per account has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Too many requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An error occurred during validation.</p>
 *
 * @throws {@link MarketplaceDeploymentServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceDeployment service.</p>
 *
 */
export class PutDeploymentParameterCommand extends $Command<
  PutDeploymentParameterCommandInput,
  PutDeploymentParameterCommandOutput,
  MarketplaceDeploymentClientResolvedConfig
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
  constructor(readonly input: PutDeploymentParameterCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MarketplaceDeploymentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutDeploymentParameterCommandInput, PutDeploymentParameterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutDeploymentParameterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MarketplaceDeploymentClient";
    const commandName = "PutDeploymentParameterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutDeploymentParameterRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSMPDeploymentParametersService",
        operation: "PutDeploymentParameter",
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
  private serialize(input: PutDeploymentParameterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutDeploymentParameterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutDeploymentParameterCommandOutput> {
    return de_PutDeploymentParameterCommand(output, context);
  }
}
