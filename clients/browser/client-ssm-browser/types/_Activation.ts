import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>An activation registers one or more on-premises servers or virtual machines (VMs) with AWS so that you can configure those servers or VMs using Run Command. A server or VM that has been registered with AWS is called a managed instance.</p>
 */
export interface _Activation {
  /**
   * <p>The ID created by Systems Manager when you submitted the activation.</p>
   */
  ActivationId?: string;

  /**
   * <p>A user defined description of the activation.</p>
   */
  Description?: string;

  /**
   * <p>A name for the managed instance when it is created.</p>
   */
  DefaultInstanceName?: string;

  /**
   * <p>The Amazon Identity and Access Management (IAM) role to assign to the managed instance.</p>
   */
  IamRole?: string;

  /**
   * <p>The maximum number of managed instances that can be registered using this activation.</p>
   */
  RegistrationLimit?: number;

  /**
   * <p>The number of managed instances already registered with this activation.</p>
   */
  RegistrationsCount?: number;

  /**
   * <p>The date when this activation can no longer be used to register managed instances.</p>
   */
  ExpirationDate?: Date | string | number;

  /**
   * <p>Whether or not the activation is expired.</p>
   */
  Expired?: boolean;

  /**
   * <p>The date the activation was created.</p>
   */
  CreatedDate?: Date | string | number;

  /**
   * <p>Tags assigned to the activation.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledActivation extends _Activation {
  /**
   * <p>The date when this activation can no longer be used to register managed instances.</p>
   */
  ExpirationDate?: Date;

  /**
   * <p>The date the activation was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>Tags assigned to the activation.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
