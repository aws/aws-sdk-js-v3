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

import { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import { GetDataSetDetailsRequest, GetDataSetDetailsResponse } from "../models/models_0";
import { de_GetDataSetDetailsCommand, se_GetDataSetDetailsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDataSetDetailsCommand}.
 */
export interface GetDataSetDetailsCommandInput extends GetDataSetDetailsRequest {}
/**
 * @public
 *
 * The output of {@link GetDataSetDetailsCommand}.
 */
export interface GetDataSetDetailsCommandOutput extends GetDataSetDetailsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the details of a specific data set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, GetDataSetDetailsCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, GetDataSetDetailsCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * const client = new M2Client(config);
 * const input = { // GetDataSetDetailsRequest
 *   applicationId: "STRING_VALUE", // required
 *   dataSetName: "STRING_VALUE", // required
 * };
 * const command = new GetDataSetDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetDataSetDetailsResponse
 * //   dataSetName: "STRING_VALUE", // required
 * //   dataSetOrg: { // DatasetDetailOrgAttributes Union: only one key present
 * //     vsam: { // VsamDetailAttributes
 * //       encoding: "STRING_VALUE",
 * //       recordFormat: "STRING_VALUE",
 * //       compressed: true || false,
 * //       cacheAtStartup: true || false,
 * //       primaryKey: { // PrimaryKey
 * //         name: "STRING_VALUE",
 * //         offset: Number("int"), // required
 * //         length: Number("int"), // required
 * //       },
 * //       alternateKeys: [ // AlternateKeyList
 * //         { // AlternateKey
 * //           name: "STRING_VALUE",
 * //           offset: Number("int"), // required
 * //           length: Number("int"), // required
 * //           allowDuplicates: true || false,
 * //         },
 * //       ],
 * //     },
 * //     gdg: { // GdgDetailAttributes
 * //       limit: Number("int"),
 * //       rollDisposition: "STRING_VALUE",
 * //     },
 * //     po: { // PoDetailAttributes
 * //       format: "STRING_VALUE", // required
 * //       encoding: "STRING_VALUE", // required
 * //     },
 * //     ps: { // PsDetailAttributes
 * //       format: "STRING_VALUE", // required
 * //       encoding: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   recordLength: Number("int"),
 * //   location: "STRING_VALUE",
 * //   blocksize: Number("int"),
 * //   creationTime: new Date("TIMESTAMP"),
 * //   lastUpdatedTime: new Date("TIMESTAMP"),
 * //   lastReferencedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetDataSetDetailsCommandInput - {@link GetDataSetDetailsCommandInput}
 * @returns {@link GetDataSetDetailsCommandOutput}
 * @see {@link GetDataSetDetailsCommandInput} for command's `input` shape.
 * @see {@link GetDataSetDetailsCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The account or role doesn't have the right permissions to make the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests made exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameters provided in the request is not valid.</p>
 *
 * @throws {@link M2ServiceException}
 * <p>Base exception class for all service exceptions from M2 service.</p>
 *
 */
export class GetDataSetDetailsCommand extends $Command<
  GetDataSetDetailsCommandInput,
  GetDataSetDetailsCommandOutput,
  M2ClientResolvedConfig
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
  constructor(readonly input: GetDataSetDetailsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: M2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDataSetDetailsCommandInput, GetDataSetDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDataSetDetailsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "M2Client";
    const commandName = "GetDataSetDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsSupernovaControlPlaneService",
        operation: "GetDataSetDetails",
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
  private serialize(input: GetDataSetDetailsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDataSetDetailsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDataSetDetailsCommandOutput> {
    return de_GetDataSetDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
