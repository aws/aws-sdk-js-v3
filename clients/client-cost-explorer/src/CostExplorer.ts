// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateAnomalyMonitorCommand,
  CreateAnomalyMonitorCommandInput,
  CreateAnomalyMonitorCommandOutput,
} from "./commands/CreateAnomalyMonitorCommand";
import {
  CreateAnomalySubscriptionCommand,
  CreateAnomalySubscriptionCommandInput,
  CreateAnomalySubscriptionCommandOutput,
} from "./commands/CreateAnomalySubscriptionCommand";
import {
  CreateCostCategoryDefinitionCommand,
  CreateCostCategoryDefinitionCommandInput,
  CreateCostCategoryDefinitionCommandOutput,
} from "./commands/CreateCostCategoryDefinitionCommand";
import {
  DeleteAnomalyMonitorCommand,
  DeleteAnomalyMonitorCommandInput,
  DeleteAnomalyMonitorCommandOutput,
} from "./commands/DeleteAnomalyMonitorCommand";
import {
  DeleteAnomalySubscriptionCommand,
  DeleteAnomalySubscriptionCommandInput,
  DeleteAnomalySubscriptionCommandOutput,
} from "./commands/DeleteAnomalySubscriptionCommand";
import {
  DeleteCostCategoryDefinitionCommand,
  DeleteCostCategoryDefinitionCommandInput,
  DeleteCostCategoryDefinitionCommandOutput,
} from "./commands/DeleteCostCategoryDefinitionCommand";
import {
  DescribeCostCategoryDefinitionCommand,
  DescribeCostCategoryDefinitionCommandInput,
  DescribeCostCategoryDefinitionCommandOutput,
} from "./commands/DescribeCostCategoryDefinitionCommand";
import {
  GetAnomaliesCommand,
  GetAnomaliesCommandInput,
  GetAnomaliesCommandOutput,
} from "./commands/GetAnomaliesCommand";
import {
  GetAnomalyMonitorsCommand,
  GetAnomalyMonitorsCommandInput,
  GetAnomalyMonitorsCommandOutput,
} from "./commands/GetAnomalyMonitorsCommand";
import {
  GetAnomalySubscriptionsCommand,
  GetAnomalySubscriptionsCommandInput,
  GetAnomalySubscriptionsCommandOutput,
} from "./commands/GetAnomalySubscriptionsCommand";
import {
  GetCostAndUsageCommand,
  GetCostAndUsageCommandInput,
  GetCostAndUsageCommandOutput,
} from "./commands/GetCostAndUsageCommand";
import {
  GetCostAndUsageWithResourcesCommand,
  GetCostAndUsageWithResourcesCommandInput,
  GetCostAndUsageWithResourcesCommandOutput,
} from "./commands/GetCostAndUsageWithResourcesCommand";
import {
  GetCostCategoriesCommand,
  GetCostCategoriesCommandInput,
  GetCostCategoriesCommandOutput,
} from "./commands/GetCostCategoriesCommand";
import {
  GetCostForecastCommand,
  GetCostForecastCommandInput,
  GetCostForecastCommandOutput,
} from "./commands/GetCostForecastCommand";
import {
  GetDimensionValuesCommand,
  GetDimensionValuesCommandInput,
  GetDimensionValuesCommandOutput,
} from "./commands/GetDimensionValuesCommand";
import {
  GetReservationCoverageCommand,
  GetReservationCoverageCommandInput,
  GetReservationCoverageCommandOutput,
} from "./commands/GetReservationCoverageCommand";
import {
  GetReservationPurchaseRecommendationCommand,
  GetReservationPurchaseRecommendationCommandInput,
  GetReservationPurchaseRecommendationCommandOutput,
} from "./commands/GetReservationPurchaseRecommendationCommand";
import {
  GetReservationUtilizationCommand,
  GetReservationUtilizationCommandInput,
  GetReservationUtilizationCommandOutput,
} from "./commands/GetReservationUtilizationCommand";
import {
  GetRightsizingRecommendationCommand,
  GetRightsizingRecommendationCommandInput,
  GetRightsizingRecommendationCommandOutput,
} from "./commands/GetRightsizingRecommendationCommand";
import {
  GetSavingsPlanPurchaseRecommendationDetailsCommand,
  GetSavingsPlanPurchaseRecommendationDetailsCommandInput,
  GetSavingsPlanPurchaseRecommendationDetailsCommandOutput,
} from "./commands/GetSavingsPlanPurchaseRecommendationDetailsCommand";
import {
  GetSavingsPlansCoverageCommand,
  GetSavingsPlansCoverageCommandInput,
  GetSavingsPlansCoverageCommandOutput,
} from "./commands/GetSavingsPlansCoverageCommand";
import {
  GetSavingsPlansPurchaseRecommendationCommand,
  GetSavingsPlansPurchaseRecommendationCommandInput,
  GetSavingsPlansPurchaseRecommendationCommandOutput,
} from "./commands/GetSavingsPlansPurchaseRecommendationCommand";
import {
  GetSavingsPlansUtilizationCommand,
  GetSavingsPlansUtilizationCommandInput,
  GetSavingsPlansUtilizationCommandOutput,
} from "./commands/GetSavingsPlansUtilizationCommand";
import {
  GetSavingsPlansUtilizationDetailsCommand,
  GetSavingsPlansUtilizationDetailsCommandInput,
  GetSavingsPlansUtilizationDetailsCommandOutput,
} from "./commands/GetSavingsPlansUtilizationDetailsCommand";
import { GetTagsCommand, GetTagsCommandInput, GetTagsCommandOutput } from "./commands/GetTagsCommand";
import {
  GetUsageForecastCommand,
  GetUsageForecastCommandInput,
  GetUsageForecastCommandOutput,
} from "./commands/GetUsageForecastCommand";
import {
  ListCostAllocationTagsCommand,
  ListCostAllocationTagsCommandInput,
  ListCostAllocationTagsCommandOutput,
} from "./commands/ListCostAllocationTagsCommand";
import {
  ListCostCategoryDefinitionsCommand,
  ListCostCategoryDefinitionsCommandInput,
  ListCostCategoryDefinitionsCommandOutput,
} from "./commands/ListCostCategoryDefinitionsCommand";
import {
  ListSavingsPlansPurchaseRecommendationGenerationCommand,
  ListSavingsPlansPurchaseRecommendationGenerationCommandInput,
  ListSavingsPlansPurchaseRecommendationGenerationCommandOutput,
} from "./commands/ListSavingsPlansPurchaseRecommendationGenerationCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ProvideAnomalyFeedbackCommand,
  ProvideAnomalyFeedbackCommandInput,
  ProvideAnomalyFeedbackCommandOutput,
} from "./commands/ProvideAnomalyFeedbackCommand";
import {
  StartSavingsPlansPurchaseRecommendationGenerationCommand,
  StartSavingsPlansPurchaseRecommendationGenerationCommandInput,
  StartSavingsPlansPurchaseRecommendationGenerationCommandOutput,
} from "./commands/StartSavingsPlansPurchaseRecommendationGenerationCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAnomalyMonitorCommand,
  UpdateAnomalyMonitorCommandInput,
  UpdateAnomalyMonitorCommandOutput,
} from "./commands/UpdateAnomalyMonitorCommand";
import {
  UpdateAnomalySubscriptionCommand,
  UpdateAnomalySubscriptionCommandInput,
  UpdateAnomalySubscriptionCommandOutput,
} from "./commands/UpdateAnomalySubscriptionCommand";
import {
  UpdateCostAllocationTagsStatusCommand,
  UpdateCostAllocationTagsStatusCommandInput,
  UpdateCostAllocationTagsStatusCommandOutput,
} from "./commands/UpdateCostAllocationTagsStatusCommand";
import {
  UpdateCostCategoryDefinitionCommand,
  UpdateCostCategoryDefinitionCommandInput,
  UpdateCostCategoryDefinitionCommandOutput,
} from "./commands/UpdateCostCategoryDefinitionCommand";
import { CostExplorerClient, CostExplorerClientConfig } from "./CostExplorerClient";

