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

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { GetListingInput, GetListingOutput, GetListingOutputFilterSensitiveLog } from "../models/models_0";
import { de_GetListingCommand, se_GetListingCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetListingCommand}.
 */
export interface GetListingCommandInput extends GetListingInput {}
/**
 * @public
 *
 * The output of {@link GetListingCommand}.
 */
export interface GetListingCommandOutput extends GetListingOutput, __MetadataBearer {}

/**
 * @public
 * <p/>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetListingCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetListingCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // GetListingInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   listingRevision: "STRING_VALUE",
 * };
 * const command = new GetListingCommand(input);
 * const response = await client.send(command);
 * // { // GetListingOutput
 * //   domainId: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   listingRevision: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   createdBy: "STRING_VALUE",
 * //   updatedBy: "STRING_VALUE",
 * //   item: { // ListingItem Union: only one key present
 * //     assetListing: { // AssetListing
 * //       assetId: "STRING_VALUE",
 * //       assetRevision: "STRING_VALUE",
 * //       assetType: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       forms: "STRING_VALUE",
 * //       glossaryTerms: [ // DetailedGlossaryTerms
 * //         { // DetailedGlossaryTerm
 * //           name: "STRING_VALUE",
 * //           shortDescription: "STRING_VALUE",
 * //         },
 * //       ],
 * //       owningProjectId: "STRING_VALUE",
 * //     },
 * //   },
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   status: "CREATING" || "ACTIVE" || "INACTIVE",
 * // };
 *
 * ```
 *
 * @param GetListingCommandInput - {@link GetListingCommandInput}
 * @returns {@link GetListingCommandOutput}
 * @see {@link GetListingCommandInput} for command's `input` shape.
 * @see {@link GetListingCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 */
export class GetListingCommand extends $Command<
  GetListingCommandInput,
  GetListingCommandOutput,
  DataZoneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetListingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataZoneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetListingCommandInput, GetListingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetListingCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataZoneClient";
    const commandName = "GetListingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetListingOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataZone",
        operation: "GetListing",
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
  private serialize(input: GetListingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetListingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetListingCommandOutput> {
    return de_GetListingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
