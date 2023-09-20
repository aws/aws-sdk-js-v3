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

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import {
  ListCalculatedAttributesForProfileRequest,
  ListCalculatedAttributesForProfileResponse,
} from "../models/models_0";
import {
  de_ListCalculatedAttributesForProfileCommand,
  se_ListCalculatedAttributesForProfileCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListCalculatedAttributesForProfileCommand}.
 */
export interface ListCalculatedAttributesForProfileCommandInput extends ListCalculatedAttributesForProfileRequest {}
/**
 * @public
 *
 * The output of {@link ListCalculatedAttributesForProfileCommand}.
 */
export interface ListCalculatedAttributesForProfileCommandOutput
  extends ListCalculatedAttributesForProfileResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieve a list of calculated attributes for a customer profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListCalculatedAttributesForProfileCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListCalculatedAttributesForProfileCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const input = { // ListCalculatedAttributesForProfileRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   DomainName: "STRING_VALUE", // required
 *   ProfileId: "STRING_VALUE", // required
 * };
 * const command = new ListCalculatedAttributesForProfileCommand(input);
 * const response = await client.send(command);
 * // { // ListCalculatedAttributesForProfileResponse
 * //   Items: [ // CalculatedAttributesForProfileList
 * //     { // ListCalculatedAttributeForProfileItem
 * //       CalculatedAttributeName: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //       IsDataPartial: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCalculatedAttributesForProfileCommandInput - {@link ListCalculatedAttributesForProfileCommandInput}
 * @returns {@link ListCalculatedAttributesForProfileCommandOutput}
 * @see {@link ListCalculatedAttributesForProfileCommandInput} for command's `input` shape.
 * @see {@link ListCalculatedAttributesForProfileCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 */
export class ListCalculatedAttributesForProfileCommand extends $Command<
  ListCalculatedAttributesForProfileCommandInput,
  ListCalculatedAttributesForProfileCommandOutput,
  CustomerProfilesClientResolvedConfig
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
  constructor(readonly input: ListCalculatedAttributesForProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CustomerProfilesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCalculatedAttributesForProfileCommandInput, ListCalculatedAttributesForProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCalculatedAttributesForProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "ListCalculatedAttributesForProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CustomerProfiles_20200815",
        operation: "ListCalculatedAttributesForProfile",
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
    input: ListCalculatedAttributesForProfileCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListCalculatedAttributesForProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCalculatedAttributesForProfileCommandOutput> {
    return de_ListCalculatedAttributesForProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
