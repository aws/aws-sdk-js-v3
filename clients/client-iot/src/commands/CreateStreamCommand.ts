// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateStreamRequest, CreateStreamResponse } from "../models/models_0";
import { CreateStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateStreamCommand}.
 */
export interface CreateStreamCommandInput extends CreateStreamRequest {}
/**
 * @public
 *
 * The output of {@link CreateStreamCommand}.
 */
export interface CreateStreamCommandOutput extends CreateStreamResponse, __MetadataBearer {}

/**
 * Creates a stream for delivering one or more large files in chunks over MQTT. A stream transports data bytes in chunks or blocks packaged as MQTT messages from a source like S3. You can have one or more files associated with a stream.
 *
 * Requires permission to access the [CreateStream](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateStreamCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateStreamCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // CreateStreamRequest
 *   streamId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   files: [ // StreamFiles // required
 *     { // StreamFile
 *       fileId: Number("int"),
 *       s3Location: { // S3Location
 *         bucket: "STRING_VALUE",
 *         key: "STRING_VALUE",
 *         version: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   roleArn: "STRING_VALUE", // required
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateStreamCommand(input);
 * const response = await client.send(command);
 * // { // CreateStreamResponse
 * //   streamId: "STRING_VALUE",
 * //   streamArn: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   streamVersion: Number("int"),
 * // };
 *
 * ```
 *
 * @param CreateStreamCommandInput - {@link CreateStreamCommandInput}
 * @returns {@link CreateStreamCommandOutput}
 * @see {@link CreateStreamCommandInput} for command's `input` shape.
 * @see {@link CreateStreamCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit has been exceeded.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * The resource already exists.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class CreateStreamCommand extends command<CreateStreamCommandInput, CreateStreamCommandOutput>(
  _ep0,
  _mw0,
  "CreateStream",
  CreateStream$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStreamRequest;
      output: CreateStreamResponse;
    };
    sdk: {
      input: CreateStreamCommandInput;
      output: CreateStreamCommandOutput;
    };
  };
}
