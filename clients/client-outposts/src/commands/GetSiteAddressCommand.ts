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

import { GetSiteAddressInput, GetSiteAddressOutput } from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { de_GetSiteAddressCommand, se_GetSiteAddressCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSiteAddressCommand}.
 */
export interface GetSiteAddressCommandInput extends GetSiteAddressInput {}
/**
 * @public
 *
 * The output of {@link GetSiteAddressCommand}.
 */
export interface GetSiteAddressCommandOutput extends GetSiteAddressOutput, __MetadataBearer {}

/**
 * @public
 * <p> Gets the site address of the specified site. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, GetSiteAddressCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, GetSiteAddressCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const input = { // GetSiteAddressInput
 *   SiteId: "STRING_VALUE", // required
 *   AddressType: "SHIPPING_ADDRESS" || "OPERATING_ADDRESS", // required
 * };
 * const command = new GetSiteAddressCommand(input);
 * const response = await client.send(command);
 * // { // GetSiteAddressOutput
 * //   SiteId: "STRING_VALUE",
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
 * @param GetSiteAddressCommandInput - {@link GetSiteAddressCommandInput}
 * @returns {@link GetSiteAddressCommandOutput}
 * @see {@link GetSiteAddressCommandInput} for command's `input` shape.
 * @see {@link GetSiteAddressCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this operation.</p>
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
export class GetSiteAddressCommand extends $Command<
  GetSiteAddressCommandInput,
  GetSiteAddressCommandOutput,
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
  constructor(readonly input: GetSiteAddressCommandInput) {
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
  ): Handler<GetSiteAddressCommandInput, GetSiteAddressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSiteAddressCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OutpostsClient";
    const commandName = "GetSiteAddressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OutpostsOlafService",
        operation: "GetSiteAddress",
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
  private serialize(input: GetSiteAddressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSiteAddressCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSiteAddressCommandOutput> {
    return de_GetSiteAddressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
