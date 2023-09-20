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

import { CreateSiteInput, CreateSiteOutput } from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { de_CreateSiteCommand, se_CreateSiteCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateSiteCommand}.
 */
export interface CreateSiteCommandInput extends CreateSiteInput {}
/**
 * @public
 *
 * The output of {@link CreateSiteCommand}.
 */
export interface CreateSiteCommandOutput extends CreateSiteOutput, __MetadataBearer {}

/**
 * @public
 * <p> Creates a site for an Outpost. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, CreateSiteCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, CreateSiteCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const input = { // CreateSiteInput
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Notes: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   OperatingAddress: { // Address
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
 *   ShippingAddress: {
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
 *   RackPhysicalProperties: { // RackPhysicalProperties
 *     PowerDrawKva: "POWER_5_KVA" || "POWER_10_KVA" || "POWER_15_KVA" || "POWER_30_KVA",
 *     PowerPhase: "SINGLE_PHASE" || "THREE_PHASE",
 *     PowerConnector: "L6_30P" || "IEC309" || "AH530P7W" || "AH532P6W",
 *     PowerFeedDrop: "ABOVE_RACK" || "BELOW_RACK",
 *     UplinkGbps: "UPLINK_1G" || "UPLINK_10G" || "UPLINK_40G" || "UPLINK_100G",
 *     UplinkCount: "UPLINK_COUNT_1" || "UPLINK_COUNT_2" || "UPLINK_COUNT_3" || "UPLINK_COUNT_4" || "UPLINK_COUNT_5" || "UPLINK_COUNT_6" || "UPLINK_COUNT_7" || "UPLINK_COUNT_8" || "UPLINK_COUNT_12" || "UPLINK_COUNT_16",
 *     FiberOpticCableType: "SINGLE_MODE" || "MULTI_MODE",
 *     OpticalStandard: "OPTIC_10GBASE_SR" || "OPTIC_10GBASE_IR" || "OPTIC_10GBASE_LR" || "OPTIC_40GBASE_SR" || "OPTIC_40GBASE_ESR" || "OPTIC_40GBASE_IR4_LR4L" || "OPTIC_40GBASE_LR4" || "OPTIC_100GBASE_SR4" || "OPTIC_100GBASE_CWDM4" || "OPTIC_100GBASE_LR4" || "OPTIC_100G_PSM4_MSA" || "OPTIC_1000BASE_LX" || "OPTIC_1000BASE_SX",
 *     MaximumSupportedWeightLbs: "NO_LIMIT" || "MAX_1400_LBS" || "MAX_1600_LBS" || "MAX_1800_LBS" || "MAX_2000_LBS",
 *   },
 * };
 * const command = new CreateSiteCommand(input);
 * const response = await client.send(command);
 * // { // CreateSiteOutput
 * //   Site: { // Site
 * //     SiteId: "STRING_VALUE",
 * //     AccountId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     SiteArn: "STRING_VALUE",
 * //     Notes: "STRING_VALUE",
 * //     OperatingAddressCountryCode: "STRING_VALUE",
 * //     OperatingAddressStateOrRegion: "STRING_VALUE",
 * //     OperatingAddressCity: "STRING_VALUE",
 * //     RackPhysicalProperties: { // RackPhysicalProperties
 * //       PowerDrawKva: "POWER_5_KVA" || "POWER_10_KVA" || "POWER_15_KVA" || "POWER_30_KVA",
 * //       PowerPhase: "SINGLE_PHASE" || "THREE_PHASE",
 * //       PowerConnector: "L6_30P" || "IEC309" || "AH530P7W" || "AH532P6W",
 * //       PowerFeedDrop: "ABOVE_RACK" || "BELOW_RACK",
 * //       UplinkGbps: "UPLINK_1G" || "UPLINK_10G" || "UPLINK_40G" || "UPLINK_100G",
 * //       UplinkCount: "UPLINK_COUNT_1" || "UPLINK_COUNT_2" || "UPLINK_COUNT_3" || "UPLINK_COUNT_4" || "UPLINK_COUNT_5" || "UPLINK_COUNT_6" || "UPLINK_COUNT_7" || "UPLINK_COUNT_8" || "UPLINK_COUNT_12" || "UPLINK_COUNT_16",
 * //       FiberOpticCableType: "SINGLE_MODE" || "MULTI_MODE",
 * //       OpticalStandard: "OPTIC_10GBASE_SR" || "OPTIC_10GBASE_IR" || "OPTIC_10GBASE_LR" || "OPTIC_40GBASE_SR" || "OPTIC_40GBASE_ESR" || "OPTIC_40GBASE_IR4_LR4L" || "OPTIC_40GBASE_LR4" || "OPTIC_100GBASE_SR4" || "OPTIC_100GBASE_CWDM4" || "OPTIC_100GBASE_LR4" || "OPTIC_100G_PSM4_MSA" || "OPTIC_1000BASE_LX" || "OPTIC_1000BASE_SX",
 * //       MaximumSupportedWeightLbs: "NO_LIMIT" || "MAX_1400_LBS" || "MAX_1600_LBS" || "MAX_1800_LBS" || "MAX_2000_LBS",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSiteCommandInput - {@link CreateSiteCommandInput}
 * @returns {@link CreateSiteCommandOutput}
 * @see {@link CreateSiteCommandInput} for command's `input` shape.
 * @see {@link CreateSiteCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded a service quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link OutpostsServiceException}
 * <p>Base exception class for all service exceptions from Outposts service.</p>
 *
 */
export class CreateSiteCommand extends $Command<
  CreateSiteCommandInput,
  CreateSiteCommandOutput,
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
  constructor(readonly input: CreateSiteCommandInput) {
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
  ): Handler<CreateSiteCommandInput, CreateSiteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateSiteCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OutpostsClient";
    const commandName = "CreateSiteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OutpostsOlafService",
        operation: "CreateSite",
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
  private serialize(input: CreateSiteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateSiteCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSiteCommandOutput> {
    return de_CreateSiteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
