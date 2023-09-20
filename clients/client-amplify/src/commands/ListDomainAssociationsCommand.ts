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
import { ListDomainAssociationsRequest, ListDomainAssociationsResult } from "../models/models_0";
import { de_ListDomainAssociationsCommand, se_ListDomainAssociationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDomainAssociationsCommand}.
 */
export interface ListDomainAssociationsCommandInput extends ListDomainAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListDomainAssociationsCommand}.
 */
export interface ListDomainAssociationsCommandOutput extends ListDomainAssociationsResult, __MetadataBearer {}

/**
 * @public
 * <p> Returns the domain associations for an Amplify app. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, ListDomainAssociationsCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, ListDomainAssociationsCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const input = { // ListDomainAssociationsRequest
 *   appId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDomainAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListDomainAssociationsResult
 * //   domainAssociations: [ // DomainAssociations // required
 * //     { // DomainAssociation
 * //       domainAssociationArn: "STRING_VALUE", // required
 * //       domainName: "STRING_VALUE", // required
 * //       enableAutoSubDomain: true || false, // required
 * //       autoSubDomainCreationPatterns: [ // AutoSubDomainCreationPatterns
 * //         "STRING_VALUE",
 * //       ],
 * //       autoSubDomainIAMRole: "STRING_VALUE",
 * //       domainStatus: "PENDING_VERIFICATION" || "IN_PROGRESS" || "AVAILABLE" || "PENDING_DEPLOYMENT" || "FAILED" || "CREATING" || "REQUESTING_CERTIFICATE" || "UPDATING", // required
 * //       statusReason: "STRING_VALUE", // required
 * //       certificateVerificationDNSRecord: "STRING_VALUE",
 * //       subDomains: [ // SubDomains // required
 * //         { // SubDomain
 * //           subDomainSetting: { // SubDomainSetting
 * //             prefix: "STRING_VALUE", // required
 * //             branchName: "STRING_VALUE", // required
 * //           },
 * //           verified: true || false, // required
 * //           dnsRecord: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDomainAssociationsCommandInput - {@link ListDomainAssociationsCommandInput}
 * @returns {@link ListDomainAssociationsCommandOutput}
 * @see {@link ListDomainAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListDomainAssociationsCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for AmplifyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p> A request contains unexpected data. </p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p> The service failed to perform an operation due to an internal issue. </p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p> An operation failed due to a lack of access. </p>
 *
 * @throws {@link AmplifyServiceException}
 * <p>Base exception class for all service exceptions from Amplify service.</p>
 *
 */
export class ListDomainAssociationsCommand extends $Command<
  ListDomainAssociationsCommandInput,
  ListDomainAssociationsCommandOutput,
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
  constructor(readonly input: ListDomainAssociationsCommandInput) {
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
  ): Handler<ListDomainAssociationsCommandInput, ListDomainAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDomainAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyClient";
    const commandName = "ListDomainAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Amplify",
        operation: "ListDomainAssociations",
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
  private serialize(input: ListDomainAssociationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDomainAssociationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDomainAssociationsCommandOutput> {
    return de_ListDomainAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
