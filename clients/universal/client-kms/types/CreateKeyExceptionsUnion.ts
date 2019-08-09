import { MalformedPolicyDocumentException } from "./MalformedPolicyDocumentException";
import { DependencyTimeoutException } from "./DependencyTimeoutException";
import { InvalidArnException } from "./InvalidArnException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { KMSInternalException } from "./KMSInternalException";
import { LimitExceededException } from "./LimitExceededException";
import { TagException } from "./TagException";
import { CustomKeyStoreNotFoundException } from "./CustomKeyStoreNotFoundException";
import { CustomKeyStoreInvalidStateException } from "./CustomKeyStoreInvalidStateException";
import { CloudHsmClusterInvalidConfigurationException } from "./CloudHsmClusterInvalidConfigurationException";
export type CreateKeyExceptionsUnion =
  | MalformedPolicyDocumentException
  | DependencyTimeoutException
  | InvalidArnException
  | UnsupportedOperationException
  | KMSInternalException
  | LimitExceededException
  | TagException
  | CustomKeyStoreNotFoundException
  | CustomKeyStoreInvalidStateException
  | CloudHsmClusterInvalidConfigurationException;
