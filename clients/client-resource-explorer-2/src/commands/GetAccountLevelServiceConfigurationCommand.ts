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

import { GetAccountLevelServiceConfigurationOutput } from "../models/models_0";
import {
  de_GetAccountLevelServiceConfigurationCommand,
  se_GetAccountLevelServiceConfigurationCommand,
} from "../protocols/Aws_restJson1";
import {
  ResourceExplorer2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceExplorer2Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAccountLevelServiceConfigurationCommand}.
 */
export interface GetAccountLevelServiceConfigurationCommandInput {}
/**
 * @public
 *
 * The output of {@link GetAccountLevelServiceConfigurationCommand}.
 */
export interface GetAccountLevelServiceConfigurationCommandOutput
  extends GetAccountLevelServiceConfigurationOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the status of your account's Amazon Web Services service access, and validates the service
 *             linked role required to access the multi-account search feature. Only the management
 *             account or a delegated administrator with service access enabled can invoke this API
 *             call. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, GetAccountLevelServiceConfigurationCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, GetAccountLevelServiceConfigurationCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * const client = new ResourceExplorer2Client(config);
 * const input = {};
 * const command = new GetAccountLevelServiceConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountLevelServiceConfigurationOutput
 * //   OrgConfiguration: { // OrgConfiguration
 * //     AWSServiceAccessStatus: "STRING_VALUE", // required
 * //     ServiceLinkedRole: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAccountLevelServiceConfigurationCommandInput - {@link GetAccountLevelServiceConfigurationCommandInput}
 * @returns {@link GetAccountLevelServiceConfigurationCommandOutput}
 * @see {@link GetAccountLevelServiceConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetAccountLevelServiceConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ResourceExplorer2ClientResolvedConfig | config} for ResourceExplorer2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The credentials that you used to call this operation don't have the minimum required
 *             permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed because of internal service error. Try your request again
 *             later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You specified a resource that doesn't exist. Check the ID or ARN that you used to
 *             identity the resource, and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request failed because you exceeded a rate limit for this operation. For more
 *             information, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/quotas.html">Quotas for
 *             Resource Explorer</a>.</p>
 *
 * @throws {@link ResourceExplorer2ServiceException}
 * <p>Base exception class for all service exceptions from ResourceExplorer2 service.</p>
 *
 */
export class GetAccountLevelServiceConfigurationCommand extends $Command<
  GetAccountLevelServiceConfigurationCommandInput,
  GetAccountLevelServiceConfigurationCommandOutput,
  ResourceExplorer2ClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetAccountLevelServiceConfigurationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResourceExplorer2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAccountLevelServiceConfigurationCommandInput, GetAccountLevelServiceConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAccountLevelServiceConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResourceExplorer2Client";
    const commandName = "GetAccountLevelServiceConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ResourceExplorer",
        operation: "GetAccountLevelServiceConfiguration",
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
    input: GetAccountLevelServiceConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetAccountLevelServiceConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetAccountLevelServiceConfigurationCommandOutput> {
    return de_GetAccountLevelServiceConfigurationCommand(output, context);
  }
}
