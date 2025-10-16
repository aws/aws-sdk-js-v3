// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  isSerializableHeaderValue,
  limitedParseDouble as __limitedParseDouble,
  map,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  strictParseInt32 as __strictParseInt32,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "@smithy/uuid";

import { AssociateAccountsCommandInput, AssociateAccountsCommandOutput } from "../commands/AssociateAccountsCommand";
import {
  AssociatePricingRulesCommandInput,
  AssociatePricingRulesCommandOutput,
} from "../commands/AssociatePricingRulesCommand";
import {
  BatchAssociateResourcesToCustomLineItemCommandInput,
  BatchAssociateResourcesToCustomLineItemCommandOutput,
} from "../commands/BatchAssociateResourcesToCustomLineItemCommand";
import {
  BatchDisassociateResourcesFromCustomLineItemCommandInput,
  BatchDisassociateResourcesFromCustomLineItemCommandOutput,
} from "../commands/BatchDisassociateResourcesFromCustomLineItemCommand";
import { CreateBillingGroupCommandInput, CreateBillingGroupCommandOutput } from "../commands/CreateBillingGroupCommand";
import {
  CreateCustomLineItemCommandInput,
  CreateCustomLineItemCommandOutput,
} from "../commands/CreateCustomLineItemCommand";
import { CreatePricingPlanCommandInput, CreatePricingPlanCommandOutput } from "../commands/CreatePricingPlanCommand";
import { CreatePricingRuleCommandInput, CreatePricingRuleCommandOutput } from "../commands/CreatePricingRuleCommand";
import { DeleteBillingGroupCommandInput, DeleteBillingGroupCommandOutput } from "../commands/DeleteBillingGroupCommand";
import {
  DeleteCustomLineItemCommandInput,
  DeleteCustomLineItemCommandOutput,
} from "../commands/DeleteCustomLineItemCommand";
import { DeletePricingPlanCommandInput, DeletePricingPlanCommandOutput } from "../commands/DeletePricingPlanCommand";
import { DeletePricingRuleCommandInput, DeletePricingRuleCommandOutput } from "../commands/DeletePricingRuleCommand";
import {
  DisassociateAccountsCommandInput,
  DisassociateAccountsCommandOutput,
} from "../commands/DisassociateAccountsCommand";
import {
  DisassociatePricingRulesCommandInput,
  DisassociatePricingRulesCommandOutput,
} from "../commands/DisassociatePricingRulesCommand";
import {
  GetBillingGroupCostReportCommandInput,
  GetBillingGroupCostReportCommandOutput,
} from "../commands/GetBillingGroupCostReportCommand";
import {
  ListAccountAssociationsCommandInput,
  ListAccountAssociationsCommandOutput,
} from "../commands/ListAccountAssociationsCommand";
import {
  ListBillingGroupCostReportsCommandInput,
  ListBillingGroupCostReportsCommandOutput,
} from "../commands/ListBillingGroupCostReportsCommand";
import { ListBillingGroupsCommandInput, ListBillingGroupsCommandOutput } from "../commands/ListBillingGroupsCommand";
import {
  ListCustomLineItemsCommandInput,
  ListCustomLineItemsCommandOutput,
} from "../commands/ListCustomLineItemsCommand";
import {
  ListCustomLineItemVersionsCommandInput,
  ListCustomLineItemVersionsCommandOutput,
} from "../commands/ListCustomLineItemVersionsCommand";
import {
  ListPricingPlansAssociatedWithPricingRuleCommandInput,
  ListPricingPlansAssociatedWithPricingRuleCommandOutput,
} from "../commands/ListPricingPlansAssociatedWithPricingRuleCommand";
import { ListPricingPlansCommandInput, ListPricingPlansCommandOutput } from "../commands/ListPricingPlansCommand";
import {
  ListPricingRulesAssociatedToPricingPlanCommandInput,
  ListPricingRulesAssociatedToPricingPlanCommandOutput,
} from "../commands/ListPricingRulesAssociatedToPricingPlanCommand";
import { ListPricingRulesCommandInput, ListPricingRulesCommandOutput } from "../commands/ListPricingRulesCommand";
import {
  ListResourcesAssociatedToCustomLineItemCommandInput,
  ListResourcesAssociatedToCustomLineItemCommandOutput,
} from "../commands/ListResourcesAssociatedToCustomLineItemCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateBillingGroupCommandInput, UpdateBillingGroupCommandOutput } from "../commands/UpdateBillingGroupCommand";
import {
  UpdateCustomLineItemCommandInput,
  UpdateCustomLineItemCommandOutput,
} from "../commands/UpdateCustomLineItemCommand";
import { UpdatePricingPlanCommandInput, UpdatePricingPlanCommandOutput } from "../commands/UpdatePricingPlanCommand";
import { UpdatePricingRuleCommandInput, UpdatePricingRuleCommandOutput } from "../commands/UpdatePricingRuleCommand";
import { BillingconductorServiceException as __BaseException } from "../models/BillingconductorServiceException";
import {
  AccessDeniedException,
  AccountGrouping,
  BillingGroupStatus,
  BillingPeriodRange,
  ComputationPreference,
  ConflictException,
  CreateFreeTierConfig,
  CreateTieringInput,
  CustomLineItemBillingPeriodRange,
  CustomLineItemChargeDetails,
  CustomLineItemFlatChargeDetails,
  CustomLineItemListElement,
  CustomLineItemPercentageChargeDetails,
  CustomLineItemVersionListElement,
  GroupByAttributeName,
  InternalServerException,
  LineItemFilter,
  LineItemFilterValue,
  ListAccountAssociationsFilter,
  ListBillingGroupCostReportsFilter,
  ListBillingGroupsFilter,
  ListCustomLineItemChargeDetails,
  ListCustomLineItemFlatChargeDetails,
  ListCustomLineItemPercentageChargeDetails,
  ListCustomLineItemsFilter,
  ListCustomLineItemVersionsBillingPeriodRangeFilter,
  ListCustomLineItemVersionsFilter,
  ListPricingPlansFilter,
  ListPricingRulesFilter,
  ListResourcesAssociatedToCustomLineItemFilter,
  PresentationObject,
  PricingRuleListElement,
  ResourceNotFoundException,
  ServiceLimitExceededException,
  ThrottlingException,
  UpdateBillingGroupAccountGrouping,
  UpdateCustomLineItemChargeDetails,
  UpdateCustomLineItemFlatChargeDetails,
  UpdateCustomLineItemPercentageChargeDetails,
  UpdateFreeTierConfig,
  UpdateTieringInput,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1AssociateAccountsCommand
 */
export const se_AssociateAccountsCommand = async (
  input: AssociateAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/associate-accounts");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountIds: (_) => _json(_),
      Arn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociatePricingRulesCommand
 */
export const se_AssociatePricingRulesCommand = async (
  input: AssociatePricingRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/associate-pricing-rules");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Arn: [],
      PricingRuleArns: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchAssociateResourcesToCustomLineItemCommand
 */
export const se_BatchAssociateResourcesToCustomLineItemCommand = async (
  input: BatchAssociateResourcesToCustomLineItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/batch-associate-resources-to-custom-line-item");
  let body: any;
  body = JSON.stringify(
    take(input, {
      BillingPeriodRange: (_) => _json(_),
      ResourceArns: (_) => _json(_),
      TargetArn: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchDisassociateResourcesFromCustomLineItemCommand
 */
export const se_BatchDisassociateResourcesFromCustomLineItemCommand = async (
  input: BatchDisassociateResourcesFromCustomLineItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/batch-disassociate-resources-from-custom-line-item");
  let body: any;
  body = JSON.stringify(
    take(input, {
      BillingPeriodRange: (_) => _json(_),
      ResourceArns: (_) => _json(_),
      TargetArn: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateBillingGroupCommand
 */
export const se_CreateBillingGroupCommand = async (
  input: CreateBillingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_CT] ?? generateIdempotencyToken(),
  });
  b.bp("/create-billing-group");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountGrouping: (_) => _json(_),
      ComputationPreference: (_) => _json(_),
      Description: [],
      Name: [],
      PrimaryAccountId: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateCustomLineItemCommand
 */
export const se_CreateCustomLineItemCommand = async (
  input: CreateCustomLineItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_CT] ?? generateIdempotencyToken(),
  });
  b.bp("/create-custom-line-item");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountId: [],
      BillingGroupArn: [],
      BillingPeriodRange: (_) => _json(_),
      ChargeDetails: (_) => se_CustomLineItemChargeDetails(_, context),
      ComputationRule: [],
      Description: [],
      Name: [],
      PresentationDetails: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreatePricingPlanCommand
 */
export const se_CreatePricingPlanCommand = async (
  input: CreatePricingPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_CT] ?? generateIdempotencyToken(),
  });
  b.bp("/create-pricing-plan");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      Name: [],
      PricingRuleArns: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreatePricingRuleCommand
 */
export const se_CreatePricingRuleCommand = async (
  input: CreatePricingRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_CT] ?? generateIdempotencyToken(),
  });
  b.bp("/create-pricing-rule");
  let body: any;
  body = JSON.stringify(
    take(input, {
      BillingEntity: [],
      Description: [],
      ModifierPercentage: (_) => __serializeFloat(_),
      Name: [],
      Operation: [],
      Scope: [],
      Service: [],
      Tags: (_) => _json(_),
      Tiering: (_) => _json(_),
      Type: [],
      UsageType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteBillingGroupCommand
 */
export const se_DeleteBillingGroupCommand = async (
  input: DeleteBillingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/delete-billing-group");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Arn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteCustomLineItemCommand
 */
export const se_DeleteCustomLineItemCommand = async (
  input: DeleteCustomLineItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/delete-custom-line-item");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Arn: [],
      BillingPeriodRange: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeletePricingPlanCommand
 */
export const se_DeletePricingPlanCommand = async (
  input: DeletePricingPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/delete-pricing-plan");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Arn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeletePricingRuleCommand
 */
export const se_DeletePricingRuleCommand = async (
  input: DeletePricingRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/delete-pricing-rule");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Arn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateAccountsCommand
 */
export const se_DisassociateAccountsCommand = async (
  input: DisassociateAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/disassociate-accounts");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountIds: (_) => _json(_),
      Arn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociatePricingRulesCommand
 */
export const se_DisassociatePricingRulesCommand = async (
  input: DisassociatePricingRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/disassociate-pricing-rules");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Arn: [],
      PricingRuleArns: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetBillingGroupCostReportCommand
 */
export const se_GetBillingGroupCostReportCommand = async (
  input: GetBillingGroupCostReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/get-billing-group-cost-report");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Arn: [],
      BillingPeriodRange: (_) => _json(_),
      GroupBy: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAccountAssociationsCommand
 */
export const se_ListAccountAssociationsCommand = async (
  input: ListAccountAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-account-associations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      BillingPeriod: [],
      Filters: (_) => _json(_),
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListBillingGroupCostReportsCommand
 */
export const se_ListBillingGroupCostReportsCommand = async (
  input: ListBillingGroupCostReportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-billing-group-cost-reports");
  let body: any;
  body = JSON.stringify(
    take(input, {
      BillingPeriod: [],
      Filters: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListBillingGroupsCommand
 */
export const se_ListBillingGroupsCommand = async (
  input: ListBillingGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-billing-groups");
  let body: any;
  body = JSON.stringify(
    take(input, {
      BillingPeriod: [],
      Filters: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCustomLineItemsCommand
 */
export const se_ListCustomLineItemsCommand = async (
  input: ListCustomLineItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-custom-line-items");
  let body: any;
  body = JSON.stringify(
    take(input, {
      BillingPeriod: [],
      Filters: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCustomLineItemVersionsCommand
 */
export const se_ListCustomLineItemVersionsCommand = async (
  input: ListCustomLineItemVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-custom-line-item-versions");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Arn: [],
      Filters: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPricingPlansCommand
 */
export const se_ListPricingPlansCommand = async (
  input: ListPricingPlansCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-pricing-plans");
  let body: any;
  body = JSON.stringify(
    take(input, {
      BillingPeriod: [],
      Filters: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPricingPlansAssociatedWithPricingRuleCommand
 */
export const se_ListPricingPlansAssociatedWithPricingRuleCommand = async (
  input: ListPricingPlansAssociatedWithPricingRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-pricing-plans-associated-with-pricing-rule");
  let body: any;
  body = JSON.stringify(
    take(input, {
      BillingPeriod: [],
      MaxResults: [],
      NextToken: [],
      PricingRuleArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPricingRulesCommand
 */
export const se_ListPricingRulesCommand = async (
  input: ListPricingRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-pricing-rules");
  let body: any;
  body = JSON.stringify(
    take(input, {
      BillingPeriod: [],
      Filters: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPricingRulesAssociatedToPricingPlanCommand
 */
export const se_ListPricingRulesAssociatedToPricingPlanCommand = async (
  input: ListPricingRulesAssociatedToPricingPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-pricing-rules-associated-to-pricing-plan");
  let body: any;
  body = JSON.stringify(
    take(input, {
      BillingPeriod: [],
      MaxResults: [],
      NextToken: [],
      PricingPlanArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListResourcesAssociatedToCustomLineItemCommand
 */
export const se_ListResourcesAssociatedToCustomLineItemCommand = async (
  input: ListResourcesAssociatedToCustomLineItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-resources-associated-to-custom-line-item");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Arn: [],
      BillingPeriod: [],
      Filters: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.TagKeys, `TagKeys`) != null, () => input[_TK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateBillingGroupCommand
 */
export const se_UpdateBillingGroupCommand = async (
  input: UpdateBillingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/update-billing-group");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountGrouping: (_) => _json(_),
      Arn: [],
      ComputationPreference: (_) => _json(_),
      Description: [],
      Name: [],
      Status: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateCustomLineItemCommand
 */
export const se_UpdateCustomLineItemCommand = async (
  input: UpdateCustomLineItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/update-custom-line-item");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Arn: [],
      BillingPeriodRange: (_) => _json(_),
      ChargeDetails: (_) => se_UpdateCustomLineItemChargeDetails(_, context),
      Description: [],
      Name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePricingPlanCommand
 */
export const se_UpdatePricingPlanCommand = async (
  input: UpdatePricingPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/update-pricing-plan");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Arn: [],
      Description: [],
      Name: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePricingRuleCommand
 */
export const se_UpdatePricingRuleCommand = async (
  input: UpdatePricingRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/update-pricing-rule");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Arn: [],
      Description: [],
      ModifierPercentage: (_) => __serializeFloat(_),
      Name: [],
      Tiering: (_) => _json(_),
      Type: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AssociateAccountsCommand
 */
export const de_AssociateAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateAccountsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssociatePricingRulesCommand
 */
export const de_AssociatePricingRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociatePricingRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchAssociateResourcesToCustomLineItemCommand
 */
export const de_BatchAssociateResourcesToCustomLineItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateResourcesToCustomLineItemCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    FailedAssociatedResources: _json,
    SuccessfullyAssociatedResources: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchDisassociateResourcesFromCustomLineItemCommand
 */
export const de_BatchDisassociateResourcesFromCustomLineItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateResourcesFromCustomLineItemCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    FailedDisassociatedResources: _json,
    SuccessfullyDisassociatedResources: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateBillingGroupCommand
 */
export const de_CreateBillingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBillingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateCustomLineItemCommand
 */
export const de_CreateCustomLineItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomLineItemCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreatePricingPlanCommand
 */
export const de_CreatePricingPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePricingPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreatePricingRuleCommand
 */
export const de_CreatePricingRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePricingRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteBillingGroupCommand
 */
export const de_DeleteBillingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBillingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCustomLineItemCommand
 */
export const de_DeleteCustomLineItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomLineItemCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePricingPlanCommand
 */
export const de_DeletePricingPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePricingPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePricingRuleCommand
 */
export const de_DeletePricingRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePricingRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateAccountsCommand
 */
export const de_DisassociateAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateAccountsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociatePricingRulesCommand
 */
export const de_DisassociatePricingRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociatePricingRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetBillingGroupCostReportCommand
 */
export const de_GetBillingGroupCostReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBillingGroupCostReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BillingGroupCostReportResults: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAccountAssociationsCommand
 */
export const de_ListAccountAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LinkedAccounts: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListBillingGroupCostReportsCommand
 */
export const de_ListBillingGroupCostReportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBillingGroupCostReportsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BillingGroupCostReports: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListBillingGroupsCommand
 */
export const de_ListBillingGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBillingGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BillingGroups: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCustomLineItemsCommand
 */
export const de_ListCustomLineItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomLineItemsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CustomLineItems: (_) => de_CustomLineItemList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCustomLineItemVersionsCommand
 */
export const de_ListCustomLineItemVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomLineItemVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CustomLineItemVersions: (_) => de_CustomLineItemVersionList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPricingPlansCommand
 */
export const de_ListPricingPlansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPricingPlansCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BillingPeriod: __expectString,
    NextToken: __expectString,
    PricingPlans: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPricingPlansAssociatedWithPricingRuleCommand
 */
export const de_ListPricingPlansAssociatedWithPricingRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPricingPlansAssociatedWithPricingRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BillingPeriod: __expectString,
    NextToken: __expectString,
    PricingPlanArns: _json,
    PricingRuleArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPricingRulesCommand
 */
export const de_ListPricingRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPricingRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BillingPeriod: __expectString,
    NextToken: __expectString,
    PricingRules: (_) => de_PricingRuleList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPricingRulesAssociatedToPricingPlanCommand
 */
export const de_ListPricingRulesAssociatedToPricingPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPricingRulesAssociatedToPricingPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BillingPeriod: __expectString,
    NextToken: __expectString,
    PricingPlanArn: __expectString,
    PricingRuleArns: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListResourcesAssociatedToCustomLineItemCommand
 */
export const de_ListResourcesAssociatedToCustomLineItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesAssociatedToCustomLineItemCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    AssociatedResources: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateBillingGroupCommand
 */
export const de_UpdateBillingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBillingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AccountGrouping: _json,
    Arn: __expectString,
    Description: __expectString,
    LastModifiedTime: __expectLong,
    Name: __expectString,
    PricingPlanArn: __expectString,
    PrimaryAccountId: __expectString,
    Size: __expectLong,
    Status: __expectString,
    StatusReason: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateCustomLineItemCommand
 */
export const de_UpdateCustomLineItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCustomLineItemCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    AssociationSize: __expectLong,
    BillingGroupArn: __expectString,
    ChargeDetails: (_) => de_ListCustomLineItemChargeDetails(_, context),
    Description: __expectString,
    LastModifiedTime: __expectLong,
    Name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePricingPlanCommand
 */
export const de_UpdatePricingPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePricingPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Description: __expectString,
    LastModifiedTime: __expectLong,
    Name: __expectString,
    Size: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePricingRuleCommand
 */
export const de_UpdatePricingRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePricingRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    AssociatedPricingPlanCount: __expectLong,
    BillingEntity: __expectString,
    Description: __expectString,
    LastModifiedTime: __expectLong,
    ModifierPercentage: __limitedParseDouble,
    Name: __expectString,
    Operation: __expectString,
    Scope: __expectString,
    Service: __expectString,
    Tiering: _json,
    Type: __expectString,
    UsageType: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.billingconductor#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.billingconductor#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.billingconductor#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.billingconductor#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceLimitExceededException":
    case "com.amazonaws.billingconductor#ServiceLimitExceededException":
      throw await de_ServiceLimitExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.billingconductor#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.billingconductor#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
    Reason: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({
    [_RAS]: [() => void 0 !== parsedOutput.headers[_ra], () => __strictParseInt32(parsedOutput.headers[_ra])],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceLimitExceededExceptionRes
 */
const de_ServiceLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    LimitCode: __expectString,
    Message: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
    ServiceCode: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({
    [_RAS]: [() => void 0 !== parsedOutput.headers[_ra], () => __strictParseInt32(parsedOutput.headers[_ra])],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Fields: _json,
    Message: __expectString,
    Reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AccountGrouping omitted.

// se_AccountIdFilterList omitted.

// se_AccountIdList omitted.

// se_BillingGroupArnList omitted.

// se_BillingGroupStatusList omitted.

// se_BillingPeriodRange omitted.

// se_ComputationPreference omitted.

// se_CreateFreeTierConfig omitted.

// se_CreateTieringInput omitted.

// se_CustomLineItemArns omitted.

// se_CustomLineItemAssociationsList omitted.

// se_CustomLineItemBatchAssociationsList omitted.

// se_CustomLineItemBatchDisassociationsList omitted.

// se_CustomLineItemBillingPeriodRange omitted.

/**
 * serializeAws_restJson1CustomLineItemChargeDetails
 */
const se_CustomLineItemChargeDetails = (input: CustomLineItemChargeDetails, context: __SerdeContext): any => {
  return take(input, {
    Flat: (_) => se_CustomLineItemFlatChargeDetails(_, context),
    LineItemFilters: _json,
    Percentage: (_) => se_CustomLineItemPercentageChargeDetails(_, context),
    Type: [],
  });
};

/**
 * serializeAws_restJson1CustomLineItemFlatChargeDetails
 */
const se_CustomLineItemFlatChargeDetails = (input: CustomLineItemFlatChargeDetails, context: __SerdeContext): any => {
  return take(input, {
    ChargeValue: __serializeFloat,
  });
};

// se_CustomLineItemNameList omitted.

/**
 * serializeAws_restJson1CustomLineItemPercentageChargeDetails
 */
const se_CustomLineItemPercentageChargeDetails = (
  input: CustomLineItemPercentageChargeDetails,
  context: __SerdeContext
): any => {
  return take(input, {
    AssociatedValues: _json,
    PercentageValue: __serializeFloat,
  });
};

// se_GroupByAttributesList omitted.

// se_LineItemFilter omitted.

// se_LineItemFiltersList omitted.

// se_LineItemFilterValuesList omitted.

// se_ListAccountAssociationsFilter omitted.

// se_ListBillingGroupCostReportsFilter omitted.

// se_ListBillingGroupsFilter omitted.

// se_ListCustomLineItemsFilter omitted.

// se_ListCustomLineItemVersionsBillingPeriodRangeFilter omitted.

// se_ListCustomLineItemVersionsFilter omitted.

// se_ListPricingPlansFilter omitted.

// se_ListPricingRulesFilter omitted.

// se_ListResourcesAssociatedToCustomLineItemFilter omitted.

// se_PresentationObject omitted.

// se_PricingPlanArns omitted.

// se_PricingRuleArns omitted.

// se_PricingRuleArnsInput omitted.

// se_PricingRuleArnsNonEmptyInput omitted.

// se_TagMap omitted.

// se_UpdateBillingGroupAccountGrouping omitted.

/**
 * serializeAws_restJson1UpdateCustomLineItemChargeDetails
 */
const se_UpdateCustomLineItemChargeDetails = (
  input: UpdateCustomLineItemChargeDetails,
  context: __SerdeContext
): any => {
  return take(input, {
    Flat: (_) => se_UpdateCustomLineItemFlatChargeDetails(_, context),
    LineItemFilters: _json,
    Percentage: (_) => se_UpdateCustomLineItemPercentageChargeDetails(_, context),
  });
};

/**
 * serializeAws_restJson1UpdateCustomLineItemFlatChargeDetails
 */
const se_UpdateCustomLineItemFlatChargeDetails = (
  input: UpdateCustomLineItemFlatChargeDetails,
  context: __SerdeContext
): any => {
  return take(input, {
    ChargeValue: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1UpdateCustomLineItemPercentageChargeDetails
 */
const se_UpdateCustomLineItemPercentageChargeDetails = (
  input: UpdateCustomLineItemPercentageChargeDetails,
  context: __SerdeContext
): any => {
  return take(input, {
    PercentageValue: __serializeFloat,
  });
};

// se_UpdateFreeTierConfig omitted.

// se_UpdateTieringInput omitted.

// de_AccountAssociationsList omitted.

// de_AccountAssociationsListElement omitted.

// de_AssociateResourceError omitted.

// de_AssociateResourceResponseElement omitted.

// de_AssociateResourcesResponseList omitted.

// de_Attribute omitted.

// de_AttributesList omitted.

// de_BillingGroupCostReportElement omitted.

// de_BillingGroupCostReportList omitted.

// de_BillingGroupCostReportResultElement omitted.

// de_BillingGroupCostReportResultsList omitted.

// de_BillingGroupList omitted.

// de_BillingGroupListElement omitted.

// de_ComputationPreference omitted.

/**
 * deserializeAws_restJson1CustomLineItemList
 */
const de_CustomLineItemList = (output: any, context: __SerdeContext): CustomLineItemListElement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CustomLineItemListElement(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CustomLineItemListElement
 */
const de_CustomLineItemListElement = (output: any, context: __SerdeContext): CustomLineItemListElement => {
  return take(output, {
    AccountId: __expectString,
    Arn: __expectString,
    AssociationSize: __expectLong,
    BillingGroupArn: __expectString,
    ChargeDetails: (_: any) => de_ListCustomLineItemChargeDetails(_, context),
    ComputationRule: __expectString,
    CreationTime: __expectLong,
    CurrencyCode: __expectString,
    Description: __expectString,
    LastModifiedTime: __expectLong,
    Name: __expectString,
    PresentationDetails: _json,
    ProductCode: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1CustomLineItemVersionList
 */
const de_CustomLineItemVersionList = (output: any, context: __SerdeContext): CustomLineItemVersionListElement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CustomLineItemVersionListElement(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CustomLineItemVersionListElement
 */
const de_CustomLineItemVersionListElement = (
  output: any,
  context: __SerdeContext
): CustomLineItemVersionListElement => {
  return take(output, {
    AccountId: __expectString,
    Arn: __expectString,
    AssociationSize: __expectLong,
    BillingGroupArn: __expectString,
    ChargeDetails: (_: any) => de_ListCustomLineItemChargeDetails(_, context),
    ComputationRule: __expectString,
    CreationTime: __expectLong,
    CurrencyCode: __expectString,
    Description: __expectString,
    EndBillingPeriod: __expectString,
    LastModifiedTime: __expectLong,
    Name: __expectString,
    PresentationDetails: _json,
    ProductCode: __expectString,
    StartBillingPeriod: __expectString,
    StartTime: __expectLong,
  }) as any;
};

// de_DisassociateResourceResponseElement omitted.

// de_DisassociateResourcesResponseList omitted.

// de_FreeTierConfig omitted.

// de_LineItemFilter omitted.

// de_LineItemFiltersList omitted.

// de_LineItemFilterValuesList omitted.

// de_ListBillingGroupAccountGrouping omitted.

/**
 * deserializeAws_restJson1ListCustomLineItemChargeDetails
 */
const de_ListCustomLineItemChargeDetails = (output: any, context: __SerdeContext): ListCustomLineItemChargeDetails => {
  return take(output, {
    Flat: (_: any) => de_ListCustomLineItemFlatChargeDetails(_, context),
    LineItemFilters: _json,
    Percentage: (_: any) => de_ListCustomLineItemPercentageChargeDetails(_, context),
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ListCustomLineItemFlatChargeDetails
 */
const de_ListCustomLineItemFlatChargeDetails = (
  output: any,
  context: __SerdeContext
): ListCustomLineItemFlatChargeDetails => {
  return take(output, {
    ChargeValue: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1ListCustomLineItemPercentageChargeDetails
 */
const de_ListCustomLineItemPercentageChargeDetails = (
  output: any,
  context: __SerdeContext
): ListCustomLineItemPercentageChargeDetails => {
  return take(output, {
    PercentageValue: __limitedParseDouble,
  }) as any;
};

// de_ListResourcesAssociatedToCustomLineItemResponseElement omitted.

// de_ListResourcesAssociatedToCustomLineItemResponseList omitted.

// de_PresentationObject omitted.

// de_PricingPlanArns omitted.

// de_PricingPlanList omitted.

// de_PricingPlanListElement omitted.

// de_PricingRuleArns omitted.

/**
 * deserializeAws_restJson1PricingRuleList
 */
const de_PricingRuleList = (output: any, context: __SerdeContext): PricingRuleListElement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PricingRuleListElement(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PricingRuleListElement
 */
const de_PricingRuleListElement = (output: any, context: __SerdeContext): PricingRuleListElement => {
  return take(output, {
    Arn: __expectString,
    AssociatedPricingPlanCount: __expectLong,
    BillingEntity: __expectString,
    CreationTime: __expectLong,
    Description: __expectString,
    LastModifiedTime: __expectLong,
    ModifierPercentage: __limitedParseDouble,
    Name: __expectString,
    Operation: __expectString,
    Scope: __expectString,
    Service: __expectString,
    Tiering: _json,
    Type: __expectString,
    UsageType: __expectString,
  }) as any;
};

// de_TagMap omitted.

// de_Tiering omitted.

// de_UpdateBillingGroupAccountGrouping omitted.

// de_UpdateFreeTierConfig omitted.

// de_UpdateTieringInput omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const _CT = "ClientToken";
const _RAS = "RetryAfterSeconds";
const _TK = "TagKeys";
const _ra = "retry-after";
const _tK = "tagKeys";
const _xact = "x-amzn-client-token";
