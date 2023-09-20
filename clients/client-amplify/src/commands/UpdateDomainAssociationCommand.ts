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

import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import { UpdateDomainAssociationRequest, UpdateDomainAssociationResult } from "../models/models_0";
import { de_UpdateDomainAssociationCommand, se_UpdateDomainAssociationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateDomainAssociationCommand}.
 */
export interface UpdateDomainAssociationCommandInput extends UpdateDomainAssociationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDomainAssociationCommand}.
 */
export interface UpdateDomainAssociationCommandOutput extends UpdateDomainAssociationResult, __MetadataBearer {}

/**
 * @public
 * <p> Creates a new domain association for an Amplify app.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, UpdateDomainAssociationCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, UpdateDomainAssociationCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const input = { // UpdateDomainAssociationRequest
 *   appId: "STRING_VALUE", // required
 *   domainName: "STRING_VALUE", // required
 *   enableAutoSubDomain: true || false,
 *   subDomainSettings: [ // SubDomainSettings
 *     { // SubDomainSetting
 *       prefix: "STRING_VALUE", // required
 *       branchName: "STRING_VALUE", // required
 *     },
 *   ],
 *   autoSubDomainCreationPatterns: [ // AutoSubDomainCreationPatterns
 *     "STRING_VALUE",
 *   ],
 *   autoSubDomainIAMRole: "STRING_VALUE",
 * };
 * const command = new UpdateDomainAssociationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDomainAssociationResult
 * //   domainAssociation: { // DomainAssociation
 * //     domainAssociationArn: "STRING_VALUE", // required
 * //     domainName: "STRING_VALUE", // required
 * //     enableAutoSubDomain: true || false, // required
 * //     autoSubDomainCreationPatterns: [ // AutoSubDomainCreationPatterns
 * //       "STRING_VALUE",
 * //     ],
 * //     autoSubDomainIAMRole: "STRING_VALUE",
 * //     domainStatus: "PENDING_VERIFICATION" || "IN_PROGRESS" || "AVAILABLE" || "PENDING_DEPLOYMENT" || "FAILED" || "CREATING" || "REQUESTING_CERTIFICATE" || "UPDATING", // required
 * //     statusReason: "STRING_VALUE", // required
 * //     certificateVerificationDNSRecord: "STRING_VALUE",
 * //     subDomains: [ // SubDomains // required
 * //       { // SubDomain
 * //         subDomainSetting: { // SubDomainSetting
 * //           prefix: "STRING_VALUE", // required
 * //           branchName: "STRING_VALUE", // required
 * //         },
 * //         verified: true || false, // required
 * //         dnsRecord: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateDomainAssociationCommandInput - {@link UpdateDomainAssociationCommandInput}
 * @returns {@link UpdateDomainAssociationCommandOutput}
 * @see {@link UpdateDomainAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainAssociationCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for AmplifyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p> A request contains unexpected data. </p>
 *
 * @throws {@link DependentServiceFailureException} (server fault)
 *  <p> An operation failed because a dependent service threw an exception. </p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p> The service failed to perform an operation due to an internal issue. </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p> An entity was not found during an operation. </p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p> An operation failed due to a lack of access. </p>
 *
 * @throws {@link AmplifyServiceException}
 * <p>Base exception class for all service exceptions from Amplify service.</p>
 *
 */
export class UpdateDomainAssociationCommand extends $Command<
  UpdateDomainAssociationCommandInput,
  UpdateDomainAssociationCommandOutput,
  AmplifyClientResolvedConfig
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
  constructor(readonly input: UpdateDomainAssociationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDomainAssociationCommandInput, UpdateDomainAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDomainAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyClient";
    const commandName = "UpdateDomainAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Amplify",
        operation: "UpdateDomainAssociation",
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
  private serialize(input: UpdateDomainAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateDomainAssociationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDomainAssociationCommandOutput> {
    return de_UpdateDomainAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
