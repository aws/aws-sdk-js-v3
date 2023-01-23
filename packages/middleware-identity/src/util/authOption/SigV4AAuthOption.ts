import { HttpAuthOption } from "../../configurations";
import { credentialDefaultProvider } from "../provider/credentialDefaultProvider";

export const SigV4AAuthOption: HttpAuthOption = {
  schemeId: "aws.auth#sigv4a",
  identityProperties: {
    credentialDefaultProvider,
  },
  signerProperties: {
    signingEscapePath: true,
    systemClockOffset: 0,
  },
};
