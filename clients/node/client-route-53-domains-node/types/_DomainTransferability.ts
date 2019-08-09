/**
 * <p>A complex type that contains information about whether the specified domain can be transferred to Amazon Route 53.</p>
 */
export interface _DomainTransferability {
  /**
   * <p>Whether the domain name can be transferred to Amazon Route 53.</p> <note> <p>You can transfer only domains that have a value of <code>TRANSFERABLE</code> for <code>Transferable</code>.</p> </note> <p>Valid values:</p> <dl> <dt>TRANSFERABLE</dt> <dd> <p>The domain name can be transferred to Amazon Route 53.</p> </dd> <dt>UNTRANSFERRABLE</dt> <dd> <p>The domain name can't be transferred to Amazon Route 53.</p> </dd> <dt>DONT_KNOW</dt> <dd> <p>Reserved for future use.</p> </dd> </dl>
   */
  Transferable?: "TRANSFERABLE" | "UNTRANSFERABLE" | "DONT_KNOW" | string;
}

export type _UnmarshalledDomainTransferability = _DomainTransferability;
