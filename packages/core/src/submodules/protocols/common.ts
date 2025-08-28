import { collectBody } from "@smithy/smithy-client";
import type { SerdeFunctions } from "@smithy/types";
import { toUtf8 } from "@smithy/util-utf8";

export const collectBodyString = (streamBody: any, context: SerdeFunctions): Promise<string> =>
  collectBody(streamBody, context).then((body) => (context?.utf8Encoder ?? toUtf8)(body));
