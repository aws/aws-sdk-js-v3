import { EndpointVariant } from "./EndpointVariant";

/**
 * The hash of partition with the information specific to that partition.
 * The information includes the list of regions belonging to that partition,
 * and the hostname to be used for the partition.
 */
export type PartitionHash = {
  [key: string]: {
    regions: string[];
    regionRegex: string;
    // TODO: Remove hostname after fully switching to variants.
    hostname: string;
    variants: EndpointVariant[];
    endpoint?: string;
  };
};
