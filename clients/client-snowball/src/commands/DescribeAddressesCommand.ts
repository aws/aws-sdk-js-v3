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

import { DescribeAddressesRequest, DescribeAddressesResult } from "../models/models_0";
import { de_DescribeAddressesCommand, se_DescribeAddressesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAddressesCommand}.
 */
export interface DescribeAddressesCommandInput extends DescribeAddressesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAddressesCommand}.
 */
export interface DescribeAddressesCommandOutput extends DescribeAddressesResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns a specified number of <code>ADDRESS</code> objects. Calling this API in one of
 *       the US regions will return addresses from the list of all addresses associated with this
 *       account in all US regions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, DescribeAddressesCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, DescribeAddressesCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const input = { // DescribeAddressesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeAddressesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAddressesResult
 * //   Addresses: [ // AddressList
 * //     { // Address
 * //       AddressId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Company: "STRING_VALUE",
 * //       Street1: "STRING_VALUE",
 * //       Street2: "STRING_VALUE",
 * //       Street3: "STRING_VALUE",
 * //       City: "STRING_VALUE",
 * //       StateOrProvince: "STRING_VALUE",
 * //       PrefectureOrDistrict: "STRING_VALUE",
 * //       Landmark: "STRING_VALUE",
 * //       Country: "STRING_VALUE",
 * //       PostalCode: "STRING_VALUE",
 * //       PhoneNumber: "STRING_VALUE",
 * //       IsRestricted: true || false,
 * //       Type: "CUST_PICKUP" || "AWS_SHIP",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAddressesCommandInput - {@link DescribeAddressesCommandInput}
 * @returns {@link DescribeAddressesCommandOutput}
 * @see {@link DescribeAddressesCommandInput} for command's `input` shape.
 * @see {@link DescribeAddressesCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> string was altered unexpectedly, and the operation has
 *       stopped. Run the operation without changing the <code>NextToken</code> string, and try
 *       again.</p>
 *
 * @throws {@link InvalidResourceException} (client fault)
 *  <p>The specified resource can't be found. Check the information you provided in your last
 *       request, and try again.</p>
 *
 * @throws {@link SnowballServiceException}
 * <p>Base exception class for all service exceptions from Snowball service.</p>
 *
 * @example To describe all the addresses you've created for AWS Snowball
 * ```javascript
 * // This operation describes all the addresses that you've created for AWS Snowball. Calling this API in one of the US regions will return addresses from the list of all addresses associated with this account in all US regions.
 * const input = {};
 * const command = new DescribeAddressesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Addresses": [
 *     {
 *       "AddressId": "ADID1234ab12-3eec-4eb3-9be6-9374c10eb51b",
 *       "City": "Seattle",
 *       "Company": "My Company",
 *       "Country": "US",
 *       "Name": "My Name",
 *       "PhoneNumber": "425-555-5555",
 *       "PostalCode": "98101",
 *       "StateOrProvince": "WA",
 *       "Street1": "123 Main Street"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-all-the-addresses-youve-created-for-aws-snowball-1482538936603
 * ```
 *
 */
export class DescribeAddressesCommand extends $Command<
  DescribeAddressesCommandInput,
  DescribeAddressesCommandOutput,
  SnowballClientResolvedConfig
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
  constructor(readonly input: DescribeAddressesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowballClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAddressesCommandInput, DescribeAddressesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAddressesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "DescribeAddressesCommand";
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
  private serialize(input: DescribeAddressesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAddressesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAddressesCommandOutput> {
    return de_DescribeAddressesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
