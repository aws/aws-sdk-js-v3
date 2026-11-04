// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const EmissionsType = {
  /**
   * Total direct, indirect, and value chain emissions, calculated using GHG Protocol's Location-based method (LBM).
   */
  TOTAL_LBM_CARBON_EMISSIONS: "TOTAL_LBM_CARBON_EMISSIONS",
  /**
   * Total direct, indirect, and value chain emissions, calculated using GHG Protocol's Market-based method (MBM).
   */
  TOTAL_MBM_CARBON_EMISSIONS: "TOTAL_MBM_CARBON_EMISSIONS",
  /**
   * Total direct emissions from Amazon Web Services owned or controlled sources.
   */
  TOTAL_SCOPE_1_CARBON_EMISSIONS: "TOTAL_SCOPE_1_CARBON_EMISSIONS",
  /**
   * Total indirect emissions from the production of purchased energy, calculated using GHG Protocol's Location-based method (LBM).
   */
  TOTAL_SCOPE_2_LBM_CARBON_EMISSIONS: "TOTAL_SCOPE_2_LBM_CARBON_EMISSIONS",
  /**
   * Total indirect emissions from the production of purchased energy, calculated using GHG Protocol's Market-based method (MBM).
   */
  TOTAL_SCOPE_2_MBM_CARBON_EMISSIONS: "TOTAL_SCOPE_2_MBM_CARBON_EMISSIONS",
  /**
   * Total value chain emissions, calculated using GHG Protocol's Location-based method (LBM).
   */
  TOTAL_SCOPE_3_LBM_CARBON_EMISSIONS: "TOTAL_SCOPE_3_LBM_CARBON_EMISSIONS",
  /**
   * Total value chain emissions, calculated using GHG Protocol's Market-based method (MBM).
   */
  TOTAL_SCOPE_3_MBM_CARBON_EMISSIONS: "TOTAL_SCOPE_3_MBM_CARBON_EMISSIONS",
} as const;
/**
 * @public
 */
export type EmissionsType = (typeof EmissionsType)[keyof typeof EmissionsType];

/**
 * @public
 * @enum
 */
export const Dimension = {
  /**
   * The geographical area containing data center clusters where Amazon Web Services services are hosted.
   */
  REGION: "REGION",
  /**
   * The cloud computing product and solution offered by Amazon Web Services.
   */
  SERVICE: "SERVICE",
  /**
   * The account ID whose Amazon Web Services usage is associated with the estimated environmental impact data.
   */
  USAGE_ACCOUNT_ID: "USAGE_ACCOUNT_ID",
} as const;
/**
 * @public
 */
export type Dimension = (typeof Dimension)[keyof typeof Dimension];

/**
 * @public
 * @enum
 */
export const TimeGranularity = {
  /**
   * Environmental impact data aggregated by calendar month.
   */
  MONTHLY: "MONTHLY",
  /**
   * Environmental impact data aggregated over calendar quarter periods (Q1: Jan-Mar, Q2: Apr-Jun, Q3: Jul-Sep, Q4: Oct-Dec).
   */
  QUARTERLY_CALENDAR: "QUARTERLY_CALENDAR",
  /**
   * Environmental impact data aggregated over fiscal quarter periods based on the fiscal year start month specified in GranularityConfiguration.FiscalYearStartMonth.
   */
  QUARTERLY_FISCAL: "QUARTERLY_FISCAL",
  /**
   * Environmental impact data aggregated over calendar year periods (January-December).
   */
  YEARLY_CALENDAR: "YEARLY_CALENDAR",
  /**
   * Environmental impact data aggregated over fiscal year periods starting from the month specified in GranularityConfiguration.FiscalYearStartMonth.
   */
  YEARLY_FISCAL: "YEARLY_FISCAL",
} as const;
/**
 * @public
 */
export type TimeGranularity = (typeof TimeGranularity)[keyof typeof TimeGranularity];

/**
 * @public
 * @enum
 */
export const EmissionsUnit = {
  /**
   * Metric tons of carbon dioxide-equivalent (MTCO2e).
   */
  MT_CO2E: "MTCO2e",
} as const;
/**
 * @public
 */
export type EmissionsUnit = (typeof EmissionsUnit)[keyof typeof EmissionsUnit];

/**
 * @public
 * @enum
 */
export const WaterAllocationType = {
  /**
   * Total water drawn from surface water, groundwater, seawater, or a third party associated with Amazon Web Services account usage.
   */
  TOTAL_WATER_WITHDRAWALS: "TOTAL_WATER_WITHDRAWALS",
} as const;
/**
 * @public
 */
export type WaterAllocationType = (typeof WaterAllocationType)[keyof typeof WaterAllocationType];

/**
 * @public
 * @enum
 */
export const WaterAllocationUnit = {
  /**
   * Cubic meters of water.
   */
  CUBIC_METERS: "m3",
} as const;
/**
 * @public
 */
export type WaterAllocationUnit = (typeof WaterAllocationUnit)[keyof typeof WaterAllocationUnit];