const commands = {
  CreateAnomalyMonitorCommand,
  CreateAnomalySubscriptionCommand,
  CreateCostCategoryDefinitionCommand,
  DeleteAnomalyMonitorCommand,
  DeleteAnomalySubscriptionCommand,
  DeleteCostCategoryDefinitionCommand,
  DescribeCostCategoryDefinitionCommand,
  GetAnomaliesCommand,
  GetAnomalyMonitorsCommand,
  GetAnomalySubscriptionsCommand,
  GetCostAndUsageCommand,
  GetCostAndUsageWithResourcesCommand,
  GetCostCategoriesCommand,
  GetCostForecastCommand,
  GetDimensionValuesCommand,
  GetReservationCoverageCommand,
  GetReservationPurchaseRecommendationCommand,
  GetReservationUtilizationCommand,
  GetRightsizingRecommendationCommand,
  GetSavingsPlanPurchaseRecommendationDetailsCommand,
  GetSavingsPlansCoverageCommand,
  GetSavingsPlansPurchaseRecommendationCommand,
  GetSavingsPlansUtilizationCommand,
  GetSavingsPlansUtilizationDetailsCommand,
  GetTagsCommand,
  GetUsageForecastCommand,
  ListCostAllocationTagsCommand,
  ListCostCategoryDefinitionsCommand,
  ListSavingsPlansPurchaseRecommendationGenerationCommand,
  ListTagsForResourceCommand,
  ProvideAnomalyFeedbackCommand,
  StartSavingsPlansPurchaseRecommendationGenerationCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAnomalyMonitorCommand,
  UpdateAnomalySubscriptionCommand,
  UpdateCostAllocationTagsStatusCommand,
  UpdateCostCategoryDefinitionCommand,
};

