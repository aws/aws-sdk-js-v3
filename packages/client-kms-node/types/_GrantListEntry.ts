import {_GrantConstraints, _UnmarshalledGrantConstraints} from './_GrantConstraints';

/**
 * <p>Contains information about an entry in a list of grants.</p>
 */
export interface _GrantListEntry {
    /**
     * <p>The unique identifier for the customer master key (CMK) to which the grant applies.</p>
     */
    KeyId?: string;

    /**
     * <p>The unique identifier for the grant.</p>
     */
    GrantId?: string;

    /**
     * <p>The friendly name that identifies the grant. If a name was provided in the <a>CreateGrant</a> request, that name is returned. Otherwise this value is null.</p>
     */
    Name?: string;

    /**
     * <p>The date and time when the grant was created.</p>
     */
    CreationDate?: Date|string|number;

    /**
     * <p>The principal that receives the grant's permissions.</p>
     */
    GranteePrincipal?: string;

    /**
     * <p>The principal that can retire the grant.</p>
     */
    RetiringPrincipal?: string;

    /**
     * <p>The AWS account under which the grant was issued.</p>
     */
    IssuingAccount?: string;

    /**
     * <p>The list of operations permitted by the grant.</p>
     */
    Operations?: Array<'Decrypt'|'Encrypt'|'GenerateDataKey'|'GenerateDataKeyWithoutPlaintext'|'ReEncryptFrom'|'ReEncryptTo'|'CreateGrant'|'RetireGrant'|'DescribeKey'|string>|Iterable<'Decrypt'|'Encrypt'|'GenerateDataKey'|'GenerateDataKeyWithoutPlaintext'|'ReEncryptFrom'|'ReEncryptTo'|'CreateGrant'|'RetireGrant'|'DescribeKey'|string>;

    /**
     * <p>A list of key-value pairs that must be present in the encryption context of certain subsequent operations that the grant allows.</p>
     */
    Constraints?: _GrantConstraints;
}

export interface _UnmarshalledGrantListEntry extends _GrantListEntry {
    /**
     * <p>The date and time when the grant was created.</p>
     */
    CreationDate?: Date;

    /**
     * <p>The list of operations permitted by the grant.</p>
     */
    Operations?: Array<'Decrypt'|'Encrypt'|'GenerateDataKey'|'GenerateDataKeyWithoutPlaintext'|'ReEncryptFrom'|'ReEncryptTo'|'CreateGrant'|'RetireGrant'|'DescribeKey'|string>;

    /**
     * <p>A list of key-value pairs that must be present in the encryption context of certain subsequent operations that the grant allows.</p>
     */
    Constraints?: _UnmarshalledGrantConstraints;
}