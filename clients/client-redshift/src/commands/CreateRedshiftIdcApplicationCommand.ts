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

import { CreateRedshiftIdcApplicationMessage, CreateRedshiftIdcApplicationResult } from "../models/models_0";
import { de_CreateRedshiftIdcApplicationCommand, se_CreateRedshiftIdcApplicationCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateRedshiftIdcApplicationCommand}.
 */
export interface CreateRedshiftIdcApplicationCommandInput extends CreateRedshiftIdcApplicationMessage {}
/**
 * @public
 *
 * The output of {@link CreateRedshiftIdcApplicationCommand}.
 */
export interface CreateRedshiftIdcApplicationCommandOutput
  extends CreateRedshiftIdcApplicationResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates an Amazon Redshift application for use with IAM Identity Center.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateRedshiftIdcApplicationCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateRedshiftIdcApplicationCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // CreateRedshiftIdcApplicationMessage
 *   IdcInstanceArn: "STRING_VALUE", // required
 *   RedshiftIdcApplicationName: "STRING_VALUE", // required
 *   IdentityNamespace: "STRING_VALUE",
 *   IdcDisplayName: "STRING_VALUE", // required
 *   IamRoleArn: "STRING_VALUE", // required
 *   AuthorizedTokenIssuerList: [ // AuthorizedTokenIssuerList
 *     { // AuthorizedTokenIssuer
 *       TrustedTokenIssuerArn: "STRING_VALUE",
 *       AuthorizedAudiencesList: [ // AuthorizedAudienceList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   ServiceIntegrations: [ // ServiceIntegrationList
 *     { // ServiceIntegrationsUnion Union: only one key present
 *       LakeFormation: [ // LakeFormationServiceIntegrations
 *         { // LakeFormationScopeUnion Union: only one key present
 *           LakeFormationQuery: { // LakeFormationQuery
 *             Authorization: "Enabled" || "Disabled", // required
 *           },
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new CreateRedshiftIdcApplicationCommand(input);
 * const response = await client.send(command);
 * // { // CreateRedshiftIdcApplicationResult
 * //   RedshiftIdcApplication: { // RedshiftIdcApplication
 * //     IdcInstanceArn: "STRING_VALUE",
 * //     RedshiftIdcApplicationName: "STRING_VALUE",
 * //     RedshiftIdcApplicationArn: "STRING_VALUE",
 * //     IdentityNamespace: "STRING_VALUE",
 * //     IdcDisplayName: "STRING_VALUE",
 * //     IamRoleArn: "STRING_VALUE",
 * //     IdcManagedApplicationArn: "STRING_VALUE",
 * //     IdcOnboardStatus: "STRING_VALUE",
 * //     AuthorizedTokenIssuerList: [ // AuthorizedTokenIssuerList
 * //       { // AuthorizedTokenIssuer
 * //         TrustedTokenIssuerArn: "STRING_VALUE",
 * //         AuthorizedAudiencesList: [ // AuthorizedAudienceList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     ServiceIntegrations: [ // ServiceIntegrationList
 * //       { // ServiceIntegrationsUnion Union: only one key present
 * //         LakeFormation: [ // LakeFormationServiceIntegrations
 * //           { // LakeFormationScopeUnion Union: only one key present
 * //             LakeFormationQuery: { // LakeFormationQuery
 * //               Authorization: "Enabled" || "Disabled", // required
 * //             },
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateRedshiftIdcApplicationCommandInput - {@link CreateRedshiftIdcApplicationCommandInput}
 * @returns {@link CreateRedshiftIdcApplicationCommandOutput}
 * @see {@link CreateRedshiftIdcApplicationCommandInput} for command's `input` shape.
 * @see {@link CreateRedshiftIdcApplicationCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link DependentServiceAccessDeniedFault} (client fault)
 *  <p>A dependent service denied access for the integration.</p>
 *
 * @throws {@link DependentServiceUnavailableFault} (client fault)
 *  <p>Your request cannot be completed because a dependent internal service is
 *             temporarily unavailable. Wait 30 to 60 seconds and try again.</p>
 *
 * @throws {@link RedshiftIdcApplicationAlreadyExistsFault} (client fault)
 *  <p>The application you attempted to add already exists.</p>
 *
 * @throws {@link RedshiftIdcApplicationQuotaExceededFault} (client fault)
 *  <p>The maximum number of Redshift IAM Identity Center applications was exceeded.</p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class CreateRedshiftIdcApplicationCommand extends $Command<
  CreateRedshiftIdcApplicationCommandInput,
  CreateRedshiftIdcApplicationCommandOutput,
  RedshiftClientResolvedConfig
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
  constructor(readonly input: CreateRedshiftIdcApplicationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateRedshiftIdcApplicationCommandInput, CreateRedshiftIdcApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateRedshiftIdcApplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "CreateRedshiftIdcApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RedshiftServiceVersion20121201",
        operation: "CreateRedshiftIdcApplication",
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
  private serialize(input: CreateRedshiftIdcApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateRedshiftIdcApplicationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateRedshiftIdcApplicationCommandOutput> {
    return de_CreateRedshiftIdcApplicationCommand(output, context);
  }
}
