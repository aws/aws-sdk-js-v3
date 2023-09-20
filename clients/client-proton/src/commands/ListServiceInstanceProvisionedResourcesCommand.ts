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
  ListServiceInstanceProvisionedResourcesInput,
  ListServiceInstanceProvisionedResourcesOutput,
} from "../models/models_0";
import {
  de_ListServiceInstanceProvisionedResourcesCommand,
  se_ListServiceInstanceProvisionedResourcesCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListServiceInstanceProvisionedResourcesCommand}.
 */
export interface ListServiceInstanceProvisionedResourcesCommandInput
  extends ListServiceInstanceProvisionedResourcesInput {}
/**
 * @public
 *
 * The output of {@link ListServiceInstanceProvisionedResourcesCommand}.
 */
export interface ListServiceInstanceProvisionedResourcesCommandOutput
  extends ListServiceInstanceProvisionedResourcesOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>List provisioned resources for a service instance with details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListServiceInstanceProvisionedResourcesCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListServiceInstanceProvisionedResourcesCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = { // ListServiceInstanceProvisionedResourcesInput
 *   serviceName: "STRING_VALUE", // required
 *   serviceInstanceName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListServiceInstanceProvisionedResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceInstanceProvisionedResourcesOutput
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
 * @param ListServiceInstanceProvisionedResourcesCommandInput - {@link ListServiceInstanceProvisionedResourcesCommandInput}
 * @returns {@link ListServiceInstanceProvisionedResourcesCommandOutput}
 * @see {@link ListServiceInstanceProvisionedResourcesCommandInput} for command's `input` shape.
 * @see {@link ListServiceInstanceProvisionedResourcesCommandOutput} for command's `response` shape.
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
export class ListServiceInstanceProvisionedResourcesCommand extends $Command<
  ListServiceInstanceProvisionedResourcesCommandInput,
  ListServiceInstanceProvisionedResourcesCommandOutput,
  ProtonClientResolvedConfig
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
  constructor(readonly input: ListServiceInstanceProvisionedResourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ProtonClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListServiceInstanceProvisionedResourcesCommandInput,
    ListServiceInstanceProvisionedResourcesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        ListServiceInstanceProvisionedResourcesCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "ListServiceInstanceProvisionedResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsProton20200720",
        operation: "ListServiceInstanceProvisionedResources",
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
    input: ListServiceInstanceProvisionedResourcesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListServiceInstanceProvisionedResourcesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListServiceInstanceProvisionedResourcesCommandOutput> {
    return de_ListServiceInstanceProvisionedResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
