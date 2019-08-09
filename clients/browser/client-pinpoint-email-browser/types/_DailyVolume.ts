import {
  _VolumeStatistics,
  _UnmarshalledVolumeStatistics
} from "./_VolumeStatistics";
import {
  _DomainIspPlacement,
  _UnmarshalledDomainIspPlacement
} from "./_DomainIspPlacement";

/**
 * <p>An object that contains information about the volume of email sent on each day of the analysis period.</p>
 */
export interface _DailyVolume {
  /**
   * <p>The date that the DailyVolume metrics apply to, in Unix time.</p>
   */
  StartDate?: Date | string | number;

  /**
   * <p>An object that contains inbox placement metrics for a specific day in the analysis period.</p>
   */
  VolumeStatistics?: _VolumeStatistics;

  /**
   * <p>An object that contains inbox placement metrics for a specified day in the analysis period, broken out by the recipient's email provider.</p>
   */
  DomainIspPlacements?:
    | Array<_DomainIspPlacement>
    | Iterable<_DomainIspPlacement>;
}

export interface _UnmarshalledDailyVolume extends _DailyVolume {
  /**
   * <p>The date that the DailyVolume metrics apply to, in Unix time.</p>
   */
  StartDate?: Date;

  /**
   * <p>An object that contains inbox placement metrics for a specific day in the analysis period.</p>
   */
  VolumeStatistics?: _UnmarshalledVolumeStatistics;

  /**
   * <p>An object that contains inbox placement metrics for a specified day in the analysis period, broken out by the recipient's email provider.</p>
   */
  DomainIspPlacements?: Array<_UnmarshalledDomainIspPlacement>;
}
