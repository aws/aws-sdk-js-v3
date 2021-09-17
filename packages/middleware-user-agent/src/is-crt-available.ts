import { UserAgentPair } from "@aws-sdk/types";

export const isCrtAvailable = async (): Promise<UserAgentPair | null> => {
  let crtVersion: string;
  try {
    crtVersion = (await import("aws-crt/package.json")).version;
  } catch (e) {
    // No aws-crt package available in the runtime.
    return null;
  }
  const uaPair: UserAgentPair = ["md/crt-avail"];
  // if version is parsable.
  if (crtVersion) uaPair.push(crtVersion);
  return uaPair;
};
