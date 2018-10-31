import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The VPC that you're trying to disassociate from the private hosted zone is the last VPC that is associated with the hosted zone. Amazon Route 53 doesn't support disassociating the last VPC from a hosted zone.</p>
 */
export interface LastVPCAssociation extends __ServiceException__<_LastVPCAssociationDetails> {
    name: 'LastVPCAssociation';
}

export interface _LastVPCAssociationDetails {
    /**
     * <p>Descriptive message for the error response.</p>
     */
    message?: string;
}