export interface CostExplorer {
  /**
   * @see {@link CreateAnomalyMonitorCommand}
   */
  createAnomalyMonitor(
    args: CreateAnomalyMonitorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAnomalyMonitorCommandOutput>;
  createAnomalyMonitor(
    args: CreateAnomalyMonitorCommandInput,
    cb: (err: any, data?: CreateAnomalyMonitorCommandOutput) => void
  ): void;
  createAnomalyMonitor(
    args: CreateAnomalyMonitorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAnomalyMonitorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAnomalySubscriptionCommand}
   */
  createAnomalySubscription(
    args: CreateAnomalySubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAnomalySubscriptionCommandOutput>;
  createAnomalySubscription(
    args: CreateAnomalySubscriptionCommandInput,
    cb: (err: any, data?: CreateAnomalySubscriptionCommandOutput) => void
  ): void;
  createAnomalySubscription(
    args: CreateAnomalySubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAnomalySubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCostCategoryDefinitionCommand}
   */
  createCostCategoryDefinition(
    args: CreateCostCategoryDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCostCategoryDefinitionCommandOutput>;
  createCostCategoryDefinition(
    args: CreateCostCategoryDefinitionCommandInput,
    cb: (err: any, data?: CreateCostCategoryDefinitionCommandOutput) => void
  ): void;
  createCostCategoryDefinition(
    args: CreateCostCategoryDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCostCategoryDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAnomalyMonitorCommand}
   */
  deleteAnomalyMonitor(
    args: DeleteAnomalyMonitorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAnomalyMonitorCommandOutput>;
  deleteAnomalyMonitor(
    args: DeleteAnomalyMonitorCommandInput,
    cb: (err: any, data?: DeleteAnomalyMonitorCommandOutput) => void
  ): void;
  deleteAnomalyMonitor(
    args: DeleteAnomalyMonitorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAnomalyMonitorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAnomalySubscriptionCommand}
   */
  deleteAnomalySubscription(
    args: DeleteAnomalySubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAnomalySubscriptionCommandOutput>;
  deleteAnomalySubscription(
    args: DeleteAnomalySubscriptionCommandInput,
    cb: (err: any, data?: DeleteAnomalySubscriptionCommandOutput) => void
  ): void;
  deleteAnomalySubscription(
    args: DeleteAnomalySubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAnomalySubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCostCategoryDefinitionCommand}
   */
  deleteCostCategoryDefinition(
    args: DeleteCostCategoryDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCostCategoryDefinitionCommandOutput>;
  deleteCostCategoryDefinition(
    args: DeleteCostCategoryDefinitionCommandInput,
    cb: (err: any, data?: DeleteCostCategoryDefinitionCommandOutput) => void
  ): void;
  deleteCostCategoryDefinition(
    args: DeleteCostCategoryDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCostCategoryDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCostCategoryDefinitionCommand}
   */
  describeCostCategoryDefinition(
    args: DescribeCostCategoryDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCostCategoryDefinitionCommandOutput>;
  describeCostCategoryDefinition(
    args: DescribeCostCategoryDefinitionCommandInput,
    cb: (err: any, data?: DescribeCostCategoryDefinitionCommandOutput) => void
  ): void;
  describeCostCategoryDefinition(
    args: DescribeCostCategoryDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCostCategoryDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAnomaliesCommand}
   */
  getAnomalies(args: GetAnomaliesCommandInput, options?: __HttpHandlerOptions): Promise<GetAnomaliesCommandOutput>;
  getAnomalies(args: GetAnomaliesCommandInput, cb: (err: any, data?: GetAnomaliesCommandOutput) => void): void;
  getAnomalies(
    args: GetAnomaliesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAnomaliesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAnomalyMonitorsCommand}
   */
  getAnomalyMonitors(
    args: GetAnomalyMonitorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAnomalyMonitorsCommandOutput>;
  getAnomalyMonitors(
    args: GetAnomalyMonitorsCommandInput,
    cb: (err: any, data?: GetAnomalyMonitorsCommandOutput) => void
  ): void;
  getAnomalyMonitors(
    args: GetAnomalyMonitorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAnomalyMonitorsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAnomalySubscriptionsCommand}
   */
  getAnomalySubscriptions(
    args: GetAnomalySubscriptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAnomalySubscriptionsCommandOutput>;
  getAnomalySubscriptions(
    args: GetAnomalySubscriptionsCommandInput,
    cb: (err: any, data?: GetAnomalySubscriptionsCommandOutput) => void
  ): void;
  getAnomalySubscriptions(
    args: GetAnomalySubscriptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAnomalySubscriptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCostAndUsageCommand}
   */
  getCostAndUsage(
    args: GetCostAndUsageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCostAndUsageCommandOutput>;
  getCostAndUsage(args: GetCostAndUsageCommandInput, cb: (err: any, data?: GetCostAndUsageCommandOutput) => void): void;
  getCostAndUsage(
    args: GetCostAndUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCostAndUsageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCostAndUsageWithResourcesCommand}
   */
  getCostAndUsageWithResources(
    args: GetCostAndUsageWithResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCostAndUsageWithResourcesCommandOutput>;
  getCostAndUsageWithResources(
    args: GetCostAndUsageWithResourcesCommandInput,
    cb: (err: any, data?: GetCostAndUsageWithResourcesCommandOutput) => void
  ): void;
  getCostAndUsageWithResources(
    args: GetCostAndUsageWithResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCostAndUsageWithResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCostCategoriesCommand}
   */
  getCostCategories(
    args: GetCostCategoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCostCategoriesCommandOutput>;
  getCostCategories(
    args: GetCostCategoriesCommandInput,
    cb: (err: any, data?: GetCostCategoriesCommandOutput) => void
  ): void;
  getCostCategories(
    args: GetCostCategoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCostCategoriesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCostForecastCommand}
   */
  getCostForecast(
    args: GetCostForecastCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCostForecastCommandOutput>;
  getCostForecast(args: GetCostForecastCommandInput, cb: (err: any, data?: GetCostForecastCommandOutput) => void): void;
  getCostForecast(
    args: GetCostForecastCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCostForecastCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDimensionValuesCommand}
   */
  getDimensionValues(
    args: GetDimensionValuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDimensionValuesCommandOutput>;
  getDimensionValues(
    args: GetDimensionValuesCommandInput,
    cb: (err: any, data?: GetDimensionValuesCommandOutput) => void
  ): void;
  getDimensionValues(
    args: GetDimensionValuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDimensionValuesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReservationCoverageCommand}
   */
  getReservationCoverage(
    args: GetReservationCoverageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReservationCoverageCommandOutput>;
  getReservationCoverage(
    args: GetReservationCoverageCommandInput,
    cb: (err: any, data?: GetReservationCoverageCommandOutput) => void
  ): void;
  getReservationCoverage(
    args: GetReservationCoverageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReservationCoverageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReservationPurchaseRecommendationCommand}
   */
  getReservationPurchaseRecommendation(
    args: GetReservationPurchaseRecommendationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReservationPurchaseRecommendationCommandOutput>;
  getReservationPurchaseRecommendation(
    args: GetReservationPurchaseRecommendationCommandInput,
    cb: (err: any, data?: GetReservationPurchaseRecommendationCommandOutput) => void
  ): void;
  getReservationPurchaseRecommendation(
    args: GetReservationPurchaseRecommendationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReservationPurchaseRecommendationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReservationUtilizationCommand}
   */
  getReservationUtilization(
    args: GetReservationUtilizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReservationUtilizationCommandOutput>;
  getReservationUtilization(
    args: GetReservationUtilizationCommandInput,
    cb: (err: any, data?: GetReservationUtilizationCommandOutput) => void
  ): void;
  getReservationUtilization(
    args: GetReservationUtilizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReservationUtilizationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRightsizingRecommendationCommand}
   */
  getRightsizingRecommendation(
    args: GetRightsizingRecommendationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRightsizingRecommendationCommandOutput>;
  getRightsizingRecommendation(
    args: GetRightsizingRecommendationCommandInput,
    cb: (err: any, data?: GetRightsizingRecommendationCommandOutput) => void
  ): void;
  getRightsizingRecommendation(
    args: GetRightsizingRecommendationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRightsizingRecommendationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSavingsPlanPurchaseRecommendationDetailsCommand}
   */
  getSavingsPlanPurchaseRecommendationDetails(
    args: GetSavingsPlanPurchaseRecommendationDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSavingsPlanPurchaseRecommendationDetailsCommandOutput>;
  getSavingsPlanPurchaseRecommendationDetails(
    args: GetSavingsPlanPurchaseRecommendationDetailsCommandInput,
    cb: (err: any, data?: GetSavingsPlanPurchaseRecommendationDetailsCommandOutput) => void
  ): void;
  getSavingsPlanPurchaseRecommendationDetails(
    args: GetSavingsPlanPurchaseRecommendationDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSavingsPlanPurchaseRecommendationDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSavingsPlansCoverageCommand}
   */
  getSavingsPlansCoverage(
    args: GetSavingsPlansCoverageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSavingsPlansCoverageCommandOutput>;
  getSavingsPlansCoverage(
    args: GetSavingsPlansCoverageCommandInput,
    cb: (err: any, data?: GetSavingsPlansCoverageCommandOutput) => void
  ): void;
  getSavingsPlansCoverage(
    args: GetSavingsPlansCoverageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSavingsPlansCoverageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSavingsPlansPurchaseRecommendationCommand}
   */
  getSavingsPlansPurchaseRecommendation(
    args: GetSavingsPlansPurchaseRecommendationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSavingsPlansPurchaseRecommendationCommandOutput>;
  getSavingsPlansPurchaseRecommendation(
    args: GetSavingsPlansPurchaseRecommendationCommandInput,
    cb: (err: any, data?: GetSavingsPlansPurchaseRecommendationCommandOutput) => void
  ): void;
  getSavingsPlansPurchaseRecommendation(
    args: GetSavingsPlansPurchaseRecommendationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSavingsPlansPurchaseRecommendationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSavingsPlansUtilizationCommand}
   */
  getSavingsPlansUtilization(
    args: GetSavingsPlansUtilizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSavingsPlansUtilizationCommandOutput>;
  getSavingsPlansUtilization(
    args: GetSavingsPlansUtilizationCommandInput,
    cb: (err: any, data?: GetSavingsPlansUtilizationCommandOutput) => void
  ): void;
  getSavingsPlansUtilization(
    args: GetSavingsPlansUtilizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSavingsPlansUtilizationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSavingsPlansUtilizationDetailsCommand}
   */
  getSavingsPlansUtilizationDetails(
    args: GetSavingsPlansUtilizationDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSavingsPlansUtilizationDetailsCommandOutput>;
  getSavingsPlansUtilizationDetails(
    args: GetSavingsPlansUtilizationDetailsCommandInput,
    cb: (err: any, data?: GetSavingsPlansUtilizationDetailsCommandOutput) => void
  ): void;
  getSavingsPlansUtilizationDetails(
    args: GetSavingsPlansUtilizationDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSavingsPlansUtilizationDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTagsCommand}
   */
  getTags(args: GetTagsCommandInput, options?: __HttpHandlerOptions): Promise<GetTagsCommandOutput>;
  getTags(args: GetTagsCommandInput, cb: (err: any, data?: GetTagsCommandOutput) => void): void;
  getTags(
    args: GetTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUsageForecastCommand}
   */
  getUsageForecast(
    args: GetUsageForecastCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUsageForecastCommandOutput>;
  getUsageForecast(
    args: GetUsageForecastCommandInput,
    cb: (err: any, data?: GetUsageForecastCommandOutput) => void
  ): void;
  getUsageForecast(
    args: GetUsageForecastCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUsageForecastCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCostAllocationTagsCommand}
   */
  listCostAllocationTags(
    args: ListCostAllocationTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCostAllocationTagsCommandOutput>;
  listCostAllocationTags(
    args: ListCostAllocationTagsCommandInput,
    cb: (err: any, data?: ListCostAllocationTagsCommandOutput) => void
  ): void;
  listCostAllocationTags(
    args: ListCostAllocationTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCostAllocationTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCostCategoryDefinitionsCommand}
   */
  listCostCategoryDefinitions(
    args: ListCostCategoryDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCostCategoryDefinitionsCommandOutput>;
  listCostCategoryDefinitions(
    args: ListCostCategoryDefinitionsCommandInput,
    cb: (err: any, data?: ListCostCategoryDefinitionsCommandOutput) => void
  ): void;
  listCostCategoryDefinitions(
    args: ListCostCategoryDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCostCategoryDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSavingsPlansPurchaseRecommendationGenerationCommand}
   */
  listSavingsPlansPurchaseRecommendationGeneration(
    args: ListSavingsPlansPurchaseRecommendationGenerationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSavingsPlansPurchaseRecommendationGenerationCommandOutput>;
  listSavingsPlansPurchaseRecommendationGeneration(
    args: ListSavingsPlansPurchaseRecommendationGenerationCommandInput,
    cb: (err: any, data?: ListSavingsPlansPurchaseRecommendationGenerationCommandOutput) => void
  ): void;
  listSavingsPlansPurchaseRecommendationGeneration(
    args: ListSavingsPlansPurchaseRecommendationGenerationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSavingsPlansPurchaseRecommendationGenerationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ProvideAnomalyFeedbackCommand}
   */
  provideAnomalyFeedback(
    args: ProvideAnomalyFeedbackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ProvideAnomalyFeedbackCommandOutput>;
  provideAnomalyFeedback(
    args: ProvideAnomalyFeedbackCommandInput,
    cb: (err: any, data?: ProvideAnomalyFeedbackCommandOutput) => void
  ): void;
  provideAnomalyFeedback(
    args: ProvideAnomalyFeedbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ProvideAnomalyFeedbackCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSavingsPlansPurchaseRecommendationGenerationCommand}
   */
  startSavingsPlansPurchaseRecommendationGeneration(
    args: StartSavingsPlansPurchaseRecommendationGenerationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSavingsPlansPurchaseRecommendationGenerationCommandOutput>;
  startSavingsPlansPurchaseRecommendationGeneration(
    args: StartSavingsPlansPurchaseRecommendationGenerationCommandInput,
    cb: (err: any, data?: StartSavingsPlansPurchaseRecommendationGenerationCommandOutput) => void
  ): void;
  startSavingsPlansPurchaseRecommendationGeneration(
    args: StartSavingsPlansPurchaseRecommendationGenerationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSavingsPlansPurchaseRecommendationGenerationCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAnomalyMonitorCommand}
   */
  updateAnomalyMonitor(
    args: UpdateAnomalyMonitorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAnomalyMonitorCommandOutput>;
  updateAnomalyMonitor(
    args: UpdateAnomalyMonitorCommandInput,
    cb: (err: any, data?: UpdateAnomalyMonitorCommandOutput) => void
  ): void;
  updateAnomalyMonitor(
    args: UpdateAnomalyMonitorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAnomalyMonitorCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAnomalySubscriptionCommand}
   */
  updateAnomalySubscription(
    args: UpdateAnomalySubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAnomalySubscriptionCommandOutput>;
  updateAnomalySubscription(
    args: UpdateAnomalySubscriptionCommandInput,
    cb: (err: any, data?: UpdateAnomalySubscriptionCommandOutput) => void
  ): void;
  updateAnomalySubscription(
    args: UpdateAnomalySubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAnomalySubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCostAllocationTagsStatusCommand}
   */
  updateCostAllocationTagsStatus(
    args: UpdateCostAllocationTagsStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCostAllocationTagsStatusCommandOutput>;
  updateCostAllocationTagsStatus(
    args: UpdateCostAllocationTagsStatusCommandInput,
    cb: (err: any, data?: UpdateCostAllocationTagsStatusCommandOutput) => void
  ): void;
  updateCostAllocationTagsStatus(
    args: UpdateCostAllocationTagsStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCostAllocationTagsStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCostCategoryDefinitionCommand}
   */
  updateCostCategoryDefinition(
    args: UpdateCostCategoryDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCostCategoryDefinitionCommandOutput>;
  updateCostCategoryDefinition(
    args: UpdateCostCategoryDefinitionCommandInput,
    cb: (err: any, data?: UpdateCostCategoryDefinitionCommandOutput) => void
  ): void;
  updateCostCategoryDefinition(
    args: UpdateCostCategoryDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCostCategoryDefinitionCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>You can use the Cost Explorer API to programmatically query your cost and usage data.
 *       You can query for aggregated data such as total monthly costs or total daily usage. You can
 *       also query for granular data. This might include the number of daily write operations for
 *       Amazon DynamoDB database tables in your production environment. </p>
 *          <p>Service Endpoint</p>
 *          <p>The Cost Explorer API provides the following endpoint:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>https://ce.us-east-1.amazonaws.com</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>For information about the costs that are associated with the Cost Explorer API, see
 *         <a href="http://aws.amazon.com/aws-cost-management/pricing/">Amazon Web Services Cost
 *         Management Pricing</a>.</p>
 */
export class CostExplorer extends CostExplorerClient implements CostExplorer {}
createAggregatedClient(commands, CostExplorer);
