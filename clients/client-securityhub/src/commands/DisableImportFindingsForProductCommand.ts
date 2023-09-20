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

import { DisableImportFindingsForProductRequest, DisableImportFindingsForProductResponse } from "../models/models_2";
import {
  de_DisableImportFindingsForProductCommand,
  se_DisableImportFindingsForProductCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisableImportFindingsForProductCommand}.
 */
export interface DisableImportFindingsForProductCommandInput extends DisableImportFindingsForProductRequest {}
/**
 * @public
 *
 * The output of {@link DisableImportFindingsForProductCommand}.
 */
export interface DisableImportFindingsForProductCommandOutput
  extends DisableImportFindingsForProductResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Disables the integration of the specified product with Security Hub. After the integration is
 *          disabled, findings from that product are no longer sent to Security Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DisableImportFindingsForProductCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DisableImportFindingsForProductCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // DisableImportFindingsForProductRequest
 *   ProductSubscriptionArn: "STRING_VALUE", // required
 * };
 * const command = new DisableImportFindingsForProductCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableImportFindingsForProductCommandInput - {@link DisableImportFindingsForProductCommandInput}
 * @returns {@link DisableImportFindingsForProductCommandOutput}
 * @see {@link DisableImportFindingsForProductCommandInput} for command's `input` shape.
 * @see {@link DisableImportFindingsForProductCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @example To end a Security Hub integration
 * ```javascript
 * // The following example ends an integration between Security Hub and the specified product that sends findings to Security Hub. After the integration ends, the product no longer sends findings to Security  Hub.
 * const input = {
 *   "ProductSubscriptionArn": "arn:aws:securityhub:us-east-1:517716713836:product/crowdstrike/crowdstrike-falcon"
 * };
 * const command = new DisableImportFindingsForProductCommand(input);
 * await client.send(command);
 * // example id: to-end-a-security-hub-integration-1676480035650
 * ```
 *
 */
export class DisableImportFindingsForProductCommand extends $Command<
  DisableImportFindingsForProductCommandInput,
  DisableImportFindingsForProductCommandOutput,
  SecurityHubClientResolvedConfig
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
  constructor(readonly input: DisableImportFindingsForProductCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisableImportFindingsForProductCommandInput, DisableImportFindingsForProductCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisableImportFindingsForProductCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "DisableImportFindingsForProductCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SecurityHubAPIService",
        operation: "DisableImportFindingsForProduct",
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
    input: DisableImportFindingsForProductCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DisableImportFindingsForProductCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisableImportFindingsForProductCommandOutput> {
    return de_DisableImportFindingsForProductCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
