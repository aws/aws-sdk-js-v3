import { HttpAuthOption } from "../../configurations";

export const SignatureV4AuthOption: HttpAuthOption = {
  schemeId: "aws.auth#sigv4",
  identityProperties: {},
  signerProperties: {},
};
