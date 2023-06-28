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

import { ScalarSubjectRequest, SubjectDetailResponse } from "../models/models_0";
import { de_GetSubjectCommand, se_GetSubjectCommand } from "../protocols/Aws_restJson1";
import { RolesAnywhereClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RolesAnywhereClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSubjectCommand}.
 */
export interface GetSubjectCommandInput extends ScalarSubjectRequest {}
/**
 * @public
 *
 * The output of {@link GetSubjectCommand}.
 */
export interface GetSubjectCommandOutput extends SubjectDetailResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets a <i>subject</i>, which associates a certificate identity with
 *          authentication attempts. The subject stores auditing information such as the status
 *          of the last authentication attempt, the certificate data used in the attempt, and the
 *          last time the associated identity attempted authentication. </p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>rolesanywhere:GetSubject</code>.
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RolesAnywhereClient, GetSubjectCommand } from "@aws-sdk/client-rolesanywhere"; // ES Modules import
 * // const { RolesAnywhereClient, GetSubjectCommand } = require("@aws-sdk/client-rolesanywhere"); // CommonJS import
 * const client = new RolesAnywhereClient(config);
 * const input = { // ScalarSubjectRequest
 *   subjectId: "STRING_VALUE", // required
 * };
 * const command = new GetSubjectCommand(input);
 * const response = await client.send(command);
 * // { // SubjectDetailResponse
 * //   subject: { // SubjectDetail
 * //     subjectArn: "STRING_VALUE",
 * //     subjectId: "STRING_VALUE",
 * //     enabled: true || false,
 * //     x509Subject: "STRING_VALUE",
 * //     lastSeenAt: new Date("TIMESTAMP"),
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     credentials: [ // CredentialSummaries
 * //       { // CredentialSummary
 * //         seenAt: new Date("TIMESTAMP"),
 * //         serialNumber: "STRING_VALUE",
 * //         issuer: "STRING_VALUE",
 * //         enabled: true || false,
 * //         x509CertificateData: "STRING_VALUE",
 * //         failed: true || false,
 * //       },
 * //     ],
 * //     instanceProperties: [ // InstanceProperties
 * //       { // InstanceProperty
 * //         seenAt: new Date("TIMESTAMP"),
 * //         properties: { // InstancePropertyMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         failed: true || false,
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSubjectCommandInput - {@link GetSubjectCommandInput}
 * @returns {@link GetSubjectCommandOutput}
 * @see {@link GetSubjectCommandInput} for command's `input` shape.
 * @see {@link GetSubjectCommandOutput} for command's `response` shape.
 * @see {@link RolesAnywhereClientResolvedConfig | config} for RolesAnywhereClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link RolesAnywhereServiceException}
 * <p>Base exception class for all service exceptions from RolesAnywhere service.</p>
 *
 */
export class GetSubjectCommand extends $Command<
  GetSubjectCommandInput,
  GetSubjectCommandOutput,
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
  constructor(readonly input: GetSubjectCommandInput) {
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
  ): Handler<GetSubjectCommandInput, GetSubjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetSubjectCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RolesAnywhereClient";
    const commandName = "GetSubjectCommand";
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
  private serialize(input: GetSubjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSubjectCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSubjectCommandOutput> {
    return de_GetSubjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
