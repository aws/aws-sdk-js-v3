// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const EmissionsType = {
  /**
   * <p>Total direct, indirect, and value chain emissions, calculated using GHG Protocol's Location-based method (LBM).</p>
   */
  TOTAL_LBM_CARBON_EMISSIONS: "TOTAL_LBM_CARBON_EMISSIONS",
  /**
   * <p>Total direct, indirect, and value chain emissions, calculated using GHG Protocol's Market-based method (MBM).</p>
   */
  TOTAL_MBM_CARBON_EMISSIONS: "TOTAL_MBM_CARBON_EMISSIONS",
  /**
   * <p>Total direct emissions from Amazon Web Services owned or controlled sources.</p>
   */
  TOTAL_SCOPE_1_CARBON_EMISSIONS: "TOTAL_SCOPE_1_CARBON_EMISSIONS",
  /**
   * <p>Total indirect emissions from the production of purchased energy, calculated using GHG Protocol's Location-based method (LBM).</p>
   */
  TOTAL_SCOPE_2_LBM_CARBON_EMISSIONS: "TOTAL_SCOPE_2_LBM_CARBON_EMISSIONS",
  /**
   * <p>Total indirect emissions from the production of purchased energy, calculated using GHG Protocol's Market-based method (MBM).</p>
   */
  TOTAL_SCOPE_2_MBM_CARBON_EMISSIONS: "TOTAL_SCOPE_2_MBM_CARBON_EMISSIONS",
  /**
   * <p>Total value chain emissions, calculated using GHG Protocol's Location-based method (LBM).</p>
   */
  TOTAL_SCOPE_3_LBM_CARBON_EMISSIONS: "TOTAL_SCOPE_3_LBM_CARBON_EMISSIONS",
  /**
   * <p>Total value chain emissions, calculated using GHG Protocol's Market-based method (MBM).</p>
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
   * <p>The geographical area containing data center clusters where Amazon Web Services services are hosted.</p>
   */
  REGION: "REGION",
  /**
   * <p>The cloud computing product and solution offered by Amazon Web Services.</p>
   */
  SERVICE: "SERVICE",
  /**
   * <p>The account ID whose Amazon Web Services usage is associated with the estimated environmental impact data.</p>
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
   * <p>Environmental impact data aggregated by calendar month.</p>
   */
  MONTHLY: "MONTHLY",
  /**
   * <p>Environmental impact data aggregated over calendar quarter periods (Q1: Jan-Mar, Q2: Apr-Jun, Q3: Jul-Sep, Q4: Oct-Dec).</p>
   */
  QUARTERLY_CALENDAR: "QUARTERLY_CALENDAR",
  /**
   * <p>Environmental impact data aggregated over fiscal quarter periods based on the fiscal year start month specified in GranularityConfiguration.FiscalYearStartMonth.</p>
   */
  QUARTERLY_FISCAL: "QUARTERLY_FISCAL",
  /**
   * <p>Environmental impact data aggregated over calendar year periods (January-December).</p>
   */
  YEARLY_CALENDAR: "YEARLY_CALENDAR",
  /**
   * <p>Environmental impact data aggregated over fiscal year periods starting from the month specified in GranularityConfiguration.FiscalYearStartMonth.</p>
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
   * <p>Metric tons of carbon dioxide-equivalent (MTCO2e).</p>
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
   * <p>Total water drawn from surface water, groundwater, seawater, or a third party associated with Amazon Web Services account usage.</p>
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
   * <p>Cubic meters of water.</p>
   */
  CUBIC_METERS: "m3",
} as const;
/**
 * @public
 */
export type WaterAllocationUnit = (typeof WaterAllocationUnit)[keyof typeof WaterAllocationUnit];
