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

import { DescribeAddressRequest, DescribeAddressResult } from "../models/models_0";
import { de_DescribeAddressCommand, se_DescribeAddressCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAddressCommand}.
 */
export interface DescribeAddressCommandInput extends DescribeAddressRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAddressCommand}.
 */
export interface DescribeAddressCommandOutput extends DescribeAddressResult, __MetadataBearer {}

/**
 * @public
 * <p>Takes an <code>AddressId</code> and returns specific details about that address in the
 *       form of an <code>Address</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, DescribeAddressCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, DescribeAddressCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const input = { // DescribeAddressRequest
 *   AddressId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAddressCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAddressResult
 * //   Address: { // Address
 * //     AddressId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Company: "STRING_VALUE",
 * //     Street1: "STRING_VALUE",
 * //     Street2: "STRING_VALUE",
 * //     Street3: "STRING_VALUE",
 * //     City: "STRING_VALUE",
 * //     StateOrProvince: "STRING_VALUE",
 * //     PrefectureOrDistrict: "STRING_VALUE",
 * //     Landmark: "STRING_VALUE",
 * //     Country: "STRING_VALUE",
 * //     PostalCode: "STRING_VALUE",
 * //     PhoneNumber: "STRING_VALUE",
 * //     IsRestricted: true || false,
 * //     Type: "CUST_PICKUP" || "AWS_SHIP",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAddressCommandInput - {@link DescribeAddressCommandInput}
 * @returns {@link DescribeAddressCommandOutput}
 * @see {@link DescribeAddressCommandInput} for command's `input` shape.
 * @see {@link DescribeAddressCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link InvalidResourceException} (client fault)
 *  <p>The specified resource can't be found. Check the information you provided in your last
 *       request, and try again.</p>
 *
 * @throws {@link SnowballServiceException}
 * <p>Base exception class for all service exceptions from Snowball service.</p>
 *
 * @example To describe an address for a job
 * ```javascript
 * // This operation describes an address for a job.
 * const input = {
 *   "AddressId": "ADID1234ab12-3eec-4eb3-9be6-9374c10eb51b"
 * };
 * const command = new DescribeAddressCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Address": {
 *     "AddressId": "ADID5643ec50-3eec-4eb3-9be6-9374c10eb51b",
 *     "City": "Seattle",
 *     "Company": "My Company",
 *     "Country": "US",
 *     "Name": "My Name",
 *     "PhoneNumber": "425-555-5555",
 *     "PostalCode": "98101",
 *     "StateOrProvince": "WA",
 *     "Street1": "123 Main Street"
 *   }
 * }
 * *\/
 * // example id: to-describe-an-address-for-a-job-1482538608745
 * ```
 *
 */
export class DescribeAddressCommand extends $Command<
  DescribeAddressCommandInput,
  DescribeAddressCommandOutput,
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
  constructor(readonly input: DescribeAddressCommandInput) {
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
  ): Handler<DescribeAddressCommandInput, DescribeAddressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAddressCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "DescribeAddressCommand";
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
  private serialize(input: DescribeAddressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAddressCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAddressCommandOutput> {
    return de_DescribeAddressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
