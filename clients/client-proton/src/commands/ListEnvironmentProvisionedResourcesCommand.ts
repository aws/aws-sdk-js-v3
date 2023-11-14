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
  ListEnvironmentProvisionedResourcesInput,
  ListEnvironmentProvisionedResourcesOutput,
} from "../models/models_0";
import {
  de_ListEnvironmentProvisionedResourcesCommand,
  se_ListEnvironmentProvisionedResourcesCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListEnvironmentProvisionedResourcesCommand}.
 */
export interface ListEnvironmentProvisionedResourcesCommandInput extends ListEnvironmentProvisionedResourcesInput {}
/**
 * @public
 *
 * The output of {@link ListEnvironmentProvisionedResourcesCommand}.
 */
export interface ListEnvironmentProvisionedResourcesCommandOutput
  extends ListEnvironmentProvisionedResourcesOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>List the provisioned resources for your environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListEnvironmentProvisionedResourcesCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListEnvironmentProvisionedResourcesCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = { // ListEnvironmentProvisionedResourcesInput
 *   environmentName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListEnvironmentProvisionedResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListEnvironmentProvisionedResourcesOutput
 * //   nextToken: "STRING_VALUE",
 * //   provisionedResources: [ // ProvisionedResourceList // required
 * //     { // ProvisionedResource
 * //       name: "STRING_VALUE",
 * //       identifier: "STRING_VALUE",
 * //       provisioningEngine: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListEnvironmentProvisionedResourcesCommandInput - {@link ListEnvironmentProvisionedResourcesCommandInput}
 * @returns {@link ListEnvironmentProvisionedResourcesCommandOutput}
 * @see {@link ListEnvironmentProvisionedResourcesCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentProvisionedResourcesCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed to register with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource <i>wasn't</i> found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input is invalid or an out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link ProtonServiceException}
 * <p>Base exception class for all service exceptions from Proton service.</p>
 *
 */
export class ListEnvironmentProvisionedResourcesCommand extends $Command<
  ListEnvironmentProvisionedResourcesCommandInput,
  ListEnvironmentProvisionedResourcesCommandOutput,
  ProtonClientResolvedConfig
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
  constructor(readonly input: ListEnvironmentProvisionedResourcesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ProtonClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEnvironmentProvisionedResourcesCommandInput, ListEnvironmentProvisionedResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEnvironmentProvisionedResourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "ListEnvironmentProvisionedResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsProton20200720",
        operation: "ListEnvironmentProvisionedResources",
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
    input: ListEnvironmentProvisionedResourcesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListEnvironmentProvisionedResourcesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListEnvironmentProvisionedResourcesCommandOutput> {
    return de_ListEnvironmentProvisionedResourcesCommand(output, context);
  }
}
