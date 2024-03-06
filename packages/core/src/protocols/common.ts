import { collectBody } from "@smithy/smithy-client";
import type { HttpResponse, SerdeContext } from "@smithy/types";

export const collectBodyString = (streamBody: any, context: SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
