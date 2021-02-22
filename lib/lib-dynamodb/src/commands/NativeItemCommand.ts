import { Command as $Command } from "@aws-sdk/smithy-client";
import { MetadataBearer } from "@aws-sdk/types";

import { TranslateConfiguration } from "./types";

export abstract class NativeItemCommand<
  Input extends ClientInput,
  Output extends ClientOutput,
  ResolvedClientConfiguration,
  ClientInput extends object = any,
  ClientOutput extends MetadataBearer = any
> extends $Command<Input, Output, ResolvedClientConfiguration, ClientInput, ClientOutput> {
  abstract translateConfiguration?: TranslateConfiguration;
}
