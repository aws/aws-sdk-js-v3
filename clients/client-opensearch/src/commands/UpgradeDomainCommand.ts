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

import { UpgradeDomainRequest, UpgradeDomainResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_UpgradeDomainCommand, se_UpgradeDomainCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpgradeDomainCommand}.
 */
export interface UpgradeDomainCommandInput extends UpgradeDomainRequest {}
/**
 * @public
 *
 * The output of {@link UpgradeDomainCommand}.
 */
export interface UpgradeDomainCommandOutput extends UpgradeDomainResponse, __MetadataBearer {}

/**
 * @public
 * <p>Allows you to either upgrade your Amazon OpenSearch Service domain or perform an upgrade
 *    eligibility check to a compatible version of OpenSearch or Elasticsearch.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, UpgradeDomainCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, UpgradeDomainCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // UpgradeDomainRequest
 *   DomainName: "STRING_VALUE", // required
 *   TargetVersion: "STRING_VALUE", // required
 *   PerformCheckOnly: true || false,
 *   AdvancedOptions: { // AdvancedOptions
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new UpgradeDomainCommand(input);
 * const response = await client.send(command);
 * // { // UpgradeDomainResponse
 * //   UpgradeId: "STRING_VALUE",
 * //   DomainName: "STRING_VALUE",
 * //   TargetVersion: "STRING_VALUE",
 * //   PerformCheckOnly: true || false,
 * //   AdvancedOptions: { // AdvancedOptions
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   ChangeProgressDetails: { // ChangeProgressDetails
 * //     ChangeId: "STRING_VALUE",
 * //     Message: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpgradeDomainCommandInput - {@link UpgradeDomainCommandInput}
 * @returns {@link UpgradeDomainCommandOutput}
 * @see {@link UpgradeDomainCommandInput} for command's `input` shape.
 * @see {@link UpgradeDomainCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>An exception for creating a resource that already exists.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 */
export class UpgradeDomainCommand extends $Command<
  UpgradeDomainCommandInput,
  UpgradeDomainCommandOutput,
  OpenSearchClientResolvedConfig
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
  constructor(readonly input: UpgradeDomainCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpgradeDomainCommandInput, UpgradeDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpgradeDomainCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "UpgradeDomainCommand";
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
  private serialize(input: UpgradeDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpgradeDomainCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpgradeDomainCommandOutput> {
    return de_UpgradeDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
