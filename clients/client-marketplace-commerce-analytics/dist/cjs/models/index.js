"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var DataSetType;
(function (DataSetType) {
    DataSetType["CUSTOMER_PROFILE_BY_GEOGRAPHY"] = "customer_profile_by_geography";
    DataSetType["CUSTOMER_PROFILE_BY_INDUSTRY"] = "customer_profile_by_industry";
    DataSetType["CUSTOMER_PROFILE_BY_REVENUE"] = "customer_profile_by_revenue";
    DataSetType["CUSTOMER_SUBSCRIBER_ANNUAL_SUBSCRIPTIONS"] = "customer_subscriber_annual_subscriptions";
    DataSetType["CUSTOMER_SUBSCRIBER_HOURLY_MONTHLY_SUBSCRIPTIONS"] = "customer_subscriber_hourly_monthly_subscriptions";
    DataSetType["DAILY_BUSINESS_CANCELED_PRODUCT_SUBSCRIBERS"] = "daily_business_canceled_product_subscribers";
    DataSetType["DAILY_BUSINESS_FEES"] = "daily_business_fees";
    DataSetType["DAILY_BUSINESS_FREE_TRIAL_CONVERSIONS"] = "daily_business_free_trial_conversions";
    DataSetType["DAILY_BUSINESS_NEW_INSTANCES"] = "daily_business_new_instances";
    DataSetType["DAILY_BUSINESS_NEW_PRODUCT_SUBSCRIBERS"] = "daily_business_new_product_subscribers";
    DataSetType["DAILY_BUSINESS_USAGE_BY_INSTANCE_TYPE"] = "daily_business_usage_by_instance_type";
    DataSetType["DISBURSED_AMOUNT_BY_AGE_OF_DISBURSED_FUNDS"] = "disbursed_amount_by_age_of_disbursed_funds";
    DataSetType["DISBURSED_AMOUNT_BY_AGE_OF_PAST_DUE_FUNDS"] = "disbursed_amount_by_age_of_past_due_funds";
    DataSetType["DISBURSED_AMOUNT_BY_AGE_OF_UNCOLLECTED_FUNDS"] = "disbursed_amount_by_age_of_uncollected_funds";
    DataSetType["DISBURSED_AMOUNT_BY_CUSTOMER_GEO"] = "disbursed_amount_by_customer_geo";
    DataSetType["DISBURSED_AMOUNT_BY_INSTANCE_HOURS"] = "disbursed_amount_by_instance_hours";
    DataSetType["DISBURSED_AMOUNT_BY_PRODUCT"] = "disbursed_amount_by_product";
    DataSetType["DISBURSED_AMOUNT_BY_PRODUCT_WITH_UNCOLLECTED_FUNDS"] = "disbursed_amount_by_product_with_uncollected_funds";
    DataSetType["DISBURSED_AMOUNT_BY_UNCOLLECTED_FUNDS_BREAKDOWN"] = "disbursed_amount_by_uncollected_funds_breakdown";
    DataSetType["MONTHLY_REVENUE_ANNUAL_SUBSCRIPTIONS"] = "monthly_revenue_annual_subscriptions";
    DataSetType["MONTHLY_REVENUE_BILLING_AND_REVENUE_DATA"] = "monthly_revenue_billing_and_revenue_data";
    DataSetType["MONTHLY_REVENUE_FIELD_DEMONSTRATION_USAGE"] = "monthly_revenue_field_demonstration_usage";
    DataSetType["MONTHLY_REVENUE_FLEXIBLE_PAYMENT_SCHEDULE"] = "monthly_revenue_flexible_payment_schedule";
    DataSetType["SALES_COMPENSATION_BILLED_REVENUE"] = "sales_compensation_billed_revenue";
    DataSetType["US_SALES_AND_USE_TAX_RECORDS"] = "us_sales_and_use_tax_records";
})(DataSetType = exports.DataSetType || (exports.DataSetType = {}));
var GenerateDataSetRequest;
(function (GenerateDataSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GenerateDataSetRequest");
    }
    GenerateDataSetRequest.isa = isa;
})(GenerateDataSetRequest = exports.GenerateDataSetRequest || (exports.GenerateDataSetRequest = {}));
var GenerateDataSetResult;
(function (GenerateDataSetResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GenerateDataSetResult");
    }
    GenerateDataSetResult.isa = isa;
})(GenerateDataSetResult = exports.GenerateDataSetResult || (exports.GenerateDataSetResult = {}));
var MarketplaceCommerceAnalyticsException;
(function (MarketplaceCommerceAnalyticsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MarketplaceCommerceAnalyticsException");
    }
    MarketplaceCommerceAnalyticsException.isa = isa;
})(MarketplaceCommerceAnalyticsException = exports.MarketplaceCommerceAnalyticsException || (exports.MarketplaceCommerceAnalyticsException = {}));
var StartSupportDataExportRequest;
(function (StartSupportDataExportRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartSupportDataExportRequest");
    }
    StartSupportDataExportRequest.isa = isa;
})(StartSupportDataExportRequest = exports.StartSupportDataExportRequest || (exports.StartSupportDataExportRequest = {}));
var StartSupportDataExportResult;
(function (StartSupportDataExportResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartSupportDataExportResult");
    }
    StartSupportDataExportResult.isa = isa;
})(StartSupportDataExportResult = exports.StartSupportDataExportResult || (exports.StartSupportDataExportResult = {}));
//# sourceMappingURL=index.js.map