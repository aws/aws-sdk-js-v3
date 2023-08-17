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

import {
  CreateTrustAnchorRequest,
  CreateTrustAnchorRequestFilterSensitiveLog,
  TrustAnchorDetailResponse,
} from "../models/models_0";
import { de_CreateTrustAnchorCommand, se_CreateTrustAnchorCommand } from "../protocols/Aws_restJson1";
import { RolesAnywhereClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RolesAnywhereClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateTrustAnchorCommand}.
 */
export interface CreateTrustAnchorCommandInput extends CreateTrustAnchorRequest {}
/**
 * @public
 *
 * The output of {@link CreateTrustAnchorCommand}.
 */
export interface CreateTrustAnchorCommandOutput extends TrustAnchorDetailResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a trust anchor to establish trust between IAM Roles Anywhere and
 *          your certificate authority (CA). You can define a trust anchor as a reference to an Private Certificate Authority (Private CA) or by uploading a CA certificate. Your Amazon Web Services workloads can authenticate with the trust anchor using certificates issued by
 *          the CA in exchange for temporary Amazon Web Services credentials.</p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>rolesanywhere:CreateTrustAnchor</code>.
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RolesAnywhereClient, CreateTrustAnchorCommand } from "@aws-sdk/client-rolesanywhere"; // ES Modules import
 * // const { RolesAnywhereClient, CreateTrustAnchorCommand } = require("@aws-sdk/client-rolesanywhere"); // CommonJS import
 * const client = new RolesAnywhereClient(config);
 * const input = { // CreateTrustAnchorRequest
 *   name: "STRING_VALUE", // required
 *   source: { // Source
 *     sourceType: "STRING_VALUE",
 *     sourceData: { // SourceData Union: only one key present
 *       x509CertificateData: "STRING_VALUE",
 *       acmPcaArn: "STRING_VALUE",
 *     },
 *   },
 *   enabled: true || false,
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   notificationSettings: [ // NotificationSettings
 *     { // NotificationSetting
 *       enabled: true || false, // required
 *       event: "STRING_VALUE", // required
 *       threshold: Number("int"),
 *       channel: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateTrustAnchorCommand(input);
 * const response = await client.send(command);
 * // { // TrustAnchorDetailResponse
 * //   trustAnchor: { // TrustAnchorDetail
 * //     trustAnchorId: "STRING_VALUE",
 * //     trustAnchorArn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     source: { // Source
 * //       sourceType: "STRING_VALUE",
 * //       sourceData: { // SourceData Union: only one key present
 * //         x509CertificateData: "STRING_VALUE",
 * //         acmPcaArn: "STRING_VALUE",
 * //       },
 * //     },
 * //     enabled: true || false,
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     notificationSettings: [ // NotificationSettingDetails
 * //       { // NotificationSettingDetail
 * //         enabled: true || false, // required
 * //         event: "STRING_VALUE", // required
 * //         threshold: Number("int"),
 * //         channel: "STRING_VALUE",
 * //         configuredBy: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateTrustAnchorCommandInput - {@link CreateTrustAnchorCommandInput}
 * @returns {@link CreateTrustAnchorCommandOutput}
 * @see {@link CreateTrustAnchorCommandInput} for command's `input` shape.
 * @see {@link CreateTrustAnchorCommandOutput} for command's `response` shape.
 * @see {@link RolesAnywhereClientResolvedConfig | config} for RolesAnywhereClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 * @throws {@link RolesAnywhereServiceException}
 * <p>Base exception class for all service exceptions from RolesAnywhere service.</p>
 *
 */
export class CreateTrustAnchorCommand extends $Command<
  CreateTrustAnchorCommandInput,
  CreateTrustAnchorCommandOutput,
  RolesAnywhereClientResolvedConfig
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
  constructor(readonly input: CreateTrustAnchorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RolesAnywhereClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTrustAnchorCommandInput, CreateTrustAnchorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateTrustAnchorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RolesAnywhereClient";
    const commandName = "CreateTrustAnchorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTrustAnchorRequestFilterSensitiveLog,
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
  private serialize(input: CreateTrustAnchorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateTrustAnchorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTrustAnchorCommandOutput> {
    return de_CreateTrustAnchorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
