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

import { UpdateSiteAddressInput, UpdateSiteAddressOutput } from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { de_UpdateSiteAddressCommand, se_UpdateSiteAddressCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateSiteAddressCommand}.
 */
export interface UpdateSiteAddressCommandInput extends UpdateSiteAddressInput {}
/**
 * @public
 *
 * The output of {@link UpdateSiteAddressCommand}.
 */
export interface UpdateSiteAddressCommandOutput extends UpdateSiteAddressOutput, __MetadataBearer {}

/**
 * @public
 * <p>Updates the address of the specified site.</p>
 *          <p>You can't update a site address if there is an order in progress. You must wait for the
 *       order to complete or cancel the order.</p>
 *          <p>You can update the operating address before you place an order at the site, or after all
 *       Outposts that belong to the site have been deactivated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, UpdateSiteAddressCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, UpdateSiteAddressCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const input = { // UpdateSiteAddressInput
 *   SiteId: "STRING_VALUE", // required
 *   AddressType: "SHIPPING_ADDRESS" || "OPERATING_ADDRESS", // required
 *   Address: { // Address
 *     ContactName: "STRING_VALUE",
 *     ContactPhoneNumber: "STRING_VALUE",
 *     AddressLine1: "STRING_VALUE", // required
 *     AddressLine2: "STRING_VALUE",
 *     AddressLine3: "STRING_VALUE",
 *     City: "STRING_VALUE", // required
 *     StateOrRegion: "STRING_VALUE", // required
 *     DistrictOrCounty: "STRING_VALUE",
 *     PostalCode: "STRING_VALUE", // required
 *     CountryCode: "STRING_VALUE", // required
 *     Municipality: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateSiteAddressCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSiteAddressOutput
 * //   AddressType: "SHIPPING_ADDRESS" || "OPERATING_ADDRESS",
 * //   Address: { // Address
 * //     ContactName: "STRING_VALUE",
 * //     ContactPhoneNumber: "STRING_VALUE",
 * //     AddressLine1: "STRING_VALUE", // required
 * //     AddressLine2: "STRING_VALUE",
 * //     AddressLine3: "STRING_VALUE",
 * //     City: "STRING_VALUE", // required
 * //     StateOrRegion: "STRING_VALUE", // required
 * //     DistrictOrCounty: "STRING_VALUE",
 * //     PostalCode: "STRING_VALUE", // required
 * //     CountryCode: "STRING_VALUE", // required
 * //     Municipality: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateSiteAddressCommandInput - {@link UpdateSiteAddressCommandInput}
 * @returns {@link UpdateSiteAddressCommandOutput}
 * @see {@link UpdateSiteAddressCommandInput} for command's `input` shape.
 * @see {@link UpdateSiteAddressCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting this resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified request is not valid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link OutpostsServiceException}
 * <p>Base exception class for all service exceptions from Outposts service.</p>
 *
 */
export class UpdateSiteAddressCommand extends $Command<
  UpdateSiteAddressCommandInput,
  UpdateSiteAddressCommandOutput,
  OutpostsClientResolvedConfig
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
  constructor(readonly input: UpdateSiteAddressCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OutpostsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSiteAddressCommandInput, UpdateSiteAddressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateSiteAddressCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OutpostsClient";
    const commandName = "UpdateSiteAddressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OutpostsOlafService",
        operation: "UpdateSiteAddress",
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
  private serialize(input: UpdateSiteAddressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateSiteAddressCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSiteAddressCommandOutput> {
    return de_UpdateSiteAddressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
