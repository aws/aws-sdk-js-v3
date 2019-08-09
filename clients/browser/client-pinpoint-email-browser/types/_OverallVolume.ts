import {
  _VolumeStatistics,
  _UnmarshalledVolumeStatistics
} from "./_VolumeStatistics";
import {
  _DomainIspPlacement,
  _UnmarshalledDomainIspPlacement
} from "./_DomainIspPlacement";

/**
 * <p>An object that contains information about email that was sent from the selected domain.</p>
 */
export interface _OverallVolume {
  /**
   * <p>An object that contains information about the numbers of messages that arrived in recipients' inboxes and junk mail folders.</p>
   */
  VolumeStatistics?: _VolumeStatistics;

  /**
   * <p>The percentage of emails that were sent from the domain that were read by their recipients.</p>
   */
  ReadRatePercent?: number;

  /**
   * <p>An object that contains inbox and junk mail placement metrics for individual email providers.</p>
   */
  DomainIspPlacements?:
    | Array<_DomainIspPlacement>
    | Iterable<_DomainIspPlacement>;
}

export interface _UnmarshalledOverallVolume extends _OverallVolume {
  /**
   * <p>An object that contains information about the numbers of messages that arrived in recipients' inboxes and junk mail folders.</p>
   */
  VolumeStatistics?: _UnmarshalledVolumeStatistics;

  /**
   * <p>An object that contains inbox and junk mail placement metrics for individual email providers.</p>
   */
  DomainIspPlacements?: Array<_UnmarshalledDomainIspPlacement>;
}
