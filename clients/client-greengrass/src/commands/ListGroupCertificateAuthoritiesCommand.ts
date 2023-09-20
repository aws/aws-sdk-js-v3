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

import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListGroupCertificateAuthoritiesRequest, ListGroupCertificateAuthoritiesResponse } from "../models/models_0";
import {
  de_ListGroupCertificateAuthoritiesCommand,
  se_ListGroupCertificateAuthoritiesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListGroupCertificateAuthoritiesCommand}.
 */
export interface ListGroupCertificateAuthoritiesCommandInput extends ListGroupCertificateAuthoritiesRequest {}
/**
 * @public
 *
 * The output of {@link ListGroupCertificateAuthoritiesCommand}.
 */
export interface ListGroupCertificateAuthoritiesCommandOutput
  extends ListGroupCertificateAuthoritiesResponse,
    __MetadataBearer {}

/**
 * @public
 * Retrieves the current CAs for a group.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListGroupCertificateAuthoritiesCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListGroupCertificateAuthoritiesCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // ListGroupCertificateAuthoritiesRequest
 *   GroupId: "STRING_VALUE", // required
 * };
 * const command = new ListGroupCertificateAuthoritiesCommand(input);
 * const response = await client.send(command);
 * // { // ListGroupCertificateAuthoritiesResponse
 * //   GroupCertificateAuthorities: [ // __listOfGroupCertificateAuthorityProperties
 * //     { // GroupCertificateAuthorityProperties
 * //       GroupCertificateAuthorityArn: "STRING_VALUE",
 * //       GroupCertificateAuthorityId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListGroupCertificateAuthoritiesCommandInput - {@link ListGroupCertificateAuthoritiesCommandInput}
 * @returns {@link ListGroupCertificateAuthoritiesCommandOutput}
 * @see {@link ListGroupCertificateAuthoritiesCommandInput} for command's `input` shape.
 * @see {@link ListGroupCertificateAuthoritiesCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 */
export class ListGroupCertificateAuthoritiesCommand extends $Command<
  ListGroupCertificateAuthoritiesCommandInput,
  ListGroupCertificateAuthoritiesCommandOutput,
  GreengrassClientResolvedConfig
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
  constructor(readonly input: ListGroupCertificateAuthoritiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListGroupCertificateAuthoritiesCommandInput, ListGroupCertificateAuthoritiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListGroupCertificateAuthoritiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "ListGroupCertificateAuthoritiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Greengrass",
        operation: "ListGroupCertificateAuthorities",
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
    input: ListGroupCertificateAuthoritiesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListGroupCertificateAuthoritiesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListGroupCertificateAuthoritiesCommandOutput> {
    return de_ListGroupCertificateAuthoritiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
