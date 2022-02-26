import { InstanceMetadataCredentials } from "../types";

const STATIC_STABILITY_REFRESH_INTERVAL_SECONDS = 15 * 60;
const STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS = 5 * 60;
// TODO
const STATIC_STABILITY_DOC_URL = "TBD";

export const getExtendedInstanceMetadataCredentials = (
  credentials: InstanceMetadataCredentials
): InstanceMetadataCredentials => {
  const refreshInterval =
    STATIC_STABILITY_REFRESH_INTERVAL_SECONDS +
    Math.floor(Math.random() * STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS);
  const newExpiration = new Date(Date.now() + refreshInterval * 1000);
  // ToDo: Call warn function on logger from configuration
  console.warn(
    "SDK cannot renew the credential from IMDS service. Extending the expiration of existing credentials " +
      `to ${new Date(newExpiration)}.\nFor more information, please visit: ${STATIC_STABILITY_DOC_URL}`
  );
  const originalExpiration = credentials.originalExpiration ?? credentials.expiration;
  return {
    ...credentials,
    ...(originalExpiration ? { originalExpiration } : {}),
    expiration: newExpiration,
  };
};
