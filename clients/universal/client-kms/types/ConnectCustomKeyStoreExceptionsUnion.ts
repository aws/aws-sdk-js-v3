import { CloudHsmClusterNotActiveException } from "./CloudHsmClusterNotActiveException";
import { CustomKeyStoreInvalidStateException } from "./CustomKeyStoreInvalidStateException";
import { CustomKeyStoreNotFoundException } from "./CustomKeyStoreNotFoundException";
import { KMSInternalException } from "./KMSInternalException";
import { CloudHsmClusterInvalidConfigurationException } from "./CloudHsmClusterInvalidConfigurationException";
export type ConnectCustomKeyStoreExceptionsUnion =
  | CloudHsmClusterNotActiveException
  | CustomKeyStoreInvalidStateException
  | CustomKeyStoreNotFoundException
  | KMSInternalException
  | CloudHsmClusterInvalidConfigurationException;
