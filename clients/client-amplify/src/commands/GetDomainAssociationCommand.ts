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

import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import { GetDomainAssociationRequest, GetDomainAssociationResult } from "../models/models_0";
import { de_GetDomainAssociationCommand, se_GetDomainAssociationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDomainAssociationCommand}.
 */
export interface GetDomainAssociationCommandInput extends GetDomainAssociationRequest {}
/**
 * @public
 *
 * The output of {@link GetDomainAssociationCommand}.
 */
export interface GetDomainAssociationCommandOutput extends GetDomainAssociationResult, __MetadataBearer {}

/**
 * @public
 * <p> Returns the domain information for an Amplify app. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, GetDomainAssociationCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, GetDomainAssociationCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const input = { // GetDomainAssociationRequest
 *   appId: "STRING_VALUE", // required
 *   domainName: "STRING_VALUE", // required
 * };
 * const command = new GetDomainAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetDomainAssociationResult
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
 * @param GetDomainAssociationCommandInput - {@link GetDomainAssociationCommandInput}
 * @returns {@link GetDomainAssociationCommandOutput}
 * @see {@link GetDomainAssociationCommandInput} for command's `input` shape.
 * @see {@link GetDomainAssociationCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for AmplifyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p> A request contains unexpected data. </p>
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
export class GetDomainAssociationCommand extends $Command<
  GetDomainAssociationCommandInput,
  GetDomainAssociationCommandOutput,
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
  constructor(readonly input: GetDomainAssociationCommandInput) {
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
  ): Handler<GetDomainAssociationCommandInput, GetDomainAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDomainAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyClient";
    const commandName = "GetDomainAssociationCommand";
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
  private serialize(input: GetDomainAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDomainAssociationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDomainAssociationCommandOutput> {
    return de_GetDomainAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
