import { AWSClient, Command, MetadataBearer } from "@aws-sdk/types";
import { SignatureV4 } from "@aws-sdk/signature-v4";
import { createRequest } from "@aws-sdk/util-create-request";

export async function createS3presignedUrl<
  InputTypesUnion extends object,
  InputType extends InputTypesUnion,
  StreamType,
  OutputType extends MetadataBearer = MetadataBearer
>(
  client: AWSClient<InputTypesUnion, MetadataBearer, StreamType>,
  command: Command<
    InputTypesUnion,
    InputType,
    MetadataBearer,
    OutputType,
    any,
    StreamType
  >
) {
  const request = await createRequest<
    InputTypesUnion,
    InputType,
    StreamType,
    OutputType
  >(client, command);
  const signer = new SignatureV4({
    service: "s3",
    credentials: client.config
  });
}
