import {
  _NetworkFrameworkAttributes,
  _UnmarshalledNetworkFrameworkAttributes
} from "./_NetworkFrameworkAttributes";
import { _VotingPolicy, _UnmarshalledVotingPolicy } from "./_VotingPolicy";

/**
 * <p>Network configuration properties.</p>
 */
export interface _Network {
  /**
   * <p>The unique identifier of the network.</p>
   */
  Id?: string;

  /**
   * <p>The name of the network.</p>
   */
  Name?: string;

  /**
   * <p>Attributes of the blockchain framework for the network.</p>
   */
  Description?: string;

  /**
   * <p>The blockchain framework that the network uses.</p>
   */
  Framework?: "HYPERLEDGER_FABRIC" | string;

  /**
   * <p>The version of the blockchain framework that the network uses.</p>
   */
  FrameworkVersion?: string;

  /**
   * <p>Attributes of the blockchain framework that the network uses.</p>
   */
  FrameworkAttributes?: _NetworkFrameworkAttributes;

  /**
   * <p>The VPC endpoint service name of the VPC endpoint service of the network. Members use the VPC endpoint service name to create a VPC endpoint to access network resources.</p>
   */
  VpcEndpointServiceName?: string;

  /**
   * <p>The voting rules for the network to decide if a proposal is accepted.</p>
   */
  VotingPolicy?: _VotingPolicy;

  /**
   * <p>The current status of the network.</p>
   */
  Status?:
    | "CREATING"
    | "AVAILABLE"
    | "CREATE_FAILED"
    | "DELETING"
    | "DELETED"
    | string;

  /**
   * <p>The date and time that the network was created.</p>
   */
  CreationDate?: Date | string | number;
}

export interface _UnmarshalledNetwork extends _Network {
  /**
   * <p>Attributes of the blockchain framework that the network uses.</p>
   */
  FrameworkAttributes?: _UnmarshalledNetworkFrameworkAttributes;

  /**
   * <p>The voting rules for the network to decide if a proposal is accepted.</p>
   */
  VotingPolicy?: _UnmarshalledVotingPolicy;

  /**
   * <p>The date and time that the network was created.</p>
   */
  CreationDate?: Date;
}
