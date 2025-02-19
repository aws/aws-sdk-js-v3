import { collectBody } from "@smithy/smithy-client";
import type { SerdeFunctions } from "@smithy/types";

export const collectBodyString = (streamBody: any, context: SerdeFunctions): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
