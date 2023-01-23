import { HttpAuthOption } from "../../configurations";
import { tokenDefaultProvider } from "../provider/tokenDefaultProvider";

export const HttpBearerAuthOption: HttpAuthOption = {
  schemeId: "smithy.api#httpBearerAuth",
  identityProperties: {
    tokenDefaultProvider,
  },
  signerProperties: {},
};
