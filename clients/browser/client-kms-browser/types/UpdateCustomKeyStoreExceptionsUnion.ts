import { CustomKeyStoreNotFoundException } from "./CustomKeyStoreNotFoundException";
import { CloudHsmClusterNotFoundException } from "./CloudHsmClusterNotFoundException";
import { CloudHsmClusterNotRelatedException } from "./CloudHsmClusterNotRelatedException";
import { CustomKeyStoreInvalidStateException } from "./CustomKeyStoreInvalidStateException";
import { KMSInternalException } from "./KMSInternalException";
import { CloudHsmClusterNotActiveException } from "./CloudHsmClusterNotActiveException";
import { CloudHsmClusterInvalidConfigurationException } from "./CloudHsmClusterInvalidConfigurationException";
export type UpdateCustomKeyStoreExceptionsUnion =
  | CustomKeyStoreNotFoundException
  | CloudHsmClusterNotFoundException
  | CloudHsmClusterNotRelatedException
  | CustomKeyStoreInvalidStateException
  | KMSInternalException
  | CloudHsmClusterNotActiveException
  | CloudHsmClusterInvalidConfigurationException;
