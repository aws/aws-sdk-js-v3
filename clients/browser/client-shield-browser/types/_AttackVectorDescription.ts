/**
 * <p>Describes the attack.</p>
 */
export interface _AttackVectorDescription {
  /**
   * <p>The attack type. Valid values:</p> <ul> <li> <p>UDP_TRAFFIC</p> </li> <li> <p>UDP_FRAGMENT</p> </li> <li> <p>GENERIC_UDP_REFLECTION</p> </li> <li> <p>DNS_REFLECTION</p> </li> <li> <p>NTP_REFLECTION</p> </li> <li> <p>CHARGEN_REFLECTION</p> </li> <li> <p>SSDP_REFLECTION</p> </li> <li> <p>PORT_MAPPER</p> </li> <li> <p>RIP_REFLECTION</p> </li> <li> <p>SNMP_REFLECTION</p> </li> <li> <p>MSSQL_REFLECTION</p> </li> <li> <p>NET_BIOS_REFLECTION</p> </li> <li> <p>SYN_FLOOD</p> </li> <li> <p>ACK_FLOOD</p> </li> <li> <p>REQUEST_FLOOD</p> </li> <li> <p>HTTP_REFLECTION</p> </li> <li> <p>UDS_REFLECTION</p> </li> <li> <p>MEMCACHED_REFLECTION</p> </li> </ul>
   */
  VectorType: string;
}

export type _UnmarshalledAttackVectorDescription = _AttackVectorDescription;
