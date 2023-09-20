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

import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { ListProvisionedCapacityInput, ListProvisionedCapacityOutput } from "../models/models_0";
import { de_ListProvisionedCapacityCommand, se_ListProvisionedCapacityCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListProvisionedCapacityCommand}.
 */
export interface ListProvisionedCapacityCommandInput extends ListProvisionedCapacityInput {}
/**
 * @public
 *
 * The output of {@link ListProvisionedCapacityCommand}.
 */
export interface ListProvisionedCapacityCommandOutput extends ListProvisionedCapacityOutput, __MetadataBearer {}

/**
 * @public
 * <p>This operation lists the provisioned capacity units for the specified AWS
 *          account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, ListProvisionedCapacityCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, ListProvisionedCapacityCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const input = { // ListProvisionedCapacityInput
 *   accountId: "STRING_VALUE", // required
 * };
 * const command = new ListProvisionedCapacityCommand(input);
 * const response = await client.send(command);
 * // { // ListProvisionedCapacityOutput
 * //   ProvisionedCapacityList: [ // ProvisionedCapacityList
 * //     { // ProvisionedCapacityDescription
 * //       CapacityId: "STRING_VALUE",
 * //       StartDate: "STRING_VALUE",
 * //       ExpirationDate: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListProvisionedCapacityCommandInput - {@link ListProvisionedCapacityCommandInput}
 * @returns {@link ListProvisionedCapacityCommandOutput}
 * @see {@link ListProvisionedCapacityCommandInput} for command's `input` shape.
 * @see {@link ListProvisionedCapacityCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for GlacierClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Returned if a parameter of the request is incorrectly specified.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Returned if a required header or parameter is missing from the request.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returned if the service cannot complete the request.</p>
 *
 * @throws {@link GlacierServiceException}
 * <p>Base exception class for all service exceptions from Glacier service.</p>
 *
 * @example To list the provisioned capacity units for an account
 * ```javascript
 * // The example lists the provisioned capacity units for an account.
 * const input = {
 *   "accountId": "-"
 * };
 * const command = new ListProvisionedCapacityCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ProvisionedCapacityList": [
 *     {
 *       "CapacityId": "zSaq7NzHFQDANTfQkDen4V7z",
 *       "ExpirationDate": "2016-12-12T00:00:00.000Z",
 *       "StartDate": "2016-11-11T20:11:51.095Z"
 *     },
 *     {
 *       "CapacityId": "yXaq7NzHFQNADTfQkDen4V7z",
 *       "ExpirationDate": "2017-01-15T00:00:00.000Z",
 *       "StartDate": "2016-12-13T20:11:51.095Z"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-list-the-provisioned-capacity-units-for-an-account-1481923656130
 * ```
 *
 */
export class ListProvisionedCapacityCommand extends $Command<
  ListProvisionedCapacityCommandInput,
  ListProvisionedCapacityCommandOutput,
  GlacierClientResolvedConfig
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
  constructor(readonly input: ListProvisionedCapacityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlacierClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListProvisionedCapacityCommandInput, ListProvisionedCapacityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListProvisionedCapacityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "ListProvisionedCapacityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Glacier",
        operation: "ListProvisionedCapacity",
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
  private serialize(input: ListProvisionedCapacityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListProvisionedCapacityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListProvisionedCapacityCommandOutput> {
    return de_ListProvisionedCapacityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
