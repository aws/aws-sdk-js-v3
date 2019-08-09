import { CloudHsmClusterInUseException } from "./CloudHsmClusterInUseException";
import { CustomKeyStoreNameInUseException } from "./CustomKeyStoreNameInUseException";
import { CloudHsmClusterNotFoundException } from "./CloudHsmClusterNotFoundException";
import { KMSInternalException } from "./KMSInternalException";
import { CloudHsmClusterNotActiveException } from "./CloudHsmClusterNotActiveException";
import { IncorrectTrustAnchorException } from "./IncorrectTrustAnchorException";
import { CloudHsmClusterInvalidConfigurationException } from "./CloudHsmClusterInvalidConfigurationException";
export type CreateCustomKeyStoreExceptionsUnion =
  | CloudHsmClusterInUseException
  | CustomKeyStoreNameInUseException
  | CloudHsmClusterNotFoundException
  | KMSInternalException
  | CloudHsmClusterNotActiveException
  | IncorrectTrustAnchorException
  | CloudHsmClusterInvalidConfigurationException;
